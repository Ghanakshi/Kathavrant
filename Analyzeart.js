// ============================================================
// POST /api/analyze-art
// Vercel serverless function — the ONLY place the API key lives.
// Never call the vision API directly from the browser; that would
// expose your key to anyone who views the page source.
//
// Uses Google's Gemini API (Flash models), which has a genuine free
// tier — no credit card required to start. Free tier comes with rate
// limits (requests per minute / per day), not a token cost, so this
// is a real $0 option rather than a small trial credit that runs out.
// Check current limits at https://ai.google.dev/gemini-api/docs/rate-limits
// before launching to a lot of users.
//
// Request body (JSON): { image: "<base64, no data: prefix>", mediaType: "image/jpeg" }
// Response body (JSON): see the schema in SYSTEM_PROMPT below.
//
// SETUP (one time, free)
// 1. Go to https://aistudio.google.com/apikey and create a free API key
//    (Google account, no credit card needed).
// 2. In your Vercel project: Settings -> Environment Variables -> add
//      GEMINI_API_KEY = <your key>
//    (Project + Preview + Production environments)
// 3. Redeploy. Vercel auto-detects this file as a serverless function
//    at /api/analyze-art — no extra config needed for a static site
//    with an /api folder.
// 4. Test locally with the Vercel CLI: `vercel dev` (reads a local
//    .env file for GEMINI_API_KEY — don't commit that file).
//
// This calls a real, general-purpose vision model — it is not a fixed
// lookup table, so it isn't limited to a hardcoded list of art forms.
// It can be wrong or uncertain on an unclear photo, and the prompt
// below explicitly asks it to say so rather than guess.
//
// If you outgrow the free tier's rate limits, this is the one file
// to change — the frontend doesn't need to know which provider is
// behind /api/analyze-art.
// ============================================================

const MODEL = "gemini-2.0-flash";
const MAX_BASE64_LENGTH = 7_000_000; // ~5MB raw image, base64 runs ~1.37x larger
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

const SYSTEM_PROMPT = `You are an expert in Indian traditional and folk art forms: painting styles (e.g. Madhubani, Warli, Pattachitra, Gond, Kalamkari, Phad, Tanjore, Kalighat, Cheriyal, Rajasthani and Mughal miniature), textile and craft traditions (e.g. Bandhani, Ikat, Ajrakh, block printing, embroidery styles), and related regional decorative forms (rangoli/alpana, folk sculpture, etc.).

You will be shown a photo, either uploaded or taken with a camera. Identify, as precisely as the image allows, which Indian art form (if any) it depicts, and explain it accurately and concisely.

Respond with ONLY a single JSON object matching exactly this shape:

{
  "isArtForm": boolean,
  "confidence": "high" | "medium" | "low",
  "name": string,
  "alternateNames": string[],
  "region": string,
  "states": string[],
  "category": "painting" | "textile" | "craft" | "performance" | "other",
  "description": string,
  "characteristics": string[],
  "materials": string[],
  "notes": string
}

Field notes:
- isArtForm: true only if the image clearly shows a recognizable traditional/folk Indian art form or craft.
- name: primary name, or "" if isArtForm is false.
- region: short description, e.g. "Mithila region, Bihar".
- description: 2-4 sentences of cultural context and significance.
- characteristics: 3-6 short visual traits that led to this identification.
- materials: typical materials/techniques; empty array if not applicable.
- notes: honest caveats — uncertainty, a partial/ambiguous match, or why isArtForm is false. If the photo is blurry, shows a generic object, or you can't confidently identify a specific art form, set isArtForm to false or confidence to "low" and say so here rather than guessing a name.`;

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({
      error:
        "Server is missing GEMINI_API_KEY. Get a free key at https://aistudio.google.com/apikey and set it as an environment variable (a local .env file for dev-server.js, or Vercel's Environment Variables when deployed).",
    });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = null;
    }
  }

  const image = body && body.image;
  const mediaType = (body && body.mediaType) || "image/jpeg";

  if (!image || typeof image !== "string") {
    res.status(400).json({ error: "Missing image (base64 string) in request body." });
    return;
  }
  if (image.length > MAX_BASE64_LENGTH) {
    res.status(413).json({ error: "Image is too large. Please use a smaller photo (under ~5MB)." });
    return;
  }
  if (!ALLOWED_TYPES.includes(mediaType)) {
    res.status(400).json({ error: "Unsupported image type." });
    return;
  }

  try {
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/" +
      MODEL +
      ":generateContent?key=" +
      apiKey;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [
          {
            role: "user",
            parts: [
              { inline_data: { mime_type: mediaType, data: image } },
              {
                text: "Identify the Indian traditional/folk art form in this image and respond with the JSON object described in your instructions.",
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          response_mime_type: "application/json",
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      let friendly = "The vision model request failed.";
      if (response.status === 429) {
        friendly = "Free-tier rate limit reached — wait a moment and try again.";
      }
      res.status(502).json({ error: friendly, detail: errText.slice(0, 500) });
      return;
    }

    const data = await response.json();
    const candidate = data.candidates && data.candidates[0];
    const part = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0];
    const raw = (part && part.text) || "";
    const cleaned = raw.replace(/```json|```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (e) {
      res.status(502).json({ error: "Could not parse the model's response.", raw: cleaned.slice(0, 500) });
      return;
    }

    res.status(200).json(parsed);
  } catch (err) {
    res.status(500).json({ error: "Unexpected server error.", detail: String(err).slice(0, 300) });
  }
};