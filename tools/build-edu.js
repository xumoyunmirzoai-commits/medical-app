// ═══════════════════════════════════════════════════════════
//  MedCore — "Ta'lim" bo'limi generatori
//  420-son buyruq (.docx) → edu_data.js (EDU_DATA) + edu-assets/ (rasmlar)
//  + bot-data/edu.json (AI/RAG uchun chunklar)
//  - Kiril → Lotin transliteratsiya
//  - Subject (Pediatriya) → bob → mavzu (accordion) tuzilishi
//  Ishlatish:
//    node tools/build-edu.js "C:/.../420-буйрук Word.docx"
// ═══════════════════════════════════════════════════════════
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');

const docx = process.argv[2];
if (!docx || !fs.existsSync(docx)) { console.error('Docx topilmadi:', docx); process.exit(1); }
const root = path.join(__dirname, '..');

// ── Kiril (o'zbek) → Lotin transliteratsiya ──
const LMAP = {
  'а':'a','б':'b','в':'v','г':'g','д':'d','ё':'yo','ж':'j','з':'z','и':'i','й':'y',
  'к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u',
  'ф':'f','х':'x','ц':'ts','ч':'ch','ш':'sh','щ':'sh','ъ':'ʼ','ь':'','э':'e',
  'ю':'yu','я':'ya','ў':'oʻ','қ':'q','ғ':'gʻ','ҳ':'h','ҷ':'j','ҙ':'z','һ':'h','ы':'i','і':'i','ї':'yi','є':'ye','ё':'yo'
};
const CVOWEL = new Set(['а','е','ё','и','о','у','э','ю','я','ў']);
function translit(s) {
  if (!s) return s;
  let out = '';
  const a = [...s];
  for (let i = 0; i < a.length; i++) {
    const c = a[i];
    const lc = c.toLowerCase();
    const upper = c !== lc;
    let base;
    if (lc === 'е') {
      const prev = i > 0 ? a[i - 1] : '';
      const prevLc = prev.toLowerCase();
      base = (i === 0 || !/[a-zа-яёўқғҳ]/i.test(prev) || CVOWEL.has(prevLc) || prevLc === 'ъ' || prevLc === 'ь') ? 'ye' : 'e';
    } else if (LMAP.hasOwnProperty(lc)) {
      base = LMAP[lc];
    } else { out += c; continue; }
    if (!upper || base === '') { out += base; continue; }
    const next = i + 1 < a.length ? a[i + 1] : '';
    const nextUpper = next && next !== next.toLowerCase() && /[А-ЯЁЎҚҒҲ]/.test(next);
    out += nextUpper ? base.toUpperCase() : (base.charAt(0).toUpperCase() + base.slice(1));
  }
  return out;
}

// 1) docx (zip) ni vaqtinchalik papkaga ochish
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'edu_'));
cp.execSync(`unzip -o "${docx}" -d "${tmp}"`, { stdio: 'ignore' });
const xml = fs.readFileSync(path.join(tmp, 'word/document.xml'), 'utf8');
const relsXml = fs.readFileSync(path.join(tmp, 'word/_rels/document.xml.rels'), 'utf8');

const rels = {};
for (const m of relsXml.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g)) rels[m[1]] = m[2];

function decode(s) {
  return s.replace(/<w:tab\/>/g, ' ').replace(/<w:br\/>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&');
}
function paraText(p) {
  let out = '';
  for (const r of p.matchAll(/<w:t[ >][\s\S]*?<\/w:t>|<w:tab\/>|<w:br\/>/g)) {
    const seg = r[0];
    if (seg === '<w:tab/>') out += ' ';
    else if (seg === '<w:br/>') out += '\n';
    else out += decode(seg);
  }
  return out.replace(/[ \t]+/g, ' ').trim();
}
function paraImages(p) {
  const ids = [];
  for (const m of p.matchAll(/r:embed="([^"]+)"|r:id="([^"]+)"/g)) ids.push(m[1] || m[2]);
  return ids.map(id => rels[id]).filter(Boolean).map(t => t.replace(/^media\//, ''));
}
function isHeading(p) { return /<w:pStyle w:val="3"\/>/.test(p); }
function isBold(p) { return /<w:b\/>/.test(p); }

// body ni tartib bilan walk qilish
const bodyM = xml.match(/<w:body>([\s\S]*)<\/w:body>/);
const body = bodyM ? bodyM[1] : xml;
const blockRe = /<w:tbl>[\s\S]*?<\/w:tbl>|<w:p\b[\s\S]*?<\/w:p>/g;

const rawChapters = [];
let cur = { id: 'intro', title: 'Kirish va umumiy qoidalar', blocks: [] };
const usedImages = new Set();
let headingCount = 0;
function pushChapter() { if (cur.blocks.length) rawChapters.push(cur); }

for (const bm of body.matchAll(blockRe)) {
  const blk = bm[0];
  if (blk.startsWith('<w:tbl>')) {
    const rows = [];
    for (const tr of blk.matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)) {
      const cells = [];
      for (const tc of tr[0].matchAll(/<w:tc>[\s\S]*?<\/w:tc>/g)) {
        const cellParas = [...tc[0].matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)].map(x => paraText(x[0])).filter(Boolean);
        cells.push(cellParas.join('\n'));
      }
      if (cells.length) rows.push(cells);
    }
    if (rows.length) cur.blocks.push({ t: 'table', rows });
  } else {
    const text = paraText(blk);
    const imgs = paraImages(blk);
    if (isHeading(blk) && text) { pushChapter(); headingCount++; cur = { id: 'ch' + headingCount, title: text, blocks: [] }; continue; }
    if (imgs.length) { for (const im of imgs) { usedImages.add(im); cur.blocks.push({ t: 'img', src: im }); } }
    if (text) cur.blocks.push({ t: isBold(blk) ? 'h' : 'p', text });
  }
}
pushChapter();

// ── Bloklarni mavzularga (topics) ajratish: har 'h' yangi mavzu ──
function toTopics(ch) {
  const topics = [];
  let t = null;
  const start = (title) => { t = { title, blocks: [] }; topics.push(t); };
  for (const b of ch.blocks) {
    if (b.t === 'h') { start(b.text); continue; }
    if (!t) start('Umumiy');
    t.blocks.push(b);
  }
  // bo'sh sarlavhali mavzularni tozalash
  return topics.filter(x => x.blocks.length || x.title);
}

const chapters = rawChapters.map(ch => ({ id: ch.id, title: ch.title, topics: toTopics(ch) }));

// ── Buyruq muqaddimasini olib tashlash (vazir/BUYURAMAN/QO'LLANMA) ──
// 1-bobni "1-BO'LIM ..." mavzusidan boshlaymiz; undan oldingi rasmiy qism tashlanadi.
if (chapters[0] && chapters[0].topics.length) {
  const reStart = /^\s*1\s*[-–.]?\s*(Б[ЎУ]ЛИМ|BO[ʻ'’]?LIM)/i;
  const idx = chapters[0].topics.findIndex(tp => reStart.test(tp.title || ''));
  if (idx > 0) {
    chapters[0].topics = chapters[0].topics.slice(idx);
    console.log('Muqaddima olib tashlandi: 1-bobda', idx, 'ta mavzu (buyruq/vazir qismi).');
  }
}

// ── Transliteratsiya (butun struktura) ──
function tr(s) { return translit(s); }
for (const ch of chapters) {
  ch.title = tr(ch.title);
  for (const tp of ch.topics) {
    tp.title = tr(tp.title);
    for (const b of tp.blocks) {
      if (b.t === 'p' || b.t === 'h') b.text = tr(b.text);
      else if (b.t === 'table') b.rows = b.rows.map(r => r.map(tr));
    }
  }
}

// rasmlarni edu-assets/ ga ko'chirish
const assetDir = path.join(root, 'edu-assets');
fs.rmSync(assetDir, { recursive: true, force: true });
fs.mkdirSync(assetDir, { recursive: true });
let copied = 0;
for (const im of usedImages) {
  const srcP = path.join(tmp, 'word/media', im);
  if (fs.existsSync(srcP)) { fs.copyFileSync(srcP, path.join(assetDir, im)); copied++; }
}

// edu_data.js — subject (Pediatriya) ichida boblar
const EDU = {
  source: "Oʻzbekiston Respublikasi Sogʻliqni saqlash vazirligi — 420-son buyruq",
  subjects: [
    { id: 'pediatrics', name: 'Pediatriya', icon: '🧒', desc: 'Bolalar tibbiyoti — milliy klinik protokollar (420-son buyruq)', chapters }
  ]
};
fs.writeFileSync(path.join(root, 'edu_data.js'),
  '// MedCore — Ta\'lim bo\'limi (420-son buyruq, lotin). Avtomatik: tools/build-edu.js\nconst EDU_DATA = ' + JSON.stringify(EDU) + ';\n');

// bot-data/edu.json — AI/RAG chunklar (mavzu bo'yicha, transliteratsiyalangan)
const chunks = [];
for (const ch of chapters) {
  for (const tp of ch.topics) {
    let parts = [];
    for (const b of tp.blocks) {
      if (b.t === 'h' || b.t === 'p') parts.push(b.text);
      else if (b.t === 'table') parts.push(b.rows.map(r => r.join(' | ')).join('\n'));
    }
    let full = (tp.title ? tp.title + '\n' : '') + parts.join('\n');
    full = full.trim();
    if (!full) continue;
    // 1500 belgidan uzun bo'lsa bo'laklash
    while (full.length > 1700) {
      let cut = full.lastIndexOf('\n', 1700); if (cut < 800) cut = 1700;
      chunks.push({ subject: 'Pediatriya', chapter: ch.title, topic: tp.title, text: full.slice(0, cut).trim() });
      full = full.slice(cut).trim();
    }
    if (full) chunks.push({ subject: 'Pediatriya', chapter: ch.title, topic: tp.title, text: full });
  }
}
const botData = path.join(root, 'bot-data');
if (fs.existsSync(botData)) fs.writeFileSync(path.join(botData, 'edu.json'), JSON.stringify(chunks));

// hisobot
const totalTopics = chapters.reduce((s, c) => s + c.topics.length, 0);
console.log('Subjectlar:', EDU.subjects.length, '| Boblar:', chapters.length, '| Mavzular:', totalTopics);
console.log('Rasmlar koʻchirildi:', copied, '| AI chunklar:', chunks.length);
console.log('edu_data.js:', (fs.statSync(path.join(root, 'edu_data.js')).size / 1024 / 1024).toFixed(2), 'MB');
fs.rmSync(tmp, { recursive: true, force: true });
