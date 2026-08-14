// ============================================================================
// VIVAIA INDONESIA — Q2 2026 BUSINESS REVIEW — DATA (USD EDITION)
// Transcribed from the 19-slide "_INDONESIA__VIVAIA_Q2_2026_Report" deck
// (latest revision). All financial figures are in USD as shown in the deck
// (already converted from IDR by VIVAIA). Where the deck shows a chart with
// no data labels (store monthly trend charts), the underlying series was
// derived by converting the previously-reported exact IDR-million monthly
// figures using the deck's own implied FX rate (~17,830 IDR/USD, back-solved
// from 9 independently-verified store rows in the Q2 vs Q1 / Q2 vs Q2 LY
// tables). This is a unit conversion of verified source data, not an
// estimate — flagged as `derived: true` on the dataset.
//
// The Same-Store Deep Dive table's ASP (USD) column is now correctly on the
// same USD scale as AOV in this revision (an earlier deck revision had left
// it unconverted — that has been fixed upstream and is reflected here).
//
// NOT IN THIS DECK: Marketing, Social Media Insights, HR, and Q3 Overview
// are listed in the Table of Contents but have no slides in this file —
// left as empty states. The CECILY product photo for the "No
// Stock Across All Stores" callout is now sourced directly from this deck's
// used for Silvie and Margot Mary-Jane.
// ============================================================================

const DATA = {

  meta: {
    title: "VIVAIA Indonesia",
    subtitle: "Q2 2026 Business Review",
    period: "Q2 2026 (Apr–Jun)",
    currency: "USD",
    fxNote: "Figures shown in USD as reported in the source deck. Store monthly-trend series were converted from the previously reported IDR-million figures at the deck's implied rate of ≈17,830 IDR/USD.",
  },

  kpis: [
    { key: "gmv", label: "GMV", value: "USD 2.64M", growth: 31.3, compareLabel: "vs USD 2.01M Q2 2025", positive: true },
    { key: "units", label: "Units Sold", value: "20,635", growth: 35.7, compareLabel: "vs 15,211 Q2 2025", positive: true },
    { key: "transactions", label: "Transactions", value: "16,866", growth: 27.4, compareLabel: "vs 13,238 Q2 2025", positive: true },
    { key: "aov", label: "AOV", value: "USD 157", growth: 3.1, compareLabel: "vs USD 152 Jun 2025", positive: true },
    { key: "upt", label: "UPT", value: "1.22", growth: 6.5, compareLabel: "vs 1.15 Jun 2025", positive: true },
    { key: "asp", label: "ASP", value: "USD 128", growth: -3.2, compareLabel: "vs USD 132 Jun 2025", positive: false },
  ],
  kpiHeadline: "Q2 2026 vs Q2 2025 — 5 KPIs positive, 1 KPI negative",

  execInsights: [
    {
      tag: "Growth engine",
      text: "Business revenue continued to be driven by Independent Stores, which contributed 88% of total GMV, while Department Stores contributed 12%.",
    },
    {
      tag: "Key watchout",
      text: "Department Store sales is slowing down due to business model shifting to Independent Store. However, VIVAIA maintained top-3 performance within the ladies footwear category across all department stores.",
    },
    {
      tag: "Growth driver",
      text: "Pondok Indah Mall 2 was the key growth driver, achieving +468.8% GMV growth quarter on quarter — despite operating for only 3 months, it already ranks #2 in Q2 contribution.",
    },
    {
      tag: "Traffic watchout",
      text: "Footfall issue: transactions at Plaza Senayan, Plaza Indonesia and AEON Mall BSD are declining year-on-year, pointing to traffic loss to newer VIVAIA stores or competitors — urgent traffic-driver action needed.",
    },
  ],

businessShareChart: [
  {
    label: "Independent Store",
    value: 87.6
  },
  {
    label: "Department Store",
    value: 12.4
  }
  ],

  economy: {
    gdpGrowth: { value: "5.2%", note: "2026F (ADB)" },
    inflation: { value: "3.08%", note: "May 2026 (BPS) — above BI target of 2.5%±1" },
    biRate: { value: "4.75%", note: "Easing cycle; cautious stance maintained" },
    realWages: { value: "Declining", note: "Manufacturing, trade & construction sectors contracting" },
    rupiah: {
      title: "Rupiah −8.0% YTD",
      text: "USD/IDR at ~17,870 (Jun 2026) vs 16,560 (Jan 2026). Rupiah near multi-year lows. Q1 BOP deficit $9.1B plus high oil import costs (+50% YoY) are key drivers. Direct impact: VIVAIA product costs in USD → Rupiah depreciation compresses margins if pricing is not adjusted.",
    },
    usdIdrTrend: {
      approx: true,
      points: [
        { month: "Jan", value: 16560 },
        { month: "Feb", value: 16720 },
        { month: "Mar", value: 16970 },
        { month: "Apr", value: 17520 },
        { month: "May", value: 17920 },
        { month: "Jun", value: 17870 },
      ],
    },
    consumerConfidence: {
      title: "Consumer Confidence Index (Bank Indonesia)",
      note: "Above 100 = optimistic",
      approx: true,
      points: [
        { month: "Dec '25", value: 123.2 },
        { month: "Jan '26", value: 126.9 },
        { month: "Feb '26", value: 125.1 },
        { month: "Mar '26", value: 122.9 },
      ],
      text: "Confidence softening: dropped to 122.9 in March (5-month low). Income expectations, job outlook, and durable goods purchase intent all declining. Urban middle class — VIVAIA's core customer — feeling pressure from rupiah-driven imported inflation.",
    },
    riskWatch: [
      { level: "risk", title: "Rupiah Weakness", text: "USD/IDR near 18,000. Bank Indonesia held rates — no room to cut. Rising oil imports + BOP deficit = structural pressure. Risk: imported inflation erodes spending power for non-essentials." },
      { level: "risk", title: "US Tariff Uncertainty", text: "Global trade tensions remain elevated. Indonesia's export-oriented sectors (textiles, footwear) under pressure. Consumer caution may increase if layoffs rise in labor-heavy industries." },
      { level: "watch", title: "Real Wage Stagnation", text: "Real wages declining in manufacturing & trade sectors — key segments of Indonesia's middle class. Consumer credit growth slowed; households prioritizing essentials over lifestyle spending." },
      { level: "good", title: "Stable Macro Base", text: "GDP growth ~5.2% (ADB). Inflation at 3.08% — above target but manageable. BI easing cycle intact. Urban upper-middle and aspirational class remain resilient = VIVAIA's sweet spot." },
    ],
    holidays: {
      title: "Q2 Public Holiday", text: "Weekdays only",
      items: [
        { date: "3 Apr (Fri)", name: "Good Friday"},
        { date: "1 May (Fri)", name: "May Day", note: "→ Long weekend May 1–3" },
        { date: "14 May (Thu)", name: "Ascension Day of Jesus Christ"},
        { date: "27 May (Wed)", name: "Eid Al-Adha 1447 H", note: "+ Collective Leave Day 28 May"},
        { date: "1 Jun (Mon)", name: "Pancasila Day"},
        { date: "16 Jun (Tue)", name: "Islamic New Year 1448 H"},
      ],
      implication: "3 public holidays in May 2026 → elevated mall traffic, gift purchasing, and family outing spending. Explains the +26.1% MoM GMV surge and PIM2's +54.3% MoM leap. Holiday calendar is the single biggest traffic accelerator in May.",
    },
  },

  storeMeta: {
    plaza_senayan:      { name: "Plaza Senayan",            short: "PS",     channel: "independent", color: "#4B7FF7" },
    plaza_indonesia:    { name: "Plaza Indonesia",           short: "PI",     channel: "independent", color: "#B79CED" },
    aeon_bsd:           { name: "AEON Mall BSD",             short: "AEON BSD", channel: "independent", color: "#F2A65A" },
    tsm_cibubur:        { name: "TSM Cibubur",               short: "TSM CIBUBUR", channel: "independent", color: "#EAD24C" },
    tsm_bandung:        { name: "TSM Bandung",                short: "TSM BDG", channel: "independent", color: "#E8746B" },
    pakuwon_bekasi:     { name: "Pakuwon Mall Bekasi",        short: "PAKUWON BEKASI", channel: "independent", color: "#E06FB5" },
    kota_kasablanka:    { name: "Kota Kasablanka",            short: "KOKAS",  channel: "independent", color: "#4FC3C7" },
    tunjungan_plaza_6:  { name: "Tunjungan Plaza 6",          short: "TP 6 SBY", channel: "independent", color: "#5FAE73" },
    ice_bsd:            { name: "ICE BSD (Temp.)",            short: "ICE BSD", channel: "independent", color: "#8FD19E" },
    pim2:               { name: "Pondok Indah Mall 2",        short: "PIM 2",  channel: "independent", color: "#8A8B2E" },
    pop_up_pim:         { name: "Pop Up Atrium PIM (Temp.)",  short: "ATRIUM PIM", channel: "independent", color: "#E0A22E" },
    dp_mall_semarang:   { name: "DP Mall Semarang",           short: "DP SEMARANG", channel: "independent", color: "#E23B2E" },
    sogo_kokas:         { name: "SOGO Kota Kasablanka",       short: "SOGO KOKAS", channel: "department", color: "#4FC3C7" },
    sogo_pim:           { name: "SOGO Pondok Indah Mall",     short: "SOGO PIM", channel: "department", color: "#5FAE73" },
    sogo_central_park:  { name: "SOGO Central Park",          short: "SOGO CP", channel: "department", color: "#8B7FD6" },
    seibu_gi:           { name: "SEIBU Grand Indonesia",      short: "SEIBU GI", channel: "department", color: "#E0A22E" },
    sogo_kelapa_gading: { name: "SOGO Kelapa Gading",         short: "SOGO KG", channel: "department", color: "#D65A8C" },
  },

  monthlyGmv: {
    derived: true,
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    byStore: {
      plaza_senayan:     [103, 96, 154, 115, 149, 119],
      plaza_indonesia:   [61, 56, 75, 67, 83, 74],
      aeon_bsd:          [65, 63, 81, 60, 80, 74],
      tsm_cibubur:       [14, 16, 29, 18, 21, 22],
      tsm_bandung:       [58, 52, 93, 56, 77, 73],
      pakuwon_bekasi:    [38, 35, 61, 41, 46, 41],
      kota_kasablanka:   [67, 66, 125, 93, 110, 97],
      tunjungan_plaza_6: [62, 51, 71, 60, 70, 70],
      ice_bsd:           [null, 20, null, null, null, null],
      pim2:              [null, null, 85, 125, 192, 164],
      pop_up_pim:        [null, null, null, 20, null, null],
      dp_mall_semarang:  [null, null, null, null, 11, 86],
      sogo_kokas:        [13, 0, null, null, null, null],
      sogo_pim:          [49, 50, 86, 36, 33, 18],
      sogo_central_park: [12, 12, 15, 12, 18, 14],
      seibu_gi:          [38, 34, 45, 45, 54, 46],
      sogo_kelapa_gading:[12, 13, 13, 16, 20, 15],
    },
    ytdTotal: {
      plaza_senayan: 735, plaza_indonesia: 416, aeon_bsd: 423, tsm_cibubur: 120,
      tsm_bandung: 409, pakuwon_bekasi: 261, kota_kasablanka: 559, tunjungan_plaza_6: 384,
      ice_bsd: 20, pim2: 566, pop_up_pim: 20, dp_mall_semarang: 97,
      sogo_kokas: 13, sogo_pim: 273, sogo_central_park: 83, seibu_gi: 262, sogo_kelapa_gading: 89,
    },
    totals: {
      independent: [467, 456, 773, 655, 839, 820],
      department:  [124, 109, 159, 109, 125, 93],
      grand:       [591, 565, 932, 764, 964, 913],
    },
    ytdGrandTotal: 4729,
    highlightsIndependent: [
      "Sales peaked in March, supported by seasonal Eid demand, while May saw an uplift from the PIM Grand Opening.",
      "Plaza Senayan is the highest contributor for YTD GMV, which contributes 16% to total GMV YTD.",
    ],
    highlightsDepartment: [
      "SOGO PIM is the highest contributor with 6% to total GMV YTD. However, the GMV trend is declining due to the PIM independent store opening in May.",
      "SEIBU Grand Indonesia is the second highest contributor with 5% to total GMV YTD. Department store average GMV/month is decreasing vs Q1 2026.",
      "SOGO Kota Kasablanka closed in February, resulting in no sales contribution from March onward.",
    ],
  },

  q2vsQ1: {
    independent: [
      { key: "plaza_senayan", gmvQ2: 383, gmvQ1: 353, gmvGrowth: 8.4, qtyQ2: 2926, qtyQ1: 2588, qtyGrowth: 13.1, trxGrowth: 5.4, aovGrowth: 2.8, aspGrowth: -4.2, uptGrowth: 7.2 },
      { key: "plaza_indonesia", gmvQ2: 224, gmvQ1: 191, gmvGrowth: 17.2, qtyQ2: 1722, qtyQ1: 1404, qtyGrowth: 23.4, trxGrowth: 18.2, aovGrowth: -0.8, aspGrowth: -5.1, uptGrowth: 4.4 },
      { key: "aeon_bsd", gmvQ2: 213, gmvQ1: 209, gmvGrowth: 2.1, qtyQ2: 1708, qtyQ1: 1673, qtyGrowth: 2.1, trxGrowth: -7.6, aovGrowth: 10.4, aspGrowth: 0, uptGrowth: 10.5 },
      { key: "tsm_cibubur", gmvQ2: 61, gmvQ1: 59, gmvGrowth: 2.3, qtyQ2: 522, qtyQ1: 490, qtyGrowth: 6.5, trxGrowth: -4.9, aovGrowth: 7.6, aspGrowth: -4.0, uptGrowth: 12.0 },
      { key: "tsm_bandung", gmvQ2: 206, gmvQ1: 203, gmvGrowth: 1.2, qtyQ2: 1668, qtyQ1: 1625, qtyGrowth: 2.6, trxGrowth: -8.6, aovGrowth: 10.8, aspGrowth: -1.4, uptGrowth: 12.3 },
      { key: "pakuwon_bekasi", gmvQ2: 128, gmvQ1: 133, gmvGrowth: -3.5, qtyQ2: 1028, qtyQ1: 1055, qtyGrowth: -2.6, trxGrowth: -10.3, aovGrowth: 7.6, aspGrowth: -1.0, uptGrowth: 8.6 },
      { key: "kota_kasablanka", gmvQ2: 300, gmvQ1: 258, gmvGrowth: 16.2, qtyQ2: 2333, qtyQ1: 1941, qtyGrowth: 20.2, trxGrowth: 12.4, aovGrowth: 3.4, aspGrowth: -3.3, uptGrowth: 6.9 },
      { key: "tunjungan_plaza_6", gmvQ2: 200, gmvQ1: 184, gmvGrowth: 8.7, qtyQ2: 1572, qtyQ1: 1378, qtyGrowth: 14.1, trxGrowth: 1.7, aovGrowth: 6.9, aspGrowth: -4.7, uptGrowth: 12.2 },
      { key: "ice_bsd", closed: true, gmvQ1: 20, qtyQ1: 181 },
      { key: "pim2", gmvQ2: 482, gmvQ1: 84, gmvGrowth: 468.8, qtyQ2: 3731, qtyQ1: 627, qtyGrowth: 485.7, trxGrowth: 442.3, aovGrowth: 4.9, aspGrowth: -2.9, uptGrowth: 8.0 },
      { key: "pop_up_pim", isNew: true, gmvQ2: 20, qtyQ2: 146 },
      { key: "dp_mall_semarang", isNew: true, gmvQ2: 96, qtyQ2: 774 },
    ],
    independentTotal: { gmvQ2: 2317, gmvQ1: 1699, gmvGrowth: 36.4, qtyQ2: 18141, qtyQ1: 12972, qtyGrowth: 39.8, trxGrowth: 28.1, aovGrowth: 6.5, aspGrowth: -2.5, uptGrowth: 9.2 },
    independentInsight: {
      title: "Increasing on Independent Stores",
      bullets: [
        "IND Stores GMV increased +36.4%, driven primarily by higher sales volume.",
        "Pondok Indah Mall was the key growth driver, achieving +468% GMV growth, whereas Pakuwon remained the only existing store with negative GMV growth, requiring closer attention to traffic recovery.",
        "5 KPIs IND stores are increasing – while ASP needs to be noted and improved.",
      ],
    },
    department: [
      { key: "sogo_kokas", closed: true, gmvQ1: 13, qtyQ1: 96 },
      { key: "sogo_pim", gmvQ2: 87, gmvQ1: 185, gmvGrowth: -52.5, qtyQ2: 653, qtyQ1: 1408, qtyGrowth: -53.6, trxGrowth: -53.4, aovGrowth: 2.0, aspGrowth: 2.4, uptGrowth: -0.4 },
      { key: "sogo_central_park", gmvQ2: 44, gmvQ1: 38, gmvGrowth: 14.0, qtyQ2: 334, qtyQ1: 290, qtyGrowth: 15.2, trxGrowth: 15.7, aovGrowth: -1.5, aspGrowth: -1.0, uptGrowth: -0.4 },
      { key: "seibu_gi", gmvQ2: 144, gmvQ1: 117, gmvGrowth: 23.4, qtyQ2: 1100, qtyQ1: 1152, qtyGrowth: -4.5, trxGrowth: 20.0, aovGrowth: 2.8, aspGrowth: 29.2, uptGrowth: -20.4 },
      { key: "sogo_kelapa_gading", gmvQ2: 50, gmvQ1: 38, gmvGrowth: 33.4, qtyQ2: 407, qtyQ1: 301, qtyGrowth: 35.2, trxGrowth: 31.7, aovGrowth: 1.3, aspGrowth: -1.4, uptGrowth: 2.7 },
    ],
    departmentTotal: { gmvQ2: 327, gmvQ1: 392, gmvGrowth: -16.5, qtyQ2: 2494, qtyQ1: 3247, qtyGrowth: -23.2, trxGrowth: -17.5, aovGrowth: 1.3, aspGrowth: 8.7, uptGrowth: -6.9 },
    departmentInsight: {
      title: "Increasing on Department Stores",
      bullets: [
        "SOGO Kota Kasablanka is closed as we have an independent store in Kota Kasablanka.",
        "SOGO Pondok Indah is declining gradually as we already opened an independent store.",
        "Overall KPIs increasing, except ASP declining by 0.6%",
      ],
    },
    grandTotal: { gmvQ2: 2645, gmvQ1: 2091, gmvGrowth: 26.5, qtyQ2: 20635, qtyQ1: 16219, qtyGrowth: 27.2, trxGrowth: 19.6, aovGrowth: 5.7, aspGrowth: -0.6, uptGrowth: 6.4 },
  },

  q2vsQ2ly: {
    independent: [
      { key: "plaza_senayan", gmvQ2: 383, gmvLY: 556, gmvGrowth: -31.1, qtyQ2: 2926, qtyLY: 4136, qtyGrowth: -29.3, trxGrowth: -33.2, aovGrowth: 3.1, aspGrowth: -2.6, uptGrowth: 5.9 },
      { key: "plaza_indonesia", gmvQ2: 224, gmvLY: 276, gmvGrowth: -18.8, qtyQ2: 1722, qtyLY: 2080, qtyGrowth: -16.7, trxGrowth: -22.1, aovGrowth: 4.3, aspGrowth: -2.5, uptGrowth: 7.0 },
      { key: "aeon_bsd", gmvQ2: 213, gmvLY: 241, gmvGrowth: -11.4, qtyQ2: 1708, qtyLY: 1873, qtyGrowth: -8.8, trxGrowth: -16.5, aovGrowth: 6.0, aspGrowth: -2.9, uptGrowth: 9.2 },
      { key: "tsm_cibubur", gmvQ2: 61, gmvLY: 61, gmvGrowth: -0.9, qtyQ2: 522, qtyLY: 468, qtyGrowth: 11.5, trxGrowth: 3.1, aovGrowth: -3.9, aspGrowth: -11.1, uptGrowth: 8.2 },
      { key: "tsm_bandung", gmvQ2: 206, gmvLY: 35, gmvGrowth: 487.4, qtyQ2: 1668, qtyLY: 261, qtyGrowth: 539.1, trxGrowth: null, aovGrowth: null, aspGrowth: -8.1, uptGrowth: null, note: "Excluded from KPI totals — transaction data unavailable" },
      { key: "pakuwon_bekasi", gmvQ2: 128, isNew: true, qtyQ2: 1028 },
      { key: "kota_kasablanka", gmvQ2: 300, isNew: true, qtyQ2: 2333 },
      { key: "tunjungan_plaza_6", gmvQ2: 200, isNew: true, qtyQ2: 1572 },
      { key: "pim2", gmvQ2: 482, isNew: true, qtyQ2: 3731 },
      { key: "pop_up_pim", gmvQ2: 20, isNew: true, qtyQ2: 146 },
      { key: "dp_mall_semarang", gmvQ2: 96, isNew: true, qtyQ2: 774 },
    ],
    independentTotal: { gmvQ2: 2317, gmvLY: 1171, gmvGrowth: 97.9, qtyQ2: 18141, qtyLY: 8818, qtyGrowth: 105.7, trxGrowth: 96.4, aovGrowth: -0.7, aspGrowth: -3.8, uptGrowth: 4.7 },
    independentInsight: {
      title: "Declining on Independent Stores (excl. new stores)",
      bullets: [
        "IND Stores delivered strong growth, recording +98% GMV growth, followed by 5 new stores.",
        "TSM Bandung was the key growth driver, achieving +487% GMV growth.",
      ],
    },
    department: [
      { key: "sogo_kokas", closed: true, gmvLY: 158, qtyLY: 1211 },
      { key: "sogo_pim", gmvQ2: 87, gmvLY: 301, gmvGrowth: -70.9, qtyQ2: 653, qtyLY: 2270, qtyGrowth: -71.2, trxGrowth: -71.2, aovGrowth: 1.2, aspGrowth: 1.3, uptGrowth: -0.1 },
      { key: "sogo_central_park", gmvQ2: 44, gmvLY: 81, gmvGrowth: -46.2, qtyQ2: 334, qtyLY: 622, qtyGrowth: -46.3, trxGrowth: -46.3, aovGrowth: 0.2, aspGrowth: 0.2, uptGrowth: -0.1 },
      { key: "seibu_gi", gmvQ2: 144, gmvLY: 216, gmvGrowth: -33.0, qtyQ2: 1100, qtyLY: 1635, qtyGrowth: -32.7, trxGrowth: -37.0, aovGrowth: 6.4, aspGrowth: -0.3, uptGrowth: 6.7 },
      { key: "sogo_kelapa_gading", gmvQ2: 50, gmvLY: 85, gmvGrowth: -40.3, qtyQ2: 407, qtyLY: 655, qtyGrowth: -37.9, trxGrowth: -40.6, aovGrowth: 0.5, aspGrowth: -3.8, uptGrowth: 4.6 },
    ],
    departmentTotal: { gmvQ2: 327, gmvLY: 843, gmvGrowth: -61.1, qtyQ2: 2494, qtyLY: 6393, qtyGrowth: -61.0, trxGrowth: -62.5, aovGrowth: 3.6, aspGrowth: -0.4, uptGrowth: 4.0 },
    departmentInsight: {
      title: "Declining on Department Stores",
      bullets: [
        "SOGO Kota Kasablanka is closed in Q1 2026 as we have an independent store in Kota Kasablanka.",
        "SOGO Pondok Indah is declining gradually as we already opened an independent store.",
        "Grand Indonesia, Kelapa Gading, and Central Park, even though declining, VIVAIA is still rank 1 in the ladies footwear department.",
      ],
    },
    grandTotal: { gmvQ2: 2645, gmvLY: 2014, gmvGrowth: 31.3, qtyQ2: 20635, qtyLY: 15211, qtyGrowth: 35.7, trxGrowth: 27.4, aovGrowth: 3.1, aspGrowth: -3.2, uptGrowth: 6.5 },
  },

  sameStore: {
    stores: ["plaza_senayan", "plaza_indonesia", "aeon_bsd", "tsm_cibubur"],
    subtitle: "Plaza Senayan · Plaza Indonesia · AEON Mall BSD · TSM Cibubur | Q2 2026 vs Q2 2025",
    headline: "Basket quality remained healthy, with stable AOV and improving UPT",
    aspUnitNote: null,
    rows: [
      { key: "plaza_senayan", trxQ2: 2373, trxLY: 3551, trxGrowth: -33.2, aovQ2: 161, aovLY: 157, aovGrowth: 3.1, aspQ2: 131, aspLY: 134, aspGrowth: -2.6, uptQ2: 1.23, uptLY: 1.16, uptGrowth: 5.9 },
      { key: "plaza_indonesia", trxQ2: 1410, trxLY: 1811, trxGrowth: -22.1, aovQ2: 159, aovLY: 153, aovGrowth: 4.3, aspQ2: 130, aspLY: 133, aspGrowth: -2.5, uptQ2: 1.23, uptLY: 1.15, uptGrowth: 7.0 },
      { key: "aeon_bsd", trxQ2: 1428, trxLY: 1710, trxGrowth: -16.5, aovQ2: 150, aovLY: 141, aovGrowth: 6.0, aspQ2: 125, aspLY: 129, aspGrowth: -2.9, uptQ2: 1.20, uptLY: 1.10, uptGrowth: 9.2 },
      { key: "tsm_cibubur", trxQ2: 428, trxLY: 415, trxGrowth: 3.1, aovQ2: 143, aovLY: 148, aovGrowth: -3.9, aspQ2: 117, aspLY: 132, aspGrowth: -11.1, uptQ2: 1.22, uptLY: 1.13, uptGrowth: 8.2 },
    ],
    total: { trxQ2: 6937, trxLY: 7487, trxGrowth: -7.3, aovQ2: 157, aovLY: 156, aovGrowth: 0.4, aspQ2: 127, aspLY: 133, aspGrowth: -4.2, uptQ2: 1.23, uptLY: 1.18, uptGrowth: 4.7 },
    cards: [
      {
        title: "Footfall issue",
        text: "Transactions declining: Senayan -33%, PI -2%, BSD -16%. These stores lost hundreds of daily walk-ins — likely to new VIVAIA stores nearby or competitor traffic.",
        action: "→ URGENT: traffic driver campaigns, loyalty program activation, in-mall visibility boosts for existing stores",
      },
      {
        title: "KPI declining",
        text: "The decline in ASP was generally more pronounced than the change in UPT, indicating pricing/mix pressure rather than a reduction in basket size as the primary driver of lower AOV.",
      },
    ],
  },

  merchInsights: [
    { num: "01", title: "Revenue Breakthrough", text: "Total GMV USD 2.64M (+31.3% YoY). 5 volume KPIs positive — meanwhile ASP decreasing (-3.2% YoY)." },
    { num: "02", title: "Margot Mary-Jane = Hero SKU", text: "3,314 units sold, 17.2% of GMV. Undisputed commercial anchor — decreased -8.3% YoY. Restock EU38–EU40 immediately." },
    { num: "03", title: "Nelly — Explosive Growth", text: "487 units, +325.9% YoY. Firmly #7 best-seller. Sustained momentum — not a spike. Scale allocation for H3." },
    { num: "04", title: "New Collections Contributing", text: "Silvie (#3), Tamia Mary-Jane A (#4), and Myriel (#5) — all new — entered Top 5. Fresh assortment strategy working; accelerate H3 reorder." },
    { num: "05", title: "UPT Biggest Opportunity", text: "UPT 1.22. Each +0.1 UPT ≈ USD 216K incremental revenue annually. Bundle mechanics + SA upsell training are the fastest, highest-ROI action available." },
  ],

  bestSellers: {
    subtitle: "Top 10 articles by units sold vs Q2 2025 comparison",
    items: [
      { rank: 1, name: "Margot Mary-Jane", image: "image/Margot.png", qtyQ2: 3314, gmvQ2: 455, contribQ2: 17.2, qtyLY: 3857, growth: -8.3, gmvLY: 496, contribLY: 24.7 },
      { rank: 2, name: "Audrey", image: "image/Audrey.png", qtyQ2: 1527, gmvQ2: 203, contribQ2: 7.7, qtyLY: 713, growth: 128.4, gmvLY: 89, contribLY: 4.4 },
      { rank: 3, name: "Silvie", image: "image/Silvie.png", qtyQ2: 1077, gmvQ2: 135, contribQ2: 5.1, isNew: true },
      { rank: 4, name: "Tamia Mary-Jane A", image: "image/Tamia.png", qtyQ2: 810, gmvQ2: 108, contribQ2: 4.1, isNew: true },
      { rank: 5, name: "Myriel", image: "image/Myriel.png", qtyQ2: 709, gmvQ2: 95, contribQ2: 3.6, isNew: true },
      { rank: 6, name: "Addison", image: "image/Addison.png", qtyQ2: 569, gmvQ2: 93, contribQ2: 3.5, qtyLY: 644, growth: -6.5, gmvLY: 99, contribLY: 5.0 },
      { rank: 7, name: "Nelly", image: "image/Nelly.png", qtyQ2: 487, gmvQ2: 66, contribQ2: 2.5, qtyLY: 116, growth: 325.9, gmvLY: 15, contribLY: 0.8 },
      { rank: 8, name: "Francesca", image: "image/Francesca.png", qtyQ2: 450, gmvQ2: 72, contribQ2: 2.7, qtyLY: 561, growth: -14.8, gmvLY: 85, contribLY: 4.2 },
      { rank: 9, name: "Margot Walker Mary-Jane", image: "image/Margot-Walker.png", qtyQ2: 437, gmvQ2: 58, contribQ2: 2.2, qtyLY: 460, growth: -9.8, gmvLY: 64, contribLY: 3.2 },
      { rank: 10, name: "Marah", image: "image/Marah.png", qtyQ2: 414, gmvQ2: 55, contribQ2: 2.1, isNew: true },
    ],
    total: { qtyQ2: 9794, gmvQ2: 1344, contribQ2: 50.8, qtyLY: 6351, growth: 58.0, gmvLY: 850, contribLY: 42.2 },
    insight: "Top 3 best sellers contribute 30.0% to total GMV. This shows high dependency on those styles.",
  },
  slowMovers: {
    subtitle: "Bottom 10 slow movers — units sold in June 2026 vs June 2025",
    items: [
      { rank: 1, name: "Skyler", image: "image/Skyler.png", qtyJun: 1, gmvJun: 0.13, isNew: true },
      { rank: 2, name: "Aimee", image: "image/Aimee.png", qtyJun: 1, gmvJun: 0.13, isNew: true },
      { rank: 3, name: "Kamber", image: "image/Kamber.png", qtyJun: 1, gmvJun: 0.13, isNew: true },
      { rank: 4, name: "Liana", image: "image/Liana.png", qtyJun: 1, gmvJun: 0.14, qtyLY: 2, gmvLY: 0.24, growth: -41.5 },
      { rank: 5, name: "Hatty", image: "image/Hatty.png", qtyJun: 1, gmvJun: 0.14, isNew: true },
      { rank: 6, name: "Georgia", image: "image/Georgia.png", qtyJun: 2, gmvJun: 0.30, qtyLY: 11, gmvLY: 1.19, growth: -95.3 },
      { rank: 7, name: "Tila", image: "image/Tila.png", qtyJun: 3, gmvJun: 0.31, isNew: true },
      { rank: 8, name: "Ryan Slip-On", image: "image/Ryan.png", qtyJun: 3, gmvJun: 0.35, qtyLY: 43, gmvLY: 7.41, growth: -71.0 },
      { rank: 9, name: "Natalie", image: "image/Natalie.png", qtyJun: 3, gmvJun: 0.40, isNew: true },
      { rank: 10, name: "Aria Walker", image: "image/Aria.png", qtyJun: 4, gmvJun: 0.44, qtyLY: 8, gmvLY: 1.52, growth: -74.6 },
    ],
    total: { qtyJun: 20, gmvJun: 2.47, qtyLY: 64, gmvLY: 10.36, growth: -76.1 },
    insight: "Bottom 10 are mostly new articles with only 1 unit sold — limited sell-through. Georgia (-95.3%) and Aria Walker (-74.6%) declining sharply.",
    gmvUnit: "USD (not K)",
  },

  sizeAnalysis: {
    subtitle: "EU size distribution (Q2'26 vs Q2'25) with sell-through velocity & strategic buying recommendations",
    keyShift: "EU36 grew fastest (+73.2%), however EU38 still the #1 size at 12.2%.",
    rows: [
      { size: "EU35", qtyQ2: 204, pctQ2: 1.0, qtyLY: 344, pctLY: 2.3, growth: -40.7, tier: "LOW" },
      { size: "EU35.5", qtyQ2: 263, pctQ2: 1.3, qtyLY: 348, pctLY: 2.3, growth: -24.4, tier: "LOW" },
      { size: "EU36", qtyQ2: 1093, pctQ2: 5.3, qtyLY: 631, pctLY: 4.1, growth: 73.2, tier: "MODERATE" },
      { size: "EU36.5", qtyQ2: 1029, pctQ2: 5.0, qtyLY: 800, pctLY: 5.3, growth: 28.6, tier: "MODERATE" },
      { size: "EU37", qtyQ2: 2047, pctQ2: 9.9, qtyLY: 1666, pctLY: 11.0, growth: 22.9, tier: "HIGH" },
      { size: "EU37.5", qtyQ2: 1971, pctQ2: 9.6, qtyLY: 1606, pctLY: 10.6, growth: 22.7, tier: "HIGH" },
      { size: "EU38", qtyQ2: 2515, pctQ2: 12.2, qtyLY: 1915, pctLY: 12.6, growth: 31.3, tier: "CORE" },
      { size: "EU38.5", qtyQ2: 2011, pctQ2: 9.7, qtyLY: 1679, pctLY: 11.0, growth: 19.8, tier: "HIGH" },
      { size: "EU39", qtyQ2: 2198, pctQ2: 10.7, qtyLY: 1675, pctLY: 11.0, growth: 31.2, tier: "CORE" },
      { size: "EU39.5", qtyQ2: 1416, pctQ2: 6.9, qtyLY: 1175, pctLY: 7.7, growth: 20.5, tier: "MODERATE" },
      { size: "EU40", qtyQ2: 1516, pctQ2: 7.3, qtyLY: 1079, pctLY: 7.1, growth: 40.5, tier: "MODERATE" },
      { size: "EU40.5", qtyQ2: 560, pctQ2: 2.7, qtyLY: 410, pctLY: 2.7, growth: 36.6, tier: "LOW" },
      { size: "EU41", qtyQ2: 617, pctQ2: 3.0, qtyLY: 466, pctLY: 3.1, growth: 32.4, tier: "LOW" },
      { size: "EU41.5", qtyQ2: 255, pctQ2: 1.2, qtyLY: 191, pctLY: 1.3, growth: 33.5, tier: "LOW" },
      { size: "EU42", qtyQ2: 97, pctQ2: 0.5, qtyLY: 199, pctLY: 1.3, growth: -51.3, tier: "LOW" },
      { size: "EU43", qtyQ2: 66, pctQ2: 0.3, qtyLY: 97, pctLY: 0.6, growth: -32.0, tier: "LOW" },
    ],
    totalRow: { qtyQ2: 17858, pctQ2: 86.5, qtyLY: 14281, pctLY: 93.9, growth: 25.0 },
    tiers: [
      { tier: "CORE", range: ">10%", sizes: "EU38, EU39", note: "3× standard order. Fastest turnover.", color: "core" },
      { tier: "HIGH", range: "8–10%", sizes: "EU37, EU37.5, EU38.5", note: "2× standard order. Reorder if stock < 2-week cover.", color: "high" },
      { tier: "MODERATE", range: "5–8%", sizes: "EU36, EU36.5, EU39.5, EU40", note: "Standard buy depth. Track sell-through monthly.", color: "moderate" },
      { tier: "LOW", range: "<5%", sizes: "EU35, EU35.5, EU40.5, EU41, EU41.5, EU42, EU43", note: "0.5× order. Minimal commitment only.", color: "low" },
    ],
  },
  promotions: {
   overview: {
    title: "Q2 Promotion Overview",
    subtitle: "All Independent Store VIVAIA",

    rows: [
      {
        promotion: "Buy 2 pairs: 15% OFF",
        period: "JUN 4–14",
        gmv: 46,
        atv: 245,
        totalGmv: 903,
        priorGmv: 266,
        growth: 25.2
      },
      {
        promotion: "Buy 3 pairs: 20% OFF",
        period: "JUN 4–14",
        gmv: 12,
        atv: 334,
        totalGmv: 903,
        priorGmv: 266,
        growth: 25.2
      },
      {
        promotion: "Buy 4+ pairs: 25% OFF",
        period: "JUN 4–14",
        gmv: 10,
        atv: 444,
        totalGmv: 903,
        priorGmv: 266,
        growth: 25.2
      },
      {
        promotion: "Anniversary Clearance",
        period: "JUN 4–28",
        gmv: 61,
        atv: 72,
        totalGmv: 903,
        priorGmv: 614,
        growth: 15.6
      },
      {
        promotion: "Buy 3 FP shoes get 1 selected shoes",
        period: "JUN 27–28",
        gmv: 1,
        atv: 393,
        totalGmv: 903,
        priorGmv: 26,
        growth: 12.1
      },
      {
        promotion: "Envelope Mystery Gift (Buy 2 FP shoes get mystery envelope)",
        period: "JUN 28 – JUL 5",
        gmv: 21,
        atv: 229,
        totalGmv: 903,
        priorGmv: 252,
        growth: -7.6
      }
    ],

    contributionChart: [
      { label: "Buy 2", value: 5.2 },
      { label: "Buy 3", value: 1.4 },
      { label: "Buy 4+", value: 1.2 },
      { label: "Clearance", value: 6.8 },
      { label: "Buy 3 Get 1", value: 0.2 },
      { label: "Envelope Mystery Gift", value: 2.4 }
    ],

    insights: [
      "Multi-Pair promo delivered +25.2% GMV growth with 2.35 UPT, indicating this mechanic successfully encouraged customers to purchase multiple items.",
      "Clearance was the most successful campaign in the Anniversary campaign.",
      "Buy 3 FP shoes promotion successfully encouraged high-basket purchases, as customers who participated were willing to commit to the 3-pair, making this mechanic more effective for basket building than broad customer acquisition. This campaign only ran in two participating stores, PIM and PS.",
      "Envelope campaign appears more effective as a supporting engagement mechanic than a direct sales driver. Customers who already intended to purchase two pairs participated, but the incentive did not appear strong enough to consistently convert additional customers."
    ],

    footnote: "GMV figures shown in USD K."
  }
}, 

marketing: {
    campaigns: {
      feelTheComfort: {
        title: "Feel The Comfort",
        description: "For the Feel The Comfort campaign, VIVAIA Indonesia strategically sent 6 PR Boxes to selected Indonesian KOLs and artists, creating authentic product exposure through relevant fashion and lifestyle voices. The activation generated 1,266,700 total impressions, 23,077 social engagements, and achieved a strong 5.3% KOL engagement rate, demonstrating meaningful audience interaction and strong resonance with the campaign content.",
        kpis: [
          { label: "PR Boxes Sent", value: "6" },
          { label: "Total Impressions", value: "1,200K" },
          { label: "Social Engagements", value: "23K" },
          { label: "KOL Engagement Rate", value: "5.3%" },
        ],
        kols: [
          { name: "Natasha Wilona", followers: "42.8M", profession: "Actress", image: "image/Wilona.png", link: "https://www.instagram.com/reel/DBIqrqjh7oL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
          { name: "Elina Joerg", followers: "5.4M", profession: "Actress", image: "image/Elina.png" },
          { name: "Valerie Thomas", followers: "1.4M", profession: "Model/Actress", image: "image/Valerie.png" },
          { name: "Agatha Chelsea", followers: "2M", profession: "Actress", image: "image/Agatha.png" },
          { name: "Anissa Aziza", followers: "1.4M", profession: "Influencer", image: "image/Anissa.png" },
          { name: "Shannon Dorothea", followers: "253K", profession: "Fashion/Beauty Creator", image: "image/Shannon.png" },
        ],
        globalCampaign: {
          title: "Global Spring 2026 Campaign — Nayeon (TWICE)",
          text: "Nayeon TWICE led our global Spring 2026 campaign. With a mere $5,833 spend, we generated a Media Value of $34,649, proving a highly profitable 5.94x Media ROI. We successfully reached over 18.5 million audiences.",
          stats: [
            { label: "Spend", value: "USD 5K" },
            { label: "Media Value (MIV)", value: "USD 34K" },
            { label: "Media ROI", value: "5.94x" },
            { label: "Reach", value: "18.5M" },
            { label: "Impressions", value: "284K" },
            { label: "Clippings", value: "20" },
          ],
          media: [
            { tier: "3 Major Fashion & Luxury Media", outlets: ["DEWI", "HerWorld Indonesia", "The Luxury Report"] },
            { tier: "4 Local Fashion & Lifestyle Media", outlets: ["The Editors Club", "Clozette", "Sugar & Cream", "CLARA Indonesia"] },
            { tier: "1 Mass / Business Media", outlets: ["Beautynesia"] },
          ],
        },
      },
 
      mothersDay: {
        title: "Mother's Day Campaign — \"Walk Beside Her\"",
        text: "A strategic move to drive multi-pair sales by positioning VIVAIA as the ultimate Mother's Day gift. Customers buying 2 pairs received a complimentary, premium flower bouquet, enhancing brand affinity. This emotional engagement strategy paid off massively, generating Rp 6,116,870,000 (approx. $382,300 USD) in sales across independent stores between May 1 – 10.",
        mechanic: "Buy 2 pairs and receive a FREE bouquet",
        period: "May 1 – 10",
        sales: { idr: "Rp 6,116,870,000", usd: "approx. $382,300 USD" },
        heroImage: "image/WBH.png",
      },
 
      sixthAnniversary: {
        title: "6th Anniversary Campaign",
        items: [
          { label: "Multi-Pair Promotions", text: "Rolled out tier discounts (15% to 25% off) across all independent stores including Plaza Indonesia, Kota Kasablanka, and TSM Bandung." },
          { label: "KOL Envelope Wall", text: "Engaged 15 store-visit influencers in 3 cities, optimizing conversions." },
          { label: "Mystery Gift Activation", text: "High engagement clearance events and exclusive mystery gift envelope draws driving record basket sizes." },
        ],
        heroImage: "image/Annive.png",
      },
    },
 
    events: {
      pim2GrandOpening: {
        title: "PIM 2 Flagship Store Launch",
        subtitle: "VIVAIA's largest flagship store as a key retail destination in Jakarta, strengthening brand presence, driving customer engagement, and creating greater visibility for the brand.",
        highlights: [
          { label: "Exclusive Launch", text: "Stunning debut of the \"Healing Garden\" collection, a brilliant collaboration with French artist Léo Morichen." },
          { label: "High-Profile Attendance", text: "The event drew 70 VIP guests, 15 top-tier fashion editors, and 30 selected KOLs, headlined by Mega KOL Nagita Slavina." },
          { label: "Tactical Success", text: "Our targeted voucher program (Min. Spend $175 / Rp 3M) was a massive hit, driving $7,745 (approx. Rp 137,470,000) in direct sales conversion from the quota slots." },
        ],
        galleryImages: ["image/PIM1.png", "image/PIM2.png", "image/PIM3.png", "image/PIM4.png"],
        nagitaActivation: {
          title: "PIM 2 — KOL Highlight (Nagita Slavina)",
          text: "Driving High-Impact Visibility for VIVAIA's Grand Opening. Featuring Nagita Slavina, the most-followed public figures in Indonesia with 75 Million Followers, the Grand Opening of VIVAIA Pondok Indah Mall 2 achieved strong digital impact with 2.9M views, 73.4K likes, further amplified by 101K views on YouTube. More importantly, the campaign successfully reached a highly relevant target audience, with 96.1% of viewers based in Indonesia and 87.4% female — closely aligned with VIVAIA's core consumer profile. A strong combination of scale, engagement, and audience relevance, strengthening VIVAIA's visibility and brand presence in the Indonesian market.",
          stats: [
            { label: "Instagram Views", value: "2.9M" },
            { label: "Instagram Likes", value: "73.4K" },
            { label: "YouTube Views", value: "101K" },
            { label: "Audience in Indonesia", value: "96.1%" },          ],
          instagramLink: "https://www.instagram.com/p/DXk9IUak-OZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          youtubeLink: "https://youtu.be/YYcb2GPq88Y?si=FNjZa7EqDojngj40",
          instagramLinkLabel: "Instagram Post Link",
          youtubeLinkLabel: "Youtube Link",
          image: "image/PIM5.png",
        },
        kolHighlight: {
          title: "PIM 2 — KOL Highlight",
          text: "28 KOLs Mega and Macro — fashion influencers, TV & movie actresses, and presenters — joined VIVAIA's Grand Opening at Pondok Indah Mall 2, strategically selected from South Jakarta and surrounding areas. With an estimated media value of USD 56K, the KOL activation delivered strong local visibility and meaningful exposure across fashion, entertainment, and lifestyle audiences. The activation generated a total social media audience of 3.2M views and contributed to nearly 2K new followers within the first week, demonstrating strong momentum beyond the event itself.",
          stats: [
            { label: "Mega/Macro KOLs", value: "28" },
            { label: "Estimated Media Value", value: "USD 56K" },
            { label: "Social Media Views", value: "3.2M" },
            { label: "New Followers (Week 1)", value: "2K" },
          ],
          galleryImages: ["image/PIMKOL1.png", "image/PIMKOL2.png", "image/PIMKOL3.png", "image/PIMKOL4.png"],
        },
        media: {
          title: "PIM 2 — Media",
          stats: [
            { label: "Clipping", value: "16" },
            { label: "Reach", value: "59.1M" },
            { label: "MIV", value: "$131K", detail: "Generated an extraordinary Media Impact Value (MIV) of $131,985 from a lean PR cost of just $8,000." },
            { label: "Impressions", value: "964K" },
          ],
          prCost: "$8,000",
          tiers: [
            { tier: "5 Major Fashion & Luxury Media", outlets: ["Cosmopolitan Indonesia", "The Luxury Reports", "Femina", "Female Daily Network", "Beauty Journal"] },
            { tier: "5 Local Fashion & Lifestyle Media", outlets: ["Dewi Magazine", "Elmedia", "Skincapedia", "Wolipop", "Popbela"] },
            { tier: "4 Mass / Business Media", outlets: ["Curated Magazine", "Kompas", "Fimela.com", "Suara.com"] },
          ],
          images: ["image/PIMMD1.png", "image/PIMMD2.png", "image/PIMMD3.png"],
        },
      },
 
      semarangGrandOpening: {
        title: "Semarang Grand Opening",
        items: [
          { label: "Strategic Expansion", text: "VIVAIA officially arrived in Central Java with a new store at DP Mall Semarang, opening on May 30th." },
          { label: "Pre-Launch Hype", text: "Generated massive local anticipation through a \"Journey to Semarang\" content series and an exclusive Luncheon at SPIEGEL with 10 selected KOLs." },
          { label: "Sales Impact", text: "The Soft Opening weekend alone (May 30–31) brought in USD 11,018.60 in sales." },
          { label: "Pre-Heat Strategy", text: "The pre heat strategy successfully captured strong local demand, with 60% of attendees being first-time buyers." },
        ],
        galleryImages: ["image/DP1.png", "image/DP2.png", "image/DP3.png", "image/DP4.png", "image/DP5.png", "image/DP6.png"],
      },
    },
 
    printedMedia: {
      herWorld: {
        title: "Her World Indonesia | Print Feature",
        text: "VIVAIA Resort 2026 featured in Her World Indonesia Vol. 02/2026, securing premium editorial exposure within a leading fashion & lifestyle publication.",
        stats: [
          { label: "Print Feature", value: "1", text: "Secured premium editorial placement in Her World Indonesia Vol. 02/2026, featuring VIVAIA's Resort 2026 collection." },
          { label: "Reach", value: "35K", text: "Reached a targeted fashion & lifestyle audience, strengthening VIVAIA's premium brand visibility." },
          { label: "MIV", value: "$3K", text: "Generated an estimated Media Impact Value of ~$3K through premium print editorial exposure." },
          { label: "Premium Editorial Exposure", value: "", text: "Elevated VIVAIA's fashion credibility through a feature in Her World Indonesia, showcasing the Resort 2026 collection." },
        ],
        coverImage: "image/HW1.png",
        spreadImage: "image/HW2.png",
      },
    },
 
    roi: {
      title: "ROI",
      subtitle: "Marketing spend return, by month",
      rows: [
        { period: "Apr (Full Month)", totalSales: "$765.532", reportedRoi: "17,526x", salesPerUnit: "$17,526 per $1" },
        { period: "May (Full Month)", totalSales: "$965.363", reportedRoi: "43,409x", salesPerUnit: "$43,409 per $1" },
        { period: "June (Full Month)", totalSales: "$914.640", reportedRoi: "17,056x", salesPerUnit: "$17,056 per $1" },
      ],
    },
  },
 
  // ==========================================================================
  // SOCIAL MEDIA — from the same Marketing/Social deck
  // ==========================================================================
  socialMedia: {
    q2Summary: {
      title: "Q2 Social Media Summary",
      instagram: {
        avgImpressions: "1,750,471",
        avgAccountReach: "504,670",
        avgTotalFollowers: "54,396",
        topPosts: [
          { post: "Nagita at GO PIM", totalViews: "2.9M", totalEngagement: "76,587", er: "5%" },
          { post: "Sohee wearing VIVAIA", totalViews: "20K", totalEngagement: "1,237", er: "12%" },
          { post: "Jennifer Collab Anniv Campaign", totalViews: "107K", totalEngagement: "1,300", er: "4.58%" },
        ],
      },
      tiktok: {
        avgPostViews: "88,033",
        avgProfileViews: "4,525",
        avgTotalFollowers: "14,070",
        topPosts: [
          { content: "The product vs on me", totalViews: "1,246", likes: "29", share: "3", er: "2.97%" },
          { content: "Summer Sandals", totalViews: "1.2K", likes: "30", share: "1", er: "2.92%" },
          { content: "GO Semarang", totalViews: "850", likes: "18", share: "4", er: "2.82%" },
        ],
      },
      learnings: [
        "Instagram & TikTok saw performance improvement in Q2 driven by exciting events and campaigns.",
        "Content featuring well-known influencers has a significant impact on driving high engagement.",
        "Relatable content performs well and delivers strong insights on TikTok, while overly \"branded\" or cinematic-style content tends to be less favored on the platform.",
      ],
    },
 
    instagramGrowth: {
      title: "Instagram Growth — Q1 vs Q2 2026",
      subtitle: "Comparison of average performance between Q1 2026 (Jan–Mar) and Q2 2026 (Apr–Jun)",
      rows: [
        { metric: "Average Impressions (Views)", q1: "944,333", q2: "1,750,471", change: "806,138", pctChange: 85.36 },
        { metric: "Average Account Reach", q1: "252,590", q2: "504,670", change: "252,080", pctChange: 99.79 },
        { metric: "Average Total Followers", q1: "50,000", q2: "54,396", change: "4,396", pctChange: 8.79 },
      ],
      highlights: [
        "All three metrics increased in Q2 2026, driven by strong performance from the Grand Opening PIM event in April and the Grand Opening Semarang & Semarang Luncheon events in May.",
        "The highest performing content reached 2.8M views in April on the Nagita Slavina - Grand Opening PIM store content.",
        "The highest followers growth occurred in April with 1,880 net followers.",
        "The highest account reach also occurred in April, reaching 1,112,219.",
      ],
    },
 
    instagramTopPosts: {
      title: "Instagram Q2 — Highest Performing Posts",
      subtitle: "By Social Media Specialist",
      posts: [
        { name: "Nagita at GO PIM", totalEngagement: "76,587", totalViews: "2.9M", er: "5%", image: "image/GIGI.png", link: "https://www.instagram.com/p/DXk9IUak-OZ/?img_index=1" },
        { name: "Han So Hee wearing VIVAIA", totalEngagement: "1,237", totalViews: "20K", er: "12%", image: "image/SOHEE.png", link: "https://www.instagram.com/p/DXrBelME8zN/" },
        { name: "Jennifer Collab Anniv Campaign", totalEngagement: "1,300", totalViews: "107K", er: "4.58%", image: "image/KOL.png", link: "https://www.instagram.com/reel/DZ_mtCwxClg/" },
      ],
    },

    tiktokGrowth: {
      title: "TikTok Q2 2026 Overview",
      subtitle: "Apr – Jun 2026 averages",
      rows: [
        { metric: "Average Post Views", value: "88,033" },
        { metric: "Average Profile Views", value: "4,525" },
        { metric: "Average Total Followers", value: "14,070" },
      ],
      highlights: [
        "The highest post views occurred in May, reaching 108,000.",
        "The highest profile views also occurred in May, reaching 6,620.",
        "Top performing content in Q2 was in May, including always-on (relatable content) and Resort Collection content.",
        "Grand Opening Semarang content also achieved an engagement rate (ER) of more than 2%.",
      ],
    },
 
    tiktokTopPosts: {
      title: "TikTok Q2 — Highest Performing Posts",
      subtitle: "By Social Media Specialist",
      posts: [
        { name: "The product", likes: "29", share: "3", totalViews: "1,246", er: "2.97%", image: "image/TT1.png", link: "https://www.tiktok.com/@vivaiaindonesia/photo/7645141821714189576" },
        { name: "Summer Sandals", likes: "30", share: "1", totalViews: "1.2K", er: "2.92%", image: "image/TT2.png", link: "https://www.tiktok.com/@vivaiaindonesia/photo/7654408815495908628" },
        { name: "GO Semarang", likes: "18", share: "4", totalViews: "850", er: "2.82%", image: "image/TT3.png", link: "https://www.tiktok.com/@vivaiaindonesia/video/7649023499696114965" },
      ],
    },
  },
 
  notIncluded: {
    hr: "HR",
    q3Overview: "Q3 Overview",
  },
};

const PRESENTATION_ORDER = [
  { route: "#/overview", label: "Overview" },
  { route: "#/business/economy", label: "Economic Context" },
  { route: "#/business/independent-stores", label: "Independent Stores" },
  { route: "#/business/department-stores", label: "Department Stores" },
  { route: "#/business/q2-vs-q1", label: "Q2 vs Q1" },
  { route: "#/business/q2-vs-q2ly", label: "Q2 vs Q2 LY" },
  { route: "#/business/same-store", label: "Same-Store Diagnosis" },
  { route: "#/merchandise/overview", label: "Merchandise Insights" },
  { route: "#/merchandise/best-sellers", label: "Best Sellers" },
  { route: "#/merchandise/slow-movers", label: "Slow Movers" },
  { route: "#/merchandise/size-analysis", label: "Size Analysis" },
  { route: "#/promotions/overview", label: "Q2 Promotion Overview" },
  { route: "#/marketing/campaigns/feel-the-comfort", label: "Feel The Comfort" },
  { route: "#/marketing/campaigns/mothers-day", label: "Mother's Day Campaign" },
  { route: "#/marketing/campaigns/sixth-anniversary", label: "6th Anniversary Campaign" },
  { route: "#/marketing/events/pim2-opening", label: "PIM 2 Grand Opening" },
  { route: "#/marketing/events/semarang-opening", label: "Semarang Grand Opening" },
  { route: "#/marketing/printed-media", label: "Printed Media" },
  { route: "#/marketing/roi", label: "Marketing ROI" },
  { route: "#/social/summary", label: "Q2 Social Media Summary" },
  { route: "#/social/instagram-growth", label: "Instagram Growth" },
  { route: "#/social/instagram-posts", label: "Instagram Top Posts" },
  { route: "#/social/tiktok-growth", label: "TikTok Overview" },
  { route: "#/social/tiktok-posts", label: "TikTok Top Posts" },
];