// ══════════════════════════════════════════════════════════
//  MedCore — Ta'lim bo'limi (420-son buyruq) ko'rsatkichi
//  edu_data.js (EDU_DATA) ni o'qiydi: boblar, navigatsiya, qidiruv.
// ══════════════════════════════════════════════════════════
(function () {
  const S = {
    uz: { search: "Ta'lim bo'limidan qidirish...", toc: "Mundarija", results: "natija", none: "Hech narsa topilmadi", open: "Ochish", src: "Manba" },
    ru: { search: "Поиск в разделе обучения...", toc: "Содержание", results: "результатов", none: "Ничего не найдено", open: "Открыть", src: "Источник" },
    en: { search: "Search in education...", toc: "Contents", results: "results", none: "Nothing found", open: "Open", src: "Source" }
  };
  const L = () => (typeof LANG !== "undefined" && S[LANG]) ? LANG : "uz";
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let curChapter = 0, inited = false;

  function E() { return (typeof EDU_DATA !== "undefined") ? EDU_DATA : null; }

  function blockHTML(b, ci, bi) {
    if (b.t === "h") return `<h3 class="edu-h" id="edu-b-${ci}-${bi}">${esc(b.text)}</h3>`;
    if (b.t === "p") return `<p class="edu-p" id="edu-b-${ci}-${bi}">${esc(b.text)}</p>`;
    if (b.t === "img") return `<div class="edu-img" id="edu-b-${ci}-${bi}"><img loading="lazy" src="edu-assets/${esc(b.src)}" alt=""></div>`;
    if (b.t === "table") {
      const rows = b.rows.map((r, ri) => {
        const tag = ri === 0 ? "th" : "td";
        return "<tr>" + r.map(c => `<${tag}>${esc(c).replace(/\n/g, "<br>")}</${tag}>`).join("") + "</tr>";
      }).join("");
      return `<div class="edu-table-wrap" id="edu-b-${ci}-${bi}"><table class="edu-table">${rows}</table></div>`;
    }
    return "";
  }

  function renderChapter(ci) {
    const data = E(); if (!data) return;
    curChapter = ci;
    try { localStorage.setItem("mc_edu_ch", String(ci)); } catch (e) {}
    const ch = data.chapters[ci];
    const cont = document.getElementById("eduContent");
    cont.innerHTML = `<h2 class="edu-chapter-title">${esc(ch.title)}</h2>` +
      ch.blocks.map((b, bi) => blockHTML(b, ci, bi)).join("");
    cont.scrollTop = 0;
    document.querySelectorAll(".edu-toc-chapter").forEach((el, i) => el.classList.toggle("active", i === ci));
    renderSubTOC(ci);
    const main = document.querySelector(".content");
    if (main) main.scrollTo(0, 0);
  }

  function renderSubTOC(ci) {
    const ch = E().chapters[ci];
    const box = document.getElementById("eduSubToc");
    if (!box) return;
    const subs = ch.blocks.map((b, bi) => ({ b, bi })).filter(x => x.b.t === "h");
    box.innerHTML = subs.map(x => `<a class="edu-sub" onclick="eduJump(${ci},${x.bi})">${esc(x.b.text.slice(0, 80))}</a>`).join("");
  }

  function buildTOC() {
    const data = E(); if (!data) return;
    const toc = document.getElementById("eduToc");
    toc.innerHTML = data.chapters.map((ch, i) =>
      `<button class="edu-toc-chapter" onclick="eduOpen(${i})"><span class="edu-toc-num">${i + 1}</span><span>${esc(ch.title.slice(0, 90))}</span></button>`
    ).join("");
  }

  window.eduOpen = function (i) { renderChapter(i); document.getElementById("eduResults").style.display = "none"; document.getElementById("eduPane").style.display = ""; };
  window.eduJump = function (ci, bi) {
    if (ci !== curChapter) renderChapter(ci);
    setTimeout(() => {
      const el = document.getElementById(`edu-b-${ci}-${bi}`);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.classList.add("edu-flash"); setTimeout(() => el.classList.remove("edu-flash"), 1600); }
    }, 60);
  };

  window.eduSearch = function (q) {
    q = (q || "").trim().toLowerCase();
    const res = document.getElementById("eduResults");
    const pane = document.getElementById("eduPane");
    if (q.length < 2) { res.style.display = "none"; pane.style.display = ""; return; }
    const data = E(); const hits = [];
    for (let ci = 0; ci < data.chapters.length; ci++) {
      const ch = data.chapters[ci];
      for (let bi = 0; bi < ch.blocks.length; bi++) {
        const b = ch.blocks[bi];
        let text = b.t === "p" || b.t === "h" ? b.text : (b.t === "table" ? b.rows.map(r => r.join(" ")).join(" ") : "");
        if (!text) continue;
        const low = text.toLowerCase();
        const idx = low.indexOf(q);
        if (idx >= 0) {
          const start = Math.max(0, idx - 40);
          let snip = (start > 0 ? "…" : "") + text.slice(start, idx + q.length + 80) + "…";
          hits.push({ ci, bi, chTitle: ch.title, snip });
          if (hits.length >= 200) break;
        }
      }
      if (hits.length >= 200) break;
    }
    const t = S[L()];
    pane.style.display = "none"; res.style.display = "";
    if (!hits.length) { res.innerHTML = `<div class="edu-empty">🔍 ${t.none}</div>`; return; }
    res.innerHTML = `<div class="edu-res-count">${hits.length} ${t.results}</div>` + hits.map(h =>
      `<div class="edu-res" onclick="eduOpenResult(${h.ci},${h.bi})">
        <div class="edu-res-ch">${esc(h.chTitle.slice(0, 60))}</div>
        <div class="edu-res-snip">${esc(h.snip)}</div>
      </div>`).join("");
  };
  window.eduOpenResult = function (ci, bi) {
    document.getElementById("eduResults").style.display = "none";
    document.getElementById("eduPane").style.display = "";
    document.getElementById("eduSearch").value = "";
    eduJump(ci, bi);
  };

  window.eduInit = function () {
    if (inited) return; inited = true;
    const data = E();
    if (!data) { document.getElementById("eduContent").innerHTML = `<div class="edu-empty">Ma'lumot yuklanmadi.</div>`; return; }
    if (typeof BREADCRUMBS !== "undefined") BREADCRUMBS.edu = "Ta'lim";
    // localized labels
    const t = S[L()];
    const si = document.getElementById("eduSearch"); if (si) si.placeholder = t.search;
    const th = document.getElementById("eduTocHead"); if (th) th.textContent = t.toc;
    const sr = document.querySelector("#page-edu .edu-source"); if (sr && data.source) sr.textContent = t.src + ": " + data.source;
    buildTOC();
    let last = 0; try { last = parseInt(localStorage.getItem("mc_edu_ch") || "0", 10) || 0; } catch (e) {}
    if (last >= data.chapters.length) last = 0;
    renderChapter(last);
  };

  // Nav bosilganda lazy init
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.nav-item[data-page="edu"]');
    if (nav) nav.addEventListener("click", () => setTimeout(window.eduInit, 30));
    // til o'zgarganda label yangilash
    const _sl = window.setLanguage;
    if (typeof _sl === "function") window.setLanguage = function (l) { _sl(l); if (inited) { const t = S[L()]; const si = document.getElementById("eduSearch"); if (si) si.placeholder = t.search; const th = document.getElementById("eduTocHead"); if (th) th.textContent = t.toc; } };
  });
})();
