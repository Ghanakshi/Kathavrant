// ============================================================
// lokvaani.js — "Lok Vaani" (Feature 2) Oral Heritage Search Engine
//
// Allows searching and filtering across Dohas (दौहे), Folktales (लोक कथाएँ),
// Khyal Folk Theatre (ख्याल), Poetry & Shayari (कविता/शायरी), and Heritage Books.
// Features State-Aware Cascading Festival Filter for Rajasthan, West Bengal, Punjab, etc.
// ============================================================

(function () {
  let activeSearch = "";
  let activeState = "all";
  let activeForm = "all";
  let activeFestival = "all";
  let activeAuthor = "all";

  // State-specific authentic festivals map
  const STATE_FESTIVALS_MAP = {
    "Rajasthan": [
      { value: "Gangaur", label: "Gangaur (गंगौर - चैत्र मासी पूजन)" },
      { value: "Teej", label: "Teej (तीज - हरियाली व कजरी)" },
      { value: "Pushkar Fair", label: "Pushkar Fair (पुष्कर कार्तिक मेला)" },
      { value: "Ramdevra Mela", label: "Ramdevra Mela (रामदेवरा मेला)" },
      { value: "Desert Festival", label: "Desert Festival (मरु महोत्सव जैसलमेर)" },
      { value: "Holi", label: "Holi & Dhulandi (होली एवं ढुलंडी)" },
      { value: "Janmashtami", label: "Janmashtami & Radhashtami (जन्माष्टमी)" }
    ],
    "West Bengal": [
      { value: "Durga Puja", label: "Durga Puja (দুর্গাপূজা / दुर्गा पूजा)" },
      { value: "Poila Boishakh", label: "Poila Boishakh (পহেলা বৈশাখ / नबोबर्षो)" },
      { value: "Poush Mela", label: "Poush Mela & Rash Mela (পৌষ মেলা)" },
      { value: "Dol Jatra", label: "Dol Jatra / Holi (দোল যাত্রা)" },
      { value: "Kali Puja", label: "Kali Puja & Diwali (কালীপূজা)" },
      { value: "Baul Mela", label: "Baul Sangeet Mela (বাউল মেলা)" }
    ],
    "Punjab": [
      { value: "Lohri", label: "Lohri (लोहड़ी - मकर संक्रांति पूर्व)" },
      { value: "Baisakhi", label: "Baisakhi (बैसाखी - फसल उत्सव)" },
      { value: "Teeyan", label: "Teeyan (तीयां - पंजाबी मानसून पर्व)" },
      { value: "Hola Mohalla", label: "Hola Mohalla (होला मोहल्ला)" },
      { value: "Gurpurab", label: "Gurpurab (गुरुपरब)" }
    ],
    "Uttar Pradesh": [
      { value: "Lathmar Holi", label: "Lathmar Holi (लट्ठमार होली बरसाना)" },
      { value: "Ram Navami", label: "Ram Navami & Deepotsav (राम नवमी)" },
      { value: "Kumbh Mela", label: "Kumbh Mela (कुंभ मेला प्रयागराज)" },
      { value: "Dev Deepawali", label: "Dev Deepawali (देव दीपावली काशी)" }
    ],
    "Bihar": [
      { value: "Chhath Puja", label: "Chhath Puja (छठ पूजा - सूर्य देव उपासना)" },
      { value: "Sonepur Mela", label: "Sonepur Mela (सोनपुर मेला)" },
      { value: "Sama Chakeva", label: "Sama Chakeva (सामा चकेवा)" }
    ],
    "Assam": [
      { value: "Bohag Bihu", label: "Bohag Bihu / Rongali Bihu (बोहाग बिहू)" },
      { value: "Kati Bihu", label: "Kati Bihu (काटी बिहू)" },
      { value: "Ambubachi Mela", label: "Ambubachi Mela (अंबूवाची मेला कामख्या)" }
    ],
    "Maharashtra": [
      { value: "Ganesh Chaturthi", label: "Ganesh Chaturthi (गणेश चतुर्थी)" },
      { value: "Gudi Padwa", label: "Gudi Padwa (गुड़ी पड़वा)" },
      { value: "Ashadhi Ekadashi", label: "Ashadhi Ekadashi Wari (आषाढ़ी एकादशी)" }
    ],
    "Gujarat": [
      { value: "Navratri", label: "Navratri Garba (नवरात्रि गरबा)" },
      { value: "Uttarayan", label: "Uttarayan (उत्तरायण पतंग महोत्सव)" },
      { value: "Tarnetar Mela", label: "Tarnetar Mela (तरणेतर मेला)" }
    ]
  };

  function getElements() {
    return {
      modal: document.getElementById("lok-vaani-modal"),
      backdrop: document.getElementById("lok-vaani-backdrop"),
      closeBtn: document.getElementById("lok-vaani-close"),
      listView: document.getElementById("lokv-list-view"),
      detailView: document.getElementById("lokv-detail-view"),
      searchInput: document.getElementById("lokv-search-input"),
      filterState: document.getElementById("lokv-filter-state"),
      filterForm: document.getElementById("lokv-filter-form"),
      filterFestival: document.getElementById("lokv-filter-festival"),
      filterAuthor: document.getElementById("lokv-filter-author"),
      resetBtn: document.getElementById("lokv-filter-reset"),
      resultsGrid: document.getElementById("lokv-results"),

      // Detail elements
      backBtn: document.getElementById("lokv-back-btn"),
      detailBadge: document.getElementById("lokv-detail-badge"),
      detailTitle: document.getElementById("lokv-detail-title"),
      detailAuthor: document.getElementById("lokv-detail-author"),
      detailDescription: document.getElementById("lokv-detail-description"),
      detailRegion: document.getElementById("lokv-detail-region"),
      detailFormVal: document.getElementById("lokv-detail-form-val"),
      detailFestivalVal: document.getElementById("lokv-detail-festival-val"),
      detailAuthorVal: document.getElementById("lokv-detail-author-val")
    };
  }

  function updateFestivalDropdown(selectedState) {
    const els = getElements();
    if (!els.filterFestival) return;

    els.filterFestival.innerHTML = "";

    const defaultOpt = document.createElement("option");
    defaultOpt.value = "all";
    defaultOpt.textContent = "All Festivals";
    els.filterFestival.appendChild(defaultOpt);

    let list = [];
    if (selectedState && selectedState !== "all" && STATE_FESTIVALS_MAP[selectedState]) {
      list = STATE_FESTIVALS_MAP[selectedState];
    } else {
      // Aggregate all state festivals
      Object.keys(STATE_FESTIVALS_MAP).forEach((st) => {
        STATE_FESTIVALS_MAP[st].forEach((fest) => {
          if (!list.some((item) => item.value === fest.value)) {
            list.push(fest);
          }
        });
      });
    }

    list.forEach((fest) => {
      const opt = document.createElement("option");
      opt.value = fest.value;
      opt.textContent = fest.label;
      els.filterFestival.appendChild(opt);
    });

    els.filterFestival.value = activeFestival;
    if (els.filterFestival.value !== activeFestival) {
      activeFestival = "all";
      els.filterFestival.value = "all";
    }
  }

  function openLokVaani() {
    const els = getElements();
    if (!els.modal) return;

    els.modal.classList.add("open");
    els.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (els.listView) els.listView.hidden = false;
    if (els.detailView) els.detailView.hidden = true;

    initListeners();
    updateFestivalDropdown(activeState);
    renderResults();
  }

  function closeLokVaani() {
    const els = getElements();
    if (els.modal) {
      els.modal.classList.remove("open");
      els.modal.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onEscape);
  }

  function onEscape(e) {
    if (e.key === "Escape") closeLokVaani();
  }

  let initialized = false;
  function initListeners() {
    if (initialized) return;
    initialized = true;

    const els = getElements();
    els.closeBtn && els.closeBtn.addEventListener("click", closeLokVaani);
    els.backdrop && els.backdrop.addEventListener("click", closeLokVaani);
    document.addEventListener("keydown", onEscape);

    els.backBtn && els.backBtn.addEventListener("click", () => {
      if (els.detailView) els.detailView.hidden = true;
      if (els.listView) els.listView.hidden = false;
    });

    els.searchInput &&
      els.searchInput.addEventListener("input", () => {
        activeSearch = els.searchInput.value.toLowerCase().trim();
        renderResults();
      });

    els.filterState &&
      els.filterState.addEventListener("change", () => {
        activeState = els.filterState.value;
        activeFestival = "all"; // Reset festival when state changes
        updateFestivalDropdown(activeState);
        renderResults();
      });

    els.filterForm &&
      els.filterForm.addEventListener("change", () => {
        activeForm = els.filterForm.value;
        renderResults();
      });

    els.filterFestival &&
      els.filterFestival.addEventListener("change", () => {
        activeFestival = els.filterFestival.value;
        renderResults();
      });

    els.filterAuthor &&
      els.filterAuthor.addEventListener("change", () => {
        activeAuthor = els.filterAuthor.value;
        renderResults();
      });

    els.resetBtn &&
      els.resetBtn.addEventListener("click", () => {
        activeSearch = "";
        activeState = "all";
        activeForm = "all";
        activeFestival = "all";
        activeAuthor = "all";

        if (els.searchInput) els.searchInput.value = "";
        if (els.filterState) els.filterState.value = "all";
        if (els.filterForm) els.filterForm.value = "all";
        if (els.filterAuthor) els.filterAuthor.value = "all";

        updateFestivalDropdown("all");
        renderResults();
      });
  }

  function renderResults() {
    const els = getElements();
    if (!els.resultsGrid) return;
    els.resultsGrid.innerHTML = "";

    const data = typeof LOKVAANI_STORAGE !== "undefined" ? LOKVAANI_STORAGE.getEntries() : [];

    let filtered = data.filter((item) => {
      if (activeState !== "all" && item.state.toLowerCase() !== activeState.toLowerCase()) return false;
      if (activeForm !== "all" && item.form.toLowerCase() !== activeForm.toLowerCase()) return false;
      if (activeFestival !== "all" && item.festival.toLowerCase() !== activeFestival.toLowerCase()) return false;
      if (activeAuthor !== "all" && !item.author.toLowerCase().includes(activeAuthor.toLowerCase())) return false;

      if (activeSearch) {
        const text = [
          item.title,
          item.author,
          item.form,
          item.state,
          item.region,
          item.festival,
          item.description,
          item.fullStory,
          ...(item.keywords || [])
        ].join(" ").toLowerCase();

        if (!text.includes(activeSearch)) return false;
      }

      return true;
    });

    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "contrib-empty-feed";
      empty.innerHTML = "<p>No oral heritage entries match your current state and festival selection. Try resetting filters!</p>";
      els.resultsGrid.appendChild(empty);
      return;
    }

    filtered.forEach((item) => {
      const card = createHeritageCard(item);
      els.resultsGrid.appendChild(card);
    });
  }

  function createHeritageCard(item) {
    const card = document.createElement("article");
    card.className = "lok-card";

    card.innerHTML = `
      <div class="lok-card-header">
        <span class="lok-state-tag">${escapeHtml(item.formLabel || item.form)}</span>
        <span class="lok-dialect-badge">${escapeHtml(item.state)} \u00b7 ${escapeHtml(item.region || item.state)}</span>
      </div>

      <div class="lok-card-body">
        <h3 class="lok-phrase-native" style="font-size: 1.35rem;">${escapeHtml(item.title)}</h3>
        <p class="lok-phrase-phonetic" style="font-style: normal; color: var(--turmeric); font-weight:600; margin-bottom:0.4rem;">
          Author / Poet: ${escapeHtml(item.author)} \u00b7 Festival: ${escapeHtml(item.festival)}
        </p>

        <div class="lok-translation-box" style="max-height: 280px; overflow-y: auto;">
          <div class="lok-trans-text" style="color: #F4EDE1; margin:0; line-height:1.6; white-space: pre-wrap; font-size: 0.95rem;">${escapeHtml(item.fullStory || item.description)}</div>
        </div>
      </div>

      <div class="lok-card-footer" style="margin-top: 0.8rem;">
        <button type="button" class="folk-complete-btn lokv-read-btn" style="width:100%; margin:0; padding:0.6rem 1rem;">
          <span>Read Full Story &amp; Details</span>
        </button>
      </div>
    `;

    card.addEventListener("click", () => openDetail(item));

    return card;
  }

  function openDetail(item) {
    const els = getElements();
    if (!els.detailView || !els.listView) return;

    els.listView.hidden = true;
    els.detailView.hidden = false;

    if (els.detailBadge) els.detailBadge.textContent = item.formLabel || item.form;
    if (els.detailTitle) els.detailTitle.textContent = item.title;
    if (els.detailAuthor) els.detailAuthor.textContent = "Author / Origin: " + item.author;

    if (els.detailDescription) {
      els.detailDescription.style.whiteSpace = "pre-wrap";
      els.detailDescription.style.lineHeight = "1.75";
      els.detailDescription.style.fontSize = "1.05rem";
      els.detailDescription.textContent = item.fullStory || item.description;
    }

    if (els.detailRegion) els.detailRegion.textContent = item.state + " (" + (item.region || item.state) + ")";
    if (els.detailFormVal) els.detailFormVal.textContent = item.form;
    if (els.detailFestivalVal) els.detailFestivalVal.textContent = item.festival;
    if (els.detailAuthorVal) els.detailAuthorVal.textContent = item.author;
  }

  function escapeHtml(str) {
    return (str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  window.openLokVaani = openLokVaani;
})();
