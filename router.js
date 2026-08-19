// ============================================================================
// ROUTER + PANEL + PRESENTATION MODE
// ============================================================================

const SIDEBAR_HTML = `
  <div class="sidebar-brand">
    <div class="wordmark">
      <img src="image/Logo.png" alt="VIVAIA">
    </div>
    <div class="sub">Indonesia · Q2 2026</div>
  </div>
  <nav class="sidebar-nav">
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
   <div class="nav-group" id="navMarketing">
      <button class="nav-item" data-toggle-group="navMarketing">
        <span>Marketing</span><span class="nav-caret">▸</span>
      </button>
      <div class="nav-sub">
        ${MARKETING_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
      </div>
      </div>
      <div class="nav-group" id="navSocial">
        <button class="nav-item" data-toggle-group="navSocial">
          <span>Social Media</span><span class="nav-caret">▸</span>
        </button>
        <div class="nav-sub">
          ${SOCIAL_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="nav-group" id="navVM">
        <button class="nav-item" data-toggle-group="navVM">
          <span>VM Update</span><span class="nav-caret">▸</span>
        </button>
        <div class="nav-sub">
          ${VM_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="nav-group" id="navOperational">
        <button class="nav-item" data-toggle-group="navOperational">
          <span>Operational Update</span><span class="nav-caret">▸</span>
        </button>
        <div class="nav-sub">
          ${OPERATIONAL_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="nav-group" id="navPeople">
        <button class="nav-item" data-toggle-group="navPeople">
          <span>People Update</span><span class="nav-caret">▸</span>
        </button>
        <div class="nav-sub">
          ${PEOPLE_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="nav-group" id="navQ3Strategy">
        <button class="nav-item" data-toggle-group="navQ3Strategy">
          <span>Q3 Strategy & Plan</span><span class="nav-caret">▸</span>
        </button>
        <div class="nav-sub">
          ${Q3_STRATEGY_TABS.map(([r,l])=>`<button class="nav-item" data-nav="${r}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="nav-group">
        <button class="nav-item" data-nav="#/wellness/activation">Indonesia Wellness Activation</button>
      </div>
    </nav>
    <div class="sidebar-footer">
      <button class="btn-present" id="btnPresent">▶ Present</button>
    </div>
  `;

const ROUTES = {
  "#/business/economy": { render: renderEconomy, init: initEconomyCharts, group: "navBusiness" },
  "#/business/sales-overview": { render: renderSalesOverview, init: initBusinessShareChart, group: "navBusiness" },
  "#/business/independent-stores": { render: renderIndependentStores, init: ()=>initChannelTrendChart("independent"), group: "navBusiness" },
  "#/business/department-stores": { render: renderDepartmentStores, init: ()=>initChannelTrendChart("department"), group: "navBusiness" },
  "#/business/q2-vs-q1": { render: renderQ2vsQ1, init: null, group: "navBusiness" },
  "#/business/q2-vs-q2ly": { render: renderQ2vsQ2LY, init: null, group: "navBusiness" },
  "#/business/same-store": { render: renderSameStore, init: null, group: "navBusiness" },
  "#/merchandise/overview": { render: renderMerchOverview, init: null, group: "navMerch" },
  "#/merchandise/best-sellers": { render: renderBestSellers, init: null, group: "navMerch" },
  "#/merchandise/size-analysis": { render: renderSizeAnalysis, init: initSizeChart, group: "navMerch" },
  "#/business/promotion-overview": { render: renderPromoOverview, init: initPromoOverviewChart, group: "navBusiness" }, 
  "#/marketing/campaigns/feel-the-comfort": { render: renderFeelTheComfort, init: null, group: "navMarketing" },
  "#/marketing/campaigns/mothers-day": { render: renderMothersDay, init: null, group: "navMarketing" },
  "#/marketing/campaigns/sixth-anniversary": { render: renderSixthAnniversary, init: null, group: "navMarketing" },
  "#/marketing/events/pim2-opening": { render: renderPim2Opening, init: null, group: "navMarketing" },
  "#/marketing/events/semarang-opening": { render: renderSemarangOpening, init: null, group: "navMarketing" },
  "#/marketing/printed-media": { render: renderPrintedMedia, init: null, group: "navMarketing" },
  "#/marketing/roi": { render: renderMarketingRoi, init: initMarketingRoiChart, group: "navMarketing" },
  "#/social/summary": { render: renderSocialSummary, init: null, group: "navSocial" },
  "#/social/instagram-growth": { render: renderInstagramGrowth, init: null, group: "navSocial" },
  "#/social/instagram-posts": { render: renderInstagramPosts, init: null, group: "navSocial" },
  "#/social/tiktok-growth": { render: renderTiktokGrowth, init: null, group: "navSocial" },
  "#/social/tiktok-posts": { render: renderTiktokPosts, init: null, group: "navSocial" },
  "#/vm-update/training": { render: renderVMTraining, init: null, group: "navVM" },
  "#/operational/key-highlights": { render: renderOperationalKeyHighlights, init: null, group: "navOperational" },
  "#/operational/activities": { render: renderOperationalActivities, init: null, group: "navOperational" },
  "#/people/manpower": { render: renderPeopleManpower, init: initManpowerChart, group: "navPeople" },
  "#/people/pipeline": { render: renderPeoplePipeline, init: null, group: "navPeople" },
  "#/q3-strategy/action-plan": { render: renderQ3ActionPlan, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/training-plan": { render: renderQ3TrainingPlan, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/loyal-customer": { render: renderQ3LoyalCustomer, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/luxury-experience": { render: renderQ3LuxuryExperience, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/expansion-plan": { render: renderQ3ExpansionPlan, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/luxury-brands": { render: renderQ3LuxuryBrands, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/competitors": { render: renderQ3Competitors, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/google-review": { render: renderQ3GoogleReview, init: null, group: "navQ3Strategy" },
  "#/q3-strategy/public-figures": { render: renderQ3PublicFigures, init: null, group: "navQ3Strategy" },
  "#/wellness/activation": { render: renderWellnessActivation, init: null },
};

let presentMode = false;
let presentIndex = 0;
 
function currentRoute(){
  const h = location.hash || "#/business/sales-overview";
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
  const meta = ROUTES[route] || ROUTES["#/business/sales-overview"];
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
  if (!location.hash) location.hash = "#/business/sales-overview";
  renderRoute();
}
boot();
