// ============ FIND A SONG (Enhanced Feature Engine with Free Public APIs) ============
// Integrates:
// 1. Curated Indian Folk & Heritage database (SONG_DATA).
// 2. LRCLIB Free Public Lyrics API (https://lrclib.net/api/search?q=...) for lyric-line search.
// 3. iTunes Worldwide Music API (https://itunes.apple.com/search?term=...) for worldwide songs.
// 4. Web Audio API Pitch & Melody Humming Detection.
// 5. Speech-to-Text Voice Recognition.
// Strictly NO emojis are used in the interface or messages.

(function () {
  const songFinderModal = document.getElementById("song-finder-modal");
  const songFinderBackdrop = document.getElementById("song-finder-backdrop");
  const songFinderClose = document.getElementById("song-finder-close");

  const listView = document.getElementById("song-list-view");
  const detailView = document.getElementById("song-detail-view");

  const songSearchInput = document.getElementById("song-search-input");
  const songMicBtn = document.getElementById("song-mic-btn");
  const songMicLang = document.getElementById("song-mic-lang");
  const songMicPanel = document.getElementById("song-mic-panel");
  const songMicCanvas = document.getElementById("song-mic-canvas");
  const songMicStatus = document.getElementById("song-mic-status");

  const tabFolk = document.getElementById("tab-folk");
  const tabAll = document.getElementById("tab-all");
  const tabRegions = document.getElementById("tab-regions");

  const songChipRow = document.getElementById("song-chip-row");
  const songResults = document.getElementById("song-results");

  const backBtn = document.getElementById("song-back-btn");
  const detailBadge = document.getElementById("song-detail-badge");
  const detailTitle = document.getElementById("song-detail-title");
  const detailArtist = document.getElementById("song-detail-artist");
  const detailDescription = document.getElementById("song-detail-description");
  const detailLyricsWrap = document.getElementById("song-detail-lyrics-wrap");
  const detailLyrics = document.getElementById("song-detail-lyrics");

  const detailState = document.getElementById("song-detail-state");
  const detailRegion = document.getElementById("song-detail-region");
  const detailLanguage = document.getElementById("song-detail-language");
  const detailGenre = document.getElementById("song-detail-genre");
  const detailOccasion = document.getElementById("song-detail-occasion");
  const detailInstruments = document.getElementById("song-detail-instruments");
  const detailEra = document.getElementById("song-detail-era");
  const detailPeriod = document.getElementById("song-detail-period");
  const detailYoutube = document.getElementById("song-detail-youtube");

  let currentTab = "folk"; // 'folk' | 'all' | 'regions'
  let canvasCtx = songMicCanvas ? songMicCanvas.getContext("2d") : null;
  let activeApiFetchId = 0;

  // ---------- CHIP FILTER DEFINITIONS ----------
  const FOLK_CHIPS = [
    { label: "Rajasthan", type: "state", value: "Rajasthan" },
    { label: "Punjab", type: "state", value: "Punjab" },
    { label: "West Bengal", type: "state", value: "West Bengal" },
    { label: "Assam", type: "state", value: "Assam" },
    { label: "Maharashtra", type: "state", value: "Maharashtra" },
    { label: "Gujarat", type: "state", value: "Gujarat" },
    { label: "South India", type: "region", value: "South India" },
    { label: "Kashmir & Pahadi", type: "region", value: "North India" },
    { label: "Bihar & UP", type: "state", value: "Bihar" }
  ];

  const STATE_CHIPS = [
    "Rajasthan", "Punjab", "West Bengal", "Assam", "Maharashtra",
    "Gujarat", "Kerala", "Tamil Nadu", "Karnataka", "Telangana",
    "Odisha", "Jammu & Kashmir", "Uttarakhand", "Himachal Pradesh", "Bihar"
  ];

  // ---------- TEXT NORMALIZATION & LOCAL SEARCH ----------

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .replace(/[^a-z0-9\u0900-\u097F\s]/gi, "")
      .trim();
  }

  function searchTextFor(song) {
    return normalize(
      [
        song.title,
        song.artist,
        song.language,
        song.region,
        song.state || "",
        song.era,
        ...(song.genre || []),
        ...(song.occasion || []),
        ...(song.instruments || []),
        ...(song.lyricSnippets || []),
        ...(song.keywords || [])
      ].join(" ")
    );
  }

  function scoreLocalSong(song, query) {
    const qNorm = normalize(query);
    if (!qNorm) return { score: 0, matchType: "" };

    const text = searchTextFor(song);
    const titleNorm = normalize(song.title);
    let score = 0;
    let matchType = "";

    if (titleNorm === qNorm) {
      score += 25;
      matchType = "Title Match";
    } else if (titleNorm.includes(qNorm)) {
      score += 15;
      matchType = "Title Match";
    }

    if (song.lyricSnippets) {
      for (const snippet of song.lyricSnippets) {
        if (normalize(snippet).includes(qNorm)) {
          score += 18;
          if (!matchType) matchType = "Lyrics Match";
          break;
        }
      }
    }

    if (song.state && normalize(song.state).includes(qNorm)) {
      score += 12;
      if (!matchType) matchType = "State Match";
    }

    if (text.includes(qNorm)) {
      score += 8;
      if (!matchType) matchType = "Text Match";
    }

    qNorm.split(/\s+/).forEach((word) => {
      if (word.length > 2 && text.includes(word)) {
        score += 2;
      }
    });

    if (song.isFolkHeritage && score > 0) {
      score += 3;
    }

    return { score, matchType };
  }

  function searchLocalSongs(query) {
    return SONG_DATA.map((song) => {
      const { score, matchType } = scoreLocalSong(song, query);
      return { song, score, matchType };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  // ---------- FREE PUBLIC API INTEGRATION (LRCLIB & ITUNES) ----------

  async function fetchLrclibLyrics(query) {
    try {
      const res = await fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) return [];
      const data = await res.json();
      if (!Array.isArray(data)) return [];

      return data.slice(0, 8).map((item) => {
        const lyricsSnippet = item.plainLyrics
          ? item.plainLyrics.split("\n").filter((l) => l.trim().length > 0).slice(0, 3).join(" • ")
          : "";
        return {
          id: "lrclib-" + item.id,
          title: item.trackName || "Unknown Track",
          artist: item.artistName || "Unknown Artist",
          language: "Worldwide",
          region: item.albumName || "Global Release",
          state: "Worldwide",
          genre: ["Worldwide Song"],
          occasion: ["Global Hit"],
          instruments: ["Digital Studio Production"],
          era: "Worldwide",
          period: item.duration ? `${Math.floor(item.duration / 60)}m ${item.duration % 60}s` : "Global",
          isFolkHeritage: false,
          isApiResult: true,
          matchBadge: "Worldwide Lyric Match",
          description: `Worldwide track "${item.trackName}" by ${item.artistName} from album "${item.albumName || "Single"}".`,
          culturalBackground: `Lyrics matched from worldwide lyrics database. Album: ${item.albumName || "Single"}.`,
          lyricSnippets: item.plainLyrics ? item.plainLyrics.split("\n").filter((l) => l.trim().length > 0).slice(0, 6) : [],
          plainLyricsFull: item.plainLyrics || "",
          youtubeQuery: `${item.trackName} ${item.artistName}`
        };
      });
    } catch (e) {
      console.warn("LRCLIB API fetch error:", e);
      return [];
    }
  }

  async function fetchItunesSongs(query) {
    try {
      const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=12`);
      if (!res.ok) return [];
      const data = await res.json();
      if (!data.results || !Array.isArray(data.results)) return [];

      return data.results.map((item) => {
        return {
          id: "itunes-" + item.trackId,
          title: item.trackName || "Unknown Track",
          artist: item.artistName || "Unknown Artist",
          language: "Worldwide",
          region: item.country || "Global",
          state: "Worldwide",
          genre: [item.primaryGenreName || "Music"],
          occasion: ["Global Track"],
          instruments: ["Studio Instrumentation"],
          era: item.releaseDate ? item.releaseDate.substring(0, 4) : "Modern",
          period: item.releaseDate ? item.releaseDate.substring(0, 10) : "Worldwide",
          artworkUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "300x300bb") : null,
          previewUrl: item.previewUrl || null,
          isFolkHeritage: false,
          isApiResult: true,
          matchBadge: "Global Track Match",
          description: `Worldwide track "${item.trackName}" by ${item.artistName} from collection "${item.collectionName || "Single"}". Genre: ${item.primaryGenreName || "Music"}.`,
          culturalBackground: `Worldwide release recorded by ${item.artistName}. Track link available on Apple Music & YouTube.`,
          lyricSnippets: item.collectionName ? [`Album: ${item.collectionName}`] : [],
          youtubeQuery: `${item.trackName} ${item.artistName}`
        };
      });
    } catch (e) {
      console.warn("iTunes API fetch error:", e);
      return [];
    }
  }

  // ---------- AUDIO PITCH & HUMMING DETECTION (WEB AUDIO API) ----------

  let audioCtx = null;
  let micStream = null;
  let analyserNode = null;
  let animationFrameId = null;
  let isListening = false;
  let humPitchSequence = [];
  let speechRec = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioCtxCtor = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxCtor) {
        audioCtx = new AudioCtxCtor();
      }
    }
  }

  function autoCorrelate(buf, sampleRate) {
    const SIZE = buf.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) {
      const val = buf[i];
      rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.015) return -1;

    let r1 = 0, r2 = SIZE - 1, thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buf[i]) < thres) { r1 = i; break; }
    }
    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
    }

    buf = buf.slice(r1, r2);
    const c = new Array(buf.length).fill(0);
    for (let i = 0; i < buf.length; i++) {
      for (let j = 0; j < buf.length - i; j++) {
        c[i] = c[i] + buf[j] * buf[j + i];
      }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < buf.length; i++) {
      if (c[i] > maxval) {
        maxval = c[i];
        maxpos = i;
      }
    }

    let T0 = maxpos;
    if (T0 === -1) return -1;
    return sampleRate / T0;
  }

  function freqToSemitone(freq) {
    if (freq <= 0) return 0;
    return Math.round(12 * Math.log2(freq / 440) + 69);
  }

  function drawLiveWaveform(timeData) {
    if (!canvasCtx || !songMicCanvas) return;
    const width = songMicCanvas.width;
    const height = songMicCanvas.height;

    canvasCtx.clearRect(0, 0, width, height);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "#d4a340";
    canvasCtx.beginPath();

    const sliceWidth = (width * 1.0) / timeData.length;
    let x = 0;

    for (let i = 0; i < timeData.length; i++) {
      const v = timeData[i] / 128.0;
      const y = (v * height) / 2;

      if (i === 0) canvasCtx.moveTo(x, y);
      else canvasCtx.lineTo(x, y);

      x += sliceWidth;
    }

    canvasCtx.lineTo(width, height / 2);
    canvasCtx.stroke();
  }

  function startAudioProcessing() {
    initAudioContext();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      songMicStatus.textContent = "Microphone access unavailable on this browser.";
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        micStream = stream;
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }

        analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 2048;
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyserNode);

        const timeData = new Uint8Array(analyserNode.frequencyBinCount);
        const floatData = new Float32Array(analyserNode.fftSize);
        humPitchSequence = [];

        function updateAudioLoop() {
          if (!isListening) return;

          analyserNode.getByteTimeDomainData(timeData);
          analyserNode.getFloatTimeDomainData(floatData);

          drawLiveWaveform(timeData);

          const pitchFreq = autoCorrelate(floatData, audioCtx.sampleRate);
          if (pitchFreq > 60 && pitchFreq < 1200) {
            const semitone = freqToSemitone(pitchFreq);
            humPitchSequence.push(semitone);
            if (humPitchSequence.length > 30) humPitchSequence.shift();
          }

          animationFrameId = requestAnimationFrame(updateAudioLoop);
        }

 updates: updateAudioLoop();
      })
      .catch((err) => {
        console.warn("Microphone access denied or error:", err);
        songMicStatus.textContent = "Microphone permission required for singing/humming search.";
      });
  }

  function stopAudioProcessing() {
    isListening = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (micStream) {
      micStream.getTracks().forEach((track) => track.stop());
      micStream = null;
    }
    if (canvasCtx && songMicCanvas) {
      canvasCtx.clearRect(0, 0, songMicCanvas.width, songMicCanvas.height);
    }
  }

  function matchHummingPitch(recordedPitch) {
    if (!recordedPitch || recordedPitch.length < 5) return [];

    const relativeSteps = [];
    for (let i = 1; i < recordedPitch.length; i++) {
      relativeSteps.push(recordedPitch[i] - recordedPitch[i - 1]);
    }

    const matches = [];
    SONG_DATA.forEach((song) => {
      if (!song.pitchSignature || !song.pitchSignature.length) return;
      const targetSig = song.pitchSignature;

      let matchScore = 0;
      let minLen = Math.min(relativeSteps.length, targetSig.length);

      for (let i = 0; i < minLen; i++) {
        const diff = Math.abs(relativeSteps[i] - targetSig[i]);
        if (diff <= 1) matchScore += 3;
        else if (diff <= 3) matchScore += 1;
      }

      if (matchScore > 4) {
        const confidence = Math.min(98, Math.round((matchScore / (minLen * 3)) * 100));
        matches.push({ song, score: matchScore + 10, matchType: `Melody Match (${confidence}%)` });
      }
    });

    return matches.sort((a, b) => b.score - a.score);
  }

  // ---------- SPEECH RECOGNITION SETUP ----------

  const SpeechRecCtor = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecCtor) {
    speechRec = new SpeechRecCtor();
    speechRec.interimResults = false;
    speechRec.maxAlternatives = 1;
    speechRec.lang = songMicLang.value;

    speechRec.onstart = () => {
      isListening = true;
      songMicBtn.classList.add("listening");
      songMicPanel.hidden = false;
      songMicStatus.textContent = "Listening... Sing, hum a tune, or say lyrics clearly.";
      startAudioProcessing();
    };

    speechRec.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      songSearchInput.value = transcript;
      songMicStatus.textContent = `Recognized: "${transcript}"`;
      runSearch(transcript);
    };

    speechRec.onerror = () => {
      const humMatches = matchHummingPitch(humPitchSequence);
      if (humMatches.length > 0) {
        songMicStatus.textContent = `Matched humming tune pattern with ${humMatches[0].song.title}`;
        renderResultCards(humMatches.map((m) => ({ ...m.song, matchBadge: m.matchType })), "Humming Melody Matches");
      } else {
        songMicStatus.textContent = "Could not catch clear words - try singing again or typing.";
      }
    };

    speechRec.onend = () => {
      songMicBtn.classList.remove("listening");
      stopAudioProcessing();
      setTimeout(() => {
        if (!isListening) songMicPanel.hidden = true;
      }, 4000);
    };
  }

  songMicLang.addEventListener("change", () => {
    if (speechRec) speechRec.lang = songMicLang.value;
  });

  songMicBtn.addEventListener("click", () => {
    if (isListening) {
      if (speechRec) speechRec.stop();
      stopAudioProcessing();
      return;
    }

    if (speechRec) {
      try {
        speechRec.start();
      } catch (e) {
        // Recognition already active
      }
    } else {
      isListening = true;
      songMicBtn.classList.add("listening");
      songMicPanel.hidden = false;
      songMicStatus.textContent = "Humming tune mode active... sing or hum into microphone.";
      startAudioProcessing();

      setTimeout(() => {
        const humMatches = matchHummingPitch(humPitchSequence);
        stopAudioProcessing();
        songMicBtn.classList.remove("listening");
        if (humMatches.length > 0) {
          songMicStatus.textContent = `Matched humming melody for "${humMatches[0].song.title}"`;
          renderResultCards(humMatches.map((m) => ({ ...m.song, matchBadge: m.matchType })), "Humming Melody Matches");
        } else {
          songMicStatus.textContent = "Try typing the song name or lyrics in the search box above.";
        }
      }, 5000);
    }
  });

  // ---------- RENDERING CHIPS & CARDS ----------

  function clearActiveChips() {
    songChipRow.querySelectorAll(".song-chip").forEach((c) => c.classList.remove("active"));
  }

  function renderChips() {
    songChipRow.innerHTML = "";

    if (currentTab === "folk") {
      FOLK_CHIPS.forEach((chip) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "song-chip";
        btn.textContent = chip.label;
        btn.addEventListener("click", () => {
          const wasActive = btn.classList.contains("active");
          clearActiveChips();
          songSearchInput.value = "";

          if (wasActive) {
            showFolkHeritageState();
            return;
          }

          btn.classList.add("active");
          const filtered = SONG_DATA.filter((song) => {
            if (chip.type === "state") {
              return normalize(song.state).includes(normalize(chip.value));
            }
            if (chip.type === "region") {
              return normalize(song.region).includes(normalize(chip.value));
            }
            return false;
          });
          renderResultCards(filtered, chip.label + " Folk Heritage");
        });
        songChipRow.appendChild(btn);
      });
    } else if (currentTab === "regions") {
      STATE_CHIPS.forEach((stateName) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "song-chip";
        btn.textContent = stateName;
        btn.addEventListener("click", () => {
          const wasActive = btn.classList.contains("active");
          clearActiveChips();
          songSearchInput.value = "";

          if (wasActive) {
            showAllSongsState();
            return;
          }

          btn.classList.add("active");
          const filtered = SONG_DATA.filter((song) =>
            normalize(song.state || "").includes(normalize(stateName))
          );
          renderResultCards(filtered, "Songs from " + stateName);
        });
        songChipRow.appendChild(btn);
      });
    } else {
      const GENRE_CHIPS = ["All", "Folk Heritage", "Bhajan", "Devotional", "Patriotic", "Garba", "Lavani", "Bhangra", "Sufi", "Romantic"];
      GENRE_CHIPS.forEach((genre) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "song-chip";
        btn.textContent = genre;
        btn.addEventListener("click", () => {
          clearActiveChips();
          songSearchInput.value = "";
          btn.classList.add("active");

          if (genre === "All") {
            showAllSongsState();
            return;
          }
          if (genre === "Folk Heritage") {
            renderResultCards(SONG_DATA.filter((s) => s.isFolkHeritage), "Folk & Heritage Traditions");
            return;
          }
          const filtered = SONG_DATA.filter((song) =>
            (song.genre || []).some((g) => g.toLowerCase().includes(genre.toLowerCase()))
          );
          renderResultCards(filtered, genre + " Songs");
        });
        songChipRow.appendChild(btn);
      });
    }
  }

  function getInitials(name) {
    if (!name) return "FK";
    return name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function renderResultCards(songs, headingText) {
    songResults.innerHTML = "";

    if (headingText) {
      const heading = document.createElement("p");
      heading.className = "song-results-heading";
      heading.textContent = headingText;
      songResults.appendChild(heading);
    }

    if (!songs.length) {
      const empty = document.createElement("div");
      empty.className = "song-no-results";
      empty.textContent = "No matches found - try a different song name, lyric line, state, or artist.";
      songResults.appendChild(empty);
      return;
    }

    songs.forEach((songItem) => {
      const song = songItem.song ? songItem.song : songItem;
      const matchBadgeText = songItem.matchType || song.matchBadge || "";

      const card = document.createElement("div");
      card.className = "song-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", song.title + " by " + song.artist);

      const icon = document.createElement("div");
      icon.className = "song-card-icon";
      if (song.artworkUrl) {
        icon.innerHTML = `<img src="${song.artworkUrl}" alt="${song.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />`;
      } else {
        icon.textContent = getInitials(song.state || song.region || song.title);
      }

      const info = document.createElement("div");
      info.className = "song-card-info";

      const topRow = document.createElement("div");
      topRow.className = "song-card-top";

      const title = document.createElement("h3");
      title.className = "song-card-title";
      title.textContent = song.title;
      topRow.appendChild(title);

      if (matchBadgeText) {
        const mBadge = document.createElement("span");
        mBadge.className = "song-card-badge match";
        mBadge.textContent = matchBadgeText;
        topRow.appendChild(mBadge);
      } else if (song.isFolkHeritage) {
        const hBadge = document.createElement("span");
        hBadge.className = "song-card-badge heritage";
        hBadge.textContent = "Folk Heritage";
        topRow.appendChild(hBadge);
      }

      const meta = document.createElement("p");
      meta.className = "song-card-meta";
      meta.textContent = song.artist + " • " + (song.state ? song.state + " (" + song.language + ")" : song.language);

      info.appendChild(topRow);
      info.appendChild(meta);

      if (song.lyricSnippets && song.lyricSnippets.length > 0) {
        const snippet = document.createElement("p");
        snippet.className = "song-card-snippet";
        snippet.textContent = `"${song.lyricSnippets[0]}"`;
        info.appendChild(snippet);
      }

      const tags = document.createElement("div");
      tags.className = "song-card-tags";

      const eraTag = document.createElement("span");
      eraTag.className = "song-card-tag";
      eraTag.textContent = song.era || "Traditional";
      tags.appendChild(eraTag);

      if (song.instruments && song.instruments.length > 0) {
        const instTag = document.createElement("span");
        instTag.className = "song-card-tag";
        instTag.textContent = song.instruments.slice(0, 2).join(", ");
        tags.appendChild(instTag);
      }

      info.appendChild(tags);
      card.appendChild(icon);
      card.appendChild(info);

      card.addEventListener("click", () => openDetail(song));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetail(song);
        }
      });

      songResults.appendChild(card);
    });
  }

  // ---------- DISPLAY STATES & MULTI-TIER SEARCH ----------

  function showFolkHeritageState() {
    const folkSongs = SONG_DATA.filter((s) => s.isFolkHeritage);
    renderResultCards(folkSongs, "Folk & Cultural Heritage Traditions");
  }

  function showAllSongsState() {
    renderResultCards(SONG_DATA, "All Songs (" + SONG_DATA.length + " Total)");
  }

  async function runSearch(query) {
    clearActiveChips();
    const trimmed = query.trim();
    if (!trimmed) {
      if (currentTab === "folk") showFolkHeritageState();
      else showAllSongsState();
      return;
    }

    const currentFetchId = ++activeApiFetchId;

    // 1. Search local dataset first
    const localResults = searchLocalSongs(trimmed);
    renderResultCards(localResults, localResults.length ? `Local Matches for "${trimmed}"` : "Searching worldwide lyrics database...");

    // 2. Fetch worldwide API results in parallel (LRCLIB Lyrics API & iTunes Music API)
    try {
      const [lrclibResults, itunesResults] = await Promise.all([
        fetchLrclibLyrics(trimmed),
        fetchItunesSongs(trimmed)
      ]);

      if (currentFetchId !== activeApiFetchId) return; // Stale fetch response

      const combinedApiSongs = [];
      const seenIds = new Set(localResults.map((r) => r.song.title.toLowerCase()));

      lrclibResults.forEach((song) => {
        if (!seenIds.has(song.title.toLowerCase())) {
          seenIds.add(song.title.toLowerCase());
          combinedApiSongs.push(song);
        }
      });

      itunesResults.forEach((song) => {
        if (!seenIds.has(song.title.toLowerCase())) {
          seenIds.add(song.title.toLowerCase());
          combinedApiSongs.push(song);
        }
      });

      const allMerged = [
        ...localResults.map((r) => ({ ...r.song, matchBadge: r.matchType })),
        ...combinedApiSongs
      ];

      renderResultCards(allMerged, allMerged.length ? `Results for "${trimmed}" (Local + Worldwide Lyrics & Songs)` : "");
    } catch (e) {
      console.warn("API Search Error:", e);
    }
  }

  let searchTimer = null;
  songSearchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => runSearch(songSearchInput.value), 220);
  });

  // Tab button listeners
  tabFolk.addEventListener("click", () => {
    currentTab = "folk";
    tabFolk.classList.add("active");
    tabAll.classList.remove("active");
    tabRegions.classList.remove("active");
    songSearchInput.value = "";
    renderChips();
    showFolkHeritageState();
  });

  tabAll.addEventListener("click", () => {
    currentTab = "all";
    tabAll.classList.add("active");
    tabFolk.classList.remove("active");
    tabRegions.classList.remove("active");
    songSearchInput.value = "";
    renderChips();
    showAllSongsState();
  });

  tabRegions.addEventListener("click", () => {
    currentTab = "regions";
    tabRegions.classList.add("active");
    tabFolk.classList.remove("active");
    tabAll.classList.remove("active");
    songSearchInput.value = "";
    renderChips();
    showAllSongsState();
  });

  // Traditional Heritage Artwork Card Click Listeners
  document.querySelectorAll(".heritage-art-card").forEach((card) => {
    card.addEventListener("click", () => {
      const filter = card.getAttribute("data-filter");
      let query = "";
      if (filter === "classical") query = "classical";
      else if (filter === "dance") query = "Ghoomar";
      else if (filter === "bansuri") query = "Bansuri";

      if (query) {
        songSearchInput.value = query;
        runSearch(query);
      }
    });
  });

  // ---------- DETAIL VIEW ----------

  function openDetail(song) {
    listView.hidden = true;
    detailView.hidden = false;

    if (song.isFolkHeritage) {
      detailBadge.textContent = (song.state ? song.state + " Folk Heritage" : "Folk Heritage");
      detailBadge.hidden = false;
    } else if (song.isApiResult) {
      detailBadge.textContent = song.matchBadge || "Worldwide Track";
      detailBadge.hidden = false;
    } else {
      detailBadge.hidden = true;
    }

    detailTitle.textContent = song.title;
    detailArtist.textContent = song.artist;
    detailDescription.textContent = song.culturalBackground || song.description;

    const lyricsToDisplay = song.plainLyricsFull
      ? song.plainLyricsFull.split("\n").filter((l) => l.trim().length > 0)
      : song.lyricSnippets || [];

    if (lyricsToDisplay.length > 0) {
      detailLyricsWrap.hidden = false;
      detailLyrics.innerHTML = "";
      lyricsToDisplay.forEach((line) => {
        const lineEl = document.createElement("div");
        lineEl.className = "song-lyric-line";
        lineEl.textContent = line;
        detailLyrics.appendChild(lineEl);
      });
    } else {
      detailLyricsWrap.hidden = true;
    }

    detailState.textContent = song.state || song.region || "Worldwide";
    detailRegion.textContent = song.region || "Global";
    detailLanguage.textContent = song.language || "Worldwide";
    detailGenre.textContent = (song.genre || []).join(", ");
    detailOccasion.textContent = (song.occasion || []).join(", ");
    detailInstruments.textContent = (song.instruments || []).join(", ");
    detailEra.textContent = song.era || "Modern";
    detailPeriod.textContent = song.period || "Worldwide";

    detailYoutube.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(song.youtubeQuery || song.title + " " + song.artist);
  }

  backBtn.addEventListener("click", () => {
    detailView.hidden = true;
    listView.hidden = false;
  });

  // ---------- MODAL OPEN & CLOSE ----------

  function openSongFinder() {
    songFinderModal.classList.add("open");
    songFinderModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    listView.hidden = false;
    detailView.hidden = true;
    songSearchInput.value = "";
    songMicPanel.hidden = true;

    currentTab = "folk";
    tabFolk.classList.add("active");
    tabAll.classList.remove("active");
    tabRegions.classList.remove("active");

    renderChips();
    showFolkHeritageState();

    setTimeout(() => songSearchInput.focus(), 50);
  }

  function closeSongFinder() {
    songFinderModal.classList.remove("open");
    songFinderModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (speechRec && isListening) speechRec.stop();
    stopAudioProcessing();
  }

  songFinderClose.addEventListener("click", closeSongFinder);
  songFinderBackdrop.addEventListener("click", closeSongFinder);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && songFinderModal.classList.contains("open")) {
      closeSongFinder();
    }
  });

  window.openSongFinder = openSongFinder;
})();