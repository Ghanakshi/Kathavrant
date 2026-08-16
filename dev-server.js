// ============================================================
// dev-server.js — run the whole site locally, no deploy needed.
//
// Serves index.html/css/js as static files AND runs api/analyze-art.js
// on the same server, so "Detect an Art Form" works exactly like it
// will on Vercel later. No account, no login, no npm install required
// (uses only Node's built-in modules).
//
// USAGE
//   1. Create a file named .env in this same folder with one line:
//        GEMINI_API_KEY=your_key_here
//   2. Run:  node dev-server.js
//   3. Open:  http://localhost:3000
//
// This is for local development/presentation only — it is not
// hardened for production traffic (no rate limiting, no HTTPS).
// When you're ready to actually deploy, use Vercel as described in
// ART_DETECTOR_SETUP.md; this file isn't needed there.
// ============================================================

const http = require("http");
const fs = require("fs");
const path = require("path");

// ---- load .env (simple KEY=VALUE parser, no dependency needed) ----
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8")
    .split("\n")
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const idx = trimmed.indexOf("=");
      if (idx === -1) return;
      const key = trimmed.slice(0, idx).trim();
      const value = trimmed.slice(idx + 1).trim();
      if (!(key in process.env)) process.env[key] = value;
    });
}

if (!process.env.GEMINI_API_KEY) {
  console.warn(
    "\n[dev-server] Warning: GEMINI_API_KEY is not set. Create a .env file with:\n  GEMINI_API_KEY=your_key_here\nThe site will still load, but 'Detect an Art Form' will show a missing-key error.\n"
  );
}

const analyzeArt = require("./api/analyze-art.js");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, urlPath);

  // basic guard against path traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found: " + urlPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith("/api/analyze-art")) {
    try {
      const raw = await readBody(req);
      req.body = raw ? JSON.parse(raw) : {};
    } catch (e) {
      req.body = {};
    }
    // minimal res.json/res.status shim so the Vercel-style handler works as-is
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };
    res.json = (obj) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(obj));
    };
    await analyzeArt(req, res);
    return;
  }

  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log("\nKathavrnta running locally: http://localhost:" + PORT + "\n");
});