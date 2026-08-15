// ============ FIND A SONG (Feature One) ============
// Relies on SONG_DATA from songData.js. Matching is done against title,
// artist, language, region, genre, occasion, instruments, era and a small
// set of theme keywords — deliberately not against verbatim lyrics (see
// note at the top of songData.js for why).

(function () {
  const songFinderModal = document.getElementById("song-finder-modal");
  const songFinderBackdrop = document.getElementById("song-finder-backdrop");
  const songFinderClose = document.getElementById("song-finder-close");

  const listView = document.getElementById("song-list-view");
  const detailView = document.getElementById("song-detail-view");

  const songSearchInput = document.getElementById("song-search-input");
  const songMicBtn = document.getElementById("song-mic-btn");
  const songMicLang = document.getElementById("song-mic-lang");
  const songMicStatus = document.getElementById("song-mic-status");
  const songChipRow = document.getElementById("song-chip-row");
  const songResults = document.getElementById("song-results");

  const backBtn = document.getElementById("song-back-btn");
  const detailTitle = document.getElementById("song-detail-title");
  const detailArtist = document.getElementById("song-detail-artist");
  const detailDescription = document.getElementById("song-detail-description");
  const detailLanguage = document.getElementById("song-detail-language");
  const detailRegion = document.getElementById("song-detail-region");
  const detailGenre = document.getElementById("song-detail-genre");
  const detailOccasion = document.getElementById("song-detail-occasion");
  const detailInstruments = document.getElementById("song-detail-instruments");
  const detailEra = document.getElementById("song-detail-era");
  const detailPeriod = document.getElementById("song-detail-period");
  const detailYoutube = document.getElementById("song-detail-youtube");

  const GENRE_ICONS = {
    "Devotional": "",
    "Aarti": "",
    "Qawwali": "",
    "Sufi": "",
    "Patriotic": "",
    "Anthem": "",
    "Garba": "",
    "Folk": "",
    "Lavani": "",
    "Wedding": "",
    "Monsoon Dance": "",
    "Monsoon Romantic": ""
  };

  function iconFor(song) {
    for (const g of song.genre) {
      if (GENRE_ICONS[g]) return GENRE_ICONS[g];
    }
    if (song.occasion.includes("Monsoon")) return "";
    if (song.occasion.includes("Wedding")) return "";
    return "";
  }

  const CHIP_DEFS = [
    { label: "Wedding", type: "occasion", value: "Wedding" },
    { label: "Monsoon", type: "occasion", value: "Monsoon" },
    { label: "Festival", type: "occasion", value: "Festival" },
    { label: "Devotional", type: "occasion", value: "Devotional" },
    { label: "Romantic", type: "occasion", value: "Romantic" },
    { label: "Party", type: "occasion", value: "Party" },
    { label: "Patriotic", type: "occasion", value: "Patriotic" },
    { label: "Folk & Heritage", type: "era", value: "Heritage" }
  ];

  // ---------- search / matching ----------

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
        song.era,
        ...(song.genre || []),
        ...(song.occasion || []),
        ...(song.instruments || []),
        ...(song.keywords || [])
      ].join(" ")
    );
  }

  function scoreSong(song, query) {
    const qNorm = normalize(query);
    if (!qNorm) return 0;

    const text = searchTextFor(song);
    let score = 0;

    if (normalize(song.title).includes(qNorm)) score += 10;
    if (text.includes(qNorm)) score += 4;

    qNorm.split(/\s+/).forEach((word) => {
      if (word.length > 1 && text.includes(word)) score += 1;
    });

    return score;
  }

  function searchSongs(query) {
    return SONG_DATA.map((song) => ({ song, score: scoreSong(song, query) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.song);
  }

  // ---------- rendering ----------

  function clearActiveChips() {
    songChipRow.querySelectorAll(".song-chip").forEach((c) => c.classList.remove("active"));
  }

  function renderChips() {
    songChipRow.innerHTML = "";
    CHIP_DEFS.forEach((chip) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "song-chip";
      btn.textContent = chip.label;
      btn.addEventListener("click", () => {
        const wasActive = btn.classList.contains("active");
        clearActiveChips();
        songSearchInput.value = "";

        if (wasActive) {
          showExploreState();
          return;
        }

        btn.classList.add("active");
        const filtered = SONG_DATA.filter((song) => {
          if (chip.type === "occasion") {
            return (song.occasion || []).some((o) => o.toLowerCase() === chip.value.toLowerCase());
          }
          if (chip.type === "era") {
            return (song.era || "").toLowerCase().includes(chip.value.toLowerCase());
          }
          return false;
        });
        renderResultCards(filtered, chip.label + " picks");
      });
      songChipRow.appendChild(btn);
    });
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
      const empty = document.createElement("p");
      empty.className = "song-no-results";
      empty.textContent = "No matches yet \u2014 try a different word, mood, artist, or region.";
      songResults.appendChild(empty);
      return;
    }

    songs.forEach((song) => {
      const card = document.createElement("div");
      card.className = "song-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", song.title + " by " + song.artist);

      const icon = document.createElement("div");
      icon.className = "song-card-icon";
      icon.textContent = iconFor(song);

      const info = document.createElement("div");
      info.className = "song-card-info";

      const title = document.createElement("h3");
      title.className = "song-card-title";
      title.textContent = song.title;

      const meta = document.createElement("p");
      meta.className = "song-card-meta";
      meta.textContent = song.artist + " \u00B7 " + song.language;

      const tags = document.createElement("div");
      tags.className = "song-card-tags";
      [song.era, ...(song.occasion || []).slice(0, 2)].forEach((t) => {
        if (!t) return;
        const tag = document.createElement("span");
        tag.className = "song-card-tag";
        tag.textContent = t;
        tags.appendChild(tag);
      });

      info.appendChild(title);
      info.appendChild(meta);
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

  function showExploreState() {
    const shuffled = [...SONG_DATA].sort(() => Math.random() - 0.5).slice(0, 4);
    renderResultCards(shuffled, "Not sure where to start? A few to explore:");
  }

  function runSearch(query) {
    clearActiveChips();
    const trimmed = query.trim();
    if (!trimmed) {
      showExploreState();
      return;
    }
    const results = searchSongs(trimmed);
    renderResultCards(results, results.length ? 'Results for "' + trimmed + '"' : "");
  }

  let searchTimer = null;
  songSearchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => runSearch(songSearchInput.value), 200);
  });

  // ---------- detail view ----------

  function openDetail(song) {
    listView.hidden = true;
    detailView.hidden = false;

    detailTitle.textContent = song.title;
    detailArtist.textContent = song.artist;
    detailDescription.textContent = song.description;
    detailLanguage.textContent = song.language;
    detailRegion.textContent = song.region;
    detailGenre.textContent = song.genre.join(", ");
    detailOccasion.textContent = song.occasion.join(", ");
    detailInstruments.textContent = song.instruments.join(", ");
    detailEra.textContent = song.era;
    detailPeriod.textContent = song.period;

    detailYoutube.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(song.youtubeQuery);
  }

  backBtn.addEventListener("click", () => {
    detailView.hidden = true;
    listView.hidden = false;
  });

  // ---------- voice input ----------

  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let isListening = false;

  if (SpeechRecognitionCtor) {
    recognition = new SpeechRecognitionCtor();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = songMicLang.value;

    recognition.onstart = () => {
      isListening = true;
      songMicBtn.classList.add("listening");
      songMicStatus.textContent = "Listening... sing or say a few words of the song.";
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      songSearchInput.value = transcript;
      runSearch(transcript);
    };

    recognition.onerror = () => {
      songMicStatus.textContent = "Didn't catch that \u2014 try again, or just type instead.";
    };

    recognition.onend = () => {
      isListening = false;
      songMicBtn.classList.remove("listening");
      if (!songMicStatus.textContent.startsWith("Didn't catch")) {
        songMicStatus.textContent = "";
      }
    };
  }

  songMicLang.addEventListener("change", () => {
    if (recognition) recognition.lang = songMicLang.value;
  });

  songMicBtn.addEventListener("click", () => {
    if (!recognition) {
      songMicStatus.textContent = "Voice search isn't supported in this browser \u2014 try Chrome, or just type instead.";
      return;
    }
    if (isListening) {
      recognition.stop();
      return;
    }
    try {
      recognition.start();
    } catch (e) {
      // recognition already starting; ignore
    }
  });

  // ---------- modal open/close ----------

  function openSongFinder() {
    songFinderModal.classList.add("open");
    songFinderModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    listView.hidden = false;
    detailView.hidden = true;
    songSearchInput.value = "";
    songMicStatus.textContent = "";
    clearActiveChips();

    renderChips();
    showExploreState();

    setTimeout(() => songSearchInput.focus(), 50);
  }

  function closeSongFinder() {
    songFinderModal.classList.remove("open");
    songFinderModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (recognition && isListening) recognition.stop();
  }

  songFinderClose.addEventListener("click", closeSongFinder);
  songFinderBackdrop.addEventListener("click", closeSongFinder);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && songFinderModal.classList.contains("open")) {
      closeSongFinder();
    }
  });

  // exposed so script.js can call it when Feature One is clicked
  window.openSongFinder = openSongFinder;
})();