// MAP_STATES comes from mapData.js (state boundaries), DISTRICT_MAPS comes
// from stateDistrictData.js (per state district boundaries). Both are loaded
// before this file.
//
// District data is sourced from 2011 census level open data. A few states
// have since been reorganised, so exact district counts may be a little out
// of date, worth refreshing before this becomes the production data source.

const PILOT_STATE_IDS = new Set(["rajasthan", "kerala"]);

const svg = document.getElementById("india-map");
const stateLabel = document.getElementById("state-label");
const indiaMapWrapper = document.getElementById("india-map-wrapper");

const districtMapWrapper = document.getElementById("district-map-wrapper");
const districtSvg = document.getElementById("district-svg");
const districtLabel = document.getElementById("district-label");
const districtMapTitle = document.getElementById("district-map-title");
const backToIndiaBtn = document.getElementById("back-to-india");

const statePanel = document.getElementById("state-panel");
const panelStateName = document.getElementById("panel-state-name");
const panelDistrictCount = document.getElementById("panel-district-count");
const districtSearch = document.getElementById("district-search");
const districtList = document.getElementById("district-list");
const closePanelBtn = document.getElementById("close-panel");

const svgNS = "http://www.w3.org/2000/svg";

let activeStateId = null;
let currentDistricts = [];

// ============ INDIA MAP ============

function renderIndiaMap() {
  MAP_STATES.forEach((state) => {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", state.d);
    path.setAttribute("class", "state-path" + (PILOT_STATE_IDS.has(state.id) ? " pilot" : ""));
    path.setAttribute("data-id", state.id);
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label", state.name);

    path.addEventListener("mouseenter", (e) => showLabel(stateLabel, indiaMapWrapper, state.name, e));
    path.addEventListener("mousemove", (e) => positionLabel(stateLabel, indiaMapWrapper, svg, e));
    path.addEventListener("mouseleave", () => hideLabel(stateLabel));
    path.addEventListener("focus", (e) => showLabel(stateLabel, indiaMapWrapper, state.name, e));
    path.addEventListener("blur", () => hideLabel(stateLabel));
    path.addEventListener("click", () => selectState(state));
    path.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectState(state);
      }
    });

    svg.appendChild(path);
  });
}

// ============ LABEL HELPERS (shared by both maps) ============

function showLabel(labelEl, wrapperEl, text, evt) {
  labelEl.textContent = text;
  labelEl.classList.add("visible");
  positionLabel(labelEl, wrapperEl, evt.currentTarget.ownerSVGElement, evt);
}

function positionLabel(labelEl, wrapperEl, svgEl, evt) {
  const wrapperRect = wrapperEl.getBoundingClientRect();
  let x, y;

  if (evt && evt.clientX !== undefined) {
    x = evt.clientX - wrapperRect.left;
    y = evt.clientY - wrapperRect.top;
  } else {
    const target = evt && evt.target ? evt.target : null;
    if (target && target.getBBox) {
      const box = target.getBBox();
      const svgRect = svgEl.getBoundingClientRect();
      const scaleX = svgRect.width / svgEl.viewBox.baseVal.width;
      const scaleY = svgRect.height / svgEl.viewBox.baseVal.height;
      x = (box.x + box.width / 2) * scaleX + (svgRect.left - wrapperRect.left);
      y = (box.y + box.height / 2) * scaleY + (svgRect.top - wrapperRect.top);
    } else {
      x = wrapperRect.width / 2;
      y = wrapperRect.height / 2;
    }
  }

  labelEl.style.left = x + "px";
  labelEl.style.top = y + "px";
}

function hideLabel(labelEl) {
  labelEl.classList.remove("visible");
}

// ============ STATE SELECTION, SWITCHES TO DISTRICT VIEW ============

function selectState(state) {
  activeStateId = state.id;
  currentDistricts = state.districts || [];

  // swap the main map view, India map hides, that state's district map shows
  indiaMapWrapper.classList.add("hidden");
  districtMapWrapper.classList.add("open");
  hideLabel(stateLabel);

  districtMapTitle.textContent = state.name;
  renderDistrictMap(state);

  // side panel, name, count, search
  panelStateName.textContent = state.name;
  panelDistrictCount.textContent = currentDistricts.length
    ? currentDistricts.length + " districts"
    : "District boundary data not yet available for this region";

  districtSearch.value = "";
  renderDistrictList(currentDistricts);
  statePanel.classList.add("open");
}

function returnToIndiaMap() {
  districtMapWrapper.classList.remove("open");
  indiaMapWrapper.classList.remove("hidden");
  districtSvg.innerHTML = "";
  hideLabel(districtLabel);

  document.querySelectorAll(".state-path").forEach((p) => p.classList.remove("selected"));
  statePanel.classList.remove("open");
  activeStateId = null;
}

backToIndiaBtn.addEventListener("click", returnToIndiaMap);

// ============ DISTRICT MAP RENDERING ============

function renderDistrictMap(state) {
  districtSvg.innerHTML = "";
  const stateData = DISTRICT_MAPS[state.id];

  if (!stateData || !stateData.districts || !stateData.districts.length) {
    districtSvg.setAttribute("viewBox", "0 0 560 560");
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", "280");
    text.setAttribute("y", "280");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "#F4EDE1");
    text.setAttribute("font-size", "16");
    text.textContent = "District boundaries not yet available";
    districtSvg.appendChild(text);
    return;
  }

  districtSvg.setAttribute("viewBox", stateData.viewBox);

  stateData.districts.forEach((district) => {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", district.d);
    path.setAttribute("class", "district-path");
    path.setAttribute("data-name", district.name);
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label", district.name);

    path.addEventListener("mouseenter", (e) => showLabel(districtLabel, districtMapWrapper, district.name, e));
    path.addEventListener("mousemove", (e) => positionLabel(districtLabel, districtMapWrapper, districtSvg, e));
    path.addEventListener("mouseleave", () => hideLabel(districtLabel));
    path.addEventListener("focus", (e) => showLabel(districtLabel, districtMapWrapper, district.name, e));
    path.addEventListener("blur", () => hideLabel(districtLabel));
    path.addEventListener("click", () => onDistrictSelect(district.name));
    path.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onDistrictSelect(district.name);
      }
    });

    districtSvg.appendChild(path);
  });
}

// ============ SIDE PANEL LIST + SEARCH ============

function renderDistrictList(items) {
  districtList.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.className = "no-results";
    li.textContent = "No districts found";
    districtList.appendChild(li);
    return;
  }

  items.forEach((district) => {
    const li = document.createElement("li");
    li.textContent = district;
    li.tabIndex = 0;
    li.addEventListener("click", () => onDistrictSelect(district));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onDistrictSelect(district);
      }
    });
    districtList.appendChild(li);
  });
}

function onDistrictSelect(districtName) {
  // Full district detail view is not built yet, this is the framework stage.
  // For now, highlight the selected district on the map.
  document.querySelectorAll(".district-path").forEach((p) => {
    const isMatch = p.getAttribute("data-name") === districtName;
    p.classList.toggle("highlighted", isMatch);
    p.classList.toggle("dimmed", !isMatch);
  });
  console.log("District selected:", districtName, "in", activeStateId);
}

districtSearch.addEventListener("input", () => {
  const query = districtSearch.value.trim().toLowerCase();
  const filtered = currentDistricts.filter((d) => d.toLowerCase().includes(query));
  renderDistrictList(filtered);

  // reflect the search on the map too, dim non matching districts
  document.querySelectorAll(".district-path").forEach((p) => {
    const name = (p.getAttribute("data-name") || "").toLowerCase();
    const matches = query === "" || name.includes(query);
    p.classList.toggle("dimmed", !matches);
    p.classList.remove("highlighted");
  });
});

closePanelBtn.addEventListener("click", () => {
  statePanel.classList.remove("open");
});

// ============ SUB THEME CARDS (placeholders) ============

document.querySelectorAll(".theme-card").forEach((card) => {
  card.addEventListener("click", () => {
    console.log("Feature selected:", card.dataset.feature);
  });
});

renderIndiaMap();