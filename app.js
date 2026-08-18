// ============================================================================
// VIVAIA INDONESIA — Q2 2026 BUSINESS REVIEW — APP (USD EDITION)
// ============================================================================

/* ---------------------------- formatting helpers ------------------------- */
const fmtNum = (n) => (n === null || n === undefined) ? "—" : n.toLocaleString("en-US");
const fmtM = (n) => (n === null || n === undefined) ? "—" : `USD ${n.toLocaleString("en-US")}K`; // store-level figures are USD thousands
const fmtUSD = (n) => (n === null || n === undefined) ? "—" : `USD ${n.toLocaleString("en-US")}`;
const fmtUSDDec = (n) => (n === null || n === undefined) ? "—" : `USD ${n.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})}`;
const fmtPct1 = (n) => (n === null || n === undefined) ? "—" : `${n.toFixed(1)}%`;

function growthSpan(g, opts={}){
  if (g === null || g === undefined) return `<span class="muted">${opts.fallback || "—"}</span>`;
  const pos = g >= 0;
  const arrow = pos ? "▲" : "▼";
  return `<span class="${pos ? 'pos' : 'neg'}">${arrow} ${pos && opts.plus !== false ? "+" : ""}${g.toFixed(1)}%</span>`;
}
function growthPillHTML(g){
  if (g === null || g === undefined) return `<span class="t-growth">—</span>`;
  const pos = g >= 0;
  return `<span class="t-growth ${pos?'pos':'neg'}">${pos?'▲':'▼'} ${pos?'+':''}${g.toFixed(1)}%</span>`;
}
function cellGrowth(g){
  if (g === null || g === undefined) return `<td class="muted">—</td>`;
  const cls = g >= 0 ? "pos" : "neg";
  const arrow = g >= 0 ? "▲" : "▼";
  return `<td class="${cls}">${arrow} ${g>=0?'+':''}${g.toFixed(1)}%</td>`;
}
const esc = (s) => (s===null||s===undefined) ? "" : String(s);

/* ---------------------------- store helpers ------------------------------ */
function storeName(key){ return (DATA.storeMeta[key] && DATA.storeMeta[key].name) || key; }
function storeChannel(key){ return (DATA.storeMeta[key] && DATA.storeMeta[key].channel) || ""; }
function storeColor(key){ return (DATA.storeMeta[key] && DATA.storeMeta[key].color) || "#8B4F42"; }
function channelPill(ch){ return `<span class="channel-pill ${ch}">${ch}</span>`; }

/* ---------------------------- nav tree for breadcrumbs -------------------- */
const NAV_TREE = {
  "#/business/economy": { label: "Economic Overview", parent: "Business Overview" },
  "#/business/sales-overview": { label: "Sales Overview", parent: "Business Overview" },
  "#/business/channel-mix": { label: "Channel Mix", parent: "Business Overview" },
  "#/business/independent-stores": { label: "Independent Stores", parent: "Business Overview" },
  "#/business/department-stores": { label: "Department Stores", parent: "Business Overview" },
  "#/business/q2-vs-q1": { label: "Q2 vs Q1", parent: "Business Overview" },
  "#/business/q2-vs-q2ly": { label: "Q2 vs Q2 LY", parent: "Business Overview" },
  "#/business/same-store": { label: "Same-Store Growth", parent: "Business Overview" },
  "#/business/promotion-overview": { label: "Q2 Promotion Overview", parent: "Business Overview" },
  "#/merchandise/overview": { label: "Q2 Performance", parent: "Merchandise" },
  "#/merchandise/best-sellers": { label: "Best Sellers", parent: "Merchandise" },
  "#/merchandise/size-analysis": { label: "Size Analysis", parent: "Merchandise" },
  "#/marketing/campaigns/feel-the-comfort": { label: "Feel The Comfort", parent: "Marketing" },
  "#/marketing/campaigns/mothers-day": { label: "Mother's Day Campaign", parent: "Marketing" },
  "#/marketing/campaigns/sixth-anniversary": { label: "6th Anniversary Campaign", parent: "Marketing" },
  "#/marketing/events/pim2-opening": { label: "PIM 2 Grand Opening", parent: "Marketing" },
  "#/marketing/events/semarang-opening": { label: "Semarang Grand Opening", parent: "Marketing" },
  "#/marketing/printed-media": { label: "Printed Media", parent: "Marketing" },
  "#/marketing/roi": { label: "Marketing ROI", parent: "Marketing" },
  "#/social/summary": { label: "Q2 Social Media Summary", parent: "Social Media" },
  "#/social/instagram-growth": { label: "Instagram Growth", parent: "Social Media" },
  "#/social/instagram-posts": { label: "Instagram Top Posts", parent: "Social Media" },
  "#/social/tiktok-growth": { label: "TikTok Growth", parent: "Social Media" },
  "#/social/tiktok-posts": { label: "TikTok Top Posts", parent: "Social Media" },
  "#/vm-update/training": { label: "VM Training", parent: "VM Update" },
  "#/operational/key-highlights": { label: "Q2 Key Highlights", parent: "Operational Update" },
  "#/operational/activities": { label: "Activities & Team Development", parent: "Operational Update" },
  "#/people/manpower": { label: "Manpower — Q2 vs Q1", parent: "People Update" },
  "#/people/pipeline": { label: "Pipeline — Q3", parent: "People Update" },
  "#/q3-strategy/action-plan": { label: "Operational Action Plan", parent: "Q3 Strategy & Plan" },
  "#/q3-strategy/training-plan": { label: "People Training & Development", parent: "Q3 Strategy & Plan" },
  "#/q3-strategy/loyal-customer": { label: "Loyal Customer Deep Dive", parent: "Q3 Strategy & Plan" },
  "#/q3-strategy/luxury-experience": { label: "Elevating Luxury Experience", parent: "Q3 Strategy & Plan" },
  "#/q3-strategy/expansion-plan": { label: "Expansion Plan", parent: "Q3 Strategy & Plan" },
  "#/q3-strategy/luxury-brands": { label: "Relevancy to Luxury Brands", parent: "Where Are We" },
  "#/q3-strategy/competitors": { label: "Relevancy to Competitors", parent: "Where Are We" },
  "#/q3-strategy/google-review": { label: "Google Review Enhancement", parent: "Where Are We" },
  "#/q3-strategy/public-figures": { label: "Indonesia Public Figures in VIVAIA", parent: "Where Are We" },
  "#/wellness/activation": { label: "Indonesia Wellness Activation" },
};

const BUSINESS_TABS = [
  ["#/business/economy", "Economic Overview"],
  ["#/business/sales-overview", "Sales Overview"],
  ["#/business/independent-stores", "Independent Stores"],
  ["#/business/department-stores", "Department Stores"],
  ["#/business/q2-vs-q1", "Q2 vs Q1"],
  ["#/business/q2-vs-q2ly", "Q2 vs Q2 LY"],
  ["#/business/same-store", "Same-Store Growth"],
  ["#/business/promotion-overview", "Promotion Overview"],
];
const MERCH_TABS = [
  ["#/merchandise/overview", "Q2 Performance"],
  ["#/merchandise/best-sellers", "Best Sellers"],
  ["#/merchandise/size-analysis", "Size Analysis"],
];
const PROMO_TABS = [
  ["#/promotions/overview", "Promotion Overview"],
];
const MARKETING_TABS = [
  ["#/marketing/campaigns/feel-the-comfort", "Feel The Comfort"],
  ["#/marketing/campaigns/mothers-day", "Mother's Day Campaign"],
  ["#/marketing/campaigns/sixth-anniversary", "6th Anniversary Campaign"],
  ["#/marketing/events/pim2-opening", "PIM 2 Grand Opening"],
  ["#/marketing/events/semarang-opening", "Semarang Grand Opening"],
  ["#/marketing/printed-media", "Printed Media"],
  ["#/marketing/roi", "ROI"],
];

const SOCIAL_TABS = [
  ["#/social/summary", "Q2 Social Media Summary"],
  ["#/social/instagram-growth", "Instagram Growth"],
  ["#/social/instagram-posts", "Instagram Top Posts"],
  ["#/social/tiktok-growth", "TikTok Growth"],
  ["#/social/tiktok-posts", "TikTok Top Posts"],
];

const VM_TABS = [
  ["#/vm-update/training", "VM Training"],
];
const OPERATIONAL_TABS = [
  ["#/operational/key-highlights", "Q2 Key Highlights"],
  ["#/operational/activities", "Activities & Team Development"],
];
const PEOPLE_TABS = [
  ["#/people/manpower", "Manpower — Q2 vs Q1"],
  ["#/people/pipeline", "Pipeline — Q3"],
];
const Q3_STRATEGY_TABS = [
  ["#/q3-strategy/action-plan", "Operational Action Plan"],
  ["#/q3-strategy/training-plan", "People Training & Development"],
  ["#/q3-strategy/loyal-customer", "Loyal Customer Deep Dive"],
  ["#/q3-strategy/luxury-experience", "Elevating Luxury Experience"],
  ["#/q3-strategy/expansion-plan", "Expansion Plan"],
  ["#/q3-strategy/luxury-brands", "Relevancy to Luxury Brands"],
  ["#/q3-strategy/competitors", "Relevancy to Competitors"],
  ["#/q3-strategy/google-review", "Google Review Enhancement"],
  ["#/q3-strategy/public-figures", "Public Figures in VIVAIA"],
];

function tabRowHTML(tabs, current){
  return `<div class="tabrow">${tabs.map(([route,label])=>
    `<button class="tab ${route===current?'active':''}" data-nav="${route}">${label}</button>`
  ).join("")}</div>`;
}

function breadcrumbHTML(route){
  const node = NAV_TREE[route];
  if (!node) return "";

  let html = "";

  if (node.parent){
    html += `<span class="sep">/</span><span>${node.parent}</span>`;
  }

  html += `<span class="sep">/</span><span class="cur">${node.label}</span>`;

  return html;
}

/* ============================================================================
   CHART REGISTRY
============================================================================ */
const charts = {};
function killChart(id){ if (charts[id]) { charts[id].destroy(); delete charts[id]; } }
Chart.defaults.font.family = "Inter, sans-serif";
Chart.defaults.color = "#6B5049";
const CBRAND = "#8B4F42", CGOLD="#B8863E", CPOS="#4B7A5C", CNEG="#B2483A", CLINE="#E9D9D3", CNAVY="#3D2620";

/* ============================================================================
   OVERVIEW
============================================================================ */
function renderSalesOverview(){
  const kpiCards = DATA.kpis.map(k => `
    <div class="tag-card">
      <div class="t-label">${k.label}</div>
      <div class="t-value">${k.value}</div>
      ${growthPillHTML(k.growth)}
      <div class="t-compare">${k.compareLabel}</div>
    </div>`).join("");

  const insightCards = DATA.execInsights.map(i => `
    <div class="insight-card">
      <div class="tag">${i.tag}</div>
      <p>${i.text}</p>
    </div>`).join("");

  return `
    <div class="page-head">
      <div class="eyebrow">Business Overview</div>
      <h1 class="page-title">Sales Overview</h1>
      <p class="page-sub">Q2 2026 sales performance across VIVAIA's Indonesia store network.</p>
    </div>

    ${tabRowHTML(BUSINESS_TABS, "#/business/sales-overview")}

    <div class="section-block">
      <div class="section-label">Headline KPIs — Q2 2026 vs Q2 2025</div>
      <div class="kpi-grid">${kpiCards}</div>
    </div>

    <div class="section-block">
      <div class="section-label">Executive Insights</div>
      <div class="insight-grid">${insightCards}</div>
    </div>

    <div class="section-block">
      <div class="chart-card">

        <div class="chart-header">
          <div>
            <h3>Share of Business</h3>
          </div>
        </div>

        <div class="chart-container business-share-container">
          <canvas id="businessShareChart"></canvas>
        </div>

      </div>
    </div>
  `;
}
function exploreCard(title, text, route){
  return `<div class="tag-card clickable" ${route==='__present__' ? 'data-present="1"' : `data-nav="${route}"`} style="cursor:pointer;">
    <div class="t-label">${title}</div>
    <p style="font-size:13px;color:var(--ink-soft);line-height:1.5;margin:4px 0 0;">${text}</p>
  </div>`;
}

function initBusinessShareChart() {
  const d = DATA;

  const canvas = document.getElementById("businessShareChart");

  if (!canvas) return;

  killChart("businessShare");

  charts.businessShare = new Chart(canvas, {
    type: "pie",

    plugins: [ChartDataLabels],

    data: {
      labels: d.businessShareChart.map(item => item.label),

      datasets: [{
        data: d.businessShareChart.map(item => item.value),

        backgroundColor: [
          CBRAND,
          CGOLD
        ],

        borderWidth: 2,
        borderColor: "#FFFFFF"
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },

        datalabels: {
          color: "#FFFFFF",

          font: {
            size: 13,
            weight: "bold"
          },

          textStrokeColor: "#000000",
          textStrokeWidth: 2,

          formatter: (value) => `${value}%`
        },

        tooltip: {
          callbacks: {
            label: (c) => `${c.label}: ${c.parsed}%`
          }
        }
      }
      
    }
  });
}

/* ============================================================================
   BUSINESS / ECONOMY (unchanged from prior deck)
============================================================================ */
function renderEconomy(){
  const e = DATA.economy;
  return `
    <div class="page-head">
      <div class="eyebrow">Business Overview</div>
      <h1 class="page-title">Indonesia Economic Overview</h1>
      <p class="page-sub">Macro context shaping VIVAIA's Q2 2026 performance and Q3 planning.</p>
    </div>
    ${tabRowHTML(BUSINESS_TABS, "#/business/economy")}

    <div class="two-col section-block">
      <div class="card">
        <div class="card-title">USD/IDR Exchange Rate</div>
        <div class="card-note">Jan – Jun 2026 (chart reading, approximate) · ${e.rupiah.title}</div>
        <div class="chart-wrap"><canvas id="chartUsdIdr"></canvas></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr);">
          <div class="tag-card"><div class="t-label">GDP Growth</div><div class="t-value" style="font-size:26px;">${e.gdpGrowth.value}</div><div class="t-compare">${e.gdpGrowth.note}</div></div>
          <div class="tag-card"><div class="t-label">Inflation</div><div class="t-value" style="font-size:26px;">${e.inflation.value}</div><div class="t-compare">${e.inflation.note}</div></div>
          <div class="tag-card"><div class="t-label">BI Rate</div><div class="t-value" style="font-size:26px;">${e.biRate.value}</div><div class="t-compare">${e.biRate.note}</div></div>
          <div class="tag-card"><div class="t-label">Real Wages</div><div class="t-value" style="font-size:22px;">${e.realWages.value}</div><div class="t-compare">${e.realWages.note}</div></div>
        </div>
        <div class="callout"><strong>${e.rupiah.title}.</strong> ${e.rupiah.text}</div>
      </div>
    </div>

    <div class="two-col section-block">
      <div class="card">
        <div class="card-title">${e.consumerConfidence.title}</div>
        <div class="card-note">${e.consumerConfidence.note} · approximate chart reading</div>
        <div class="chart-wrap short"><canvas id="chartCCI"></canvas></div>
        <p style="font-size:13px;line-height:1.6;color:var(--ink);margin-top:14px;">${e.consumerConfidence.text}</p>
      </div>
      <div class="card">
        <div class="card-title">Key Policy & Risk Watch</div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:10px;">
          ${e.riskWatch.map(r => `
            <div class="callout" style="border-left:3px solid ${r.level==='risk'?'var(--negative)':r.level==='watch'?'var(--gold)':'var(--positive)'};">
              <strong>${r.title}</strong><br/>${r.text}
            </div>`).join("")}
        </div>
      </div>
    </div>

    <div class="section-block">
      <div class="callout brand">
        <strong>${e.holidays.title}</strong> — ${e.holidays.subtitle}<br/><br/>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:10px 0 16px;">
          ${e.holidays.items.map(h => `<div><div style="font-weight:700;">${h.date}</div><div>${h.name}</div><div style="opacity:.75;font-size:12px;">${h.note || ""}</div></div>`).join("")}
        </div>
        ${e.holidays.implication}
      </div>
    </div>
  `;
}
function initEconomyCharts(){
  const e = DATA.economy;
  killChart("usdidr");
  charts.usdidr = new Chart(document.getElementById("chartUsdIdr"), {
    type:"line",
    data:{ labels: e.usdIdrTrend.points.map(p=>p.month),
      datasets:[{ data: e.usdIdrTrend.points.map(p=>p.value), borderColor:CNEG, backgroundColor:CNEG, tension:.35, pointRadius:4, pointBackgroundColor:CNEG, borderWidth:2.5 }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label:(c)=>`≈ ${c.parsed.y.toLocaleString()}`}}},
      scales:{ y:{ grid:{color:CLINE}, ticks:{callback:(v)=>v.toLocaleString()} }, x:{ grid:{display:false} } } }
  });
  killChart("cci");
  charts.cci = new Chart(document.getElementById("chartCCI"), {
    type:"bar",
    data:{ labels: e.consumerConfidence.points.map(p=>p.month),
      datasets:[{ data: e.consumerConfidence.points.map(p=>p.value),
        backgroundColor: e.consumerConfidence.points.map((p,i)=> i===e.consumerConfidence.points.length-1 ? CNEG : CNAVY) }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
      scales:{ y:{ min:115, max:130, beginAtZero:false, grid:{color:CLINE} }, x:{ grid:{display:false} } } }
  });
}

/* ============================================================================
   8A / 8B — INDEPENDENT & DEPARTMENT STORE PERFORMANCE
   Genuinely interactive: Chart.js hover tooltips + clickable legend to
   toggle series, native to Chart.js.
============================================================================ */
function storesForChannel(channel){
  return Object.keys(DATA.storeMeta).filter(k => DATA.storeMeta[k].channel === channel);
}
function renderChannelStorePage(channel){
  const isInd = channel === "independent";
  const stores = storesForChannel(channel);
  const sorted = stores.slice().sort((a,b)=> (DATA.monthlyGmv.ytdTotal[b]||0) - (DATA.monthlyGmv.ytdTotal[a]||0));
  const maxYtd = Math.max(...stores.map(k => DATA.monthlyGmv.ytdTotal[k] || 0));
  const route = isInd ? "#/business/independent-stores" : "#/business/department-stores";
  const highlights = isInd ? DATA.monthlyGmv.highlightsIndependent : DATA.monthlyGmv.highlightsDepartment;
  const title = isInd ? "Independent Store Q2 GMV Breakdown" : "Department Store Q2 GMV Breakdown";

  return `
    <div class="page-head">
      <div class="eyebrow">Business Overview · Store Performance</div>
      <h1 class="page-title">${title}</h1>
      <p class="page-sub">Revenue distribution across ${isInd?'independent':'department'} stores, since Jan – Jun 2026. ${DATA.meta.fxNote}</p>
    </div>
    ${tabRowHTML(BUSINESS_TABS, route)}

    <div class="two-col section-block">
      <div class="card">
        <div class="card-title">Monthly GMV by Store</div>
        <div class="card-note">USD K · hover a point for the exact value, click a legend name to show/hide that store</div>
        <div class="chart-wrap" style="height:360px;"><canvas id="chartChannelTrend"></canvas></div>
      </div>
      <div>
        <div class="section-label">Highlights on ${isInd?'Independent':'Department'} Store</div>
        <ul class="bullet-list">${highlights.map(t=>`<li>${t}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="section-block">
      <div class="section-label">Store Ranking — YTD GMV (USD K)</div>
      <div class="store-list">
        ${sorted.map((key,i)=>{
          const ytd = DATA.monthlyGmv.ytdTotal[key] || 0;
          const pctW = maxYtd ? Math.max(4, Math.round(ytd/maxYtd*100)) : 0;
          return `
          <div class="store-row" data-panel="store" data-key="${key}">
            <div class="rank">${i+1}</div>
            <div class="name"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${storeColor(key)};margin-right:7px;"></span>${storeName(key)}<span class="ch">${storeChannel(key)} store</span></div>
            <div class="bar-wrap"><div class="bar-fill" style="width:${pctW}%;background:${storeColor(key)};"></div></div>
            <div class="gmv">${fmtNum(ytd)}K</div>
            <div class="chev">›</div>
          </div>`;
        }).join("")}
      </div>
      <div class="footnote">Click any store to open its detail view with monthly trend and KPIs.</div>
    </div>
  `;
}
function renderIndependentStores(){ return renderChannelStorePage("independent"); }
function renderDepartmentStores(){ return renderChannelStorePage("department"); }

function initChannelTrendChart(channel){
  killChart("channelTrend");
  const stores = storesForChannel(channel);
  const el = document.getElementById("chartChannelTrend");
  if (!el) return;
  const datasets = stores.map(key => ({
    label: storeName(key),
    data: DATA.monthlyGmv.byStore[key],
    borderColor: storeColor(key),
    backgroundColor: storeColor(key),
    spanGaps: true,
    tension: .35,
    pointRadius: 3,
    borderWidth: 2,
  }));
  charts.channelTrend = new Chart(el, {
    type: "line",
    data: { labels: DATA.monthlyGmv.months, datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: "nearest", axis: "x", intersect: false },
      plugins: {
        legend: { position:"bottom", labels:{ boxWidth:9, font:{size:10.5}, usePointStyle:true } },
        tooltip: { callbacks:{ label:(c)=> c.parsed.y===null?`${c.dataset.label}: no data`:`${c.dataset.label}: USD ${c.parsed.y}K` } },
      },
      scales: { y:{ grid:{color:CLINE}, ticks:{callback:(v)=>v} }, x:{ grid:{display:false} } },
    }
  });
}

/* ============================================================================
   STORE DETAIL PANEL
============================================================================ */
function renderStoreDetail(key){
  const meta = DATA.storeMeta[key];
  if (!meta) return `<div class="callout">Store not found.</div>`;
  const monthly = DATA.monthlyGmv.byStore[key];
  const ytd = DATA.monthlyGmv.ytdTotal[key];
  const q1 = DATA.q2vsQ1.independent.concat(DATA.q2vsQ1.department).find(r=>r.key===key);
  const ly = DATA.q2vsQ2ly.independent.concat(DATA.q2vsQ2ly.department).find(r=>r.key===key);
  const sameStore = DATA.sameStore.rows.find(r=>r.key===key);

  let kpiHtml = "";
  if (q1 && !q1.closed) {
    kpiHtml = `
      <div class="panel-kpis">
        <div class="tag-card"><div class="t-label">GMV (Q2'26)</div><div class="t-value" style="font-size:22px;">${fmtM(q1.gmvQ2)}</div>${q1.isNew?'<span class="pill">New store</span>':growthPillHTML(q1.gmvGrowth)}<div class="t-compare">vs Q1 2026</div></div>
        <div class="tag-card"><div class="t-label">Units Sold</div><div class="t-value" style="font-size:22px;">${fmtNum(q1.qtyQ2)}</div>${q1.isNew?'':growthPillHTML(q1.qtyGrowth)}<div class="t-compare">vs Q1 2026</div></div>
        ${q1.isNew ? "" : `
        <div class="tag-card"><div class="t-label">TRX Growth</div><div class="t-value" style="font-size:22px;">${q1.trxGrowth!==null?q1.trxGrowth.toFixed(1)+'%':'—'}</div>${growthPillHTML(q1.trxGrowth)}<div class="t-compare">vs Q1 2026</div></div>
        <div class="tag-card"><div class="t-label">UPT Growth</div><div class="t-value" style="font-size:22px;">${q1.uptGrowth!==null?q1.uptGrowth.toFixed(1)+'%':'—'}</div>${growthPillHTML(q1.uptGrowth)}<div class="t-compare">vs Q1 2026</div></div>`}
      </div>`;
  } else if (q1 && q1.closed) {
    kpiHtml = `<div class="callout"><strong>Store closed.</strong> Last recorded GMV Q1 2026: ${fmtM(q1.gmvQ1)}.</div>`;
  }

  return `
    <button class="panel-back" data-panel-back="1">‹ Back</button>
    <div class="panel-eyebrow">${meta.channel} store</div>
    <h2 class="panel-title">${meta.name}</h2>
    ${kpiHtml}

    <div class="card" style="margin-bottom:20px;">
      <div class="card-title">Monthly GMV Trend</div>
      <div class="card-note">Jan – Jun 2026 (USD K) · YTD total ${fmtM(ytd)}</div>
      <div class="chart-wrap short"><canvas id="chartStoreTrend"></canvas></div>
    </div>

    ${ly && !ly.closed ? `
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title">Q2 2026 vs Q2 2025</div>
      ${ly.isNew ? `<div class="callout">New store in Q2 2026 — no prior-year comparison available.</div>` :
        `<div class="kpi-grid" style="grid-template-columns:repeat(2,1fr);">
          <div class="tag-card"><div class="t-label">GMV Growth</div><div class="t-value" style="font-size:20px;">${ly.gmvGrowth!==null?ly.gmvGrowth.toFixed(1)+'%':'—'}</div>${growthPillHTML(ly.gmvGrowth)}</div>
          <div class="tag-card"><div class="t-label">Qty Growth</div><div class="t-value" style="font-size:20px;">${ly.qtyGrowth!==null?ly.qtyGrowth.toFixed(1)+'%':'—'}</div>${growthPillHTML(ly.qtyGrowth)}</div>
        </div>`}
    </div>` : ``}

    ${sameStore ? `
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title">Same-Store Diagnosis</div>
      <div class="card-note">Q2 2026 vs Q2 2025</div>
      <div class="table-wrap"><table class="data" style="width:100%;min-width:0;">
        <tbody>
          <tr><td>Transactions</td><td>${fmtNum(sameStore.trxQ2)}</td>${cellGrowth(sameStore.trxGrowth)}</tr>
          <tr><td>AOV (USD)</td><td>${sameStore.aovQ2}</td>${cellGrowth(sameStore.aovGrowth)}</tr>
          <tr><td>ASP (USD)</td><td>${sameStore.aspQ2}</td>${cellGrowth(sameStore.aspGrowth)}</tr>
          <tr><td>UPT</td><td>${sameStore.uptQ2}</td>${cellGrowth(sameStore.uptGrowth)}</tr>
        </tbody>
      </table></div>
    </div>` : ``}
  `;
}
function initStoreTrendChart(key){
  killChart("storeTrend");
  const el = document.getElementById("chartStoreTrend");
  if (!el) return;
  charts.storeTrend = new Chart(el, {
    type:"line",
    data:{ labels: DATA.monthlyGmv.months,
      datasets:[{ data: DATA.monthlyGmv.byStore[key], borderColor:storeColor(key), backgroundColor:"rgba(139,79,66,0.12)", fill:true, spanGaps:true, tension:.3, pointRadius:4, pointBackgroundColor:storeColor(key), borderWidth:2.5 }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label:(c)=> c.parsed.y===null?'No data':`USD ${c.parsed.y}K`}}},
      scales:{ y:{ grid:{color:CLINE} }, x:{ grid:{display:false} } } }
  });
}

/* ============================================================================
   Q2 vs Q1 / Q2 vs Q2LY (USD)
============================================================================ */
function growthTableRows(list, isLY){
  return list.map(r => {
    if (r.closed) return `<tr class="closed-row"><td>${storeName(r.key)}</td><td colspan="9">Closed — last recorded GMV ${isLY?'':'Q1 2026'} ${fmtM(r.gmvQ1 !== undefined ? r.gmvQ1 : r.gmvLY)}</td></tr>`;
    if (r.isNew) return `<tr class="new-row"><td>${storeName(r.key)}</td><td>${fmtM(r.gmvQ2)}</td><td colspan="8">New store in Q2 2026 — no prior comparison</td></tr>`;
    return `<tr class="clickable" data-panel="store" data-key="${r.key}">
      <td>${storeName(r.key)}</td>
      <td>${fmtM(r.gmvQ2)}</td><td>${fmtM(isLY?r.gmvLY:r.gmvQ1)}</td>${cellGrowth(r.gmvGrowth)}
      <td>${fmtNum(r.qtyQ2)}</td><td>${fmtNum(isLY?r.qtyLY:r.qtyQ1)}</td>${cellGrowth(r.qtyGrowth)}
      ${cellGrowth(r.trxGrowth)}${cellGrowth(r.aovGrowth)}${cellGrowth(r.aspGrowth)}${cellGrowth(r.uptGrowth)}
    </tr>`;
  }).join("");
}
function totalRow(t, label){
  return `<tr class="total-row"><td>${label}</td>
    <td>${fmtM(t.gmvQ2)}</td><td>${fmtM(t.gmvQ1!==undefined?t.gmvQ1:t.gmvLY)}</td>${cellGrowth(t.gmvGrowth)}
    <td>${fmtNum(t.qtyQ2)}</td><td>${fmtNum(t.qtyQ1!==undefined?t.qtyQ1:t.qtyLY)}</td>${cellGrowth(t.qtyGrowth)}
    ${cellGrowth(t.trxGrowth)}${cellGrowth(t.aovGrowth)}${cellGrowth(t.aspGrowth)}${cellGrowth(t.uptGrowth)}
  </tr>`;
}
function growthTableHead(compareLabel){
  return `<thead><tr><th>Store</th><th>GMV Q2'26</th><th>GMV ${compareLabel}</th><th>GMV Growth</th><th>Qty Q2'26</th><th>Qty ${compareLabel}</th><th>Qty Growth</th><th>TRX Growth</th><th>AOV Growth</th><th>ASP Growth</th><th>UPT Growth</th></tr></thead>`;
}

function renderQ2vsQ1(){
  const d = DATA.q2vsQ1;
  return `
    <div class="page-head">
      <div class="eyebrow">Business Overview</div>
      <h1 class="page-title">GMV Growth by Store</h1>
      <p class="page-sub">Q2 2026 vs Q1 2026 — Independent Stores & Department Stores (USD K)</p>
    </div>
    ${tabRowHTML(BUSINESS_TABS, "#/business/q2-vs-q1")}

    <div class="section-block">
      <div class="section-label">Independent Stores</div>
      <div class="table-wrap"><table class="data">
        ${growthTableHead("Q1'26")}
        <tbody>${growthTableRows(d.independent, false)}${totalRow(d.independentTotal, "Total Independent")}</tbody>
      </table></div>
      <div class="callout" style="margin-top:14px;"><strong>${d.independentInsight.title}.</strong>
        <ul class="bullet-list" style="margin-top:8px;">${d.independentInsight.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="section-block">
      <div class="section-label">Department Stores</div>
      <div class="table-wrap"><table class="data">
        ${growthTableHead("Q1'26")}
        <tbody>${growthTableRows(d.department, false)}${totalRow(d.departmentTotal, "Total Dept Store")}${totalRow(d.grandTotal, "Grand Total")}</tbody>
      </table></div>
      <div class="callout" style="margin-top:14px;"><strong>${d.departmentInsight.title}.</strong>
        <ul class="bullet-list" style="margin-top:8px;">${d.departmentInsight.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}
function renderQ2vsQ2LY(){
  const d = DATA.q2vsQ2ly;
  return `
    <div class="page-head">
      <div class="eyebrow">Business Overview</div>
      <h1 class="page-title">GMV Growth by Store</h1>
      <p class="page-sub">Q2 2026 vs Q2 2025 — Independent Stores & Department Stores (USD K)</p>
    </div>
    ${tabRowHTML(BUSINESS_TABS, "#/business/q2-vs-q2ly")}

    <div class="section-block">
      <div class="section-label">Independent Stores</div>
      <div class="table-wrap"><table class="data">
        ${growthTableHead("Q2'25")}
        <tbody>${growthTableRows(d.independent, true)}${totalRow(d.independentTotal, "Total Independent")}</tbody>
      </table></div>
      <div class="callout" style="margin-top:14px;"><strong>${d.independentInsight.title}.</strong>
        <ul class="bullet-list" style="margin-top:8px;">${d.independentInsight.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="section-block">
      <div class="section-label">Department Stores</div>
      <div class="table-wrap"><table class="data">
        ${growthTableHead("Q2'25")}
        <tbody>${growthTableRows(d.department, true)}${totalRow(d.departmentTotal, "Total Dept Store")}${totalRow(d.grandTotal, "Grand Total")}</tbody>
      </table></div>
      <div class="callout" style="margin-top:14px;"><strong>${d.departmentInsight.title}.</strong>
        <ul class="bullet-list" style="margin-top:8px;">${d.departmentInsight.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

/* ============================================================================
   SAME-STORE DEEP DIVE
============================================================================ */
function renderSameStore(){
  const d = DATA.sameStore;
  return `
    <div class="page-head">
      <div class="eyebrow">Business Overview</div>
      <h1 class="page-title">Same-Store Growth</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(BUSINESS_TABS, "#/business/same-store")}

    <div class="callout brand section-block"><strong>${d.headline}</strong></div>

    <div class="section-block">
      <div class="table-wrap"><table class="data">
        <thead><tr><th>Store</th><th>TRX Q2'26</th><th>TRX Q2'25</th><th>TRX Growth</th><th>AOV (USD) Q2'26</th><th>Q2'25</th><th>Growth</th><th>ASP Q2'26</th><th>Q2'25</th><th>Growth</th><th>UPT Q2'26</th><th>Q2'25</th><th>Growth</th></tr></thead>
        <tbody>
          ${d.rows.map(r=>`<tr class="clickable" data-panel="store" data-key="${r.key}">
            <td>${storeName(r.key)}</td>
            <td>${fmtNum(r.trxQ2)}</td><td>${fmtNum(r.trxLY)}</td>${cellGrowth(r.trxGrowth)}
            <td>${r.aovQ2}</td><td>${r.aovLY??'—'}</td>${cellGrowth(r.aovGrowth)}
            <td>${r.aspQ2}</td><td>${r.aspLY??'—'}</td>${cellGrowth(r.aspGrowth)}
            <td>${r.uptQ2}</td><td>${r.uptLY??'—'}</td>${cellGrowth(r.uptGrowth)}
          </tr>`).join("")}
          <tr class="total-row">
            <td>Total</td>
            <td>${fmtNum(d.total.trxQ2)}</td><td>${fmtNum(d.total.trxLY)}</td>${cellGrowth(d.total.trxGrowth)}
            <td>${d.total.aovQ2}</td><td>${d.total.aovLY}</td>${cellGrowth(d.total.aovGrowth)}
            <td>${d.total.aspQ2}</td><td>${d.total.aspLY}</td>${cellGrowth(d.total.aspGrowth)}
            <td>${d.total.uptQ2}</td><td>${d.total.uptLY}</td>${cellGrowth(d.total.uptGrowth)}
          </tr>
        </tbody>
      </table></div>
      ${d.aspUnitNote ? `<div class="flag-callout" style="margin-top:14px;">⚠ <strong>Source-deck note:</strong> ${d.aspUnitNote}</div>` : ""}
    </div>

    <div class="insight-grid section-block" style="grid-template-columns:repeat(2,1fr);">
      ${d.cards.map(c=>`<div class="card"><div class="card-title" style="font-size:15px;text-transform:uppercase;letter-spacing:.06em;">${c.title}</div><p style="font-size:13.5px;line-height:1.6;margin:10px 0 0;">${c.text}</p>${c.action?`<div class="callout" style="margin-top:12px;background:var(--negative-bg);color:var(--negative);font-weight:600;">${c.action}</div>`:''}</div>`).join("")}
    </div>
  `;
}

/* ============================================================================
   MERCHANDISE OVERVIEW
============================================================================ */
function renderMerchOverview(){
  return `
    <div class="page-head">
      <div class="eyebrow">Merchandise</div>
      <h1 class="page-title">Q2 2026 Merchandise Performance & Key Insights</h1>
      <p class="page-sub">Merchandise Update — the five defining stories of the quarter.</p>
    </div>
    ${tabRowHTML(MERCH_TABS, "#/merchandise/overview")}

    <div class="insight-grid" style="grid-template-columns:repeat(2,1fr);">
      ${DATA.merchInsights.map(m=>`
        <div class="card">
          <div style="display:flex;align-items:baseline;gap:12px;">
            <span style="font-family:var(--serif);font-size:26px;color:var(--label);font-weight:700;">${m.num}</span>
            <div class="card-title" style="font-size:16px;">${m.title}</div>
          </div>
          <p style="font-size:13.5px;line-height:1.6;margin:10px 0 0;">${m.text}</p>
        </div>`).join("")}
    </div>
  `;
}

/* ============================================================================
   BEST SELLERS / SLOW MOVERS (with product images)
============================================================================ */
function productThumbHTML(item){
  return item.image
    ? `<div class="product-thumb"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>`
    : `<div class="product-thumb empty">No image</div>`;
}
function productRow(item){
  return `<div class="product-row" data-panel="product" data-key="best-${item.rank}">
    <div class="rank">${item.rank}</div>
    ${productThumbHTML(item)}
    <div class="name">${item.name}</div>
    <div class="num">${fmtNum(item.qtyQ2)}</div>
    <div class="num">${fmtM(item.gmvQ2)}</div>
    <div class="num">${item.isNew ? '<span class="pill">New</span>' : growthSpan(item.growth)}</div>
    <div class="num">${item.contribQ2 ? item.contribQ2+'%' : ''}</div>
    <div class="chev">›</div>
  </div>`;
}
function renderBestSellers(){
  const d = DATA.bestSellers;
  return `
    <div class="page-head">
      <div class="eyebrow">Merchandise</div>
      <h1 class="page-title">Best Sellers</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(MERCH_TABS, "#/merchandise/best-sellers")}

    <div class="callout section-block">${d.insight}</div>

    <div class="product-head"><span></span><span></span><span>Article</span><span>Qty Q2'26</span><span>GMV Q2'26 (K)</span><span>YoY</span><span>Contrib.</span><span></span></div>
    <div class="product-list">
      ${d.items.map(i=>productRow(i, false)).join("")}
      <div class="product-row" style="cursor:default;font-weight:700;background:var(--card-tint);">
        <div class="rank"></div><div></div><div class="name">Top 10 Total</div>
        <div class="num">${fmtNum(d.total.qtyQ2)}</div><div class="num">${fmtM(d.total.gmvQ2)}</div>
        <div class="num">${growthSpan(d.total.growth)}</div><div class="num">${d.total.contribQ2}%</div><div class="chev"></div>
      </div>
    </div>
  `;
}
function renderProductDetail(id){
  const rankStr = id.replace("best-", "");
  const src = DATA.bestSellers;
  const item = src.items.find(i => String(i.rank) === rankStr);

  if (!item) return `<div class="callout">Product not found.</div>`;

  const qty = item.qtyQ2;
  const gmv = item.gmvQ2;
  const qtyLY = item.qtyLY;
  const gmvLY = item.gmvLY;

  return `
    <button class="panel-back" data-panel-back="1">‹ Back</button>
    <div class="panel-eyebrow">Best seller · Rank #${item.rank}</div>
    <h2 class="panel-title">${item.name}</h2>

    ${item.image ? `<div class="panel-product-image"><img src="${item.image}" alt="${item.name}"></div>` : ""}

    <div class="panel-kpis">
      <div class="tag-card">
        <div class="t-label">Units Sold</div>
        <div class="t-value" style="font-size:24px;">${fmtNum(qty)}</div>
        ${item.isNew ? '<span class="pill">New article</span>' : growthSpan(item.growth)}
      </div>

      <div class="tag-card">
        <div class="t-label">GMV</div>
        <div class="t-value" style="font-size:24px;">${fmtM(gmv)}</div>
        ${item.contribQ2 ? `<div class="t-compare">${item.contribQ2}% of total GMV</div>` : ""}
      </div>
    </div>

    ${!item.isNew ? `
      <div class="card">
        <div class="card-title">Year-on-Year Comparison</div>

        <div class="table-wrap">
          <table class="data" style="width:100%;min-width:0;">
            <thead>
              <tr>
                <th></th>
                <th>Q2 2026</th>
                <th>Q2 2025</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Units Sold</td>
                <td>${fmtNum(qty)}</td>
                <td>${fmtNum(qtyLY)}</td>
              </tr>

              <tr>
                <td>GMV</td>
                <td>${fmtM(gmv)}</td>
                <td>${fmtM(gmvLY)}</td>
              </tr>

              ${item.contribQ2 !== undefined ? `
                <tr>
                  <td>Contribution to Total GMV</td>
                  <td>${item.contribQ2}%</td>
                  <td>${item.contribLY}%</td>
                </tr>
              ` : ""}
            </tbody>
          </table>
        </div>
      </div>
    ` : `
      <div class="callout">
        New article in Q2 2026 — no Q2 2025 comparison available.
      </div>
    `}
  `;
}

/* ============================================================================
   SIZE ANALYSIS (unchanged figures)
============================================================================ */
function renderSizeAnalysis(){
  const d = DATA.sizeAnalysis;
  return `
    <div class="page-head">
      <div class="eyebrow">Merchandise</div>
      <h1 class="page-title">Size Analysis & Buying Guide</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(MERCH_TABS, "#/merchandise/size-analysis")}

    <div class="two-col section-block">
      <div class="card">
        <div class="card-title">EU Size Distribution</div>
        <div class="card-note">Qty sold, Q2'26 vs Q2'25</div>
        <div class="chart-wrap"><canvas id="chartSize"></canvas></div>
      </div>
      <div>
        <div class="callout" style="margin-bottom:14px;"><strong>⚡ Key shift vs Q2'25:</strong> ${d.keyShift}</div>
        <div class="section-label">Buying Guide for Q3 Delivery</div>
        <div class="tier-list">
          ${d.tiers.map(t=>`
            <div class="tier-chip ${t.color}">
              <div class="name">${t.tier} <span style="font-weight:400;color:var(--label);">${t.range}</span></div>
              <div class="sizes">${t.sizes}</div>
              <div class="note">${t.note}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>

    <div class="section-block">
      <div class="section-label">Size Distribution Table</div>
      <div class="table-wrap"><table class="data">
        <thead><tr><th>Size</th><th>Qty Q2'26</th><th>% Q2'26</th><th>Qty Q2'25</th><th>% Q2'25</th><th>YoY Growth</th><th>Buying Tier</th></tr></thead>
        <tbody>
          ${d.rows.map(r=>`<tr><td>${r.size}</td><td>${fmtNum(r.qtyQ2)}</td><td>${r.pctQ2}%</td><td>${fmtNum(r.qtyLY)}</td><td>${r.pctLY}%</td>${cellGrowth(r.growth)}<td>${r.tier}</td></tr>`).join("")}
          <tr class="total-row"><td>Total</td><td>${fmtNum(d.totalRow.qtyQ2)}</td><td>${d.totalRow.pctQ2}%</td><td>${fmtNum(d.totalRow.qtyLY)}</td><td>${d.totalRow.pctLY}%</td>${cellGrowth(d.totalRow.growth)}<td></td></tr>
        </tbody>
      </table></div>
    </div>
  `;
}
function initSizeChart(){
  killChart("size");
  const d = DATA.sizeAnalysis;
  charts.size = new Chart(document.getElementById("chartSize"), {
    type:"bar",
    data:{ labels: d.rows.map(r=>r.size),
      datasets:[
        { label:"Qty Q2'26", data: d.rows.map(r=>r.qtyQ2), backgroundColor:CBRAND },
        { label:"Qty Q2'25", data: d.rows.map(r=>r.qtyLY), backgroundColor:CGOLD },
      ]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{position:"bottom", labels:{boxWidth:10,font:{size:11}}}},
      scales:{ y:{ grid:{color:CLINE} }, x:{ grid:{display:false}, ticks:{font:{size:10}} } } }
  });
}
/* ============================================================================
   PROMOTIONS
============================================================================ */

function renderPromoOverview(){
  const d = DATA.promotions.overview;

  return `
    <div class="page-head">
      <div class="eyebrow">Promotions</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>

    ${tabRowHTML(BUSINESS_TABS, "#/business/promotion-overview")}

    <div class="section-block">
      <div class="table-wrap">
        <table class="data promotion-table">
          <thead>
            <tr>
              <th>Promotion</th>
              <th>Period</th>
              <th>GMV (USD K)</th>
              <th>ATV (USD)</th>
              <th>Total GMV Store<br>Jun 4–Jul 5 (USD K)</th>
              <th>Total GMV Store<br>Prev. Period (USD K)</th>
              <th>GMV Growth</th>
            </tr>
          </thead>

          <tbody>
            ${d.rows.map(r => `
              <tr>
                <td>${r.promotion}</td>
                <td>${r.period}</td>
                <td>${r.gmv}</td>
                <td>${r.atv}</td>
                <td>${r.totalGmv}</td>
                <td>${r.priorGmv}</td>
                <td class="${r.growth >= 0 ? 'pos' : 'neg'}">
                  ${r.growth >= 0 ? '+' : ''}${r.growth.toFixed(1)}%
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="footnote">${d.footnote}</div>
    </div>

    <div class="section-block">
      <div class="promotion-insights">
        <ul class="bullet-list">
          ${d.insights.map(text => `<li>${text}</li>`).join("")}
        </ul>
      </div>
    </div>

    <div class="chart-section">
    <div class="chart-card">
      <div class="chart-header">
        <div>
          <h3>Promotion Contribution</h3>
          <p>Contribution of each promotion to total GMV Jun 4–Jul 5</p>
        </div>
      </div>

      <div class="chart-container promo-pie-container">
        <canvas id="promoContributionChart"></canvas>
      </div>
    </div>
    </div>         
  `;
}
function initPromoOverviewChart() {
  const d = DATA.promotions.overview;

  killChart("promoContribution");

  const canvas = document.getElementById("promoContributionChart");

  if (!canvas) return;

  charts.promoContribution = new Chart(canvas, {
    type: "pie",

    plugins: [ChartDataLabels],

    data: {
      labels: d.contributionChart.map(item => item.label),

      datasets: [{
        data: d.contributionChart.map(item => item.value),
        backgroundColor: [
          CBRAND,
          CGOLD,
          CPOS,
          CNEG,
          CNAVY,
          "#D8A48F"
        ],
        borderWidth: 2,
        borderColor: "#FFFFFF"
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 12,
            padding: 14,
            font: {
              size: 11
            }
          }
        },

      datalabels: {
        color: "#FFFFFF",

        font: (context) => {
          const value = context.dataset.data[context.dataIndex];

          if (value < 1) {
            return {
              size: 8,
              weight: "bold"
            };
          }

          if (value < 2) {
            return {
              size: 9,
              weight: "bold"
            };
          }

          return {
            size: 11,
            weight: "bold"
          };
        },

        textStrokeColor: "#000000",
        textStrokeWidth: 1,

        formatter: (value) => `${value}%`,

        anchor: (context) => {
          const value = context.dataset.data[context.dataIndex];

          return value >= 80 ? "center" : "end";
        },

        align: (context) => {
          const value = context.dataset.data[context.dataIndex];

          return value >= 80 ? "center" : "center";
        },

        offset: (context) => {
          const value = context.dataset.data[context.dataIndex];

          if (value >= 80) return 0;

          if (value < 1) return -8;
          if (value < 2) return -10;
          if (value < 4) return -12;
          if (value < 8) return -14;

          return -16;
        },

        clamp: true,
        clip: true,

        display: true
      },

        tooltip: {
          callbacks: {
            label: (c) => `${c.label}: ${c.parsed}%`
          }
        }
      }
    }
  });
}

function imgOrPending(src, alt, cls){
  if (src) return `<img src="${src}" alt="${esc(alt)}" loading="lazy">`;
  return `<div class="media-pending">Image pending upload</div>`;
}
function statCardsHTML(stats){
  return `<div class="kpi-grid" style="grid-template-columns:repeat(${Math.min(stats.length,4)},1fr);">
    ${stats.map(s => `
      <div class="tag-card">
        <div class="t-label">${s.label}</div>
        <div class="t-value" style="font-size:${s.value.length>7?'20px':'26px'};">${s.value}</div>
        ${s.detail ? `<div class="t-compare">${s.detail}</div>` : (s.text ? `<div class="t-compare">${s.text}</div>` : "")}
      </div>`).join("")}
  </div>`;
}
function mediaTiersHTML(tiers){
  return `<div class="media-tier-grid">
    ${tiers.map(t => `
      <div class="media-tier-card">
        <div class="media-tier-title">${t.tier}</div>
        <ul class="media-tier-list">
          ${t.outlets.map(o => {
            const name = typeof o === "string" ? o : o.name;
            const link = typeof o === "string" ? null : o.link;

            return link
              ? `<li><a href="${link}" target="_blank" rel="noopener noreferrer">${name}</a></li>`
              : `<li>${name}</li>`;
          }).join("")}
        </ul>
      </div>
    `).join("")}
  </div>`;
}
function kolGridHTML(kols){
  return `<div class="kol-grid">
    ${kols.map(k => `
      <div class="kol-card">
        <div class="kol-photo">${imgOrPending(k.image, k.name)}</div>
        <div class="kol-name">${k.name}</div>
        <div class="kol-followers">${k.followers} followers</div>
        <div class="kol-profession">${k.profession}</div>
        ${k.link ? `<a class="link-btn" href="${k.link}" target="_blank" rel="noopener noreferrer">View post ↗</a>` : ""}
      </div>`).join("")}
  </div>`;
}
function linkButtonsHTML(links){
  // links: [{label, url}]
  return `<div class="link-btn-row">${links.filter(l=>l.url).map(l=>
    `<a class="link-btn" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`
  ).join("")}</div>`;
}
function galleryHTML(images, altPrefix){
  return `<div class="gallery-grid">
    ${images.map((src,i) => `<div class="gallery-cell">${imgOrPending(src, `${altPrefix} ${i+1}`)}</div>`).join("")}
  </div>`;
}
function linkedGalleryHTML(items, altText = "Linked image") {
  return `
    <div class="linked-gallery-grid">
      ${items.map((item, i) => `
        <div class="linked-gallery-item">
          <div class="linked-gallery-image">
            <img src="${item.image}" alt="${altText} ${i + 1}" loading="lazy">
          </div>
          ${item.link && !item.link.startsWith("YOUR_")
            ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="link-btn">View here ↗</a>`
            : ""
          }
        </div>
      `).join("")}
    </div>
  `;
}
 
function mediaNewsLinksHTML(links = []){
  return `
    <div class="media-news-links">
      ${links
        .filter(x => x && x.url)
        .map(x => `
          <a
            href="${x.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="media-news-link"
          >
            <span>${x.outlet}</span>
            <span>View news here ↗</span>
          </a>
        `).join("")}
    </div>
  `;
}

/* ============================================================================
   MARKETING — CAMPAIGNS
============================================================================ */
function renderFeelTheComfort(){
  const d = DATA.marketing.campaigns.feelTheComfort;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing · Campaigns</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.description}</p>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/campaigns/feel-the-comfort")}
 
    <div class="section-block">
      <div class="section-label">Campaign KPIs</div>
      ${statCardsHTML(d.kpis)}
    </div>
 
    <div class="section-block">
      <div class="section-label">KOL Highlight</div>
      ${kolGridHTML(d.kols)}
    </div>
 
    <div class="section-block">
      <div class="card">
        <div class="card-title">${d.globalCampaign.title}</div>

        <p style="font-size:13.5px;line-height:1.6;margin:8px 0 16px;">
          ${d.globalCampaign.text}
        </p>

        <div class="campaign-detail">

          <div class="campaign-metrics">
            ${d.globalCampaign.stats.map(s => `
              <div class="metric-card">
                <div class="t-label">${s.label}</div>
                <div class="t-value">${s.value}</div>
              </div>
            `).join("")}
          </div>

          <div class="campaign-image">
            <img
              src="image/Nayeon.png"
              alt="Feel the Comfort Campaign"
            >
          </div>

        </div>
      </div>
    </div>
 
    <div class="section-block">
      <div class="section-label">Media Coverage</div>
      ${mediaTiersHTML(d.globalCampaign.media)}
    </div>
  `;
}
 
function renderMothersDay(){
  const d = DATA.marketing.campaigns.mothersDay;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing · Campaigns</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.text}</p>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/campaigns/mothers-day")}
 
    <div class="two-col section-block">
      <div class="hero-media">${imgOrPending(d.heroImage, d.title)}</div>
      <div class="card">
        <div class="card-title">Campaign Mechanic</div>
        <p style="font-size:14px;font-weight:600;margin:8px 0 14px;">${d.mechanic}</p>
        <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr);">
          <div class="tag-card"><div class="t-label">Campaign Period</div><div class="t-value" style="font-size:20px;">${d.period}</div></div>
          <div class="tag-card"><div class="t-label">Independent-Store Sales</div><div class="t-value" style="font-size:18px;">${d.sales.idr}</div><div class="t-compare">${d.sales.usd}</div></div>
        </div>
      </div>
    </div>
  `;
}
 
function renderSixthAnniversary(){
  const d = DATA.marketing.campaigns.sixthAnniversary;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing · Campaigns</div>
      <h1 class="page-title">${d.title}</h1>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/campaigns/sixth-anniversary")}
 
    <div class="two-col section-block">
      <div class="hero-media">${imgOrPending(d.heroImage, d.title)}</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${d.items.map(i => `
          <div class="callout"><strong>${i.label}:</strong> ${i.text}</div>`).join("")}
      </div>
    </div>
  `;
}
 
/* ============================================================================
   MARKETING — EVENTS
============================================================================ */
function renderPim2Opening(){
  const d = DATA.marketing.events.pim2GrandOpening;
  const nag = d.nagitaActivation;
  const kol = d.kolHighlight;
  const med = d.media;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing · Events</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/events/pim2-opening")}
 
    <div class="section-block">
      ${galleryHTML(d.galleryImages, "PIM 2 Grand Opening")}
    </div>
 
    <div class="section-block">
      <div class="insight-grid" style="grid-template-columns:repeat(3,1fr);">
        ${d.highlights.map(h=>`
          <div class="insight-card">
            <div class="tag">${h.label}</div>
            <p>${h.text}</p>
          </div>`).join("")}
      </div>
    </div>
 
    <div class="hairline"></div>
 
    <div class="section-block">
      <div class="section-label">${nag.title}</div>
      <div class="two-col">
        <div class="hero-media">${imgOrPending(nag.image, "Nagita Slavina KOL activation")}</div>
        <div>
          <p style="font-size:13.5px;line-height:1.65;margin-bottom:14px;">${nag.text}</p>
          ${statCardsHTML(nag.stats)}
        </div>
      </div>
      ${linkButtonsHTML([
        { label: nag.instagramLinkLabel, url: nag.instagramLink },
        { label: nag.youtubeLinkLabel, url: nag.youtubeLink },
      ])}
    </div>
 
    <div class="hairline"></div>
 
    <div class="section-block">
      <div class="section-label">${kol.title}</div>
      <p style="font-size:13.5px;line-height:1.65;margin-bottom:14px;">${kol.text}</p>
      ${statCardsHTML(kol.stats)}
      <div style="margin-top:16px;">${linkedGalleryHTML(d.kolHighlight.gallery, "PIM 2 KOL post")}</div>
    </div>
 
    <div class="hairline"></div>
 
    <div class="section-block">
      <div class="section-label">${med.title}</div>
      ${galleryHTML(d.media.images, "PIM 2 media coverage")}
      <div style="margin-top:18px;">
      ${statCardsHTML(med.stats)}
      </div>
      <div style="margin-top:16px;">
      ${mediaTiersHTML(med.tiers)}
      </div>
    </div>
  `;
}
 
function renderSemarangOpening(){
  const d = DATA.marketing.events.semarangGrandOpening;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing · Events</div>
      <h1 class="page-title">${d.title}</h1>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/events/semarang-opening")}
 
    <div class="section-block">
      ${galleryHTML(d.galleryImages, "Semarang Grand Opening")}
    </div>
 
    <div class="section-block">
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${d.items.map(i => `<div class="callout"><strong>${i.label}:</strong> ${i.text}</div>`).join("")}
      </div>
    </div>
      
    <div class="section-block semarang-kol-highlight">

      <div class="page-head" style="margin-bottom:20px;">
        <div class="eyebrow">KOL Highlight</div>
        <p class="page-sub">${d.kolHighlight.subtitle}</p>
      </div>

      <div class="semarang-kol-layout">

        <div class="semarang-kol-copy">

          <div class="semarang-kol-story">
            <div class="section-label">${d.kolHighlight.preEvent.title}</div>
            <p>${d.kolHighlight.preEvent.text}</p>
          </div>

          <div class="semarang-kol-story">
            <div class="section-label">${d.kolHighlight.grandOpening.title}</div>
            <p>${d.kolHighlight.grandOpening.text}</p>
          </div>

          <div class="semarang-kol-story result">
            <div class="section-label">${d.kolHighlight.result.title}</div>
            <p>${d.kolHighlight.result.text}</p>
          </div>

        </div>

        <div class="semarang-kol-images">
          ${d.kolHighlight.images.map(img => `
            <div class="semarang-kol-image">
              <img src="${img}" alt="Semarang Grand Opening KOL Highlight" loading="lazy">
            </div>
          `).join("")}
        </div>

      </div>

    </div>  
  `;
}
 
/* ============================================================================
   MARKETING — PRINTED MEDIA
============================================================================ */
function renderPrintedMedia(){
  const d = DATA.marketing.printedMedia.herWorld;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing · Printed Media</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.text}</p>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/printed-media")}
 
    <div class="two-col section-block">
      <div class="hero-media">${imgOrPending(d.coverImage, "Her World Indonesia cover")}</div>
      <div class="hero-media">${imgOrPending(d.spreadImage, "Her World Indonesia editorial spread")}</div>
    </div>
 
    <div class="section-block">
      <div class="insight-grid" style="grid-template-columns:repeat(2,1fr);">
        ${d.stats.map(s=>`
          <div class="insight-card">
            <div class="tag">${s.label}${s.value ? " — "+s.value : ""}</div>
            <p>${s.text}</p>
          </div>`).join("")}
      </div>
    </div>
  `;
}
 
/* ============================================================================
   MARKETING — ROI
============================================================================ */
function renderMarketingRoi(){
  const d = DATA.marketing.roi;
  return `
    <div class="page-head">
      <div class="eyebrow">Marketing</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(MARKETING_TABS, "#/marketing/roi")}
 
    <div class="section-block">
      <div class="table-wrap"><table class="data">
        <thead><tr><th>Period</th><th>Total Sales</th><th>Reported ROI</th><th>Sales per $1 Spent</th></tr></thead>
        <tbody>
          ${d.rows.map(r=>`<tr><td>${r.period}</td><td>${r.totalSales}</td><td style="font-weight:700;color:var(--brand-deep);">${r.reportedRoi}</td><td>${r.salesPerUnit}</td></tr>`).join("")}
        </tbody>
      </table></div>
    </div>
 
    <div class="section-block">
      <div class="card">
        <div class="card-title">Total Sales by Month</div>
        <div class="chart-wrap short"><canvas id="chartMarketingRoi"></canvas></div>
      </div>
    </div>
  `;
}
function initMarketingRoiChart(){
  killChart("marketingRoi");
  const d = DATA.marketing.roi;
  const nums = d.rows.map(r => parseFloat(r.totalSales.replace(/[^0-9.]/g, "")));
  charts.marketingRoi = new Chart(document.getElementById("chartMarketingRoi"), {
    type: "bar",
    data: { labels: d.rows.map(r=>r.period), datasets: [{ data: nums, backgroundColor: CBRAND }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label:(c)=>`Total Sales: $${c.parsed.y}`}}},
      scales:{ y:{ grid:{color:CLINE} }, x:{ grid:{display:false} } } }
  });
}
 
/* ============================================================================
   SOCIAL MEDIA
============================================================================ */
function postCardsHTML(posts, opts={}){
  // opts.metricKeys: array of {key,label}
  return `<div class="post-card-grid">
    ${posts.map(p => `
      <div class="post-card">
        <div class="post-card-media">${imgOrPending(p.image, p.name || p.content)}</div>
        <div class="post-card-name">${p.name || p.content}</div>
        <div class="post-card-metrics">
          ${opts.metricKeys.map(m => `<div class="pcm"><span class="pcm-label">${m.label}</span><span class="pcm-val">${p[m.key]}</span></div>`).join("")}
        </div>
        ${p.link ? `<a class="link-btn" href="${p.link}" target="_blank" rel="noopener noreferrer">View post ↗</a>` : ""}
      </div>`).join("")}
  </div>`;
}
 
function renderSocialSummary(){
  const d = DATA.socialMedia.q2Summary;
  return `
    <div class="page-head">
      <div class="eyebrow">Social Media</div>
      <h1 class="page-title">${d.title}</h1>
    </div>
    ${tabRowHTML(SOCIAL_TABS, "#/social/summary")}
 
    <div class="section-block">

    <div class="card">
     <div class="card-title">Instagram</div>

      <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:16px;">
        <div class="tag-card">
          <div class="t-label">Avg Impressions</div>
          <div class="t-value" style="font-size:18px;">${d.instagram.avgImpressions}</div>
        </div>

        <div class="tag-card">
          <div class="t-label">Avg Account Reach</div>
          <div class="t-value" style="font-size:18px;">${d.instagram.avgAccountReach}</div>
        </div>

        <div class="tag-card">
          <div class="t-label">Avg Total Followers</div>
          <div class="t-value" style="font-size:18px;">${d.instagram.avgTotalFollowers}</div>
        </div>
      </div>

      <div class="section-label" style="margin-bottom:8px;">
        Top Performing Instagram Posts
      </div>

      <div class="table-wrap">
        <table class="data" style="min-width:0;">
          <thead>
            <tr>
              <th>Post</th>
              <th>Total Views</th>
              <th>Total Engagement</th>
              <th>ER</th>
            </tr>
          </thead>
          <tbody>
            ${d.instagram.topPosts.map(p=>`
              <tr>
                <td>${p.post}</td>
                <td>${p.totalViews}</td>
                <td>${p.totalEngagement}</td>
                <td>${p.er}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card" style="margin-top:20px;">
      <div class="card-title">TikTok</div>

      <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:16px;">
        <div class="tag-card">
          <div class="t-label">Avg Post Views</div>
          <div class="t-value" style="font-size:18px;">${d.tiktok.avgPostViews}</div>
        </div>

        <div class="tag-card">
          <div class="t-label">Avg Profile Views</div>
          <div class="t-value" style="font-size:18px;">${d.tiktok.avgProfileViews}</div>
        </div>

        <div class="tag-card">
          <div class="t-label">Avg Total Followers</div>
          <div class="t-value" style="font-size:18px;">${d.tiktok.avgTotalFollowers}</div>
        </div>
      </div>

      <div class="section-label" style="margin-bottom:8px;">
        Top Performing TikTok Posts
      </div>

      <div class="table-wrap">
        <table class="data" style="min-width:0;">
          <thead>
            <tr>
              <th>Content</th>
              <th>Total Views</th>
              <th>Likes</th>
              <th>Share</th>
              <th>ER</th>
            </tr>
          </thead>
          <tbody>
            ${d.tiktok.topPosts.map(p=>`
              <tr>
                <td>${p.content}</td>
                <td>${p.totalViews}</td>
                <td>${p.likes}</td>
                <td>${p.share}</td>
                <td>${p.er}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card" style="margin-top:20px;">
     <div class="section-block">
      <div class="callout brand"><strong>Social Media Learning</strong><ul class="bullet-list" style="margin-top:10px;color:#F5E6E1;">${d.learnings.map(l=>`<li style="color:#F5E6E1;">${l}</li>`).join("")}</ul></div>
    </div>
  `;
}
 
function renderInstagramGrowth(){
  const d = DATA.socialMedia.instagramGrowth;
  return `
    <div class="page-head">
      <div class="eyebrow">Social Media</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(SOCIAL_TABS, "#/social/instagram-growth")}
 
    <div class="section-block">
      <div class="table-wrap"><table class="data">
        <thead><tr><th>Metric</th><th>Q1 2026 (Jan–Mar)</th><th>Q2 2026 (Apr–Jun)</th><th>Change</th><th>% Change</th></tr></thead>
        <tbody>
          ${d.rows.map(r=>`<tr><td>${r.metric}</td><td>${r.q1}</td><td>${r.q2}</td><td>▲ ${r.change}</td>${cellGrowth(r.pctChange)}</tr>`).join("")}
        </tbody>
      </table></div>
    </div>
 
    <div class="section-block">
      <div class="callout"><strong>Highlights</strong><ul class="bullet-list" style="margin-top:10px;">${d.highlights.map(h=>`<li>${h}</li>`).join("")}</ul></div>
    </div>
  `;
}
 
function renderInstagramPosts(){
  const d = DATA.socialMedia.instagramTopPosts;
  return `
    <div class="page-head">
      <div class="eyebrow">Social Media</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(SOCIAL_TABS, "#/social/instagram-posts")}
 
    <div class="section-block">
      ${postCardsHTML(d.posts, { metricKeys: [
        { key: "totalViews", label: "Total Views" },
        { key: "totalEngagement", label: "Total Engagement" },
        { key: "er", label: "ER" },
      ]})}
    </div>
  `;
}
 
function renderTiktokGrowth(){
  const d = DATA.socialMedia.tiktokGrowth;
  return `
    <div class="page-head">
      <div class="eyebrow">Social Media</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(SOCIAL_TABS, "#/social/tiktok-growth")}
  
    <div class="section-block">
      <div class="table-wrap"><table class="data" style="min-width:0;">
        <thead><tr><th>Metric</th><th>Average, Q2 2026 (Apr–Jun)</th></tr></thead>
        <tbody>${d.rows.map(r=>`<tr><td>${r.metric}</td><td style="font-weight:700;color:var(--brand-deep);">${r.value}</td></tr>`).join("")}</tbody>
      </table></div>
    </div>
 
    <div class="section-block">
      <div class="callout"><strong>Highlights</strong><ul class="bullet-list" style="margin-top:10px;">${d.highlights.map(h=>`<li>${h}</li>`).join("")}</ul></div>
    </div>
  `;
}
 
function renderTiktokPosts(){
  const d = DATA.socialMedia.tiktokTopPosts;
  return `
    <div class="page-head">
      <div class="eyebrow">Social Media</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(SOCIAL_TABS, "#/social/tiktok-posts")}
 
    <div class="section-block">
      ${postCardsHTML(d.posts, { metricKeys: [
        { key: "totalViews", label: "Total Views" },
        { key: "likes", label: "Likes" },
        { key: "share", label: "Share" },
        { key: "er", label: "ER" },
      ]})}
    </div>
  `;
}

/* ============================================================================
   MEDIA HELPERS — honest "pending upload" placeholder, never a fake path
============================================================================ */
function mediaSlot(src, alt, opts={}){
  const cls = opts.cls || "";
  const h = opts.height ? `style="height:${opts.height};"` : "";
  if (src) return `<div class="media-slot ${cls}" ${h}><img src="${src}" alt="${esc(alt)}" loading="lazy"></div>`;
  return `<div class="media-slot placeholder ${cls}" ${h}><span>Image pending upload${alt ? ' — ' + esc(alt) : ''}</span></div>`;
}
 
/* ============================================================================
   VM UPDATE
============================================================================ */
function renderVMTraining(){
  const d = DATA.visualMerchandising.training;
  return `
    <div class="page-head">
      <div class="eyebrow">VM Update</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">From VM guideline refresh to hands-on store execution, closing the loop with a measurable scorecard result.</p>
    </div>
    ${tabRowHTML(VM_TABS, "#/vm-update/training")}
 
    <div class="two-col section-block">
      ${mediaSlot(d.image, d.imageAlt, {height:"auto"})}
      <div class="vm-step-flow">
        ${d.steps.map((s,i)=>`
          <div class="vm-step-card">
            <div class="vm-step-num">${s.step}</div>
            <div>
              <div class="vm-step-label">${s.label}</div>
              <div class="vm-step-text">${s.text}</div>
            </div>
          </div>
          ${i < d.steps.length-1 ? `<div class="vm-step-arrow">→</div>` : ``}
        `).join("")}
      </div>
    </div>
 
    <div class="section-block">
      <div class="vm-result-card">
        <div class="vm-result-label">${d.result.label}</div>
        <div class="vm-result-text">${d.result.text}</div>
        <div class="vm-result-bars">
          <div class="vm-result-bar-item">
            <div class="vm-result-bar-track"><div class="vm-result-bar-fill june" style="width:${d.result.juneScore}%;"></div></div>
            <div class="vm-result-bar-caption">June — ${d.result.juneScore}</div>
          </div>
          <div class="vm-result-bar-item">
            <div class="vm-result-bar-track"><div class="vm-result-bar-fill july" style="width:${d.result.julyScore}%;"></div></div>
            <div class="vm-result-bar-caption">July — ${d.result.julyScore} <span class="pos">▲ +${d.result.changePct}%</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
}
 
/* ============================================================================
   OPERATIONAL UPDATE
============================================================================ */
function renderOperationalKeyHighlights(){
  const d = DATA.operational.keyHighlights;
  return `
    <div class="page-head">
      <div class="eyebrow">Operational Update</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(OPERATIONAL_TABS, "#/operational/key-highlights")}
 
    <div class="insight-grid" style="grid-template-columns:repeat(3,1fr);">
      ${d.cards.map(c=>`
        <div class="card">
          <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px;">
            <span style="font-family:var(--serif);font-size:22px;color:var(--label);font-weight:700;">${c.num}</span>
            <div class="card-title" style="font-size:15px;">${c.title}</div>
          </div>
          <p style="font-size:13px;line-height:1.6;margin:0 0 12px;">${c.text}</p>
          <div class="flag-callout" style="background:var(--card-tint);border-left-color:var(--positive);">
            <strong>Impact:</strong> ${c.impact}
          </div>
        </div>`).join("")}
    </div>
 
    <div class="section-block">
      <div class="callout brand"><strong>${d.summary}</strong></div>
    </div>
  `;
}
 
function renderOperationalActivities(){
  const d = DATA.operational.activities;
  return `
    <div class="page-head">
      <div class="eyebrow">Operational Update</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">Six workstreams Store Managers ran this quarter to lift team capability and store performance.</p>
    </div>
    ${tabRowHTML(OPERATIONAL_TABS, "#/operational/activities")}
 
    <div class="two-col section-block">
      <div class="milestone-list">
        ${d.items.map(it=>`
          <div class="milestone-card">
            <div class="milestone-num">${it.num}</div>
            <div>
              <div class="milestone-title">${it.title}</div>
              <div class="milestone-text">${it.text}</div>
            </div>
          </div>`).join("")}
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;">
        ${mediaSlot(d.image, d.imageAlt, {height:"180px"})}
        <div class="card">
          <div class="card-title" style="font-size:15px;">Execution Model</div>
          <p style="font-size:13px;line-height:1.6;margin:8px 0 0;">${d.executionModel}</p>
        </div>
      </div>
    </div>
  `;
}
 
/* ============================================================================
   PEOPLE UPDATE (renamed from HR)
============================================================================ */
function renderPeopleManpower(){
  const d = DATA.people.manpower;
  return `
    <div class="page-head">
      <div class="eyebrow">People Update</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(PEOPLE_TABS, "#/people/manpower")}
 
    <div class="two-col section-block">
      <div class="card">
        <div class="card-title">Placement</div>
        <div class="card-note">March vs June headcount</div>
        <div class="chart-wrap"><canvas id="chartManpower"></canvas></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr);">
          <div class="tag-card"><div class="t-label">Total — March (Q1)</div><div class="t-value" style="font-size:26px;">${d.totalMarch}</div><div class="t-compare">Head Quarter + Store</div></div>
          <div class="tag-card"><div class="t-label">Total — June (Q2)</div><div class="t-value" style="font-size:26px;">${d.totalJune}</div>${growthPillHTML(d.growthPct)}</div>
        </div>
        <div class="table-wrap"><table class="data" style="width:100%;min-width:0;">
          <thead><tr><th>Placement</th><th>March</th><th>June</th></tr></thead>
          <tbody>
            ${d.categories.map(c=>`<tr><td>${c.label}</td><td>${c.march}</td><td>${c.june}</td></tr>`).join("")}
            <tr class="total-row"><td>Total</td><td>${d.totalMarch}</td><td>${d.totalJune}</td></tr>
          </tbody>
        </table></div>
        <div class="callout"><strong>+${d.growthPct}% headcount growth.</strong> ${d.summary}</div>
      </div>
    </div>
  `;
}
function initManpowerChart(){
  killChart("manpower");
  const d = DATA.people.manpower;
  const el = document.getElementById("chartManpower");
  if (!el) return;
  charts.manpower = new Chart(el, {
    type: "bar",
    data: {
      labels: d.categories.map(c=>c.label),
      datasets: [
        { label: "March", data: d.categories.map(c=>c.march), backgroundColor: "#3D6B7D" },
        { label: "June", data: d.categories.map(c=>c.june), backgroundColor: "#D08A4F" },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } } },
      scales: { y: { grid: { color: CLINE }, beginAtZero: true }, x: { grid: { display: false } } },
    }
  });
}
 
function pipelineCardHTML(card){
  return `
    <div class="pipeline-card">
      <div class="pipeline-role">${card.role}${card.isNew ? '<span class="pill" style="margin-left:8px;">New</span>' : ''}</div>
      ${card.detail ? `<div class="pipeline-detail">${card.detail}</div>` : ''}
      ${card.timing ? `<div class="pipeline-timing">${card.timing}</div>` : ''}
    </div>`;
}
function renderPeoplePipeline(){
  const d = DATA.people.pipeline;
  return `
    <div class="page-head">
      <div class="eyebrow">People Update</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">Confirmed hires, upcoming pipeline, and team changes for Q3.</p>
    </div>
    ${tabRowHTML(PEOPLE_TABS, "#/people/pipeline")}
 
    <div class="pipeline-grid">
      <div class="pipeline-col">
        <div class="pipeline-col-head onboard">
          <div class="pipeline-col-title">${d.onBoard.label}</div>
          <div class="pipeline-col-note">${d.onBoard.note}</div>
        </div>
        ${d.onBoard.cards.map(pipelineCardHTML).join("")}
      </div>
      <div class="pipeline-col">
        <div class="pipeline-col-head pipeline">
          <div class="pipeline-col-title">${d.pipeline.label}</div>
          <div class="pipeline-col-note">${d.pipeline.note}</div>
        </div>
        ${d.pipeline.cards.map(pipelineCardHTML).join("")}
      </div>
      <div class="pipeline-col">
        <div class="pipeline-col-head exit">
          <div class="pipeline-col-title">${d.exit.label}</div>
          <div class="pipeline-col-note">${d.exit.note}</div>
        </div>
        ${d.exit.cards.map(pipelineCardHTML).join("")}
      </div>
    </div>
 
    <div class="section-block">
      <div class="insight-grid" style="grid-template-columns:1fr;">
        <div class="insight-card">
          <div class="tag">Q3 Focus</div>
          <ul class="bullet-list" style="margin-top:6px;">${d.focusNotes.map(t=>`<li>${t}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
 
    <div class="section-block">
      <div class="callout brand"><strong>Brand pedigree joining VIVAIA:</strong> ${d.brandPedigree.join(" · ")}</div>
    </div>
  `;
}
 
/* ============================================================================
   Q3 STRATEGY & PLAN
============================================================================ */
function priorityPill(p){
  const cls = p === "High" ? "high" : p === "Medium" ? "medium" : "low";
  return `<span class="priority-pill ${cls}">${p}</span>`;
}
 
function renderQ3ActionPlan(){
  const d = DATA.q3Strategy.actionPlan;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/action-plan")}
 
    <div class="table-wrap section-block"><table class="data">
      <thead><tr><th>Priority</th><th>Pillar</th><th>Action</th><th>KPI Target</th><th>Owner</th><th>When</th></tr></thead>
      <tbody>
        ${d.rows.map(r=>`<tr>
          <td>${priorityPill(r.priority)}</td>
          <td style="text-align:left;font-weight:600;">${r.pillar}</td>
          <td style="text-align:left;white-space:normal;max-width:320px;">${r.action}</td>
          <td style="text-align:left;color:var(--positive);font-weight:600;white-space:normal;">${r.kpiTarget}</td>
          <td>${r.owner}</td>
          <td>${r.when}</td>
        </tr>`).join("")}
      </tbody>
    </table></div>
    <div class="callout brand" style="text-align:center;font-style:italic;">${d.footer}</div>
  `;
}
 
function renderQ3TrainingPlan(){
  const d = DATA.q3Strategy.trainingPlan;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/training-plan")}
 
    <div class="table-wrap section-block"><table class="data">
      <thead><tr><th>Priority</th><th>Training Module</th><th>Format, Audience & Cadence</th><th>Timing</th><th>How We Measure It</th></tr></thead>
      <tbody>
        ${d.rows.map(r=>`<tr>
          <td>${priorityPill(r.priority)}</td>
          <td style="text-align:left;white-space:normal;max-width:220px;"><strong>${r.module}</strong><br><span style="color:var(--gold);font-size:11.5px;">→ ${r.linkedPillar}</span></td>
          <td style="text-align:left;white-space:normal;max-width:260px;">${r.format}<br><span style="color:var(--label);font-size:11.5px;font-style:italic;">${r.audience}</span></td>
          <td style="text-align:left;white-space:normal;">${r.timing}</td>
          <td style="text-align:left;color:var(--positive);font-weight:600;white-space:normal;max-width:260px;">${r.measure}</td>
        </tr>`).join("")}
      </tbody>
    </table></div>
    <div class="callout brand" style="text-align:center;font-style:italic;">${d.footer}</div>
  `;
}
 
function renderQ3LoyalCustomer(){
  const d = DATA.q3Strategy.loyalCustomer;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/loyal-customer")}
 
    <div class="insight-grid" style="grid-template-columns:repeat(3,1fr);">
      ${d.cards.map(c=>`
        <div class="card" style="border-left:3px solid ${c.color==='red'?'var(--negative)':c.color==='gold'?'var(--gold)':'var(--positive)'};">
          <div class="card-title" style="font-size:14px;">${c.title}</div>
          <p style="font-size:12.5px;line-height:1.6;margin:8px 0 0;">${c.text}</p>
        </div>`).join("")}
    </div>
 
    <div class="section-block">
      <div class="section-label">Session Photos</div>
      <div class="media-row">
        ${d.images.map((img,i)=>mediaSlot(img, `Loyal Customer Event photo ${i+1}`, {height:"160px"})).join("")}
      </div>
    </div>
  `;
}
 
function renderQ3LuxuryExperience(){
  const d = DATA.q3Strategy.luxuryExperience;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan</div>
      <h1 class="page-title">${d.title}</h1>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/luxury-experience")}
 
    <div class="section-block">
      <div class="callout">
        <strong>Objective:</strong>
        <ul class="bullet-list" style="margin-top:8px;">${d.objectives.map(o=>`<li>${o}</li>`).join("")}</ul>
      </div>
    </div>
 
    <div class="two-col section-block">
      <div class="card">
        <div class="card-title" style="font-size:15px;">${d.uniform.title}</div>
        <div class="media-row" style="margin-top:12px;">
          ${mediaSlot(d.uniform.beforeImage, "Staff uniform — before", {height:"200px"})}
          ${mediaSlot(d.uniform.afterImage, "Staff uniform — after", {height:"200px"})}
        </div>
      </div>
      <div class="card">
        <div class="card-title" style="font-size:15px;">${d.hospitality.title}</div>
        <div style="margin-top:12px;">${mediaSlot(d.hospitality.image, "Store hospitality amenity tray", {height:"200px"})}</div>
      </div>
    </div>
  `;
}
 
function renderQ3ExpansionPlan(){
  const d = DATA.q3Strategy.expansionPlan;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.text}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/expansion-plan")}
 
    <div class="two-col section-block">
      ${mediaSlot(d.mapImage, "Indonesia expansion map — Open vs Plan stores", {height:"auto"})}
      <div class="table-wrap"><table class="data" style="width:100%;min-width:0;">
        <thead><tr><th>Area</th><th>Stores</th><th>Status</th></tr></thead>
        <tbody>
          ${d.locations.map(l=>`<tr><td>${l.area}</td><td>${l.count}</td><td><span class="priority-pill ${l.status==='Open'?'low':'medium'}">${l.status}</span></td></tr>`).join("")}
        </tbody>
      </table></div>
    </div>
  `;
}
 
function renderQ3ExpansionPlan(){
  const d = DATA.q3Strategy.expansionPlan;
  const m = DATA.q3Strategy.expansionMakassar;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.text}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/expansion-plan")}
 
    <div class="two-col section-block">
      ${mediaSlot(d.mapImage, "Indonesia expansion map — Open vs Plan stores", {height:"auto"})}
      <div class="table-wrap"><table class="data" style="width:100%;min-width:0;">
        <thead><tr><th>Area</th><th>Stores</th><th>Status</th></tr></thead>
        <tbody>
          ${d.locations.map(l=>`<tr><td>${l.area}</td><td>${l.count}</td><td><span class="priority-pill ${l.status==='Open'?'low':'medium'}">${l.status}</span></td></tr>`).join("")}
        </tbody>
      </table></div>
    </div>
 
    <div class="hairline"></div>
 
    <div class="section-block">
      <div class="section-label">${m.title}</div>
      <div class="two-col">
        ${mediaSlot(m.floorplanImage, "TSM Makassar mall floor plan showing the VIVAIA unit location", {height:"auto"})}
        <div>
          <ul class="bullet-list">${m.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
          <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr);margin-top:16px;">
            <div class="tag-card"><div class="t-label">Area</div><div class="t-value" style="font-size:22px;">${m.area}</div></div>
            <div class="tag-card"><div class="t-label">Target Opening</div><div class="t-value" style="font-size:22px;">${m.targetOpening}</div></div>
          </div>
        </div>
      </div>
    </div>
  `;
}
 
function renderQ3LuxuryBrands(){
  const d = DATA.q3Strategy.luxuryBrands;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan · Where Are We</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/luxury-brands")}
 
    <div class="section-block">
      ${mediaSlot(d.trendsImage, d.trendsImageAlt, {height:"auto"})}
    </div>
    <div class="section-block">
      <div class="callout brand">${d.text}</div>
    </div>
    <div class="footnote">Brands compared in the deck's Google Trends chart: ${d.brandsCompared.join(", ")}.</div>
  `;
}
 
function renderQ3Competitors(){
  const d = DATA.q3Strategy.competitors;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan · Where Are We</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/competitors")}
 
    <div class="section-block">
      ${mediaSlot(d.trendsImage, d.trendsImageAlt, {height:"auto"})}
    </div>
    <div class="section-block">
      <div class="callout">${d.text}</div>
    </div>
 
    <div class="insight-grid" style="grid-template-columns:repeat(3,1fr);">
      ${d.brands.map(b=>`
        <div class="card">
          ${mediaSlot(b.image, b.name + " Q2 campaign visuals", {height:"140px"})}
          <div class="card-title" style="font-size:15px;margin-top:10px;">${b.name}</div>
          <p style="font-size:12.5px;line-height:1.6;margin:8px 0 0;">${b.text}</p>
        </div>`).join("")}
    </div>
  `;
}
 
function renderQ3GoogleReview(){
  const d = DATA.q3Strategy.googleReview;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan · Where Are We</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/google-review")}
 
    <div class="insight-grid" style="grid-template-columns:repeat(3,1fr);">
      ${d.pillars.map(p=>`
        <div class="card">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:4px;">
            <span style="font-family:var(--serif);font-size:18px;color:var(--label);font-weight:700;">${p.num}</span>
            <div class="card-title" style="font-size:13.5px;">${p.title}</div>
          </div>
          <div style="font-size:11px;color:var(--gold);font-weight:700;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px;">${p.owner}</div>
          <ul class="bullet-list" style="font-size:12px;">${p.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>
 
    <div class="section-block">
      <div class="section-label">${d.result.label}</div>
      <div class="table-wrap"><table class="data">
        <thead><tr><th>Store</th><th>July 31 — Rating</th><th>July 31 — Reviews</th><th>Aug 15 — Rating</th><th>Aug 15 — Reviews</th></tr></thead>
        <tbody>
          ${d.result.stores.map(s=>`<tr><td style="text-align:left;">${s.store}</td><td>${s.julyRating}</td><td>${s.julyReviews}</td><td class="pos">${s.augRating}</td><td class="pos">${s.augReviews}</td></tr>`).join("")}
        </tbody>
      </table></div>
      <div class="media-row" style="margin-top:16px;">
        ${d.images.map((img,i)=>mediaSlot(img, `Google Maps listing screenshot ${i+1}`, {height:"140px"})).join("")}
      </div>
    </div>
  `;
}
 
function renderQ3PublicFigures(){
  const d = DATA.q3Strategy.publicFigures;
  return `
    <div class="page-head">
      <div class="eyebrow">Q3 Strategy & Plan · Where Are We</div>
      <h1 class="page-title">${d.title}</h1>
      <p class="page-sub">${d.subtitle}</p>
    </div>
    ${tabRowHTML(Q3_STRATEGY_TABS, "#/q3-strategy/public-figures")}
 
    <div class="two-col section-block">
      ${d.figures.map(f=>`
        <div class="card">
          <div class="media-row">
            ${f.images.map((img,i)=>mediaSlot(img, f.name + " photo " + (i+1), {height:"160px"})).join("")}
          </div>
          <div class="card-title" style="margin-top:12px;font-size:17px;">${f.name}</div>
          <div style="font-size:11px;color:var(--gold);font-weight:700;text-transform:uppercase;letter-spacing:0.03em;margin-bottom:10px;">${f.tags}</div>
          <p style="font-size:12.5px;line-height:1.6;margin:0 0 10px;">${f.bio}</p>
          <div class="flag-callout" style="background:var(--card-tint);border-left-color:var(--brand);">
            <strong>VIVAIA fit:</strong> ${f.fit}
          </div>
        </div>`).join("")}
    </div>
  `;
}
 
/* ============================================================================
   INDONESIA WELLNESS ACTIVATION
============================================================================ */
function renderWellnessActivation(){
  const d = DATA.indonesiaWellness;
  const lr = d.localRelevance;
  return `
    <div class="page-head">
      <div class="eyebrow">Indonesia Wellness Activation</div>
      <h1 class="page-title">${d.title}</h1>
    </div>
 
    <div class="kpi-grid section-block">
      ${d.stats.map(s=>`
        <div class="tag-card">
          <div class="t-value" style="font-size:26px;">${s.value}</div>
          <div class="t-compare" style="margin-top:6px;">${s.label}</div>
        </div>`).join("")}
    </div>
 
    <div class="card section-block">
      <div class="eyebrow" style="margin-bottom:4px;">${lr.subtitle}</div>
      <div class="card-title">${lr.title}</div>
      <p style="font-size:13px;line-height:1.6;margin:10px 0 18px;">${lr.text}</p>
      <div class="wellness-bar-list">
        ${lr.rows.map(r=>`
          <div class="wellness-bar-row">
            ${mediaSlot(r.image, r.type, {cls:"wellness-thumb"})}
            <div style="flex:1;">
              <div class="wellness-bar-title">${r.type}</div>
              <div class="wellness-bar-note">${r.note}</div>
            </div>
            <div class="wellness-bar-metric">${r.metric}</div>
          </div>`).join("")}
      </div>
    </div>
  `;
}
 
function renderEmpty(label){
  return `
    <div class="page-head">
      <h1 class="page-title">${label}</h1>
    </div>
    <div class="empty-state">
      <div class="glyph">◌</div>
      <h3>Not included in this review</h3>
      <p>The Q2 2026 deck's table of contents lists a "${label}" section, but the uploaded file does not contain slides for it. This page is structured and ready — add the source slides to populate it.</p>
    </div>
  `;
}