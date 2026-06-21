// ═══════════════════════════════════════════════════════════
//  MedCore — to'laqonli Telegram bot (Mini App EMAS)
//  Ma'lumotlar botning o'zida: inline menyular orqali dorilar,
//  farmakologiya va laboratoriya ko'rsatkichlari.
//
//  • /start  → kanalga a'zolik tekshiriladi → menyu ochiladi
//  • Bog'liqliksiz (Node 18+ — global fetch). Ishga tushirish:
//        BOT_TOKEN=xxxxx node bot.js
//  • Ma'lumotlar mavjud fayllardan (../data.js, ../pharma_data.js,
//    ../lab_data.js) vm orqali yuklanadi.
//
//  MAXFIY: token kodga yozilmaydi — faqat BOT_TOKEN muhit o'zgaruvchisi.
// ═══════════════════════════════════════════════════════════

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ── Konfiguratsiya ──
const TOKEN = process.env.BOT_TOKEN;
const CHANNEL = process.env.CHANNEL || '@MedCore_Tibbiyot_Platformasi';
const CHANNEL_URL = 'https://t.me/' + CHANNEL.replace(/^@/, '');
const API = 'https://api.telegram.org/bot' + TOKEN;
const PAGE = 8; // sahifadagi dorilar soni

if (!TOKEN) { console.error('XATO: BOT_TOKEN muhit o\'zgaruvchisi belgilanmagan.'); process.exit(1); }

// ── Ma'lumotlarni mavjud .js fayllardan yuklash (browser global const) ──
// vm script'ning oxirgi ifodasi qaytariladi: const bindinglar shu yerda ko'rinadi.
function loadGlobals(file, names) {
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  const exporter = `\n;({ ${names.join(', ')} });`;
  return vm.runInContext(code + exporter, sandbox, { filename: path.basename(file) });
}

const root = path.join(__dirname, '..');
const D = loadGlobals(path.join(root, 'data.js'), ['GROUPS', 'DRUGS']);
const P = loadGlobals(path.join(root, 'pharma_data.js'), ['PHARMA_DATA']);
const L = loadGlobals(path.join(root, 'lab_data.js'), ['LAB_CATEGORIES', 'LAB_TESTS']);

const GROUPS = D.GROUPS || [];
const DRUGS = D.DRUGS || [];
const PHARMA = P.PHARMA_DATA || {};
const LAB_CATS = L.LAB_CATEGORIES || [];
const LAB_TESTS = L.LAB_TESTS || [];

console.log(`Yuklandi: ${DRUGS.length} dori, ${Object.keys(PHARMA).length} farmakologiya, ${LAB_TESTS.length} lab test`);

// Guruh -> dorilar indeksi (tezkor) va guruh nomlari (3 tilda)
const drugsByGroup = {};
for (const d of DRUGS) (drugsByGroup[d.group] = drugsByGroup[d.group] || []).push(d);

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
function groupName(id, lang) {
  return (GROUP_NAMES[id] && GROUP_NAMES[id][lang]) || (GROUPS.find(g => g.id === id) || {}).name || id;
}
function groupIcon(id) { return (GROUPS.find(g => g.id === id) || {}).icon || '💊'; }

// ── Bot interfeysi matnlari (3 tilda) ──
const T = {
  uz: {
    welcome: '🏥 <b>MedCore</b> — tibbiyot ma\'lumotnomasi\n\n💊 8600+ dori · farmakologiya · laboratoriya ko\'rsatkichlari.\nKerakli bo\'limni tanlang:',
    drugs: '💊 Dorilar bazasi', lab: '🔬 Laboratoriya', search: '🔎 Qidiruv', lang: '🌐 Til', about: 'ℹ️ Ma\'lumot',
    joinReq: '🔒 Botdan foydalanish uchun avval rasmiy kanalimizga a\'zo bo\'ling:\n\n' + CHANNEL + '\n\nA\'zo bo\'lgach «✅ Tekshirish» tugmasini bosing.',
    joinBtn: '➕ Kanalga a\'zo bo\'lish', checkBtn: '✅ Tekshirish',
    notMember: '❌ Siz hali kanalga a\'zo emassiz. A\'zo bo\'lib, qayta tekshiring.',
    chooseCat: '💊 Dori guruhini tanlang:', chooseDrug: 'guruhi — dorini tanlang:',
    back: '⬅️ Orqaga', home: '🏠 Bosh menyu', prev: '◀️', next: '▶️',
    noPharma: 'Bu dori uchun farmakologiya ma\'lumoti hali kiritilmagan.',
    pharmaBtn: '⚗️ Farmakologiya',
    searchHint: '🔎 Dori nomini yoki ta\'sir etuvchi moddani (INN) yozib yuboring.\nMasalan: <code>diklofenak</code>, <code>amoxicillin</code>, <code>M01AB05</code>',
    searchNone: '🔎 «%s» bo\'yicha hech narsa topilmadi. Boshqacha yozib ko\'ring.',
    searchRes: '🔎 «%s» bo\'yicha natijalar:',
    chooseLang: '🌐 Tilni tanlang:', langSet: '✅ Til o\'zgartirildi.',
    labCats: '🔬 Laboratoriya bo\'limini tanlang:', labChoose: ' — ko\'rsatkichni tanlang:',
    inn: 'Ta\'sir etuvchi modda', atx: 'ATX kodi', grp: 'Guruh', form: 'Shakli', firm: 'Ishlab chiqaruvchi', country: 'Mamlakat', rx: 'Berilishi',
    norm: '📊 Normal qiymatlar', optimum: '🎯 Optimal', causesHigh: '⬆️ Yuqori bo\'lish sabablari', causesLow: '⬇️ Past bo\'lish sabablari', unit: 'Birlik',
    aboutTxt: 'ℹ️ <b>MedCore</b> — shifokorlar uchun tibbiyot ma\'lumotnomasi.\n\n• 8600+ dori va farmakologiya\n• Laboratoriya ko\'rsatkichlari (normalar, talqin)\n• 3 tilda: o\'zbek / rus / ingliz\n\n⚠️ Ma\'lumotlar faqat ma\'lumot uchun; tashxis va davo shifokor tomonidan belgilanadi.',
    secErr: 'Bo\'lim topilmadi.'
  },
  ru: {
    welcome: '🏥 <b>MedCore</b> — медицинский справочник\n\n💊 8600+ препаратов · фармакология · лабораторные показатели.\nВыберите раздел:',
    drugs: '💊 База препаратов', lab: '🔬 Лаборатория', search: '🔎 Поиск', lang: '🌐 Язык', about: 'ℹ️ О боте',
    joinReq: '🔒 Чтобы пользоваться ботом, сначала подпишитесь на наш канал:\n\n' + CHANNEL + '\n\nПосле подписки нажмите «✅ Проверить».',
    joinBtn: '➕ Подписаться на канал', checkBtn: '✅ Проверить',
    notMember: '❌ Вы ещё не подписаны на канал. Подпишитесь и проверьте снова.',
    chooseCat: '💊 Выберите группу препаратов:', chooseDrug: ' — выберите препарат:',
    back: '⬅️ Назад', home: '🏠 Главное меню', prev: '◀️', next: '▶️',
    noPharma: 'Для этого препарата фармакология ещё не добавлена.',
    pharmaBtn: '⚗️ Фармакология',
    searchHint: '🔎 Напишите название препарата или действующее вещество (МНН).\nНапример: <code>диклофенак</code>, <code>amoxicillin</code>, <code>M01AB05</code>',
    searchNone: '🔎 По запросу «%s» ничего не найдено. Попробуйте иначе.',
    searchRes: '🔎 Результаты по «%s»:',
    chooseLang: '🌐 Выберите язык:', langSet: '✅ Язык изменён.',
    labCats: '🔬 Выберите раздел лаборатории:', labChoose: ' — выберите показатель:',
    inn: 'Действующее вещество', atx: 'Код ATX', grp: 'Группа', form: 'Форма', firm: 'Производитель', country: 'Страна', rx: 'Отпуск',
    norm: '📊 Нормальные значения', optimum: '🎯 Оптимум', causesHigh: '⬆️ Причины повышения', causesLow: '⬇️ Причины понижения', unit: 'Единица',
    aboutTxt: 'ℹ️ <b>MedCore</b> — медицинский справочник для врачей.\n\n• 8600+ препаратов и фармакология\n• Лабораторные показатели (нормы, трактовка)\n• На 3 языках: узбекский / русский / английский\n\n⚠️ Информация только справочная; диагноз и лечение определяет врач.',
    secErr: 'Раздел не найден.'
  },
  en: {
    welcome: '🏥 <b>MedCore</b> — medical reference\n\n💊 8600+ drugs · pharmacology · lab values.\nChoose a section:',
    drugs: '💊 Drug database', lab: '🔬 Laboratory', search: '🔎 Search', lang: '🌐 Language', about: 'ℹ️ About',
    joinReq: '🔒 To use the bot, please join our channel first:\n\n' + CHANNEL + '\n\nAfter joining, tap «✅ Check».',
    joinBtn: '➕ Join the channel', checkBtn: '✅ Check',
    notMember: '❌ You are not a channel member yet. Join and check again.',
    chooseCat: '💊 Choose a drug group:', chooseDrug: ' — choose a drug:',
    back: '⬅️ Back', home: '🏠 Main menu', prev: '◀️', next: '▶️',
    noPharma: 'Pharmacology for this drug has not been added yet.',
    pharmaBtn: '⚗️ Pharmacology',
    searchHint: '🔎 Send a drug name or active ingredient (INN).\nE.g.: <code>diclofenac</code>, <code>amoxicillin</code>, <code>M01AB05</code>',
    searchNone: '🔎 Nothing found for «%s». Try a different term.',
    searchRes: '🔎 Results for «%s»:',
    chooseLang: '🌐 Choose a language:', langSet: '✅ Language changed.',
    labCats: '🔬 Choose a lab section:', labChoose: ' — choose a marker:',
    inn: 'Active ingredient', atx: 'ATX code', grp: 'Group', form: 'Form', firm: 'Manufacturer', country: 'Country', rx: 'Dispensing',
    norm: '📊 Normal values', optimum: '🎯 Optimum', causesHigh: '⬆️ Causes of high values', causesLow: '⬇️ Causes of low values', unit: 'Unit',
    aboutTxt: 'ℹ️ <b>MedCore</b> — a medical reference for clinicians.\n\n• 8600+ drugs and pharmacology\n• Lab values (norms, interpretation)\n• In 3 languages: Uzbek / Russian / English\n\n⚠️ Information is for reference only; diagnosis and treatment are decided by a physician.',
    secErr: 'Section not found.'
  }
};

// Farmakologiya bo'lim yorliqlari
const SEC = {
  pd:  { uz: '⚗️ Farmakodinamika', ru: '⚗️ Фармакодинамика', en: '⚗️ Pharmacodynamics' },
  pk:  { uz: '📊 Farmakokinetika', ru: '📊 Фармакокинетика', en: '📊 Pharmacokinetics' },
  ind: { uz: '✅ Ko\'rsatmalar', ru: '✅ Показания', en: '✅ Indications' },
  ci:  { uz: '🚫 Qarshi ko\'rsatmalar', ru: '🚫 Противопоказания', en: '🚫 Contraindications' },
  adr: { uz: '⚠️ Nojo\'ya ta\'sirlar', ru: '⚠️ Побочные эффекты', en: '⚠️ Adverse effects' },
  dose:{ uz: '💉 Qo\'llash va dozalash', ru: '💉 Применение и дозы', en: '💉 Dosing' },
  intr:{ uz: '🔗 O\'zaro ta\'sir', ru: '🔗 Взаимодействия', en: '🔗 Interactions' },
  od:  { uz: '🚨 Dozadan oshib ketganda', ru: '🚨 Передозировка', en: '🚨 Overdose' },
  frm: { uz: '📦 Chiqarish shakli', ru: '📦 Формы выпуска', en: '📦 Forms' }
};

// ── Foydalanuvchi tili (xotirada; istalsa faylga saqlanadi) ──
const LANG_FILE = path.join(__dirname, 'user_lang.json');
let userLang = {};
try { userLang = JSON.parse(fs.readFileSync(LANG_FILE, 'utf8')); } catch (e) {}
function getLang(uid) { return userLang[uid] || 'uz'; }
function setLang(uid, l) { userLang[uid] = l; try { fs.writeFileSync(LANG_FILE, JSON.stringify(userLang)); } catch (e) {} }

// ── Telegram API yordamchilari ──
async function api(method, params) {
  try {
    const r = await fetch(API + '/' + method, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(params)
    });
    return await r.json();
  } catch (e) { console.error('API xato', method, e.message); return { ok: false }; }
}
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clip = (s, n = 4000) => s.length > n ? s.slice(0, n - 1) + '…' : s;

function send(chatId, text, keyboard) {
  return api('sendMessage', { chat_id: chatId, text: clip(text), parse_mode: 'HTML', disable_web_page_preview: true,
    reply_markup: keyboard ? { inline_keyboard: keyboard } : undefined });
}
function edit(chatId, msgId, text, keyboard) {
  return api('editMessageText', { chat_id: chatId, message_id: msgId, text: clip(text), parse_mode: 'HTML', disable_web_page_preview: true,
    reply_markup: keyboard ? { inline_keyboard: keyboard } : undefined });
}

// ── Kanal a'zoligini tekshirish (bot kanalda admin bo'lishi shart) ──
const memberCache = new Map(); // uid -> { ok, ts }
const MEMBER_TTL = 60 * 1000;  // 60 soniya
async function isMember(uid) {
  const c = memberCache.get(uid);
  if (c && Date.now() - c.ts < MEMBER_TTL) return c.ok;
  const r = await api('getChatMember', { chat_id: CHANNEL, user_id: uid });
  const ok = r.ok && ['creator', 'administrator', 'member'].includes(r.result.status);
  memberCache.set(uid, { ok, ts: Date.now() });
  return ok;
}

// ── Menyular ──
function mainMenu(lang) {
  const t = T[lang];
  return [
    [{ text: t.drugs, callback_data: 'cats' }],
    [{ text: t.lab, callback_data: 'lab' }],
    [{ text: t.search, callback_data: 'srch' }, { text: t.lang, callback_data: 'lang' }],
    [{ text: t.about, callback_data: 'about' }]
  ];
}
function joinMenu(lang) {
  const t = T[lang];
  return [[{ text: t.joinBtn, url: CHANNEL_URL }], [{ text: t.checkBtn, callback_data: 'chk' }]];
}

function catsMenu(lang) {
  const rows = [];
  for (let i = 0; i < GROUPS.length; i += 2) {
    const row = [];
    for (const g of GROUPS.slice(i, i + 2)) {
      const n = (drugsByGroup[g.id] || []).length;
      row.push({ text: `${g.icon} ${groupName(g.id, lang)} (${n})`, callback_data: 'g:' + g.id + ':0' });
    }
    rows.push(row);
  }
  rows.push([{ text: T[lang].home, callback_data: 'home' }]);
  return rows;
}

function drugLabel(d) { return (d.nameL || d.name || '').slice(0, 40); }

function groupListMenu(gid, page, lang) {
  const list = drugsByGroup[gid] || [];
  const pages = Math.max(1, Math.ceil(list.length / PAGE));
  page = Math.max(0, Math.min(page, pages - 1));
  const slice = list.slice(page * PAGE, page * PAGE + PAGE);
  const rows = slice.map(d => [{ text: '💊 ' + drugLabel(d), callback_data: 'd:' + d.id }]);
  const nav = [];
  if (page > 0) nav.push({ text: T[lang].prev, callback_data: 'g:' + gid + ':' + (page - 1) });
  nav.push({ text: `${page + 1}/${pages}`, callback_data: 'noop' });
  if (page < pages - 1) nav.push({ text: T[lang].next, callback_data: 'g:' + gid + ':' + (page + 1) });
  rows.push(nav);
  rows.push([{ text: T[lang].back, callback_data: 'cats' }, { text: T[lang].home, callback_data: 'home' }]);
  return rows;
}

// ── Dori kartasi ──
function pharmaKey(atx) { return (atx || '').trim().replace(/[.\s]+$/, ''); }
function pharmaEntry(atx, lang) {
  const e = PHARMA[pharmaKey(atx)] || PHARMA[atx];
  if (!e) return null;
  return e[lang] || e.uz || e;
}
function drugCard(d, lang) {
  const t = T[lang];
  let s = `<b>💊 ${esc(d.nameL || d.name)}</b>\n\n`;
  if (d.inn) s += `🧬 <b>${t.inn}:</b> ${esc(d.inn)}\n`;
  if (d.atx) s += `🏷 <b>${t.atx}:</b> <code>${esc(d.atx)}</code>\n`;
  s += `📂 <b>${t.grp}:</b> ${esc(groupIcon(d.group) + ' ' + groupName(d.group, lang))}\n`;
  if (d.forms && d.forms.length) s += `💠 <b>${t.form}:</b> ${esc(d.forms.join(', '))}\n`;
  else if (d.formFull) s += `💠 <b>${t.form}:</b> ${esc(d.formFull)}\n`;
  if (d.firm) s += `🏭 <b>${t.firm}:</b> ${esc(d.firm)}\n`;
  if (d.country) s += `🌍 <b>${t.country}:</b> ${esc(d.country)}\n`;
  if (d.rx) s += `📋 <b>${t.rx}:</b> ${esc(d.rx)}\n`;
  return s;
}
function drugMenu(d, lang) {
  const rows = [];
  if (pharmaEntry(d.atx, lang)) rows.push([{ text: T[lang].pharmaBtn, callback_data: 'p:' + d.id + ':pd' }]);
  rows.push([{ text: T[lang].back, callback_data: 'g:' + d.group + ':0' }, { text: T[lang].home, callback_data: 'home' }]);
  return rows;
}

// ── Farmakologiya bo'limi ──
function pharmaSection(pd, sec, lang) {
  if (!pd) return null;
  const head = `<b>${esc(pd.gruppa || '')}</b>\n<i>${esc(pd.farmTasir || '')}</i>\n\n`;
  let body = '';
  if (sec === 'pd') body = esc(pd.farmakodinamika || '');
  else if (sec === 'pk') {
    const k = pd.farmakokinetika || {};
    const lbl = { uz: ['So\'rilishi', 'Taqsimlanishi', 'Metabolizmi', 'Chiqarilishi'], ru: ['Всасывание', 'Распределение', 'Метаболизм', 'Выведение'], en: ['Absorption', 'Distribution', 'Metabolism', 'Excretion'] }[lang];
    body = [['sorish', 0], ['tarqalish', 1], ['metabolizm', 2], ['chiqarilish', 3]].map(([f, i]) => k[f] ? `<b>${lbl[i]}:</b> ${esc(k[f])}` : '').filter(Boolean).join('\n\n');
  }
  else if (sec === 'ind') body = (pd.korsatmalar || []).map(x => '• ' + esc(x)).join('\n');
  else if (sec === 'ci') body = (pd.qarrshi || []).map(x => '• ' + esc(x)).join('\n');
  else if (sec === 'adr') body = Object.entries(pd.nojoya || {}).map(([k, v]) => `<b>${esc(k)}:</b> ${esc(v)}`).join('\n\n');
  else if (sec === 'intr') body = (pd.ozarotasir || []).map(x => '• ' + esc(x)).join('\n');
  else if (sec === 'od') body = esc(pd.dozadan || '');
  else if (sec === 'dose') {
    const q = pd.qollash || {};
    const lbl = { uz: ['Kattalar', 'Bolalar'], ru: ['Взрослые', 'Дети'], en: ['Adults', 'Children'] }[lang];
    body = [q.kattalar ? `<b>${lbl[0]}:</b> ${esc(q.kattalar)}` : '', q.bolalar ? `<b>${lbl[1]}:</b> ${esc(q.bolalar)}` : ''].filter(Boolean).join('\n\n');
  }
  else if (sec === 'frm') body = esc(pd.chiqarish || '');
  return head + (body || '—');
}
function pharmaMenu(d, sec, lang) {
  const pd = pharmaEntry(d.atx, lang);
  const avail = ['pd', 'pk', 'ind', 'ci', 'adr', 'dose', 'intr', 'od', 'frm'].filter(s => {
    const txt = pharmaSection(pd, s, lang);
    return txt && !/—$/.test(txt.trim());
  });
  const rows = [];
  for (let i = 0; i < avail.length; i += 2) {
    rows.push(avail.slice(i, i + 2).map(s => ({
      text: (s === sec ? '• ' : '') + SEC[s][lang], callback_data: 'p:' + d.id + ':' + s
    })));
  }
  rows.push([{ text: T[lang].back, callback_data: 'd:' + d.id }, { text: T[lang].home, callback_data: 'home' }]);
  return rows;
}

// ── Laboratoriya ──
function labCatsMenu(lang) {
  const rows = [];
  for (let i = 0; i < LAB_CATS.length; i += 2) {
    rows.push(LAB_CATS.slice(i, i + 2).map(c => ({ text: `${c.icon} ${c.name[lang]}`, callback_data: 'lc:' + c.id })));
  }
  rows.push([{ text: T[lang].home, callback_data: 'home' }]);
  return rows;
}
function labTestsMenu(cat, lang) {
  const list = LAB_TESTS.filter(t => t.cat === cat);
  const rows = list.map(t => [{ text: `🔬 ${(t.abbr ? t.abbr + ' · ' : '') + t.name[lang]}`.slice(0, 50), callback_data: 'lt:' + t.id }]);
  rows.push([{ text: T[lang].back, callback_data: 'lab' }, { text: T[lang].home, callback_data: 'home' }]);
  return rows;
}
function labCard(t, lang) {
  const L = T[lang];
  let s = `<b>🔬 ${esc(t.name[lang])}</b>${t.abbr ? ' (' + esc(t.abbr) + ')' : ''}\n`;
  if (t.unit && t.unit[lang]) s += `<b>${L.unit}:</b> ${esc(t.unit[lang])}\n`;
  s += `\n<b>${L.norm}:</b>\n`;
  const norms = (t.norms && t.norms[lang]) || [];
  s += norms.map(([k, v]) => `• ${esc(k)}: <b>${esc(v)}</b>`).join('\n');
  if (t.optimum && t.optimum[lang]) s += `\n\n<b>${L.optimum}:</b> ${esc(t.optimum[lang])}`;
  return s;
}
function labMenu(t, lang) {
  const rows = [];
  const r = [];
  if (t.high && t.high[lang] && t.high[lang].length) r.push({ text: T[lang].causesHigh, callback_data: 'lh:' + t.id });
  if (t.low && t.low[lang] && t.low[lang].length) r.push({ text: T[lang].causesLow, callback_data: 'll:' + t.id });
  if (r.length) rows.push(r);
  rows.push([{ text: T[lang].back, callback_data: 'lc:' + t.cat }, { text: T[lang].home, callback_data: 'home' }]);
  return rows;
}
function labCauses(t, dir, lang) {
  const L = T[lang];
  const arr = ((dir === 'lh' ? t.high : t.low) || {})[lang] || [];
  const title = dir === 'lh' ? L.causesHigh : L.causesLow;
  return `<b>${esc(t.name[lang])}</b>\n\n<b>${title}:</b>\n` + arr.map(x => '• ' + esc(x)).join('\n');
}

// ── Qidiruv ──
function searchDrugs(q) {
  q = q.toLowerCase().trim();
  if (q.length < 2) return [];
  const res = [];
  for (const d of DRUGS) {
    const hay = ((d.nameL || '') + ' ' + (d.name || '') + ' ' + (d.inn || '') + ' ' + (d.atx || '')).toLowerCase();
    if (hay.includes(q)) { res.push(d); if (res.length >= 30) break; }
  }
  return res;
}

// ── Handlerlar ──
async function showMain(chatId, lang, msgId) {
  const t = T[lang];
  if (msgId) return edit(chatId, msgId, t.welcome, mainMenu(lang));
  return send(chatId, t.welcome, mainMenu(lang));
}

async function handleStart(chatId, uid, lang) {
  if (await isMember(uid)) return showMain(chatId, lang);
  return send(chatId, T[lang].joinReq, joinMenu(lang));
}

async function onCallback(cq) {
  const uid = cq.from.id, chatId = cq.message.chat.id, msgId = cq.message.message_id;
  const lang = getLang(uid);
  const t = T[lang];
  const data = cq.data || '';
  const ans = (text, alert) => api('answerCallbackQuery', { callback_query_id: cq.id, text, show_alert: !!alert });

  if (data === 'noop') return ans();

  // A'zolik tekshiruvi
  if (data === 'chk') {
    if (await isMember(uid)) { await ans(); return edit(chatId, msgId, t.welcome, mainMenu(lang)); }
    return ans(t.notMember, true);
  }
  // Boshqa barcha amallar uchun ham a'zolikni talab qilamiz
  if (!(await isMember(uid))) { await ans(); return edit(chatId, msgId, t.joinReq, joinMenu(lang)); }

  await ans();

  if (data === 'home') return edit(chatId, msgId, t.welcome, mainMenu(lang));
  if (data === 'cats') return edit(chatId, msgId, t.chooseCat, catsMenu(lang));
  if (data === 'about') return edit(chatId, msgId, t.aboutTxt, [[{ text: t.home, callback_data: 'home' }]]);
  if (data === 'srch') return edit(chatId, msgId, t.searchHint, [[{ text: t.home, callback_data: 'home' }]]);
  if (data === 'lang') return edit(chatId, msgId, t.chooseLang, [
    [{ text: '🇺🇿 O\'zbekcha', callback_data: 'sl:uz' }, { text: '🇷🇺 Русский', callback_data: 'sl:ru' }, { text: '🇬🇧 English', callback_data: 'sl:en' }],
    [{ text: t.home, callback_data: 'home' }]
  ]);
  if (data.startsWith('sl:')) {
    const nl = data.slice(3); setLang(uid, nl);
    return edit(chatId, msgId, T[nl].langSet + '\n\n' + T[nl].welcome, mainMenu(nl));
  }
  if (data.startsWith('g:')) {
    const [, gid, page] = data.split(':');
    return edit(chatId, msgId, `${groupIcon(gid)} <b>${esc(groupName(gid, lang))}</b>${t.chooseDrug}`, groupListMenu(gid, +page, lang));
  }
  if (data.startsWith('d:')) {
    const d = DRUGS.find(x => String(x.id) === data.slice(2));
    if (!d) return;
    return edit(chatId, msgId, drugCard(d, lang), drugMenu(d, lang));
  }
  if (data.startsWith('p:')) {
    const [, id, sec] = data.split(':');
    const d = DRUGS.find(x => String(x.id) === id);
    if (!d) return;
    const pd = pharmaEntry(d.atx, lang);
    if (!pd) return edit(chatId, msgId, t.noPharma, drugMenu(d, lang));
    return edit(chatId, msgId, pharmaSection(pd, sec, lang) || t.secErr, pharmaMenu(d, sec, lang));
  }
  if (data === 'lab') return edit(chatId, msgId, t.labCats, labCatsMenu(lang));
  if (data.startsWith('lc:')) {
    const cat = data.slice(3);
    const c = LAB_CATS.find(x => x.id === cat);
    return edit(chatId, msgId, `${c ? c.icon + ' <b>' + esc(c.name[lang]) + '</b>' : ''}${t.labChoose}`, labTestsMenu(cat, lang));
  }
  if (data.startsWith('lt:')) {
    const tt = LAB_TESTS.find(x => x.id === data.slice(3));
    if (!tt) return;
    return edit(chatId, msgId, labCard(tt, lang), labMenu(tt, lang));
  }
  if (data.startsWith('lh:') || data.startsWith('ll:')) {
    const dir = data.slice(0, 2), tt = LAB_TESTS.find(x => x.id === data.slice(3));
    if (!tt) return;
    return edit(chatId, msgId, labCauses(tt, dir, lang), [
      [{ text: t.back, callback_data: 'lt:' + tt.id }, { text: t.home, callback_data: 'home' }]
    ]);
  }
}

async function onMessage(msg) {
  const uid = msg.from.id, chatId = msg.chat.id, lang = getLang(uid);
  const text = (msg.text || '').trim();
  if (!text) return;

  if (text === '/start' || text === '/menu') return handleStart(chatId, uid, lang);
  if (text === '/help' || text === '/about') return send(chatId, T[lang].aboutTxt, [[{ text: T[lang].home, callback_data: 'home' }]]);
  if (text.startsWith('/')) return handleStart(chatId, uid, lang);

  // Oddiy matn = qidiruv (a'zolik talab qilinadi)
  if (!(await isMember(uid))) return send(chatId, T[lang].joinReq, joinMenu(lang));

  const res = searchDrugs(text);
  if (!res.length) return send(chatId, T[lang].searchNone.replace('%s', esc(text)), [[{ text: T[lang].home, callback_data: 'home' }]]);
  const rows = res.slice(0, 12).map(d => [{ text: '💊 ' + drugLabel(d) + (d.inn ? ' · ' + d.inn.slice(0, 18) : ''), callback_data: 'd:' + d.id }]);
  rows.push([{ text: T[lang].home, callback_data: 'home' }]);
  return send(chatId, T[lang].searchRes.replace('%s', esc(text)), rows);
}

// ── Long polling ──
async function poll() {
  let offset = 0;
  // Webhookni o'chirib qo'yamiz (polling bilan to'qnashmasligi uchun)
  await api('deleteWebhook', { drop_pending_updates: false });
  await api('setMyCommands', { commands: [
    { command: 'start', description: 'Boshlash / Menyu' },
    { command: 'help', description: 'Ma\'lumot' }
  ] });
  console.log('Bot ishga tushdi (long polling). To\'xtatish: Ctrl+C');
  while (true) {
    const r = await api('getUpdates', { offset, timeout: 30, allowed_updates: ['message', 'callback_query'] });
    if (!r.ok) { await new Promise(s => setTimeout(s, 2000)); continue; }
    for (const u of r.result) {
      offset = u.update_id + 1;
      try {
        if (u.callback_query) await onCallback(u.callback_query);
        else if (u.message) await onMessage(u.message);
      } catch (e) { console.error('Update xato:', e.message); }
    }
  }
}

poll().catch(e => { console.error('Halokatli xato:', e); process.exit(1); });
