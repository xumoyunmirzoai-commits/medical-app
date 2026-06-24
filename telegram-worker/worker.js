// ═══════════════════════════════════════════════════════════
//  MedCore — Telegram bot (Cloudflare Worker, webhook)
//  Bepul, 24/7, kompyutersiz. Ma'lumotlar GitHub Pages'dan
//  (bot-data/*.json) o'qiladi. Til callback ichida saqlanadi —
//  KV kerak emas.
//
//  Sozlash (wrangler.toml + secret):
//    BOT_TOKEN       — secret (wrangler secret put BOT_TOKEN)
//    WEBHOOK_SECRET  — secret (Telegram secret_token bilan bir xil)
//    DATA_BASE       — var (GitHub Pages bot-data/ manzili)
//    CHANNEL         — var (majburiy a'zolik kanali)
// ═══════════════════════════════════════════════════════════

const T = {
  uz: {
    welcome: '🏥 <b>MedCore</b> — tibbiyot ma\'lumotnomasi\n\n💊 8600+ dori · farmakologiya · laboratoriya ko\'rsatkichlari.\nKerakli bo\'limni tanlang:',
    drugs: '💊 Dorilar bazasi', lab: '🔬 Laboratoriya', search: '🔎 Qidiruv', lang: '🌐 Til', about: 'ℹ️ Ma\'lumot',
    joinReq: '🔒 Botdan foydalanish uchun avval rasmiy kanalimizga a\'zo bo\'ling, so\'ng «✅ Tekshirish» tugmasini bosing.',
    joinBtn: '➕ Kanalga a\'zo bo\'lish', checkBtn: '✅ Tekshirish',
    notMember: '❌ Siz hali kanalga a\'zo emassiz. A\'zo bo\'lib, qayta tekshiring.',
    chooseCat: '💊 Dori guruhini tanlang:', chooseDrug: ' — dorini tanlang:',
    back: '⬅️ Orqaga', home: '🏠 Bosh menyu', noPharma: 'Bu dori uchun farmakologiya hali kiritilmagan.', pharmaBtn: '⚗️ Farmakologiya',
    searchHint: '🔎 Dori nomini yoki ta\'sir etuvchi moddani (INN) yozib yuboring.\nMasalan: <code>diklofenak</code>, <code>amoxicillin</code>, <code>M01AB05</code>',
    searchNone: '🔎 «%s» bo\'yicha hech narsa topilmadi.', searchRes: '🔎 «%s» bo\'yicha natijalar:',
    chooseLang: '🌐 Tilni tanlang:', labCats: '🔬 Laboratoriya bo\'limini tanlang:', labChoose: ' — ko\'rsatkichni tanlang:',
    inn: 'Ta\'sir etuvchi modda', atx: 'ATX kodi', grp: 'Guruh', form: 'Shakli', firm: 'Ishlab chiqaruvchi', country: 'Mamlakat', rx: 'Berilishi',
    norm: '📊 Normal qiymatlar', optimum: '🎯 Optimal', causesHigh: '⬆️ Yuqori bo\'lish sabablari', causesLow: '⬇️ Past bo\'lish sabablari', unit: 'Birlik',
    aboutTxt: 'ℹ️ <b>MedCore</b> — shifokorlar uchun tibbiyot ma\'lumotnomasi.\n\n• 8600+ dori va farmakologiya\n• Laboratoriya ko\'rsatkichlari (normalar, talqin)\n• 3 tilda: o\'zbek / rus / ingliz\n\n⚠️ Ma\'lumotlar faqat ma\'lumot uchun; tashxis va davo shifokor tomonidan.'
  },
  ru: {
    welcome: '🏥 <b>MedCore</b> — медицинский справочник\n\n💊 8600+ препаратов · фармакология · лабораторные показатели.\nВыберите раздел:',
    drugs: '💊 База препаратов', lab: '🔬 Лаборатория', search: '🔎 Поиск', lang: '🌐 Язык', about: 'ℹ️ О боте',
    joinReq: '🔒 Чтобы пользоваться ботом, подпишитесь на наш канал, затем нажмите «✅ Проверить».',
    joinBtn: '➕ Подписаться на канал', checkBtn: '✅ Проверить',
    notMember: '❌ Вы ещё не подписаны на канал. Подпишитесь и проверьте снова.',
    chooseCat: '💊 Выберите группу препаратов:', chooseDrug: ' — выберите препарат:',
    back: '⬅️ Назад', home: '🏠 Главное меню', noPharma: 'Для этого препарата фармакология ещё не добавлена.', pharmaBtn: '⚗️ Фармакология',
    searchHint: '🔎 Напишите название препарата или действующее вещество (МНН).\nНапример: <code>диклофенак</code>, <code>amoxicillin</code>, <code>M01AB05</code>',
    searchNone: '🔎 По запросу «%s» ничего не найдено.', searchRes: '🔎 Результаты по «%s»:',
    chooseLang: '🌐 Выберите язык:', labCats: '🔬 Выберите раздел лаборатории:', labChoose: ' — выберите показатель:',
    inn: 'Действующее вещество', atx: 'Код ATX', grp: 'Группа', form: 'Форма', firm: 'Производитель', country: 'Страна', rx: 'Отпуск',
    norm: '📊 Нормальные значения', optimum: '🎯 Оптимум', causesHigh: '⬆️ Причины повышения', causesLow: '⬇️ Причины понижения', unit: 'Единица',
    aboutTxt: 'ℹ️ <b>MedCore</b> — медицинский справочник для врачей.\n\n• 8600+ препаратов и фармакология\n• Лабораторные показатели (нормы, трактовка)\n• На 3 языках: узбекский / русский / английский\n\n⚠️ Информация только справочная; диагноз и лечение определяет врач.'
  },
  en: {
    welcome: '🏥 <b>MedCore</b> — medical reference\n\n💊 8600+ drugs · pharmacology · lab values.\nChoose a section:',
    drugs: '💊 Drug database', lab: '🔬 Laboratory', search: '🔎 Search', lang: '🌐 Language', about: 'ℹ️ About',
    joinReq: '🔒 To use the bot, please join our channel, then tap «✅ Check».',
    joinBtn: '➕ Join the channel', checkBtn: '✅ Check',
    notMember: '❌ You are not a channel member yet. Join and check again.',
    chooseCat: '💊 Choose a drug group:', chooseDrug: ' — choose a drug:',
    back: '⬅️ Back', home: '🏠 Main menu', noPharma: 'Pharmacology for this drug has not been added yet.', pharmaBtn: '⚗️ Pharmacology',
    searchHint: '🔎 Send a drug name or active ingredient (INN).\nE.g.: <code>diclofenac</code>, <code>amoxicillin</code>, <code>M01AB05</code>',
    searchNone: '🔎 Nothing found for «%s».', searchRes: '🔎 Results for «%s»:',
    chooseLang: '🌐 Choose a language:', labCats: '🔬 Choose a lab section:', labChoose: ' — choose a marker:',
    inn: 'Active ingredient', atx: 'ATX code', grp: 'Group', form: 'Form', firm: 'Manufacturer', country: 'Country', rx: 'Dispensing',
    norm: '📊 Normal values', optimum: '🎯 Optimum', causesHigh: '⬆️ Causes of high values', causesLow: '⬇️ Causes of low values', unit: 'Unit',
    aboutTxt: 'ℹ️ <b>MedCore</b> — a medical reference for clinicians.\n\n• 8600+ drugs and pharmacology\n• Lab values (norms, interpretation)\n• In 3 languages: Uzbek / Russian / English\n\n⚠️ Information is for reference only; diagnosis and treatment are decided by a physician.'
  }
};
const SEC = {
  pd:  { uz: '⚗️ Farmakodinamika', ru: '⚗️ Фармакодинамика', en: '⚗️ Pharmacodynamics' },
  pk:  { uz: '📊 Farmakokinetika', ru: '📊 Фармакокинетика', en: '📊 Pharmacokinetics' },
  ind: { uz: '✅ Ko\'rsatmalar', ru: '✅ Показания', en: '✅ Indications' },
  ci:  { uz: '🚫 Qarshi ko\'rsatmalar', ru: '🚫 Противопоказания', en: '🚫 Contraindications' },
  adr: { uz: '⚠️ Nojo\'ya ta\'sirlar', ru: '⚠️ Побочные эффекты', en: '⚠️ Adverse effects' },
  dose:{ uz: '💉 Qo\'llash va dozalash', ru: '💉 Применение и дозы', en: '💉 Dosing' },
  intr:{ uz: '🔗 O\'zaro ta\'sir', ru: '🔗 Взаимодействия', en: '🔗 Interactions' },
  od:  { uz: '🚨 Dozadan oshganda', ru: '🚨 Передозировка', en: '🚨 Overdose' },
  frm: { uz: '📦 Chiqarish shakli', ru: '📦 Формы выпуска', en: '📦 Forms' }
};
const PAGE = 8;
const LANGS = ['uz', 'ru', 'en'];

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clip = (s, n = 4000) => s.length > n ? s.slice(0, n - 1) + '…' : s;
const mapLang = c => { const l = String(c || '').slice(0, 2); return l === 'ru' || l === 'en' ? l : 'uz'; };
const normAtx = a => (a || '').trim().replace(/[.\s]+$/, '');
const safeAtx = s => s.replace(/[^A-Za-z0-9]/g, '_');

// ── Isolate keshi + ma'lumot olish ──
const MEM = {};
async function getJSON(env, p) {
  if (MEM[p] !== undefined) return MEM[p];
  let j = null;
  try {
    const res = await fetch(env.DATA_BASE + p, { cf: { cacheTtl: 3600, cacheEverything: true } });
    if (res.ok) j = await res.json();
  } catch (e) { j = null; }
  MEM[p] = j;
  return j;
}

// ── Telegram API ──
async function tg(env, method, body) {
  try {
    const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    });
    return await r.json();
  } catch (e) { return { ok: false }; }
}
const kb = rows => ({ inline_keyboard: rows });
function send(env, chatId, text, rows) {
  return tg(env, 'sendMessage', { chat_id: chatId, text: clip(text), parse_mode: 'HTML', disable_web_page_preview: true, reply_markup: rows ? kb(rows) : undefined });
}
function edit(env, chatId, msgId, text, rows) {
  return tg(env, 'editMessageText', { chat_id: chatId, message_id: msgId, text: clip(text), parse_mode: 'HTML', disable_web_page_preview: true, reply_markup: rows ? kb(rows) : undefined });
}

// ── A'zolik (isolate kesh, 60s) ──
const memberCache = new Map();
async function isMember(env, uid) {
  const c = memberCache.get(uid);
  if (c && Date.now() - c.ts < 60000) return c.ok;
  const r = await tg(env, 'getChatMember', { chat_id: env.CHANNEL, user_id: uid });
  const ok = r.ok && ['creator', 'administrator', 'member'].includes(r.result.status);
  memberCache.set(uid, { ok, ts: Date.now() });
  return ok;
}

// ── Menyular ──
const cd = (lang, rest) => lang + '|' + rest;
function mainMenu(lang) {
  const t = T[lang];
  return [
    [{ text: t.drugs, callback_data: cd(lang, 'cats') }],
    [{ text: t.lab, callback_data: cd(lang, 'lab') }],
    [{ text: t.search, callback_data: cd(lang, 'srch') }, { text: t.lang, callback_data: cd(lang, 'lang') }],
    [{ text: t.about, callback_data: cd(lang, 'about') }]
  ];
}
function joinMenu(env, lang) {
  const url = 'https://t.me/' + String(env.CHANNEL).replace(/^@/, '');
  return [[{ text: T[lang].joinBtn, url }], [{ text: T[lang].checkBtn, callback_data: cd(lang, 'chk') }]];
}
async function catsMenu(env, lang) {
  const meta = await getJSON(env, 'meta.json'); const rows = [];
  const gs = (meta && meta.groups) || [];
  for (let i = 0; i < gs.length; i += 2) {
    rows.push(gs.slice(i, i + 2).map(g => ({ text: `${g.icon} ${g.n[lang]} (${g.c})`, callback_data: cd(lang, 'g:' + g.id + ':0') })));
  }
  rows.push([{ text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}
async function groupName(env, gid, lang) {
  const meta = await getJSON(env, 'meta.json');
  const g = meta && meta.groups.find(x => x.id === gid);
  return g ? { icon: g.icon, name: g.n[lang] } : { icon: '💊', name: gid };
}
function groupListMenu(gid, list, page, lang) {
  const pages = Math.max(1, Math.ceil(list.length / PAGE));
  page = Math.max(0, Math.min(page, pages - 1));
  const rows = list.slice(page * PAGE, page * PAGE + PAGE).map(d => [{ text: '💊 ' + d.n.slice(0, 40), callback_data: cd(lang, 'd:' + gid + ':' + d.i) }]);
  const nav = [];
  if (page > 0) nav.push({ text: '◀️', callback_data: cd(lang, 'g:' + gid + ':' + (page - 1)) });
  nav.push({ text: `${page + 1}/${pages}`, callback_data: cd(lang, 'noop') });
  if (page < pages - 1) nav.push({ text: '▶️', callback_data: cd(lang, 'g:' + gid + ':' + (page + 1)) });
  rows.push(nav);
  rows.push([{ text: T[lang].back, callback_data: cd(lang, 'cats') }, { text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}
async function drugCard(env, d, gid, lang) {
  const t = T[lang]; const gn = await groupName(env, gid, lang);
  let s = `<b>💊 ${esc(d.n)}</b>\n\n`;
  if (d.nn) s += `🧬 <b>${t.inn}:</b> ${esc(d.nn)}\n`;
  if (d.a) s += `🏷 <b>${t.atx}:</b> <code>${esc(d.a)}</code>\n`;
  s += `📂 <b>${t.grp}:</b> ${esc(gn.icon + ' ' + gn.name)}\n`;
  if (d.fm) s += `💠 <b>${t.form}:</b> ${esc(d.fm)}\n`;
  if (d.fr) s += `🏭 <b>${t.firm}:</b> ${esc(d.fr)}\n`;
  if (d.co) s += `🌍 <b>${t.country}:</b> ${esc(d.co)}\n`;
  if (d.rx) s += `📋 <b>${t.rx}:</b> ${esc(d.rx)}\n`;
  return s;
}
function drugMenu(d, gid, lang) {
  const rows = [];
  if (d.hp) rows.push([{ text: T[lang].pharmaBtn, callback_data: cd(lang, 'p:' + gid + ':' + d.i + ':pd') }]);
  rows.push([{ text: T[lang].back, callback_data: cd(lang, 'g:' + gid + ':0') }, { text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}

// ── Farmakologiya ──
function pdLang(entry, lang) { return entry ? (entry[lang] || entry.uz || entry) : null; }
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
function pharmaMenu(pd, gid, id, sec, lang) {
  const avail = ['pd', 'pk', 'ind', 'ci', 'adr', 'dose', 'intr', 'od', 'frm'].filter(s => {
    const txt = pharmaSection(pd, s, lang); return txt && !/—$/.test(txt.trim());
  });
  const rows = [];
  for (let i = 0; i < avail.length; i += 2)
    rows.push(avail.slice(i, i + 2).map(s => ({ text: (s === sec ? '• ' : '') + SEC[s][lang], callback_data: cd(lang, 'p:' + gid + ':' + id + ':' + s) })));
  rows.push([{ text: T[lang].back, callback_data: cd(lang, 'd:' + gid + ':' + id) }, { text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}

// ── Laboratoriya ──
function labCatsMenu(lab, lang) {
  const rows = [];
  const cats = (lab && lab.cats) || [];
  for (let i = 0; i < cats.length; i += 2)
    rows.push(cats.slice(i, i + 2).map(c => ({ text: `${c.icon} ${c.name[lang]}`, callback_data: cd(lang, 'lc:' + c.id) })));
  rows.push([{ text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}
function labTestsMenu(lab, cat, lang) {
  const list = (lab.tests || []).filter(t => t.cat === cat);
  const rows = list.map(t => [{ text: `🔬 ${((t.abbr ? t.abbr + ' · ' : '') + t.name[lang])}`.slice(0, 50), callback_data: cd(lang, 'lt:' + t.id) }]);
  rows.push([{ text: T[lang].back, callback_data: cd(lang, 'lab') }, { text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}
function labCard(t, lang) {
  const L = T[lang];
  let s = `<b>🔬 ${esc(t.name[lang])}</b>${t.abbr ? ' (' + esc(t.abbr) + ')' : ''}\n`;
  if (t.unit && t.unit[lang]) s += `<b>${L.unit}:</b> ${esc(t.unit[lang])}\n`;
  s += `\n<b>${L.norm}:</b>\n` + ((t.norms && t.norms[lang]) || []).map(([k, v]) => `• ${esc(k)}: <b>${esc(v)}</b>`).join('\n');
  if (t.optimum && t.optimum[lang]) s += `\n\n<b>${L.optimum}:</b> ${esc(t.optimum[lang])}`;
  return s;
}
function labMenu(t, lang) {
  const rows = []; const r = [];
  if (t.high && t.high[lang] && t.high[lang].length) r.push({ text: T[lang].causesHigh, callback_data: cd(lang, 'lh:' + t.id) });
  if (t.low && t.low[lang] && t.low[lang].length) r.push({ text: T[lang].causesLow, callback_data: cd(lang, 'll:' + t.id) });
  if (r.length) rows.push(r);
  rows.push([{ text: T[lang].back, callback_data: cd(lang, 'lc:' + t.cat) }, { text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return rows;
}

// ── Qidiruv ──
function searchDrugs(idx, q) {
  q = q.toLowerCase().trim(); if (q.length < 2) return [];
  const res = [];
  for (const row of idx) {
    const hay = (row[1] + ' ' + row[2] + ' ' + row[3]).toLowerCase();
    if (hay.includes(q)) { res.push(row); if (res.length >= 30) break; }
  }
  return res;
}

// ── Update qayta ishlash ──
async function handleMessage(env, msg, ctx) {
  const uid = msg.from.id, chatId = msg.chat.id;
  const text = (msg.text || '').trim();
  const lang = mapLang(msg.from.language_code);
  if (!text) return;
  if (/^\/(start|menu)/.test(text)) {
    // Foydalanuvchini e'lonlar uchun ro'yxatga olamiz (KV)
    if (ctx && env.USERS) ctx.waitUntil(env.USERS.put('u:' + chatId, String(Date.now())));
    if (await isMember(env, uid)) return send(env, chatId, T[lang].welcome, mainMenu(lang));
    return send(env, chatId, T[lang].joinReq, joinMenu(env, lang));
  }
  if (/^\/(help|about)/.test(text)) return send(env, chatId, T[lang].aboutTxt, [[{ text: T[lang].home, callback_data: cd(lang, 'home') }]]);
  if (text.startsWith('/')) return send(env, chatId, T[lang].welcome, mainMenu(lang));
  // qidiruv
  if (!(await isMember(env, uid))) return send(env, chatId, T[lang].joinReq, joinMenu(env, lang));
  const idx = await getJSON(env, 'search.json') || [];
  const res = searchDrugs(idx, text);
  if (!res.length) return send(env, chatId, T[lang].searchNone.replace('%s', esc(text)), [[{ text: T[lang].home, callback_data: cd(lang, 'home') }]]);
  const rows = res.slice(0, 12).map(r => [{ text: '💊 ' + r[1].slice(0, 38) + (r[2] ? ' · ' + r[2].slice(0, 16) : ''), callback_data: cd(lang, 'd:' + r[4] + ':' + r[0]) }]);
  rows.push([{ text: T[lang].home, callback_data: cd(lang, 'home') }]);
  return send(env, chatId, T[lang].searchRes.replace('%s', esc(text)), rows);
}

async function handleCallback(env, cq) {
  const uid = cq.from.id, chatId = cq.message.chat.id, msgId = cq.message.message_id;
  const raw = cq.data || '';
  const sep = raw.indexOf('|');
  let lang = sep > 0 ? raw.slice(0, sep) : 'uz';
  if (!LANGS.includes(lang)) lang = 'uz';
  const data = sep > 0 ? raw.slice(sep + 1) : raw;
  const t = T[lang];
  const ans = (text, alert) => tg(env, 'answerCallbackQuery', { callback_query_id: cq.id, text, show_alert: !!alert });

  if (data === 'noop') return ans();
  if (data === 'chk') {
    if (await isMember(env, uid)) { await ans(); return edit(env, chatId, msgId, t.welcome, mainMenu(lang)); }
    return ans(t.notMember, true);
  }
  if (!(await isMember(env, uid))) { await ans(); return edit(env, chatId, msgId, t.joinReq, joinMenu(env, lang)); }
  await ans();

  if (data === 'home') return edit(env, chatId, msgId, t.welcome, mainMenu(lang));
  if (data === 'cats') return edit(env, chatId, msgId, t.chooseCat, await catsMenu(env, lang));
  if (data === 'about') return edit(env, chatId, msgId, t.aboutTxt, [[{ text: t.home, callback_data: cd(lang, 'home') }]]);
  if (data === 'srch') return edit(env, chatId, msgId, t.searchHint, [[{ text: t.home, callback_data: cd(lang, 'home') }]]);
  if (data === 'lang') return edit(env, chatId, msgId, t.chooseLang, [
    [{ text: '🇺🇿 O\'zbekcha', callback_data: cd('uz', 'home') }, { text: '🇷🇺 Русский', callback_data: cd('ru', 'home') }, { text: '🇬🇧 English', callback_data: cd('en', 'home') }],
    [{ text: t.home, callback_data: cd(lang, 'home') }]
  ]);
  if (data.startsWith('g:')) {
    const [, gid, page] = data.split(':');
    const list = await getJSON(env, 'group/' + gid + '.json') || [];
    const gn = await groupName(env, gid, lang);
    return edit(env, chatId, msgId, `${gn.icon} <b>${esc(gn.name)}</b>${t.chooseDrug}`, groupListMenu(gid, list, +page, lang));
  }
  if (data.startsWith('d:')) {
    const [, gid, id] = data.split(':');
    const list = await getJSON(env, 'group/' + gid + '.json') || [];
    const d = list.find(x => String(x.i) === id);
    if (!d) return;
    return edit(env, chatId, msgId, await drugCard(env, d, gid, lang), drugMenu(d, gid, lang));
  }
  if (data.startsWith('p:')) {
    const [, gid, id, sec] = data.split(':');
    const list = await getJSON(env, 'group/' + gid + '.json') || [];
    const d = list.find(x => String(x.i) === id);
    if (!d) return;
    const entry = await getJSON(env, 'pharma/' + safeAtx(normAtx(d.a)) + '.json');
    const pd = pdLang(entry, lang);
    if (!pd) return edit(env, chatId, msgId, t.noPharma, drugMenu(d, gid, lang));
    return edit(env, chatId, msgId, pharmaSection(pd, sec, lang), pharmaMenu(pd, gid, id, sec, lang));
  }
  if (data === 'lab') { const lab = await getJSON(env, 'lab.json'); return edit(env, chatId, msgId, t.labCats, labCatsMenu(lab, lang)); }
  if (data.startsWith('lc:')) {
    const cat = data.slice(3); const lab = await getJSON(env, 'lab.json');
    const c = lab.cats.find(x => x.id === cat);
    return edit(env, chatId, msgId, `${c ? c.icon + ' <b>' + esc(c.name[lang]) + '</b>' : ''}${t.labChoose}`, labTestsMenu(lab, cat, lang));
  }
  if (data.startsWith('lt:')) {
    const lab = await getJSON(env, 'lab.json'); const tt = lab.tests.find(x => x.id === data.slice(3));
    if (!tt) return; return edit(env, chatId, msgId, labCard(tt, lang), labMenu(tt, lang));
  }
  if (data.startsWith('lh:') || data.startsWith('ll:')) {
    const dir = data.slice(0, 2); const lab = await getJSON(env, 'lab.json'); const tt = lab.tests.find(x => x.id === data.slice(3));
    if (!tt) return;
    const arr = ((dir === 'lh' ? tt.high : tt.low) || {})[lang] || [];
    const title = dir === 'lh' ? t.causesHigh : t.causesLow;
    return edit(env, chatId, msgId, `<b>${esc(tt.name[lang])}</b>\n\n<b>${title}:</b>\n` + arr.map(x => '• ' + esc(x)).join('\n'),
      [[{ text: t.back, callback_data: cd(lang, 'lt:' + tt.id) }, { text: t.home, callback_data: cd(lang, 'home') }]]);
  }
}

// ── E'lon (kanalga post + foydalanuvchilarga yuborish) ──
// POST /admin/broadcast  (X-Admin-Secret sarlavhasi bilan himoyalangan)
// Tana: {"text":"...", "toChannel":true, "toUsers":true, "cursor":"..."}
// Erkin tarmoq limiti (50 subrequest) sababli bir chaqiruvда ~45 foydalanuvchi —
// qolgani "cursor" orqali keyingi chaqiruvда yuboriladi.
async function handleBroadcast(request, env) {
  if (!env.ADMIN_SECRET || request.headers.get('X-Admin-Secret') !== env.ADMIN_SECRET)
    return new Response('forbidden', { status: 403 });
  let body; try { body = await request.json(); } catch { return new Response('bad request', { status: 400 }); }
  const text = body.text;
  if (!text) return new Response('text required', { status: 400 });
  const res = { ok: true, channel: null, usersSent: 0, usersFailed: 0, cursor: null, done: true };

  if (body.toChannel !== false && !body.cursor) {
    const r = await tg(env, 'sendMessage', { chat_id: env.CHANNEL, text, parse_mode: 'HTML', disable_web_page_preview: true });
    res.channel = r.ok ? 'sent' : (r.description || 'failed');
  }
  if (body.toUsers !== false && env.USERS) {
    const list = await env.USERS.list({ prefix: 'u:', cursor: body.cursor || undefined, limit: 45 });
    for (const k of list.keys) {
      const id = k.name.slice(2);
      const r = await tg(env, 'sendMessage', { chat_id: id, text, parse_mode: 'HTML', disable_web_page_preview: true });
      if (r.ok) res.usersSent++; else res.usersFailed++;
    }
    res.done = list.list_complete;
    res.cursor = list.list_complete ? null : list.cursor;
  }
  return new Response(JSON.stringify(res), { headers: { 'content-type': 'application/json' } });
}

// ═══════════════════════════════════════════════════════════
//  KUNLIK AVTOPOST — har kuni kanalga 5 ta dori
//  Cron orqali (scheduled) yoki qo'lda (/admin/daily-post) ishga tushadi.
//  Navbat KV'da ('daily:idx') saqlanadi — dorilar takrorlanmasdan
//  ketma-ket aylanib chiqadi. Til: kanal tili (o'zbekcha).
// ═══════════════════════════════════════════════════════════
const DAILY_COUNT = 1;   // har cron ishga tushganda 1 ta dori (kuniga 5 marta)
const CHANNEL_LANG = 'uz';
const APP_URL = 'https://xumoyunmirzoai-commits.github.io/medical-app/';
const BOT_USERNAME = '@MedCore_Tibbiyot_Platformasi_bot';
const CHANNEL_HANDLE = '@MedCore_Tibbiyot_Platformasi';

function dailyFooter() {
  return `\n\n➖➖➖\n🤖 Bot: ${BOT_USERNAME}\n📱 Ilova: ${APP_URL}\n📢 Kanal: ${CHANNEL_HANDLE}`;
}

// search.json yozuvi: [id, name, inn, atx, group]
async function buildDailyCard(env, entry, lang) {
  const t = T[lang];
  const id = entry[0], gid = entry[4];
  const list = await getJSON(env, 'group/' + gid + '.json') || [];
  const d = list.find(x => String(x.i) === String(id))
         || { i: id, n: entry[1], nn: entry[2], a: entry[3] };
  const gn = await groupName(env, gid, lang);

  let s = `💊 <b>${esc(d.n || entry[1])}</b>\n\n`;
  if (d.nn) s += `🧬 <b>${t.inn}:</b> ${esc(d.nn)}\n`;
  if (d.a)  s += `🏷 <b>${t.atx}:</b> <code>${esc(d.a)}</code>\n`;
  s += `📂 <b>${t.grp}:</b> ${esc(gn.icon + ' ' + gn.name)}\n`;
  if (d.fm) s += `💠 <b>${t.form}:</b> ${esc(d.fm)}\n`;
  if (d.fr) s += `🏭 <b>${t.firm}:</b> ${esc(d.fr)}\n`;
  if (d.co) s += `🌍 <b>${t.country}:</b> ${esc(d.co)}\n`;
  if (d.rx) s += `📋 <b>${t.rx}:</b> ${esc(d.rx)}\n`;

  // Farmakologiya qisqacha (mavjud bo'lsa)
  if (d.hp && d.a) {
    const pd = pdLang(await getJSON(env, 'pharma/' + safeAtx(normAtx(d.a)) + '.json'), lang);
    if (pd) {
      if (pd.farmTasir) s += `\n⚗️ <b>Ta'siri:</b> ${esc(clip(pd.farmTasir, 320))}\n`;
      const ind = (pd.korsatmalar || []).slice(0, 3);
      if (ind.length) s += `\n✅ <b>Ko'rsatmalar:</b>\n` + ind.map(x => '• ' + esc(x)).join('\n') + '\n';
    }
  }
  return clip(s, 3700) + dailyFooter();
}

async function runDailyPost(env) {
  const idx = await getJSON(env, 'search.json') || [];
  const total = idx.length;
  if (!total) return { ok: false, error: 'search.json bo\'sh yoki o\'qilmadi' };

  let start = 0;
  if (env.USERS) {
    const raw = await env.USERS.get('daily:idx');
    start = raw ? (parseInt(raw, 10) || 0) : 0;
  }
  start = ((start % total) + total) % total;

  let sent = 0, failed = 0;
  for (let k = 0; k < DAILY_COUNT; k++) {
    const entry = idx[(start + k) % total];
    if (!entry) continue;
    const card = await buildDailyCard(env, entry, CHANNEL_LANG);
    const r = await tg(env, 'sendMessage', {
      chat_id: env.CHANNEL, text: card, parse_mode: 'HTML', disable_web_page_preview: true
    });
    if (r.ok) sent++; else failed++;
  }

  const next = (start + DAILY_COUNT) % total;
  if (env.USERS) await env.USERS.put('daily:idx', String(next));
  return { ok: true, sent, failed, from: start, next, total };
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runDailyPost(env));
  },
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/admin/broadcast') return handleBroadcast(request, env);
    if (request.method === 'POST' && url.pathname === '/admin/daily-post') {
      if (!env.ADMIN_SECRET || request.headers.get('X-Admin-Secret') !== env.ADMIN_SECRET)
        return new Response('forbidden', { status: 403 });
      const res = await runDailyPost(env);
      return new Response(JSON.stringify(res), { headers: { 'content-type': 'application/json' } });
    }
    if (request.method === 'GET') return new Response('MedCore bot webhook OK');
    if (request.method !== 'POST') return new Response('ok');
    if (env.WEBHOOK_SECRET && request.headers.get('X-Telegram-Bot-Api-Secret-Token') !== env.WEBHOOK_SECRET)
      return new Response('forbidden', { status: 403 });
    let update; try { update = await request.json(); } catch { return new Response('ok'); }
    try {
      if (update.callback_query) await handleCallback(env, update.callback_query);
      else if (update.message) await handleMessage(env, update.message, ctx);
    } catch (e) { /* Telegram qayta urinmasin */ }
    return new Response('ok');
  }
};
