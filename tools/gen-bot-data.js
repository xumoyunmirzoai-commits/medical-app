// ═══════════════════════════════════════════════════════════
//  MedCore — bot uchun ixcham ma'lumot generatori
//  data.js / pharma_data.js / lab_data.js  →  bot-data/*.json
//  (Cloudflare Worker GitHub Pages'dan shu fayllarni o'qiydi)
//  Ishga tushirish:  node tools/gen-bot-data.js
// ═══════════════════════════════════════════════════════════
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const root = path.join(__dirname, '..');
function loadGlobals(file, names) {
  const code = fs.readFileSync(file, 'utf8');
  const sb = {}; vm.createContext(sb);
  return vm.runInContext(code + `\n;({ ${names.join(', ')} });`, sb, { filename: path.basename(file) });
}
const D = loadGlobals(path.join(root, 'data.js'), ['GROUPS', 'DRUGS']);
const P = loadGlobals(path.join(root, 'pharma_data.js'), ['PHARMA_DATA']);
const Lab = loadGlobals(path.join(root, 'lab_data.js'), ['LAB_CATEGORIES', 'LAB_TESTS']);
const GROUPS = D.GROUPS, DRUGS = D.DRUGS, PHARMA = P.PHARMA_DATA;
const LAB_CATEGORIES = Lab.LAB_CATEGORIES, LAB_TESTS = Lab.LAB_TESTS;

const GROUP_NAMES = {
  antibiotics:    { uz: 'Antibiotiklar va antimikroblar', ru: 'Антибиотики и противомикробные', en: 'Antibiotics & antimicrobials' },
  nervesystem:    { uz: 'Asab tizimi', ru: 'Нервная система', en: 'Nervous system' },
  cardiovascular: { uz: 'Yurak-qon tomir', ru: 'Сердечно-сосудистые', en: 'Cardiovascular' },
  metabolism:     { uz: 'Hazm va moddalar almashinuvi', ru: 'Пищеварение и обмен веществ', en: 'Digestion & metabolism' },
  blood:          { uz: 'Qon tizimi', ru: 'Система крови', en: 'Blood' },
  musculoskeletal:{ uz: 'Tayanch-harakat tizimi', ru: 'Опорно-двигательный аппарат', en: 'Musculoskeletal' },
  respiratory:    { uz: 'Nafas tizimi', ru: 'Дыхательная система', en: 'Respiratory' },
  dermatology:    { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  genitourinary:  { uz: 'Siydik-jinsiy tizim', ru: 'Мочеполовая система', en: 'Genitourinary' },
  hormones:       { uz: 'Gormonlar', ru: 'Гормоны', en: 'Hormones' },
  oncology:       { uz: 'Onkologiya', ru: 'Онкология', en: 'Oncology' },
  antiparasitic:  { uz: 'Parazitlarga qarshi', ru: 'Противопаразитарные', en: 'Antiparasitic' },
  sensory:        { uz: 'Sezgi a\'zolari', ru: 'Органы чувств', en: 'Sensory organs' },
  substance:      { uz: 'Boshqa moddalar', ru: 'Прочие вещества', en: 'Other substances' },
  diagnostic:     { uz: 'Diagnostik vositalar', ru: 'Диагностические средства', en: 'Diagnostic agents' },
  various:        { uz: 'Turli vositalar', ru: 'Разные средства', en: 'Various' }
};

const norm = a => (a || '').trim().replace(/[.\s]+$/, '');
const safe = s => s.replace(/[^A-Za-z0-9]/g, '_');

const out = path.join(root, 'bot-data');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'pharma'), { recursive: true });
fs.mkdirSync(path.join(out, 'group'), { recursive: true });

// guruh -> dorilar
const byGroup = {};
for (const d of DRUGS) (byGroup[d.group] = byGroup[d.group] || []).push(d);

// meta.json
const meta = {
  groups: GROUPS.map(g => ({ id: g.id, icon: g.icon, n: GROUP_NAMES[g.id] || { uz: g.name, ru: g.name, en: g.name }, c: (byGroup[g.id] || []).length })),
  labCats: LAB_CATEGORIES.map(c => ({ id: c.id, icon: c.icon, n: c.name }))
};
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify(meta));

// pharma fayllari (atx bo'yicha) — faqat dorilarda uchragan kodlar uchun
const pharmaDone = new Set();
function pharmaKeyFor(atx) {
  const k = norm(atx);
  if (!k) return '';
  const e = PHARMA[k] || PHARMA[atx];
  return e ? k : '';
}
for (const d of DRUGS) {
  const k = pharmaKeyFor(d.atx);
  if (!k) continue;
  const fn = safe(k);
  if (pharmaDone.has(fn)) continue;
  pharmaDone.add(fn);
  fs.writeFileSync(path.join(out, 'pharma', fn + '.json'), JSON.stringify(PHARMA[k] || PHARMA[d.atx]));
}

// search.json — [id, name, inn, atx, group]
const search = DRUGS.map(d => [d.id, d.nameL || d.name || '', d.inn || '', d.atx || '', d.group]);
fs.writeFileSync(path.join(out, 'search.json'), JSON.stringify(search));

// group/<gid>.json — to'liq karta uchun maydonlar
for (const gid of Object.keys(byGroup)) {
  const arr = byGroup[gid].map(d => ({
    i: d.id, n: d.nameL || d.name || '', nn: d.inn || '', a: d.atx || '',
    fm: (d.forms && d.forms.length ? d.forms.join(', ') : (d.formFull || '')),
    fr: d.firm || '', co: d.country || '', rx: d.rx || '',
    hp: !!pharmaKeyFor(d.atx)
  }));
  fs.writeFileSync(path.join(out, 'group', gid + '.json'), JSON.stringify(arr));
}

// lab.json
fs.writeFileSync(path.join(out, 'lab.json'), JSON.stringify({ cats: LAB_CATEGORIES, tests: LAB_TESTS }));

// hisobot
const sz = f => (fs.statSync(f).size / 1024).toFixed(0) + 'KB';
console.log('Yaratildi -> bot-data/');
console.log('  meta.json     ', sz(path.join(out, 'meta.json')));
console.log('  search.json   ', sz(path.join(out, 'search.json')), '(' + search.length + ' dori)');
console.log('  lab.json      ', sz(path.join(out, 'lab.json')));
console.log('  pharma/*.json ', pharmaDone.size, 'fayl');
console.log('  group/*.json  ', Object.keys(byGroup).length, 'fayl');
