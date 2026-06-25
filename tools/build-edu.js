// ═══════════════════════════════════════════════════════════
//  MedCore — "Ta'lim" bo'limi generatori
//  420-son buyruq (.docx) → edu_data.js (EDU_DATA) + edu-assets/ (rasmlar)
//  + bot-data/edu.json (AI/RAG uchun chunklar)
//  Ishlatish:
//    node tools/build-edu.js "C:/.../420-буйрук Word.docx"
// ═══════════════════════════════════════════════════════════
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');

const docx = process.argv[2];
if (!docx || !fs.existsSync(docx)) { console.error('Docx topilmadi:', docx); process.exit(1); }
const root = path.join(__dirname, '..');

// 1) docx (zip) ni vaqtinchalik papkaga ochish (unzip)
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'edu_'));
cp.execSync(`unzip -o "${docx}" -d "${tmp}"`, { stdio: 'ignore' });

const xml = fs.readFileSync(path.join(tmp, 'word/document.xml'), 'utf8');
const relsXml = fs.readFileSync(path.join(tmp, 'word/_rels/document.xml.rels'), 'utf8');

// 2) rId -> media fayl xaritasi
const rels = {};
for (const m of relsXml.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g)) rels[m[1]] = m[2];

// 3) yordamchilar
function decode(s) {
  return s.replace(/<w:tab\/>/g, ' ').replace(/<w:br\/>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&');
}
function paraText(p) {
  // runlardagi matnni tartib bilan yig'ish (tab/br ham hisobga olinadi)
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
function isBold(p) {
  const rpr = p.match(/<w:pPr>[\s\S]*?<\/w:pPr>/);
  return /<w:b\/>/.test(p) && (p.match(/<w:b\/>/g) || []).length >= 1;
}

// 4) body ni tartib bilan walk qilish
const bodyM = xml.match(/<w:body>([\s\S]*)<\/w:body>/);
const body = bodyM ? bodyM[1] : xml;
const blockRe = /<w:tbl>[\s\S]*?<\/w:tbl>|<w:p\b[\s\S]*?<\/w:p>/g;

const chapters = [];
let cur = { id: 'intro', title: 'Kirish / Umumiy', blocks: [] };
const usedImages = new Set();
let headingCount = 0;

function pushChapter() { if (cur.blocks.length) chapters.push(cur); }

for (const bm of body.matchAll(blockRe)) {
  const blk = bm[0];
  if (blk.startsWith('<w:tbl>')) {
    // jadval: satrlar -> kataklar
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
    if (isHeading(blk) && text) {
      // yangi bob
      pushChapter();
      headingCount++;
      cur = { id: 'ch' + headingCount, title: text, blocks: [] };
      continue;
    }
    if (imgs.length) { for (const im of imgs) { usedImages.add(im); cur.blocks.push({ t: 'img', src: im }); } }
    if (text) cur.blocks.push({ t: isBold(blk) ? 'h' : 'p', text });
  }
}
pushChapter();

// 5) rasmlarni edu-assets/ ga ko'chirish
const assetDir = path.join(root, 'edu-assets');
fs.rmSync(assetDir, { recursive: true, force: true });
fs.mkdirSync(assetDir, { recursive: true });
let copied = 0;
for (const im of usedImages) {
  const srcP = path.join(tmp, 'word/media', im);
  if (fs.existsSync(srcP)) { fs.copyFileSync(srcP, path.join(assetDir, im)); copied++; }
}

// 6) edu_data.js (EDU_DATA)
const EDU = {
  title: '420-son buyruq — Milliy klinik protokollar',
  source: "O'zbekiston Respublikasi Sog'liqni saqlash vazirligi, 420-son buyruq",
  chapters
};
fs.writeFileSync(path.join(root, 'edu_data.js'),
  '// MedCore — Ta\'lim bo\'limi ma\'lumotlari (420-son buyruq). Avtomatik generatsiya: tools/build-edu.js\nconst EDU_DATA = ' + JSON.stringify(EDU) + ';\n');

// 7) bot-data/edu.json — AI/RAG uchun chunklar (har bob matni bo'laklab)
const chunks = [];
for (const ch of chapters) {
  let buf = '';
  const flush = () => { if (buf.trim()) { chunks.push({ chapter: ch.title, text: buf.trim() }); buf = ''; } };
  for (const b of ch.blocks) {
    let seg = '';
    if (b.t === 'h' || b.t === 'p') seg = b.text;
    else if (b.t === 'table') seg = b.rows.map(r => r.join(' | ')).join('\n');
    if (!seg) continue;
    if ((buf + '\n' + seg).length > 1500) flush();
    buf += (buf ? '\n' : '') + seg;
  }
  flush();
}
const botData = path.join(root, 'bot-data');
if (fs.existsSync(botData)) fs.writeFileSync(path.join(botData, 'edu.json'), JSON.stringify(chunks));

// 8) hisobot
const totalBlocks = chapters.reduce((s, c) => s + c.blocks.length, 0);
const totalText = chapters.reduce((s, c) => s + c.blocks.filter(b => b.t === 'p' || b.t === 'h').length, 0);
const totalTables = chapters.reduce((s, c) => s + c.blocks.filter(b => b.t === 'table').length, 0);
console.log('Boblar:', chapters.length);
console.log('Bloklar jami:', totalBlocks, '| matn paragraf:', totalText, '| jadval:', totalTables);
console.log('Rasmlar ko\'chirildi:', copied);
console.log('AI chunklar (edu.json):', chunks.length);
console.log('edu_data.js hajmi:', (fs.statSync(path.join(root, 'edu_data.js')).size / 1024 / 1024).toFixed(2), 'MB');
fs.rmSync(tmp, { recursive: true, force: true });
