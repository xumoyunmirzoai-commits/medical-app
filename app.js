// ==============================================
//  MedCore — app.js  (2934 dorilar uchun)
// ==============================================

// ── State ──
let favorites   = JSON.parse(localStorage.getItem("mc_favs")   || "[]");
let recentIds   = JSON.parse(localStorage.getItem("mc_recent") || "[]");
let currentDrug = null;
let activeGroup = "";
let currentPage = 1;
let pageSize    = 48;         // sahifada nechta karta
let filteredDrugs = [];       // joriy filter natijasi

// ── Boot ──
document.addEventListener("DOMContentLoaded", () => {
  const user = checkAuthOnAppPage();
  if (!user) return;
  renderUserInTopbar(user);
  renderDropdownUser(user);

  // Hero greeting — foydalanuvchi ismi
  const heroName = document.getElementById("heroUserName");
  if (heroName) {
    heroName.textContent = user.given_name || user.name || "Foydalanuvchi";
  }

  // Sidebar holatini tiklash
  initSidebarState();

  // Til tugmalarini boshlang'ich holatga keltir
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === LANG);
  });
  updateGroupsLang();
  applyTranslations();

  updateStats();
  renderDashGroupList();
  renderRecentRow();
  renderInteractions();
  renderFavs();
  populateGroupFilter();
  renderGroupTabs();

  // Dorilar sahifasini tayyorla
  filteredDrugs = DRUGS.slice();
  renderDrugsPage();

  // URL parametridan sahifani aniqla (?page=drugs)
  const urlPage = new URLSearchParams(window.location.search).get('page');
  if (urlPage) navigateTo(urlPage);

  setupNav();
  setupKeyboard();
});

// ════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════
const BREADCRUMBS = {
  dashboard:"Dashboard", drugs:"Dorilar", diseases:"Kasalliklar",
  lab:"Laboratoriya", calculators:"Kalkulyatorlar",
  interactions:"O'zaro Ta'sir", favorites:"Sevimlilar"
};

function setupNav() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      navigateTo(item.dataset.page);
    });
  });
}

function navigateTo(page) {
  document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add("active");
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add("active");
  document.getElementById("breadcrumb").textContent = BREADCRUMBS[page] || page;
  if (page === "favorites")  renderFavs();
  if (page === "dashboard")  { renderRecentRow(); updateStats(); }
  closeMobileSidebar();
}

// ── Mobil uchun toggle ──
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const isOpen  = sidebar.classList.toggle("open");
  if (overlay) overlay.classList.toggle("active", isOpen);
}

// ── Desktop uchun yig'ish/kengaytirish ──
let sidebarCollapsed = localStorage.getItem("mc_sidebar_collapsed") === "1";

function initSidebarState() {
  if (sidebarCollapsed) {
    document.getElementById("sidebar").classList.add("collapsed");
    document.getElementById("mainWrapper").classList.add("sidebar-collapsed");
    const tog = document.getElementById("sidebarToggle");
    if (tog) tog.classList.add("collapsed");
  }
  updateTooltips();
}

function toggleSidebarCollapse() {
  sidebarCollapsed = !sidebarCollapsed;
  localStorage.setItem("mc_sidebar_collapsed", sidebarCollapsed ? "1" : "0");
  document.getElementById("sidebar").classList.toggle("collapsed", sidebarCollapsed);
  document.getElementById("mainWrapper").classList.toggle("sidebar-collapsed", sidebarCollapsed);
  const tog = document.getElementById("sidebarToggle");
  if (tog) tog.classList.toggle("collapsed", sidebarCollapsed);
  updateTooltips();
}

function updateTooltips() {
  document.querySelectorAll(".nav-item[data-page]").forEach(item => {
    const page = item.dataset.page;
    const labelEl = item.querySelector("[data-i18n]");
    if (labelEl) item.dataset.tooltip = labelEl.textContent.trim();
  });
}
function closeMobileSidebar() {
  if (window.innerWidth <= 900) {
    document.getElementById("sidebar").classList.remove("open");
    const overlay = document.getElementById("sidebarOverlay");
    if (overlay) overlay.classList.remove("active");
  }
}

// ════════════════════════════════════════════
// STATS
// ════════════════════════════════════════════
function updateStats() {
  const el = document.getElementById("statDrugs");
  if (el) el.textContent = DRUGS.length;
  const elF = document.getElementById("statFavs");
  if (elF) elF.textContent = favorites.length;
  const tr = document.getElementById("statFavTrend");
  if (tr) tr.textContent = favorites.length > 0 ? favorites.length + " ta saqlangan" : t("stat_no_favs");
  const nb = document.getElementById("navFavCount");
  if (nb) { nb.textContent = favorites.length; nb.style.display = favorites.length ? "" : "none"; }
  const nb2 = document.getElementById("navDrugCount");
  if (nb2) nb2.textContent = DRUGS.length;
  const mc = document.getElementById("modDrugsCount");
  if (mc) mc.textContent = DRUGS.length + " ta";
  // Stat gruplar
  document.getElementById("statGrps") && (document.getElementById("statGrps").textContent = GROUPS.length);
}

// ════════════════════════════════════════════
// DASHBOARD — Group list
// ════════════════════════════════════════════
function renderDashGroupList() {
  const el = document.getElementById("dashGroupList");
  if (!el) return;
  el.innerHTML = GROUPS.map(g => {
    const cnt = DRUGS.filter(d => d.group === g.id).length;
    return `<div class="glist-item" onclick="goToDrugGroup('${g.id}')">
      <span class="glist-dot" style="background:${g.color}"></span>
      <span class="glist-name">${g.icon} ${tGroup(g.id)}</span>
      <span class="glist-count">${cnt}</span>
    </div>`;
  }).join("");
}

function goToDrugGroup(groupId) {
  navigateTo("drugs");
  activeGroup = groupId;
  document.getElementById("filterGroup").value = groupId;
  renderGroupTabs();
  applyFilters();
}

// ════════════════════════════════════════════
// RECENT DRUGS
// ════════════════════════════════════════════
function addToRecent(drug) {
  recentIds = [drug.id, ...recentIds.filter(id => id !== drug.id)].slice(0, 8);
  localStorage.setItem("mc_recent", JSON.stringify(recentIds));
}

function renderRecentRow() {
  const el = document.getElementById("recentDrugsRow");
  if (!el) return;
  const list = recentIds.map(id => DRUGS.find(d => d.id === id)).filter(Boolean);
  if (!list.length) {
    el.innerHTML = `<p class="empty-hint">Dori ochganingizda bu yerda ko'rinadi</p>`;
    return;
  }
  el.innerHTML = list.map(d => {
    const g = GROUPS.find(g => g.id === d.group);
    return `<div class="rdrug-chip" onclick="openDrug(${d.id})">
      <div class="rdrug-chip-icon" style="background:${g?.bg}">${g?.icon||"💊"}</div>
      <div>
        <div class="rdrug-chip-name">${getDrugDisplayName(d).substring(0,22)}${getDrugDisplayName(d).length>22?'…':''}</div>
        <div class="rdrug-chip-group">${g?.name||""}</div>
      </div>
    </div>`;
  }).join("");
}

// ════════════════════════════════════════════
// FILTER & GROUP TABS
// ════════════════════════════════════════════
function populateGroupFilter() {
  const sel = document.getElementById("filterGroup");
  if (!sel) return;
  GROUPS.forEach(g => {
    const o = document.createElement("option");
    o.value = g.id; o.textContent = g.icon + " " + g.name;
    sel.appendChild(o);
  });
}

function renderGroupTabs() {
  const el = document.getElementById("groupTabs");
  if (!el) return;
  const all = `<button class="gtab ${activeGroup===""?"active":""}" onclick="setGroupTab(this,'')">${t('tab_all')} <span>${DRUGS.length}</span></button>`;
  const tabs = GROUPS.map(g => {
    const cnt = DRUGS.filter(d => d.group === g.id).length;
    return `<button class="gtab ${activeGroup===g.id?"active":""}" onclick="setGroupTab(this,'${g.id}')">${g.icon} ${tGroup(g.id)} <span>${cnt}</span></button>`;
  }).join("");
  el.innerHTML = all + tabs;
}

function setGroupTab(btn, groupId) {
  activeGroup = groupId;
  document.querySelectorAll(".gtab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const sel = document.getElementById("filterGroup");
  if (sel) sel.value = groupId;
  currentPage = 1;
  applyFilters();
}

function filterDrugs() {
  const grp  = document.getElementById("filterGroup").value;
  activeGroup = grp;
  renderGroupTabs();
  currentPage = 1;
  applyFilters();
}

function applyFilters() {
  const grp  = document.getElementById("filterGroup").value;
  const form = document.getElementById("filterForm").value;
  const src  = document.getElementById("filterSrc")?.value || "";
  const q    = (document.getElementById("drugSearch")?.value || "").toLowerCase().trim();

  filteredDrugs = DRUGS.filter(d => {
    if (grp  && d.group !== grp) return false;
    if (form && !d.forms.includes(form)) return false;
    if (src  && (d.src||"domestic") !== src) return false;
    if (q) {
      const hit = d.name.toLowerCase().includes(q) ||
                  (d.nameL||"").toLowerCase().includes(q) ||
                  (d.inn||"").toLowerCase().includes(q) ||
                  (d.firm||"").toLowerCase().includes(q) ||
                  (d.atx||"").toLowerCase().includes(q);
      if (!hit) return false;
    }
    return true;
  });
  renderDrugsPage();
}

// ════════════════════════════════════════════
// DRUGS PAGE — pagination bilan
// ════════════════════════════════════════════
function renderDrugsPage() {
  const grid = document.getElementById("drugsGrid");
  const info = document.getElementById("pageInfo");
  const prev = document.getElementById("prevPage");
  const next = document.getElementById("nextPage");
  if (!grid) return;

  const total = filteredDrugs.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * pageSize;
  const end   = Math.min(start + pageSize, total);
  const slice = filteredDrugs.slice(start, end);

  if (total === 0) {
    grid.innerHTML = `<div class="empty-drugs">🔍 ${t('no_drugs')}</div>`;
    if (info) info.textContent = "";
  } else {
    grid.innerHTML = slice.map(d => drugCardHTML(d)).join("");
    if (info) info.textContent = `${start+1}–${end} / ${t('page_of')} ${total} ${t('page_drugs')}`;
  }

  if (prev) prev.disabled = currentPage <= 1;
  if (next) next.disabled = currentPage >= totalPages;

  // Sahifa raqamlari
  const pager = document.getElementById("pagerNums");
  if (pager) {
    let html = "";
    const range = 2;
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || (p >= currentPage - range && p <= currentPage + range)) {
        html += `<button class="pg-num ${p===currentPage?"active":""}" onclick="goToPage(${p})">${p}</button>`;
      } else if (p === currentPage - range - 1 || p === currentPage + range + 1) {
        html += `<span class="pg-dots">…</span>`;
      }
    }
    pager.innerHTML = html;
  }
}

function goToPage(p) {
  currentPage = p;
  renderDrugsPage();
  document.getElementById("page-drugs")?.scrollTo(0, 0);
  window.scrollTo(0, 0);
}
function prevPage() { if (currentPage > 1) { currentPage--; renderDrugsPage(); window.scrollTo(0,0); } }
function nextPage() {
  const tp = Math.ceil(filteredDrugs.length / pageSize);
  if (currentPage < tp) { currentPage++; renderDrugsPage(); window.scrollTo(0,0); }
}

// ════════════════════════════════════════════
// DRUG CARD HTML
// ════════════════════════════════════════════
function drugCardHTML(d) {
  const g     = GROUPS.find(g => g.id === d.group);
  const isFav = favorites.includes(d.id);
  const rxKey = d.rx || "Nomalum";
  const rxTranslated = tRx(rxKey);
  const isRx  = d.rx === "Retsept bilan";
  const rxBadge = isRx
    ? `<span style="font-size:10px;font-weight:700;background:#fee2e2;color:#dc2626;padding:2px 7px;border-radius:10px">${t('rx_yes')}</span>`
    : `<span style="font-size:10px;font-weight:700;background:#dcfce7;color:#16a34a;padding:2px 7px;border-radius:10px">${t('rx_no')}</span>`;
  const formTranslated = tForm(d.forms[0] || "Boshqa");

  return `<div class="drug-card" onclick="openDrug(${d.id})">
    <div class="dc-strip"></div>
    <div class="dc-top">
      <div class="dc-head">
        <div style="flex:1;min-width:0">
          <div class="dc-name">${getDrugDisplayName(d)}</div>
          <div class="dc-inn">${d.inn||"—"}</div>
        </div>
        <button class="dc-fav ${isFav?"on":""}" onclick="event.stopPropagation();toggleFav(${d.id})">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav?"currentColor":"none"}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </button>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:10px;flex-wrap:wrap">
        <span class="dc-tag" style="background:${g?.bg||"#f1f5f9"};color:${g?.color||"#64748b"}">${g?.icon||"💊"} ${tGroup(d.group)}</span>
        ${rxBadge}
      </div>
    </div>
    <div class="dc-divider"></div>
    <div class="dc-body">
      <div class="dc-rows">
        <div class="dc-row"><span class="dc-lbl">${t('card_atx')}</span><span class="dc-val">${d.atx||"—"}</span></div>
        <div class="dc-row"><span class="dc-lbl">${t('card_form')}</span><span class="dc-val">${formTranslated}</span></div>
        <div class="dc-row"><span class="dc-lbl">${t('card_firm')}</span><span class="dc-val" style="font-size:11px">${(d.firm||"—").substring(0,30)}${d.firm&&d.firm.length>30?"…":""}</span></div>
      </div>
    </div>
    <div class="dc-footer">
      <div class="dc-forms"><span class="dc-form-badge">${formTranslated}</span></div>
      <span class="dc-open">${t('card_details')}</span>
    </div>
  </div>`;
}

// ════════════════════════════════════════════
// FAVORITES
// ════════════════════════════════════════════
function toggleFav(id) {
  if (favorites.includes(id)) { favorites = favorites.filter(f => f !== id); }
  else { favorites.push(id); }
  localStorage.setItem("mc_favs", JSON.stringify(favorites));
  updateStats();
  renderDrugsPage();
  renderFavs();
  // Modal tugmasi
  if (currentDrug?.id === id) {
    const btn = document.getElementById("mFavBtn");
    if (btn) {
      const on = favorites.includes(id);
      btn.className = `modal-fav-btn ${on?"on":""}`;
      btn.innerHTML = (on?"⭐ Saqlangan":"☆ Saqlash");
    }
  }
}

function renderFavs() {
  const grid = document.getElementById("favsGrid");
  if (!grid) return;
  const list = DRUGS.filter(d => favorites.includes(d.id));
  if (!list.length) {
    grid.innerHTML = `<div class="empty-drugs">Hali sevimli dori qo'shilmagan.<br>Dori kartasidagi ★ ni bosing.</div>`;
    return;
  }
  grid.innerHTML = list.map(d => drugCardHTML(d)).join("");
}

// ════════════════════════════════════════════
// INTERACTIONS
// ════════════════════════════════════════════
function renderInteractions() {
  const el = document.getElementById("interactionsList");
  if (!el) return;
  if (!INTERACTIONS || INTERACTIONS.length === 0) {
    el.innerHTML = `<div class="empty-drugs" style="grid-column:1/-1">O'zaro ta'sir ma'lumotlari tez kunda qo'shiladi.</div>`;
    return;
  }
  const labels = { high:"🔴 Yuqori xavf", medium:"🟡 O'rta xavf", low:"🟢 Past xavf" };
  el.innerHTML = INTERACTIONS.map(i => `
    <div class="inter-card">
      <div class="inter-sev-bar ${i.severity}"></div>
      <div class="inter-body">
        <div class="inter-drugs">
          <span class="inter-drug-name">${i.drug1}</span>
          <span class="inter-plus">+</span>
          <span class="inter-drug-name">${i.drug2}</span>
        </div>
        <p class="inter-desc">${i.description}</p>
        <span class="inter-badge ${i.severity}">${labels[i.severity]}</span>
      </div>
    </div>`).join("");
}

// ════════════════════════════════════════════
// DORI NOMINI TILDA KO'RSATISH
// ════════════════════════════════════════════
function getDrugDisplayName(drug) {
  // RU rejimida to'liq nom (rus+lotin)
  if (LANG === 'ru') return drug.name;
  // UZ/EN rejimida: agar lotin nomi mavjud bo'lsa uni ko'rsat
  if (drug.nameL && drug.nameL.trim().length > 0) return drug.nameL;
  return drug.name;
}

function getGroupDisplay(drug) {
  // RU rejimida: original rus guruhi nomi (to'liq)
  if (LANG === 'ru' && drug.groupFull) return drug.groupFull;
  // UZ/EN rejimida: tarjima qilingan qisqa guruh nomi
  return tGroup(drug.group);
}

// ════════════════════════════════════════════
// PHARMA TAB RENDERER
// ════════════════════════════════════════════
function pharmaBlock(emoji, title, content, openByDefault = false) {
  const id = 'pb_' + Math.random().toString(36).slice(2,7);
  return `
  <div class="pharma-block ${openByDefault ? 'open' : ''}" id="${id}">
    <div class="pharma-block-head" onclick="togglePharmaBlock('${id}')">
      <span class="pharma-block-emoji">${emoji}</span>
      <span class="pharma-block-title">${title}</span>
      <span class="pharma-block-chevron">▼</span>
    </div>
    <div class="pharma-block-body">${content}</div>
  </div>`;
}

function renderSideRow(label, text) {
  const cls = label.includes('Asab') ? 'asab'
    : label.includes('Qon') ? 'qon'
    : label.includes('Jigar') ? 'jigar'
    : label.includes('Buyrak') ? 'buyrak'
    : label.includes('Teri') ? 'teri'
    : label.includes('Yurak') ? 'yurak' : '';
  return `<div class="pharma-side-row ${cls}">
    <div class="pharma-side-lbl">${label}</div>
    <div class="pharma-side-val">${text}</div>
  </div>`;
}

function renderPharmaTab(drug) {
  if (typeof PHARMA_DATA === 'undefined') {
    return `<div class="pharma-nodata"><span class="pharma-nodata-icon">🔬</span>${t('pharma_noload')}</div>`;
  }
  const entry = PHARMA_DATA[drug.atx] || null;

  if (!entry) {
    return `<div class="pharma-nodata">
      <span class="pharma-nodata-icon">🔬</span>
      ${t('pharma_nodata')}
    </div>`;
  }

  // Ko'p tilli strukturani qo'llab-quvvatlash: entry.uz / entry.ru / entry.en yoki eski flat format
  const pd = entry[LANG] || entry['uz'] || entry;

  let html = '';

  // ── Header (guruh + ta'sir)
  html += `<div class="pharma-header">
    <div class="pharma-header-icon">💊</div>
    <div>
      <div class="pharma-header-group">${pd.gruppa || ''}</div>
      <div class="pharma-header-action">${pd.farmTasir || ''}</div>
    </div>
  </div>`;

  // ── 1. Farmakodinamika
  if (pd.farmakodinamika) {
    html += pharmaBlock('⚗️', t('pharma_dinamika'), `<p>${pd.farmakodinamika}</p>`, true);
  }

  // ── 2. Farmakokinetika
  if (pd.farmakokinetika) {
    const fk = pd.farmakokinetika;
    const fkCards = [
      { lbl: t('pharma_sorish'),      val: fk.sorish },
      { lbl: t('pharma_tarqalish'),   val: fk.tarqalish },
      { lbl: t('pharma_metabolizm'),  val: fk.metabolizm },
      { lbl: t('pharma_chiqarilish'), val: fk.chiqarilish },
    ].filter(c => c.val);
    const fkHtml = `<div class="pharma-fk-grid">
      ${fkCards.map(c => `<div class="pharma-fk-card">
        <div class="pharma-fk-card-lbl">${c.lbl}</div>
        <div class="pharma-fk-card-val">${c.val}</div>
      </div>`).join('')}
    </div>`;
    html += pharmaBlock('📊', t('pharma_kinetika'), fkHtml, true);
  }

  // ── 3. Ko'rsatmalar
  if (pd.korsatmalar && pd.korsatmalar.length) {
    const listHtml = `<ul class="pharma-list green">
      ${pd.korsatmalar.map(i => `<li>${i}</li>`).join('')}
    </ul>`;
    html += pharmaBlock('✅', t('pharma_korsatma'), listHtml, true);
  }

  // ── 4. Qarshi ko'rsatmalar
  if (pd.qarrshi && pd.qarrshi.length) {
    const listHtml = `<ul class="pharma-list orange">
      ${pd.qarrshi.map(i => `<li>${i}</li>`).join('')}
    </ul>`;
    html += pharmaBlock('🚫', t('pharma_qarrshi'), listHtml);
  }

  // ── 5. Nojo'ya ta'sirlar
  if (pd.nojoya && Object.keys(pd.nojoya).length) {
    const sideHtml = `<div class="pharma-side-grid">
      ${Object.entries(pd.nojoya).map(([k,v]) => renderSideRow(k, v)).join('')}
    </div>`;
    html += pharmaBlock('⚠️', t('pharma_nojoya'), sideHtml);
  }

  // ── 6. Qo'llash usuli & Dozalash
  if (pd.qollash) {
    const doseHtml = `<div class="pharma-dose-cards">
      ${pd.qollash.kattalar ? `<div class="pharma-dose-card">
        <div class="pharma-dose-card-lbl">${t('pharma_kattalar')}</div>
        <div class="pharma-dose-card-val">${pd.qollash.kattalar}</div>
      </div>` : ''}
      ${pd.qollash.bolalar ? `<div class="pharma-dose-card">
        <div class="pharma-dose-card-lbl">${t('pharma_bolalar')}</div>
        <div class="pharma-dose-card-val">${pd.qollash.bolalar}</div>
      </div>` : ''}
    </div>`;
    html += pharmaBlock('💉', t('pharma_qollash'), doseHtml, true);
  }

  // ── 7. Dori-dori o'zaro ta'siri
  if (pd.ozarotasir && pd.ozarotasir.length) {
    const interHtml = `<div class="pharma-interact-list">
      ${pd.ozarotasir.map(i => `<div class="pharma-interact-item">
        <span class="pharma-interact-icon">⚡</span>
        <span>${i}</span>
      </div>`).join('')}
    </div>`;
    html += pharmaBlock('🔗', t('pharma_ozaro'), interHtml);
  }

  // ── 8. Dozadan oshib ketish
  if (pd.dozadan) {
    const odHtml = `<div class="pharma-overdose-box">
      <span class="pharma-overdose-icon">🚨</span>
      <span>${pd.dozadan}</span>
    </div>`;
    html += pharmaBlock('🚨', t('pharma_dozadan'), odHtml);
  }

  // ── 9. Chiqarish shakli
  if (pd.chiqarish) {
    const forms = pd.chiqarish.split(';').map(f => f.trim()).filter(Boolean);
    const formHtml = forms.map(f => `<span class="pharma-form-badge">📦 ${f}</span>`).join('');
    html += pharmaBlock('📦', t('pharma_chiqarish'), `<div style="display:flex;flex-wrap:wrap;gap:4px;padding-top:2px">${formHtml}</div>`);
  }

  return html;
}

function togglePharmaBlock(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

// ════════════════════════════════════════════
// DRUG MODAL
// ════════════════════════════════════════════
function openDrug(id) {
  const drug = DRUGS.find(d => d.id === id);
  if (!drug) return;
  currentDrug = drug;
  addToRecent(drug);
  renderRecentRow();

  const g    = GROUPS.find(g => g.id === drug.group);
  const isFav = favorites.includes(id);
  const displayName = getDrugDisplayName(drug);

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-stripe"></div>
    <div class="modal-hd">
      <div class="modal-hd-top">
        <div style="flex:1">
          <div class="modal-drug-name">${displayName}</div>
          ${drug.nameL && LANG!=='ru' && drug.name !== drug.nameL ? `<div style="font-size:12px;color:var(--gray-400);margin-top:2px;font-style:italic">${drug.name}</div>` : ''}
          <div class="modal-drug-inn">${drug.inn||""}</div>
          <span class="dc-tag" style="background:${g?.bg};color:${g?.color};margin-top:10px;display:inline-flex;align-items:center;gap:5px">${g?.icon} ${tGroup(drug.group)}</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
          <button class="modal-close" onclick="closeDrugModal()">✕</button>
          <button id="mFavBtn" class="modal-fav-btn ${isFav?"on":""}" onclick="toggleFav(${id})">
            ${isFav?"⭐ "+t('modal_saved'):"☆ "+t('modal_save')}
          </button>
        </div>
      </div>
      <div class="modal-tabs">
        <button class="mtab active" onclick="switchMTab(this,'mgeneral')">${t('modal_general')}</button>
        <button class="mtab" onclick="switchMTab(this,'mpharma')">${t('modal_pharma')}</button>
        <button class="mtab" onclick="switchMTab(this,'msafety')">${t('modal_safety')}</button>
      </div>
    </div>
    <div class="modal-body">

      <div class="mtab-content active" id="mgeneral">
        <div class="info-grid-2">
          <div class="info-box">
            <div class="info-box-label">${t('modal_form')}</div>
            <div class="info-box-val">${tForm(drug.forms[0]||"Boshqa")}</div>
          </div>
          <div class="info-box">
            <div class="info-box-label">${t('modal_atx')}</div>
            <div class="info-box-val">${drug.atx||"—"}</div>
          </div>
          <div class="info-box">
            <div class="info-box-label">${t('modal_rx')}</div>
            <div class="info-box-val">${drug.rx==="Retsept bilan"?t('modal_rx_yes'):t('modal_rx_no')}</div>
          </div>
          <div class="info-box">
            <div class="info-box-label">${t('modal_country')}</div>
            <div class="info-box-val">${drug.country || t('modal_uzb')}</div>
          </div>
          <div class="info-box span2">
            <div class="info-box-label">${t('modal_firm')}</div>
            <div class="info-box-val">${drug.firm||"—"}</div>
          </div>
          <div class="info-box span2">
            <div class="info-box-label">${t('modal_form_full')}</div>
            <div class="info-box-val" style="font-size:12.5px;font-weight:400;color:var(--gray-600)">${drug.formFull||"—"}</div>
          </div>
          ${drug.regNum?`<div class="info-box span2"><div class="info-box-label">${t('modal_reg')}</div><div class="info-box-val" style="font-size:12px;font-weight:500">${drug.regNum}</div></div>`:""}
        </div>
        <div class="msection">
          <div class="msection-title">${t('modal_phgroup')}</div>
          <div class="msection-text">${getGroupDisplay(drug)}</div>
        </div>
      </div>

      <div class="mtab-content" id="mpharma">
        ${renderPharmaTab(drug)}
      </div>

      <div class="mtab-content" id="msafety">
        <div class="msection">
          <div class="msection-text" style="color:var(--gray-400);font-style:italic">
            ${t('modal_no_safety')}
          </div>
        </div>
      </div>

    </div>`;

  document.getElementById("modalOverlay").classList.add("open");
}

function switchMTab(btn, tabId) {
  document.querySelectorAll(".mtab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".mtab-content").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}
function closeModal(e) { if (e.target.id==="modalOverlay") closeDrugModal(); }
function closeDrugModal() { document.getElementById("modalOverlay").classList.remove("open"); currentDrug = null; }

// ════════════════════════════════════════════
// GLOBAL SEARCH (Topbar)
// ════════════════════════════════════════════
function handleSearch(query) {
  const dd = document.getElementById("searchDropdown");
  const q  = query.trim().toLowerCase();
  if (!q) { dd.classList.remove("show"); return; }

  const res = DRUGS.filter(d =>
    d.name.toLowerCase().includes(q) ||
    (d.nameL||"").toLowerCase().includes(q) ||
    (d.inn||"").toLowerCase().includes(q) ||
    (d.atx||"").toLowerCase().includes(q) ||
    (d.firm||"").toLowerCase().includes(q)
  ).slice(0, 10);

  dd.innerHTML = res.length === 0
    ? `<div class="sd-empty">Natija topilmadi</div>`
    : res.map(d => {
        const g = GROUPS.find(g => g.id === d.group);
        const isMob = window.innerWidth <= 640;
        const maxLen = isMob ? 30 : 40;
        const metaLen = isMob ? 28 : 50;
        const metaText = (g?.name || '') + (d.atx || d.inn ? ' · ' + (d.atx||d.inn) : '');
        return `<div class="sd-item" onclick="searchSelect(${d.id})">
          <div class="sd-pill" style="background:${g?.bg||'#f3f4f6'};color:${g?.color||'#6b7280'}">${g?.icon||"💊"}</div>
          <div class="sd-info">
            <div class="sd-name">${d.name.length > maxLen ? d.name.substring(0, maxLen) + '…' : d.name}</div>
            <div class="sd-meta">${metaText.length > metaLen ? metaText.substring(0, metaLen) + '…' : metaText}</div>
          </div>
        </div>`;
      }).join("");
  dd.classList.add("show");
  showSearchOverlay();
}

function searchSelect(id) {
  hideSearchDropdown();
  openDrug(id);
}

function showSearchOverlay() {
  if (window.innerWidth > 640) return;
  let ov = document.getElementById("searchBgOverlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "searchBgOverlay";
    ov.style.cssText = `
      position:fixed;inset:0;top:54px;
      background:rgba(0,0,0,.35);backdrop-filter:blur(2px);
      z-index:499;
    `;
    ov.onclick = hideSearchDropdown;
    document.body.appendChild(ov);
  }
  ov.style.display = "block";
}

function hideSearchDropdown() {
  document.getElementById("searchDropdown")?.classList.remove("show");
  document.getElementById("globalSearch").value = "";
  const ov = document.getElementById("searchBgOverlay");
  if (ov) ov.style.display = "none";
}

document.addEventListener("click", e => {
  if (!e.target.closest(".global-search-wrap") && !e.target.closest("#searchDropdown")) {
    hideSearchDropdown();
  }
});

// ════════════════════════════════════════════
// USER DROPDOWN
// ════════════════════════════════════════════
function renderDropdownUser(user) {
  const name  = document.getElementById("dropdownName");
  const email = document.getElementById("dropdownEmail");
  const av    = document.getElementById("dropdownAvatar");
  if (name)  name.textContent  = user.name;
  if (email) email.textContent = user.email;
  if (av) {
    if (user.picture) {
      av.innerHTML = `<img src="${user.picture}" style="width:100%;height:100%;border-radius:9px;object-fit:cover" referrerpolicy="no-referrer"/>`;
    } else {
      av.textContent = user.name.split(" ").map(n=>n[0]).slice(0,2).join("").toUpperCase();
    }
  }
}

function toggleUserMenu() {
  document.getElementById("userDropdown").classList.toggle("open");
}

document.addEventListener("click", e => {
  if (!e.target.closest(".user-menu-wrap"))
    document.getElementById("userDropdown")?.classList.remove("open");
});

// ════════════════════════════════════════════
// KEYBOARD
// ════════════════════════════════════════════
function setupKeyboard() {
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeDrugModal();
    if ((e.ctrlKey||e.metaKey) && e.key === "k") {
      e.preventDefault();
      document.getElementById("globalSearch").focus();
    }
  });
}
