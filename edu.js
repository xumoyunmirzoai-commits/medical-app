// ══════════════════════════════════════════════════════════
//  MedCore — Ta'lim bo'limi (subject → bob → mavzu accordion)
//  edu_data.js (EDU_DATA: subjects[].chapters[].topics[].blocks[])
//  Mobil uchun qulay drill-down + to'liq qidiruv.
// ══════════════════════════════════════════════════════════
(function () {
  const T = {
    uz: { search: "Ta'lim bo'limidan qidirish...", back: "Orqaga", chapters: "Boblar", topics: "mavzu", none: "Hech narsa topilmadi", results: "natija", source: "Manba", open: "Ochish", subj: "Yo'nalishlar" },
    ru: { search: "Поиск в обучении...", back: "Назад", chapters: "Разделы", topics: "тем", none: "Ничего не найдено", results: "результатов", source: "Источник", open: "Открыть", subj: "Направления" },
    en: { search: "Search education...", back: "Back", chapters: "Chapters", topics: "topics", none: "Nothing found", results: "results", source: "Source", open: "Open", subj: "Subjects" }
  };
  const L = () => (typeof LANG !== "undefined" && T[LANG]) ? LANG : "uz";
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let inited = false, si = 0, ci = 0;
  const E = () => (typeof EDU_DATA !== "undefined") ? EDU_DATA : null;
  const $ = id => document.getElementById(id);

  function blockHTML(b) {
    if (b.t === "p") return `<p class="edu-p">${esc(b.text)}</p>`;
    if (b.t === "h") return `<p class="edu-p"><b>${esc(b.text)}</b></p>`;
    if (b.t === "img") return `<div class="edu-img"><img loading="lazy" src="edu-assets/${esc(b.src)}" alt=""></div>`;
    if (b.t === "table") {
      const rows = b.rows.map((r, ri) => "<tr>" + r.map(c => `<${ri === 0 ? "th" : "td"}>${esc(c).replace(/\n/g, "<br>")}</${ri === 0 ? "th" : "td"}>`).join("") + "</tr>").join("");
      return `<div class="edu-table-wrap"><table class="edu-table">${rows}</table></div>`;
    }
    return "";
  }
  function topicBody(tp) {
    if (!tp.blocks.length) return `<p class="edu-p" style="color:var(--gray-400)">—</p>`;
    return tp.blocks.map(blockHTML).join("");
  }

  function crumb(parts) {
    const c = $("eduCrumb");
    if (c) c.innerHTML = parts.map((p, i) =>
      p.go ? `<a onclick="${p.go}">${esc(p.label)}</a>` : `<span>${esc(p.label)}</span>`
    ).join('<i class="edu-crumb-sep">›</i>');
  }

  function renderSubjects() {
    const data = E(); const t = T[L()];
    crumb([{ label: "Ta'lim" }]);
    $("eduBody").innerHTML = `<div class="edu-grid">` + data.subjects.map((s, i) => {
      const nTop = s.chapters.reduce((a, c) => a + c.topics.length, 0);
      return `<button class="edu-subj-card" onclick="eduSubject(${i})">
        <div class="edu-subj-ic">${s.icon || "📘"}</div>
        <div class="edu-subj-tx">
          <div class="edu-subj-name">${esc(s.name)}</div>
          <div class="edu-subj-desc">${esc(s.desc || "")}</div>
          <div class="edu-subj-meta">${s.chapters.length} ${t.chapters.toLowerCase()} · ${nTop} ${t.topics}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`;
    }).join("") + `</div>`;
  }

  function renderChapters() {
    const data = E(); const t = T[L()]; const s = data.subjects[si];
    crumb([{ label: "Ta'lim", go: "eduHome()" }, { label: s.name }]);
    $("eduBody").innerHTML =
      `<button class="edu-back" onclick="eduHome()">← ${esc(t.back)}</button>` +
      `<div class="edu-grid">` + s.chapters.map((c, i) =>
        `<button class="edu-chap-card" onclick="eduChapter(${i})">
          <span class="edu-chap-num">${i + 1}</span>
          <span class="edu-chap-title">${esc(c.title)}</span>
          <span class="edu-chap-cnt">${c.topics.length} ${t.topics}</span>
        </button>`).join("") + `</div>`;
  }

  function renderTopics(openIdx) {
    const data = E(); const t = T[L()]; const s = data.subjects[si]; const ch = s.chapters[ci];
    crumb([{ label: "Ta'lim", go: "eduHome()" }, { label: s.name, go: "eduSubject(" + si + ")" }, { label: (ci + 1) + "-bob" }]);
    $("eduBody").innerHTML =
      `<button class="edu-back" onclick="eduSubject(${si})">← ${esc(t.back)}</button>` +
      `<h2 class="edu-chapter-title">${esc(ch.title)}</h2>` +
      `<div class="edu-acc-list">` + ch.topics.map((tp, i) =>
        `<div class="edu-acc" id="edu-acc-${i}">
          <button class="edu-acc-head" onclick="eduToggle(${i})">
            <span class="edu-acc-title">${esc(tp.title || ("Mavzu " + (i + 1)))}</span>
            <svg class="edu-acc-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="edu-acc-body" data-loaded="0"></div>
        </div>`).join("") + `</div>`;
    const main = document.querySelector(".content"); if (main) main.scrollTo(0, 0);
    if (typeof openIdx === "number") eduToggle(openIdx, true);
  }

  // ── Global navigatsiya ──
  window.eduHome = function () { document.getElementById("eduResults") && ($("eduResults").style.display = "none"); $("eduBody").style.display = ""; renderSubjects(); };
  window.eduSubject = function (i) { si = i; $("eduBody").style.display = ""; if ($("eduResults")) $("eduResults").style.display = "none"; renderChapters(); };
  window.eduChapter = function (i) { ci = i; renderTopics(); };
  window.eduToggle = function (i, scroll) {
    const acc = $("edu-acc-" + i); if (!acc) return;
    const body = acc.querySelector(".edu-acc-body");
    if (body.dataset.loaded === "0") { body.innerHTML = topicBody(E().subjects[si].chapters[ci].topics[i]); body.dataset.loaded = "1"; }
    const open = acc.classList.toggle("open");
    if (open && scroll) setTimeout(() => acc.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  // ── Qidiruv (barcha mavzular bo'yicha) ──
  window.eduSearch = function (q) {
    q = (q || "").trim().toLowerCase();
    const res = $("eduResults"), body = $("eduBody");
    if (q.length < 2) { res.style.display = "none"; body.style.display = ""; return; }
    const data = E(); const hits = [];
    for (let a = 0; a < data.subjects.length; a++) for (let b = 0; b < data.subjects[a].chapters.length; b++) {
      const ch = data.subjects[a].chapters[b];
      for (let c = 0; c < ch.topics.length; c++) {
        const tp = ch.topics[c];
        let text = (tp.title || "") + "\n" + tp.blocks.map(x => x.t === "p" || x.t === "h" ? x.text : (x.t === "table" ? x.rows.map(r => r.join(" ")).join(" ") : "")).join("\n");
        const low = text.toLowerCase(); const idx = low.indexOf(q);
        if (idx >= 0) {
          const st = Math.max(0, idx - 35);
          hits.push({ a, b, c, ch: ch.title, tp: tp.title, snip: (st > 0 ? "…" : "") + text.slice(st, idx + q.length + 90).replace(/\n/g, " ") + "…" });
          if (hits.length >= 150) break;
        }
      }
      if (hits.length >= 150) break;
    }
    const t = T[L()]; body.style.display = "none"; res.style.display = "";
    if (!hits.length) { res.innerHTML = `<div class="edu-empty">🔍 ${t.none}</div>`; return; }
    res.innerHTML = `<div class="edu-res-count">${hits.length} ${t.results}</div>` + hits.map(h =>
      `<div class="edu-res" onclick="eduGoResult(${h.a},${h.b},${h.c})">
        <div class="edu-res-ch">${esc(h.tp || h.ch)}</div>
        <div class="edu-res-snip">${esc(h.snip)}</div>
      </div>`).join("");
  };
  window.eduGoResult = function (a, b, c) {
    $("eduSearch").value = ""; $("eduResults").style.display = "none"; $("eduBody").style.display = "";
    si = a; ci = b; renderTopics(c);
  };

  window.eduInit = function () {
    if (inited) { return; } inited = true;
    const data = E();
    if (!data) { $("eduBody").innerHTML = `<div class="edu-empty">Ma'lumot yuklanmadi.</div>`; return; }
    if (typeof BREADCRUMBS !== "undefined") BREADCRUMBS.edu = "Ta'lim";
    const t = T[L()]; const sb = $("eduSearch"); if (sb) sb.placeholder = t.search;
    const sr = document.querySelector("#page-edu .edu-source"); if (sr) sr.textContent = t.source + ": " + data.source;
    renderSubjects();
  };

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.nav-item[data-page="edu"]');
    if (nav) nav.addEventListener("click", () => setTimeout(window.eduInit, 30));
    const _sl = window.setLanguage;
    if (typeof _sl === "function") window.setLanguage = function (l) { _sl(l); if (inited) { const t = T[L()]; const sb = $("eduSearch"); if (sb) sb.placeholder = t.search; } };
  });
})();
