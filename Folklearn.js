// ============================================================
// folkLearn.js — "Learn the Folk Song" (Feature 2)
//
// Flow: pick a region -> pick a level (tabs) -> pick a lesson ->
// watch the video (placeholder until you add one in folkLearnData.js)
// -> Test Yourself: record a short take on your mic and get a local,
// on-device practice score (pitch steadiness + voice sustain).
//
// NOTE ON "AI JUDGING"
// The scoring here runs entirely in the browser using the Web Audio
// API (autocorrelation-based pitch detection + RMS voicing detection).
// It is a lightweight heuristic practice aid, not a trained model or a
// substitute for a teacher's ear — the UI is upfront about that. If you
// later want a real ML-based judge, this is the seam to swap in a call
// to your own backend/model: replace `computeFeedback()` with a fetch
// to your API, sending the recorded Blob from `finalizeRecording()`.
// ============================================================

(function () {
  const MAX_RECORD_SECONDS = 15;
  const PROGRESS_KEY = "kathavrnta_folk_progress_v1";

  // ---- DOM refs ----
  const modal = document.getElementById("folk-learn-modal");
  const backdrop = document.getElementById("folk-learn-backdrop");
  const closeBtn = document.getElementById("folk-learn-close");

  const regionView = document.getElementById("folk-region-view");
  const regionGrid = document.getElementById("folk-region-grid");

  const levelView = document.getElementById("folk-level-view");
  const backToRegionsBtn = document.getElementById("folk-back-to-regions");
  const levelBadge = document.getElementById("folk-level-badge");
  const levelRegionName = document.getElementById("folk-level-region-name");
  const levelRegionTagline = document.getElementById("folk-level-region-tagline");
  const levelTabs = document.getElementById("folk-level-tabs");
  const levelBlurb = document.getElementById("folk-level-blurb");
  const lessonList = document.getElementById("folk-lesson-list");

  const lessonView = document.getElementById("folk-lesson-view");
  const backToLessonsBtn = document.getElementById("folk-back-to-lessons");
  const lessonBadge = document.getElementById("folk-lesson-badge");
  const lessonTitle = document.getElementById("folk-lesson-title");
  const lessonStyle = document.getElementById("folk-lesson-style");
  const videoFrame = document.getElementById("folk-video-frame");
  const lessonDescription = document.getElementById("folk-lesson-description");
  const lessonFocus = document.getElementById("folk-lesson-focus");
  const markCompleteBtn = document.getElementById("folk-mark-complete");

  const practiceLine = document.getElementById("folk-practice-line");
  const recordBtn = document.getElementById("folk-record-btn");
  const recordBtnLabel = document.getElementById("folk-record-btn-label");
  const recordTimer = document.getElementById("folk-record-timer");
  const recordPanel = document.getElementById("folk-record-panel");
  const recordCanvas = document.getElementById("folk-record-canvas");
  const recordStatus = document.getElementById("folk-record-status");
  const playbackWrap = document.getElementById("folk-playback-wrap");
  const playbackAudio = document.getElementById("folk-playback-audio");
  const feedbackCard = document.getElementById("folk-feedback-card");

  if (!modal) return; // markup not present, nothing to wire up

  // ---- navigation state ----
  let currentRegionId = null;
  let currentLevel = "beginner";
  let currentLessonId = null;

  // ---- recording/analysis state ----
  let mediaStream = null;
  let audioCtx = null;
  let analyser = null;
  let mediaRecorder = null;
  let recordedChunks = [];
  let isRecording = false;
  let recordTimerInterval = null;
  let recordSeconds = 0;
  let pitchSamples = [];
  let rmsSamples = [];
  let rafId = null;

  // ============ PROGRESS (localStorage) ============

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
    } catch (e) {
      /* storage unavailable, progress just won't persist */
    }
  }
  function isComplete(lessonId) {
    return !!loadProgress()[lessonId];
  }
  function setComplete(lessonId, val) {
    const p = loadProgress();
    if (val) p[lessonId] = true;
    else delete p[lessonId];
    saveProgress(p);
  }
  function countComplete(lessonIds) {
    const p = loadProgress();
    return lessonIds.reduce((n, id) => n + (p[id] ? 1 : 0), 0);
  }
  function allLessonIdsForRegion(regionId) {
    const byLevel = FOLK_LEARN_DATA.lessons[regionId];
    return FOLK_LEARN_DATA.levels.flatMap((lvl) => byLevel[lvl].map((l) => l.id));
  }

  // ============ MODAL OPEN/CLOSE ============

  function openFolkLearn() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    currentRegionId = null;
    currentLevel = "beginner";
    currentLessonId = null;
    showView("region");
    renderRegions();
    document.addEventListener("keydown", onEscape);
  }

  function closeFolkLearn() {
    stopRecording(true);
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onEscape);
  }

  function onEscape(e) {
    if (e.key === "Escape") closeFolkLearn();
  }

  closeBtn && closeBtn.addEventListener("click", closeFolkLearn);
  backdrop && backdrop.addEventListener("click", closeFolkLearn);

  function showView(name) {
    regionView.hidden = name !== "region";
    levelView.hidden = name !== "level";
    lessonView.hidden = name !== "lesson";
  }

  // ============ REGION VIEW ============

  function renderRegions() {
    regionGrid.innerHTML = "";
    FOLK_LEARN_DATA.regions.forEach((region) => {
      const ids = allLessonIdsForRegion(region.id);
      const done = countComplete(ids);

      const card = document.createElement("button");
      card.type = "button";
      card.className = "folk-region-card";

      const icon = document.createElement("span");
      icon.className = "song-card-icon folk-region-icon";
      icon.textContent = region.badge;

      const info = document.createElement("span");
      info.className = "folk-region-info";

      const title = document.createElement("span");
      title.className = "song-card-title";
      title.textContent = region.name;

      const tagline = document.createElement("span");
      tagline.className = "song-card-meta";
      tagline.textContent = region.tagline;

      const progress = document.createElement("span");
      progress.className = "folk-region-progress";
      progress.textContent = done + " / " + ids.length + " lessons complete";

      info.appendChild(title);
      info.appendChild(tagline);
      info.appendChild(progress);
      card.appendChild(icon);
      card.appendChild(info);

      card.addEventListener("click", () => selectRegion(region.id));
      regionGrid.appendChild(card);
    });
  }

  function selectRegion(regionId) {
    currentRegionId = regionId;
    currentLevel = "beginner";
    showView("level");
    renderLevelView();
  }

  backToRegionsBtn && backToRegionsBtn.addEventListener("click", () => {
    showView("region");
    renderRegions();
  });

  // ============ LEVEL + LESSON LIST VIEW ============

  function renderLevelView() {
    const region = FOLK_LEARN_DATA.regions.find((r) => r.id === currentRegionId);
    levelBadge.textContent = region.badge + " TRADITION";
    levelRegionName.textContent = region.name;
    levelRegionTagline.textContent = region.tagline;
    renderLevelTabs();
    renderLessonList();
  }

  function renderLevelTabs() {
    levelTabs.innerHTML = "";
    FOLK_LEARN_DATA.levels.forEach((lvl) => {
      const lessons = FOLK_LEARN_DATA.lessons[currentRegionId][lvl];
      const ids = lessons.map((l) => l.id);
      const done = countComplete(ids);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "song-tab-btn folk-level-tab" + (lvl === currentLevel ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", lvl === currentLevel ? "true" : "false");
      btn.textContent = FOLK_LEARN_DATA.levelMeta[lvl].label + " (" + done + "/" + ids.length + ")";
      btn.addEventListener("click", () => {
        currentLevel = lvl;
        renderLevelTabs();
        renderLessonList();
      });
      levelTabs.appendChild(btn);
    });
  }

  function renderLessonList() {
    levelBlurb.textContent = FOLK_LEARN_DATA.levelMeta[currentLevel].blurb;
    lessonList.innerHTML = "";
    const lessons = FOLK_LEARN_DATA.lessons[currentRegionId][currentLevel];

    lessons.forEach((lesson, idx) => {
      const done = isComplete(lesson.id);

      const card = document.createElement("button");
      card.type = "button";
      card.className = "song-card folk-lesson-card";

      const icon = document.createElement("span");
      icon.className = "song-card-icon";
      icon.textContent = done ? "\u2713" : String(idx + 1).padStart(2, "0");
      if (done) icon.classList.add("folk-icon-done");

      const info = document.createElement("span");
      info.className = "song-card-info";

      const top = document.createElement("span");
      top.className = "song-card-top";
      const title = document.createElement("span");
      title.className = "song-card-title";
      title.textContent = lesson.title;
      const badge = document.createElement("span");
      badge.className = "song-card-badge heritage";
      badge.textContent = lesson.duration;
      top.appendChild(title);
      top.appendChild(badge);

      const meta = document.createElement("span");
      meta.className = "song-card-meta";
      meta.style.display = "block";
      meta.textContent = lesson.style + (done ? " \u00b7 Completed" : "");

      info.appendChild(top);
      info.appendChild(meta);
      card.appendChild(icon);
      card.appendChild(info);

      card.addEventListener("click", () => openLesson(lesson.id));
      lessonList.appendChild(card);
    });
  }

  backToLessonsBtn && backToLessonsBtn.addEventListener("click", () => {
    stopRecording(true);
    showView("level");
    renderLevelTabs();
    renderLessonList();
  });

  // ============ LESSON DETAIL VIEW ============

  function openLesson(lessonId) {
    stopRecording(true);
    currentLessonId = lessonId;
    const lesson = FOLK_LESSON_INDEX[lessonId];

    lessonBadge.textContent = lesson.style;
    lessonTitle.textContent = lesson.title;
    lessonStyle.textContent = FOLK_LEARN_DATA.levelMeta[lesson.level].label + " \u00b7 " + lesson.duration;
    lessonDescription.textContent = lesson.description;

    lessonFocus.innerHTML = "";
    lesson.focusPoints.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      lessonFocus.appendChild(li);
    });

    renderVideoFrame(lesson.video);
    updateMarkCompleteButton();

    practiceLine.textContent = lesson.practiceLine;
    resetTestYourselfPanel();

    showView("lesson");
  }

  function renderVideoFrame(video) {
    videoFrame.innerHTML = "";
    if (video && video.type === "youtube" && video.id) {
      const iframe = document.createElement("iframe");
      iframe.className = "folk-video-embed";
      iframe.src = "https://www.youtube.com/embed/" + video.id;
      iframe.title = "Lesson video";
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "");
      iframe.frameBorder = "0";
      videoFrame.appendChild(iframe);
    } else if (video && video.type === "file" && video.src) {
      const videoEl = document.createElement("video");
      videoEl.className = "folk-video-embed";
      videoEl.src = video.src;
      videoEl.controls = true;
      videoFrame.appendChild(videoEl);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "folk-video-placeholder";
      placeholder.innerHTML =
        '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="15" height="14" rx="2"></rect><path d="M17 9l5-3v12l-5-3"></path></svg>' +
        '<p>Lesson video coming soon</p>' +
        '<span>Add a YouTube ID or file path for this lesson in <code>folkLearnData.js</code></span>';
      videoFrame.appendChild(placeholder);
    }
  }

  function updateMarkCompleteButton() {
    const done = isComplete(currentLessonId);
    markCompleteBtn.classList.toggle("done", done);
    markCompleteBtn.classList.toggle("completed", done);
    markCompleteBtn.innerHTML = done
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Lesson Completed</span>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>Mark Lesson Complete</span>';
  }

  markCompleteBtn && markCompleteBtn.addEventListener("click", () => {
    setComplete(currentLessonId, !isComplete(currentLessonId));
    updateMarkCompleteButton();
  });

  // ============ TEST YOURSELF: RECORDING + LOCAL ANALYSIS ============

  function resetTestYourselfPanel() {
    recordPanel.hidden = true;
    playbackWrap.hidden = true;
    feedbackCard.hidden = true;
    feedbackCard.innerHTML = "";
    recordStatus.textContent = "";
    recordTimer.textContent = "00:00";
    recordBtnLabel.textContent = "Record";
    recordBtn.classList.remove("listening");
    if (playbackAudio.src) {
      URL.revokeObjectURL(playbackAudio.src);
      playbackAudio.removeAttribute("src");
    }
  }

  recordBtn && recordBtn.addEventListener("click", () => {
    if (isRecording) stopRecording(false);
    else startRecording();
  });

  function startRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      recordStatus.textContent = "Your browser doesn't support microphone recording.";
      return;
    }
    playbackWrap.hidden = true;
    feedbackCard.hidden = true;
    recordStatus.textContent = "Requesting microphone access\u2026";

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaStream = stream;
        recordedChunks = [];
        pitchSamples = [];
        rmsSamples = [];
        recordSeconds = 0;

        try {
          mediaRecorder = new MediaRecorder(stream);
        } catch (e) {
          recordStatus.textContent = "Recording isn't supported in this browser.";
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) recordedChunks.push(e.data);
        };
        mediaRecorder.onstop = finalizeRecording;
        mediaRecorder.start();

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
        const source = audioCtx.createMediaStreamSource(stream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);

        isRecording = true;
        recordPanel.hidden = false;
        recordBtn.classList.add("listening");
        recordBtnLabel.textContent = "Stop";
        recordStatus.textContent = "Listening\u2026 sing or hum the practice line above.";

        recordTimerInterval = setInterval(() => {
          recordSeconds += 1;
          recordTimer.textContent = formatTime(recordSeconds);
          if (recordSeconds >= MAX_RECORD_SECONDS) stopRecording(false);
        }, 1000);

        analyzeLoop();
      })
      .catch(() => {
        recordStatus.textContent = "Microphone access was blocked \u2014 allow mic access in your browser to use Test Yourself.";
      });
  }

  function analyzeLoop() {
    if (!isRecording || !analyser) return;
    const buf = new Float32Array(analyser.fftSize);
    analyser.getFloatTimeDomainData(buf);

    drawWaveform(buf);

    const rms = computeRms(buf);
    rmsSamples.push(rms);
    if (rms > 0.02) {
      const freq = autoCorrelate(buf, audioCtx.sampleRate);
      if (freq > 60 && freq < 1200) {
        pitchSamples.push(12 * Math.log2(freq / 440));
      }
    }

    rafId = requestAnimationFrame(analyzeLoop);
  }

  function stopRecording(discard) {
    if (!isRecording && !mediaStream) return;
    isRecording = false;
    recordBtn.classList.remove("listening");
    recordBtnLabel.textContent = "Record";

    if (recordTimerInterval) {
      clearInterval(recordTimerInterval);
      recordTimerInterval = null;
    }
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      if (discard) mediaRecorder.onstop = null; // skip analysis, we're navigating away
      mediaRecorder.stop();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach((t) => t.stop());
      mediaStream = null;
    }
    if (!discard) {
      recordStatus.textContent = "Analyzing your take\u2026";
    } else if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  }

  function finalizeRecording() {
    const blob = new Blob(recordedChunks, { type: "audio/webm" });
    if (blob.size > 0) {
      playbackAudio.src = URL.createObjectURL(blob);
      playbackWrap.hidden = false;
    }
    const result = computeFeedback(pitchSamples, rmsSamples);
    renderFeedback(result);
    recordStatus.textContent = "Take recorded \u2014 see your practice feedback below.";
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  }

  function computeFeedback(pitches, rms) {
    const totalFrames = rms.length || 1;
    const voicedFrames = rms.filter((v) => v > 0.02).length;
    const sustainRatio = voicedFrames / totalFrames;
    const hasEnoughSignal = pitches.length >= 4 && rms.length >= 10;

    let stability = 0;
    if (pitches.length >= 4) {
      const mean = pitches.reduce((a, b) => a + b, 0) / pitches.length;
      const variance = pitches.reduce((a, b) => a + (b - mean) * (b - mean), 0) / pitches.length;
      const stdDev = Math.sqrt(variance);
      stability = clamp(Math.round(100 - stdDev * 18), 0, 100);
    }
    const sustain = clamp(Math.round(sustainRatio * 130), 0, 100);
    const overall = hasEnoughSignal ? Math.round(stability * 0.6 + sustain * 0.4) : 0;

    let message;
    if (!hasEnoughSignal) {
      message = "We couldn't pick up enough of your voice \u2014 get a little closer to the mic and try singing a bit longer.";
    } else if (overall >= 80) {
      message = "Lovely control \u2014 your pitch holds steady and your breath carries through the phrase well.";
    } else if (overall >= 60) {
      message = "Good foundation, with some wavering. Try sustaining each note a touch longer before moving to the next.";
    } else {
      message = "Pitch is moving around quite a bit right now. Slow the phrase down and focus on holding just one steady note first.";
    }

    return { stability, sustain, overall, message, hasEnoughSignal };
  }

  function renderFeedback(result) {
    feedbackCard.hidden = false;
    feedbackCard.innerHTML = "";

    const ring = document.createElement("div");
    ring.className = "folk-score-ring";
    ring.style.setProperty("--score", result.overall);
    const ringNum = document.createElement("span");
    ringNum.textContent = result.hasEnoughSignal ? result.overall : "\u2013";
    ring.appendChild(ringNum);

    const body = document.createElement("div");
    body.className = "folk-feedback-body";

    const heading = document.createElement("p");
    heading.className = "folk-feedback-message";
    heading.textContent = result.message;
    body.appendChild(heading);

    if (result.hasEnoughSignal) {
      body.appendChild(buildMetricBar("Pitch steadiness", result.stability));
      body.appendChild(buildMetricBar("Voice sustain", result.sustain));
    }

    const disclaimer = document.createElement("p");
    disclaimer.className = "folk-feedback-disclaimer";
    disclaimer.textContent = "On-device practice score, not a professional evaluation \u2014 use it as a rough guide alongside a teacher's ear.";
    body.appendChild(disclaimer);

    feedbackCard.appendChild(ring);
    feedbackCard.appendChild(body);
  }

  function buildMetricBar(label, value) {
    const wrap = document.createElement("div");
    wrap.className = "folk-metric";
    const top = document.createElement("div");
    top.className = "folk-metric-top";
    const name = document.createElement("span");
    name.textContent = label;
    const val = document.createElement("span");
    val.textContent = value + "%";
    top.appendChild(name);
    top.appendChild(val);
    const track = document.createElement("div");
    track.className = "folk-metric-track";
    const fill = document.createElement("div");
    fill.className = "folk-metric-fill";
    fill.style.width = value + "%";
    track.appendChild(fill);
    wrap.appendChild(top);
    wrap.appendChild(track);
    return wrap;
  }

  // ---- small audio helpers ----

  function computeRms(buf) {
    let sum = 0;
    for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
    return Math.sqrt(sum / buf.length);
  }

  // Autocorrelation-based pitch detector: finds the lag with the strongest
  // self-similarity in the (silence-trimmed) buffer, refines it with a
  // parabolic interpolation, and converts lag -> frequency.
  function autoCorrelate(buffer, sampleRate) {
    const SIZE = buffer.length;
    const rms = computeRms(buffer);
    if (rms < 0.01) return -1;

    let r1 = 0;
    let r2 = SIZE - 1;
    const thresh = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buffer[i]) < thresh) {
        r1 = i;
        break;
      }
    }
    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buffer[SIZE - i]) < thresh) {
        r2 = SIZE - i;
        break;
      }
    }
    const trimmed = buffer.slice(r1, r2);
    const newSize = trimmed.length;
    if (newSize < 8) return -1;

    const c = new Array(newSize).fill(0);
    for (let lag = 0; lag < newSize; lag++) {
      for (let j = 0; j < newSize - lag; j++) {
        c[lag] += trimmed[j] * trimmed[j + lag];
      }
    }

    let d = 0;
    while (d < newSize - 1 && c[d] > c[d + 1]) d++;

    let maxVal = -1;
    let maxPos = -1;
    for (let i = d; i < newSize; i++) {
      if (c[i] > maxVal) {
        maxVal = c[i];
        maxPos = i;
      }
    }
    if (maxPos <= 0) return -1;

    let T0 = maxPos;
    const x1 = c[T0 - 1] || 0;
    const x2 = c[T0];
    const x3 = c[T0 + 1] || 0;
    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;
    if (a) T0 = T0 - b / (2 * a);

    return sampleRate / T0;
  }

  function drawWaveform(buf) {
    const ctx = recordCanvas.getContext("2d");
    const w = recordCanvas.width;
    const h = recordCanvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.strokeStyle = "#D4A340";
    ctx.lineWidth = 2;
    const step = Math.max(1, Math.floor(buf.length / w));
    for (let x = 0; x < w; x++) {
      const sample = buf[x * step] || 0;
      const y = h / 2 + sample * (h / 2 - 2);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  // expose for script.js's theme-card handler
  window.openFolkLearn = openFolkLearn;
})();