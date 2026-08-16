// ============================================================
// FOLK_LEARN_DATA   content for "Learn the Folk Song" (Feature 2)
//
// This is the curriculum framework: two regional tracks (Rajasthani
// and West Bengali), each with three levels (beginner, intermediate,
// master), each level holding a small set of lessons.
//
// HOW TO ADD YOUR OWN VIDEOS
// ---------------------------
// Every lesson has a `video` object:
//   video: { type: "youtube", id: "" }   -> put a YouTube video ID in `id`
//   video: { type: "file", src: "" }     -> or point `src` at an mp4/webm file
// Leave `id`/`src` empty and the lesson will show a "video coming soon"
// placeholder frame instead of erroring out, so you can wire content up
// gradually without breaking the page.
//
// `practiceLine` is the short prompt shown in the "Test Yourself" panel
// for that lesson (what the learner should try to sing/hum back).
// ============================================================

const FOLK_LEARN_DATA = {
  regions: [
    {
      id: "rajasthani",
      name: "Rajasthani",
      tagline: "Maand ballads, Kalbelia lilt & desert call songs",
      badge: "RJ",
    },
    {
      id: "bengali",
      name: "West Bengali",
      tagline: "Baul mysticism, Bhatiali river calls & Bhawaiya",
      badge: "WB",
    },
  ],

  levels: ["beginner", "intermediate", "master"],

  levelMeta: {
    beginner: { label: "Beginner", blurb: "Simple, short phrases and steady single notes." },
    intermediate: { label: "Intermediate", blurb: "Longer phrases, basic ornamentation and rhythm." },
    master: { label: "Master", blurb: "Full alaap, improvisation and breath control." },
  },

  lessons: {
    rajasthani: {
      beginner: [
        {
          id: "raj-beg-1",
          title: "Padharo Mhare Desh",
          style: "Welcome song",
          duration: "3:20",
          video: { type: "youtube", id: "" },
          description:
            "A warm, welcoming call traditionally sung to greet guests. Good first lesson for feeling the steady pulse under a Rajasthani folk line.",
          focusPoints: ["Keep one note steady before moving to the next", "Match the clapping pulse"],
          practiceLine: "Hum the opening greeting phrase back, holding the first syllable for a full breath.",
        },
        {
          id: "raj-beg-2",
          title: "Kesariya Balam (opening phrase)",
          style: "Maand",
          duration: "2:55",
          video: { type: "youtube", id: "" },
          description:
            "The iconic Maand style built on long, gliding vowels. At beginner level we isolate just the opening call.",
          focusPoints: ["Smooth glide between two notes", "No breaks mid phrase"],
          practiceLine: "Sing the opening call slowly, gliding smoothly from the low note to the high note.",
        },
        {
          id: "raj-beg-3",
          title: "Ghoomar Clap Pattern",
          style: "Ghoomar",
          duration: "3:05",
          video: { type: "youtube", id: "" },
          description:
            "A short, rhythmic dance song fragment used to internalise the clap pattern underneath Rajasthani folk melody.",
          focusPoints: ["Even clap spacing", "Voice lands on the clap, not before or after"],
          practiceLine: "Clap the pattern first, then hum the same short phrase on top of it.",
        },
      ],
      intermediate: [
        {
          id: "raj-int-1",
          title: "Panihari (water bearer call)",
          style: "Folk ballad",
          duration: "4:10",
          video: { type: "youtube", id: "" },
          description:
            "A narrative folk ballad about a woman walking to the well. Introduces longer phrasing and a call and response shape.",
          focusPoints: ["Sustain the line without running out of breath", "Clear call and response gap"],
          practiceLine: "Sing the full first verse line, leaving a clean pause where the response would land.",
        },
        {
          id: "raj-int-2",
          title: "Kurja (the crane song)",
          style: "Folk ballad",
          duration: "4:40",
          video: { type: "youtube", id: "" },
          description:
            "A message carrying song addressed to a crane, a favourite for practising light ornamentation on longer vowels.",
          focusPoints: ["Add a small ornament (turn) on the held vowel", "Keep pitch centred, not sharp or flat"],
          practiceLine: "Sing the held vowel and add one small turn/ornament before releasing the note.",
        },
        {
          id: "raj-int-3",
          title: "Moomal (Verse and Refrain)",
          style: "Ballad, verse & refrain",
          duration: "5:00",
          video: { type: "youtube", id: "" },
          description:
            "Alternates a narrated verse with a repeated refrain, useful for practising consistent pitch across repeats.",
          focusPoints: ["Refrain lands on the same pitch every repeat", "Breath taken only at phrase ends"],
          practiceLine: "Sing the refrain twice in a row and try to land both repeats on the same pitch.",
        },
      ],
      master: [
        {
          id: "raj-mas-1",
          title: "Maand (Full Alaap)",
          style: "Maand, advanced",
          duration: "6:30",
          video: { type: "youtube", id: "" },
          description:
            "The complete slow, unmetered alaap opening of a Maand piece with long breath control and free ornamentation.",
          focusPoints: ["Even tone across a long unmetered phrase", "Free ornamentation without losing the base pitch"],
          practiceLine: "Sing a full unmetered alaap phrase in one breath, returning cleanly to the starting note.",
        },
        {
          id: "raj-mas-2",
          title: "Kalbelia Improvisation",
          style: "Kalbelia",
          duration: "5:50",
          video: { type: "youtube", id: "" },
          description:
            "The fast, snake charmer Kalbelia style, built for improvising short melodic runs over a driving rhythm.",
          focusPoints: ["Improvise a short 4 note run", "Land back on the home note in time"],
          practiceLine: "Improvise a short melodic run over the beat, then land back on the home note exactly on the pulse.",
        },
        {
          id: "raj-mas-3",
          title: "Manganiyar Ballad Cycle",
          style: "Extended ballad",
          duration: "7:15",
          video: { type: "youtube", id: "" },
          description:
            "A full narrative cycle in the Manganiyar hereditary musician tradition, stamina, storytelling, and dynamic range.",
          focusPoints: ["Vary dynamics between verses", "Sustain vocal quality across the full cycle"],
          practiceLine: "Sing two full verses back to back, making the second noticeably softer than the first.",
        },
      ],
    },

    bengali: {
      beginner: [
        {
          id: "beng-beg-1",
          title: "Bhatiali Boat Call",
          style: "Bhatiali",
          duration: "3:00",
          video: { type: "youtube", id: "" },
          description:
            "The simple river boatman call, long open vowels sung across water, ideal for basic breath support.",
          focusPoints: ["Open, relaxed throat on the long vowel", "Consistent volume, no straining"],
          practiceLine: "Sing one long open vowel for as long as you comfortably can, keeping the volume steady.",
        },
        {
          id: "beng-beg-2",
          title: "Simple Baul Refrain",
          style: "Baul",
          duration: "2:45",
          video: { type: "youtube", id: "" },
          description:
            "A short, repeating Baul refrain, the mystic folk style of Bengal wandering minstrels, at an easy entry tempo.",
          focusPoints: ["Repeat the refrain without drifting pitch", "Light, relaxed tone, not forced"],
          practiceLine: "Sing the short refrain three times in a row and keep the pitch from drifting up or down.",
        },
        {
          id: "beng-beg-3",
          title: "Bhawaiya Cart Song (basic)",
          style: "Bhawaiya",
          duration: "3:10",
          video: { type: "youtube", id: "" },
          description:
            "A rustic cattle cart driver song from North Bengal, here simplified to its core rocking melodic shape.",
          focusPoints: ["Feel the rocking two beat rhythm", "Smooth rise and fall, no sharp jumps"],
          practiceLine: "Hum the rocking two note shape slowly, matching a gentle back and forth rhythm.",
        },
      ],
      intermediate: [
        {
          id: "beng-int-1",
          title: "Amay Bhasaili Re",
          style: "Bhatiali",
          duration: "4:20",
          video: { type: "youtube", id: "" },
          description:
            "A well known Bhatiali river song about being swept along by the current, longer lines with more breath demand.",
          focusPoints: ["Sustain the full line in one breath", "Gentle vibrato only at the very end of a held note"],
          practiceLine: "Sing the full opening line in a single breath, adding a light wobble only on the final note.",
        },
        {
          id: "beng-int-2",
          title: "Baul Ektara Practice",
          style: "Baul",
          duration: "4:00",
          video: { type: "youtube", id: "" },
          description:
            "Practising vocal line against the steady drone of the ektara (one string instrument), a Baul signature texture.",
          focusPoints: ["Stay centred against a drone note", "Rhythmic entries after each drone pulse"],
          practiceLine: "Hum your line while imagining a steady drone underneath, coming back to the same home pitch each phrase.",
        },
        {
          id: "beng-int-3",
          title: "Bhawaiya Longing Call",
          style: "Bhawaiya",
          duration: "4:35",
          video: { type: "youtube", id: "" },
          description:
            "The expressive, yearning ornament style Bhawaiya is known for, a wavering slide on the peak note.",
          focusPoints: ["Controlled slide (not a wobble) on the peak note", "Return smoothly to the base pitch"],
          practiceLine: "Slide slowly up to the peak note, hold briefly, then glide back down to your starting pitch.",
        },
      ],
      master: [
        {
          id: "beng-mas-1",
          title: "Baul Mystic Improvisation",
          style: "Baul, advanced",
          duration: "6:00",
          video: { type: "youtube", id: "" },
          description:
            "Free, meditative improvisation in the Baul tradition, extended phrases with subtle, unhurried ornamentation.",
          focusPoints: ["Improvise freely while staying in the same mode", "Long, unhurried phrasing"],
          practiceLine: "Improvise freely for 10 to 15 seconds, returning to your home note whenever you like.",
        },
        {
          id: "beng-mas-2",
          title: "Bhatiali Long Breath Call",
          style: "Bhatiali, advanced",
          duration: "6:20",
          video: { type: "youtube", id: "" },
          description:
            "The full length river call, sung across an entire extended phrase without a breath break, a stamina piece.",
          focusPoints: ["One unbroken breath across the whole call", "Even tone from start to finish"],
          practiceLine: "Sing one long, unbroken call for as long as possible, keeping tone quality even to the end.",
        },
        {
          id: "beng-mas-3",
          title: "Kirtan Call and Response Cycle",
          style: "Kirtan",
          duration: "6:45",
          video: { type: "youtube", id: "" },
          description:
            "A full call and response devotional cycle, building intensity across repeats, group singing energy on your own.",
          focusPoints: ["Build volume/intensity gradually across repeats", "Keep pitch locked even as energy rises"],
          practiceLine: "Sing the same phrase three times, each one slightly more intense, without losing the pitch.",
        },
      ],
    },
  },
};

// Flat lookup of every lesson by id, built once so other scripts don't have
// to walk the nested structure themselves.
const FOLK_LESSON_INDEX = {};
Object.keys(FOLK_LEARN_DATA.lessons).forEach((regionId) => {
  Object.keys(FOLK_LEARN_DATA.lessons[regionId]).forEach((level) => {
    FOLK_LEARN_DATA.lessons[regionId][level].forEach((lesson) => {
      FOLK_LESSON_INDEX[lesson.id] = { ...lesson, regionId, level };
    });
  });
});