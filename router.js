// ============================================================================
// ROUTER + PANEL + PRESENTATION MODE
// ============================================================================

const SIDEBAR_HTML = `
  <div class="sidebar-brand">
    <div class="wordmark">VIVAIA</div>
    <div class="sub">Indonesia · Q2 2026</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-group">
      <button class="nav-item" data-nav="#/overview">Overview</button>
    </div>
    <div class="nav-group" id="navBusiness">
      <button class="nav-item" data-toggle-group="navBusiness">
        <span>Business Overview</span><span class="nav-caret">▸</span>
      </button>
      <div class="nav-sub">
        ${BUSINESS_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
      </div>
    </div>
    <div class="nav-group" id="navMerch">
      <button class="nav-item" data-toggle-group="navMerch">
        <span>Merchandise</span><span class="nav-caret">▸</span>
      </button>
      <div class="nav-sub">
        ${MERCH_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
      </div>
    </div>
    <div class="nav-group">
      <button class="nav-item" data-nav="#/marketing">Marketing <span class="nav-empty-dot" title="Not in source deck"></span></button>
    </div>
    <div class="nav-group">
      <button class="nav-item" data-nav="#/social">Social Media <span class="nav-empty-dot" title="Not in source deck"></span></button>
    </div>
    <div class="nav-group">
      <button class="nav-item" data-nav="#/hr">HR <span class="nav-empty-dot" title="Not in source deck"></span></button>
    </div>
    <div class="nav-group">
      <button class="nav-item" data-nav="#/q3-overview">Q3 Overview <span class="nav-empty-dot" title="Not in source deck"></span></button>
    </div>
  </nav>
  <div class="sidebar-footer">
    <button class="btn-present" id="btnPresent">▶ Present</button>
  </div>
`;

const ROUTES = {
  "#/overview": {  render: renderOverview,  init: initBusinessShareChart },
  "#/business/economy": { render: renderEconomy, init: initEconomyCharts, group: "navBusiness" },
  "#/business/independent-stores": { render: renderIndependentStores, init: ()=>initChannelTrendChart("independent"), group: "navBusiness" },
  "#/business/department-stores": { render: renderDepartmentStores, init: ()=>initChannelTrendChart("department"), group: "navBusiness" },
  "#/business/q2-vs-q1": { render: renderQ2vsQ1, init: null, group: "navBusiness" },
  "#/business/q2-vs-q2ly": { render: renderQ2vsQ2LY, init: null, group: "navBusiness" },
  "#/business/same-store": { render: renderSameStore, init: null, group: "navBusiness" },
  "#/merchandise/overview": { render: renderMerchOverview, init: null, group: "navMerch" },
  "#/merchandise/best-sellers": { render: renderBestSellers, init: null, group: "navMerch" },
  "#/merchandise/slow-movers": { render: renderSlowMovers, init: null, group: "navMerch" },
  "#/merchandise/size-analysis": { render: renderSizeAnalysis, init: initSizeChart, group: "navMerch" },
  "#/business/promotion-overview": { render: renderPromoOverview, init: initPromoOverviewChart, group: "navBusiness" }, 
  "#/marketing": { render: () => renderEmpty("Marketing"), init: null },
  "#/social": { render: () => renderEmpty("Social Media Insights"), init: null },
  "#/hr": { render: () => renderEmpty("HR"), init: null },
  "#/q3-overview": { render: () => renderEmpty("Q3 Overview"), init: null },
};

let presentMode = false;
let presentIndex = 0;

function currentRoute(){
  const h = location.hash || "#/overview";
  return h.split("?")[0];
}

function setActiveNav(route){
  document.querySelectorAll(".nav-item[data-nav]").forEach(el=>{
    el.classList.toggle("active", el.getAttribute("data-nav") === route);
  });
  const meta = ROUTES[route];
  if (meta && meta.group){
    document.querySelectorAll(".nav-group").forEach(g=>g.classList.remove("open"));
    const g = document.getElementById(meta.group);
    if (g) g.classList.add("open");
  }
}

function renderRoute(){
  const route = currentRoute();
  const meta = ROUTES[route] || ROUTES["#/overview"];
  const html = meta.render();
  const contentEl = document.getElementById("content");
  contentEl.innerHTML = `<div class="view-fade">${html}</div>`;
  document.getElementById("breadcrumb").innerHTML = breadcrumbHTML(route);
  setActiveNav(route);
  if (meta.init) meta.init();
  closePanel(true);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  if (presentMode) renderPresentChrome();
}

/* ------------------------------ Panel (drill-down) ------------------------- */
function openPanel(kind, key){
  const overlay = document.getElementById("panelOverlay");
  const panel = document.getElementById("panel");
  let html = "";
  if (kind === "store") html = renderStoreDetail(key);
  else if (kind === "product") html = renderProductDetail(key);
  else if (kind === "reason") html = renderReasonDetail(key);
  document.getElementById("panelInner").innerHTML = html;
  overlay.classList.add("open");
  panel.classList.add("open");
  if (kind === "store") initStoreTrendChart(key);
}
function closePanel(){
  const overlay = document.getElementById("panelOverlay");
  const panel = document.getElementById("panel");
  overlay.classList.remove("open");
  panel.classList.remove("open");
}

/* ------------------------------ Presentation mode --------------------------- */
function enterPresent(){
  presentMode = true;
  presentIndex = 0;
  document.body.classList.add("presenting");
  location.hash = PRESENTATION_ORDER[0].route;
  renderPresentChrome();
}
function exitPresent(){
  presentMode = false;
  document.body.classList.remove("presenting");
  const chrome = document.getElementById("presentChrome");
  if (chrome) chrome.innerHTML = "";
}
function goPresent(delta){
  presentIndex = Math.max(0, Math.min(PRESENTATION_ORDER.length - 1, presentIndex + delta));
  location.hash = PRESENTATION_ORDER[presentIndex].route;
}
function renderPresentChrome(){
  const chrome = document.getElementById("presentChrome");
  if (!chrome) return;
  const cur = PRESENTATION_ORDER[presentIndex];
  chrome.innerHTML = `
    <div class="present-progress">
      ${PRESENTATION_ORDER.map((p,i)=>`<div class="dot ${i===presentIndex?'active':''}"></div>`).join("")}
    </div>
    <div class="present-label">${presentIndex+1} / ${PRESENTATION_ORDER.length} — ${cur.label}</div>
    <div class="present-controls">
      <button class="present-btn" id="presentPrev" ${presentIndex===0?'disabled':''}>‹</button>
      <button class="present-btn" id="presentNext" ${presentIndex===PRESENTATION_ORDER.length-1?'disabled':''}>›</button>
      <button class="present-exit" id="presentExit">Exit ✕</button>
    </div>
  `;
  document.getElementById("presentPrev").onclick = () => goPresent(-1);
  document.getElementById("presentNext").onclick = () => goPresent(1);
  document.getElementById("presentExit").onclick = () => { exitPresent(); };
}

/* ------------------------------ Event delegation ---------------------------- */
document.addEventListener("click", (e)=>{
  const nav = e.target.closest("[data-nav]");
  if (nav){
    location.hash = nav.getAttribute("data-nav");
    return;
  }
  const toggle = e.target.closest("[data-toggle-group]");
  if (toggle){
    const id = toggle.getAttribute("data-toggle-group");
    document.getElementById(id).classList.toggle("open");
    return;
  }
  const present = e.target.closest("[data-present]");
  if (present){ enterPresent(); return; }

  const panelTrigger = e.target.closest("[data-panel]");
  if (panelTrigger){
    openPanel(panelTrigger.getAttribute("data-panel"), panelTrigger.getAttribute("data-key"));
    return;
  }
  const panelBack = e.target.closest("[data-panel-back]");
  if (panelBack){ closePanel(); return; }

  if (e.target.id === "panelOverlay"){ closePanel(); return; }
  if (e.target.id === "btnPresent"){ enterPresent(); return; }
});

document.addEventListener("keydown", (e)=>{
  if (document.getElementById("panel").classList.contains("open") && e.key === "Escape"){
    closePanel(); return;
  }
  if (!presentMode) return;
  if (e.key === "ArrowRight"){ goPresent(1); }
  else if (e.key === "ArrowLeft"){ goPresent(-1); }
  else if (e.key === "Escape"){ exitPresent(); }
});

window.addEventListener("hashchange", renderRoute);

/* ------------------------------ Boot ----------------------------------------- */
function boot(){
  document.getElementById("sidebar").innerHTML = SIDEBAR_HTML;
  if (!location.hash) location.hash = "#/overview";
  renderRoute();
}
boot();
