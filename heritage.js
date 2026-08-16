// ============ EXPLORE INDIAN HERITAGE (Feature Five) ============
// Relies on HERITAGE_DATA from heritagedata.js. Six tabs — music, authors,
// folktales, nataks, dances, instruments — each rendered as an image-first
// browsing grid, with a shared detail view underneath.

(function () {
  const TAB_CONFIG = {
    music: {
      label: "Music",
      intro: "Songs rooted in India's classical, devotional and folk traditions \u2014 open one to see its lyrics once you've added them, plus region, language, genre and instruments.",
      badge: "Song",
      titleKey: "title",
      subKey: "region"
    },
    authors: {
      label: "Authors",
      intro: "The poets, saints and composers behind India's most enduring songs and verses.",
      badge: "Author",
      titleKey: "name",
      subKey: "era"
    },
    folktales: {
      label: "Folktales",
      intro: "Story collections passed down through generations, from ancient Sanskrit fables to regional legends.",
      badge: "Folktale",
      titleKey: "title",
      subKey: "region"
    },
    nataks: {
      label: "Nataks",
      intro: "India's traditional folk and temple theatre forms, each rooted in a distinct region and performance style.",
      badge: "Natak",
      titleKey: "title",
      subKey: "region"
    },
    dances: {
      label: "Dances",
      intro: "The eight classical dance forms recognised across India, alongside a few of its best-known folk dances.",
      badge: "Dance",
      titleKey: "title",
      subKey: "region"
    },
    instruments: {
      label: "Instruments",
      intro: "Traditional string, wind and percussion instruments that carry Indian classical and folk music.",
      badge: "Instrument",
      titleKey: "name",
      subKey: "region"
    }
  };

  let activeTab = "music";

  function getElements() {
    return {
      modal: document.getElementById("heritage-explore-modal"),
      backdrop: document.getElementById("heritage-explore-backdrop"),
      closeBtn: document.getElementById("heritage-explore-close"),
      browseView: document.getElementById("heritage-browse-view"),
      detailView: document.getElementById("heritage-detail-view"),
      tabsRow: document.querySelector(".heritage-tabs"),
      tabIntro: document.getElementById("heritage-tab-intro"),
      grid: document.getElementById("heritage-grid"),
      backBtn: document.getElementById("heritage-back-btn"),
      detailImageWrap: document.getElementById("heritage-detail-image-wrap"),
      detailImage: document.getElementById("heritage-detail-image"),
      detailPlaceholder: document.getElementById("heritage-detail-placeholder"),
      detailBadge: document.getElementById("heritage-detail-badge"),
      detailTitle: document.getElementById("heritage-detail-title"),
      detailSubtitle: document.getElementById("heritage-detail-subtitle"),
      detailSectionHeading: document.getElementById("heritage-detail-section-heading"),
      detailDescription: document.getElementById("heritage-detail-description"),
      detailLyricsWrap: document.getElementById("heritage-detail-lyrics-wrap"),
      detailLyrics: document.getElementById("heritage-detail-lyrics"),
      lyricsNote: document.getElementById("heritage-lyrics-note"),
      detailGrid: document.getElementById("heritage-detail-grid"),
      detailTagsWrap: document.getElementById("heritage-detail-tags-wrap"),
      detailTagsHeading: document.getElementById("heritage-tags-heading"),
      detailTags: document.getElementById("heritage-detail-tags")
    };
  }

  // ---------- rendering: browse grid ----------

  function renderTab(tabKey) {
    activeTab = tabKey;
    const config = TAB_CONFIG[tabKey];
    const data = typeof HERITAGE_DATA !== "undefined" ? HERITAGE_DATA : {};
    const items = data[tabKey] || [];
    const els = getElements();

    if (els.tabIntro) els.tabIntro.textContent = config.intro;
    if (!els.grid) return;
    els.grid.innerHTML = "";

    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "heritage-card";

      const title = item[config.titleKey] || "Untitled";
      const sub = item[config.subKey] || "";

      card.innerHTML = `
        <div class="heritage-card-media">
          <div class="heritage-card-placeholder">${title.substring(0,2).toUpperCase()}</div>
          <span class="heritage-card-badge">${config.badge}</span>
        </div>
        <div class="heritage-card-body">
          <h4 class="heritage-card-title">${escapeHtml(title)}</h4>
          ${sub ? `<p class="heritage-card-sub">${escapeHtml(sub)}</p>` : ""}
        </div>
      `;

      card.addEventListener("click", () => openDetail(item, config));
      els.grid.appendChild(card);
    });
  }

  function openDetail(item, config) {
    const els = getElements();
    if (!els.detailView || !els.browseView) return;

    els.browseView.hidden = true;
    els.detailView.hidden = false;

    const title = item[config.titleKey] || "Untitled";
    const sub = item[config.subKey] || "";

    if (els.detailBadge) els.detailBadge.textContent = config.badge;
    if (els.detailTitle) els.detailTitle.textContent = title;
    if (els.detailSubtitle) els.detailSubtitle.textContent = sub;
    if (els.detailDescription) els.detailDescription.textContent = item.description || item.bio || item.story || "No description available.";

    if (els.detailImage) {
      if (item.image) {
        els.detailImage.src = item.image;
        els.detailImage.hidden = false;
      } else {
        els.detailImage.hidden = true;
      }
    }
  }

  // ---------- modal open/close ----------

  function openHeritageExplorer() {
    const els = getElements();
    if (!els.modal) {
      console.warn("heritage-explore-modal not found in DOM");
      return;
    }

    els.modal.classList.add("open");
    els.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (els.browseView) els.browseView.hidden = false;
    if (els.detailView) els.detailView.hidden = true;

    initListeners();
    renderTab("music");
  }

  function closeHeritageExplorer() {
    const els = getElements();
    if (els.modal) {
      els.modal.classList.remove("open");
      els.modal.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onEscape);
  }

  function onEscape(e) {
    if (e.key === "Escape") closeHeritageExplorer();
  }

  let initialized = false;
  function initListeners() {
    if (initialized) return;
    initialized = true;

    const els = getElements();
    els.closeBtn && els.closeBtn.addEventListener("click", closeHeritageExplorer);
    els.backdrop && els.backdrop.addEventListener("click", closeHeritageExplorer);
    els.backBtn && els.backBtn.addEventListener("click", () => {
      if (els.detailView) els.detailView.hidden = true;
      if (els.browseView) els.browseView.hidden = false;
    });

    if (els.tabsRow) {
      els.tabsRow.querySelectorAll(".song-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const tabKey = btn.dataset.tab;
          if (tabKey) {
            els.tabsRow.querySelectorAll(".song-tab-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderTab(tabKey);
          }
        });
      });
    }
  }

  function escapeHtml(str) {
    return (str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  window.openHeritageExplorer = openHeritageExplorer;
})();