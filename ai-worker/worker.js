// ═══════════════════════════════════════════════════════════
//  MedCore — AI Yordamchi (Cloudflare Worker + Workers AI)
//  Ilova ma'lumotlaridan (bot-data/*.json) foydalanib (RAG)
//  dori, farmakologiya, laboratoriya va o'zaro ta'sir bo'yicha
//  javob beradi. Faqat ilova (web app) uchun — CORS cheklangan.
//
//  Sozlash (wrangler.toml):
//    [ai] binding = AI         — Workers AI
//    DATA_BASE                 — GitHub Pages bot-data/ manzili
//    MODEL                     — AI model nomi
//    ALLOWED_ORIGINS           — ruxsat etilgan manbalar (CORS)
// ═══════════════════════════════════════════════════════════

const norm = a => (a || '').trim().replace(/[.\s]+$/, '');
const safeAtx = s => (s || '').replace(/[^A-Za-z0-9]/g, '_');
const clip = (s, n) => { s = String(s || ''); return s.length > n ? s.slice(0, n - 1) + '…' : s; };

// ── Isolate kesh + ma'lumot olish ──
const MEM = {};
async function getJSON(env, p) {
  if (MEM[p] !== undefined) return MEM[p];
  let j = null;
  try {
    const r = await fetch(env.DATA_BASE + p, { cf: { cacheTtl: 3600, cacheEverything: true } });
    if (r.ok) j = await r.json();
  } catch (e) { j = null; }
  MEM[p] = j;
  return j;
}

// ── Til aniqlash (oddiy) ──
function pickLang(explicit, text) {
  if (['uz', 'ru', 'en'].includes(explicit)) return explicit;
  if (/[а-яё]/i.test(text)) return 'ru';
  if (/[a-z]/i.test(text) && !/[ʼ'oʻgʻ]/.test(text)) return 'en';
  return 'uz';
}

// ── RAG: savolga mos dori/lab kontekstini yig'ish ──
function tokenize(q) {
  return (q.toLowerCase().match(/[a-zа-яёʻ’']{3,}/gi) || []).slice(0, 12);
}

async function findDrugs(env, query, max = 4) {
  const idx = await getJSON(env, 'search.json') || [];     // [id,name,inn,atx,group]
  const toks = tokenize(query);
  if (!toks.length) return [];
  const scored = [];
  for (const row of idx) {
    const hay = ((row[1] || '') + ' ' + (row[2] || '') + ' ' + (row[3] || '')).toLowerCase();
    let score = 0;
    for (const t of toks) if (hay.includes(t)) score += (row[3] && row[3].toLowerCase() === t) ? 5 : 1;
    if (score > 0) scored.push([score, row]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  return scored.slice(0, max).map(s => s[1]);
}

function pdLang(entry, lang) { return entry ? (entry[lang] || entry.uz || entry) : null; }

async function drugContext(env, row, lang) {
  const [id, name, inn, atx, gid] = row;
  const list = await getJSON(env, 'group/' + gid + '.json') || [];
  const d = list.find(x => String(x.i) === String(id)) || { i: id, n: name, nn: inn, a: atx };
  let s = `Dori: ${d.n || name}`;
  if (d.nn) s += ` | INN: ${d.nn}`;
  if (d.a) s += ` | ATX: ${d.a}`;
  if (d.fm) s += ` | Shakl: ${d.fm}`;
  if (d.fr) s += ` | Ishlab chiqaruvchi: ${d.fr}`;
  if (d.rx) s += ` | Berilishi: ${d.rx}`;
  if (d.hp && d.a) {
    const pd = pdLang(await getJSON(env, 'pharma/' + safeAtx(norm(d.a)) + '.json'), lang);
    if (pd) {
      if (pd.gruppa) s += `\n  Guruh: ${pd.gruppa}`;
      if (pd.farmakodinamika) s += `\n  Farmakodinamika: ${clip(pd.farmakodinamika, 600)}`;
      if (Array.isArray(pd.korsatmalar) && pd.korsatmalar.length) s += `\n  Ko'rsatmalar: ${clip(pd.korsatmalar.join('; '), 400)}`;
      if (Array.isArray(pd.qarrshi) && pd.qarrshi.length) s += `\n  Qarshi ko'rsatmalar: ${clip(pd.qarrshi.join('; '), 300)}`;
      if (pd.qollash) {
        const q = pd.qollash;
        if (q.kattalar) s += `\n  Dozalash (kattalar): ${clip(q.kattalar, 300)}`;
        if (q.bolalar) s += `\n  Dozalash (bolalar): ${clip(q.bolalar, 200)}`;
      }
      if (Array.isArray(pd.ozarotasir) && pd.ozarotasir.length) s += `\n  O'zaro ta'sir: ${clip(pd.ozarotasir.join('; '), 300)}`;
    }
  }
  return s;
}

async function labContext(env, query, lang, max = 3) {
  const lab = await getJSON(env, 'lab.json');
  if (!lab || !lab.tests) return [];
  const toks = tokenize(query);
  const out = [];
  for (const t of lab.tests) {
    const hay = ((t.abbr || '') + ' ' + (t.name?.[lang] || t.name?.uz || '') + ' ' + (t.name?.ru || '') + ' ' + (t.name?.en || '')).toLowerCase();
    if (toks.some(tok => hay.includes(tok))) {
      let s = `Tahlil: ${t.name?.[lang] || t.name?.uz}${t.abbr ? ' (' + t.abbr + ')' : ''}`;
      const norms = (t.norms && t.norms[lang]) || [];
      if (norms.length) s += ` | Normalar: ${norms.map(n => n[0] + ': ' + n[1]).join('; ')}`;
      out.push(s);
      if (out.length >= max) break;
    }
  }
  return out;
}

const SYS = {
  uz: `Sen "MedCore AI" — O'zbekistondagi shifokorlar va tibbiyot xodimlari uchun tibbiy ma'lumotnoma yordamchisisan. Faqat tibbiyot, dorilar, farmakologiya, laboratoriya ko'rsatkichlari va dorilar o'zaro ta'siri bo'yicha javob ber. Quyida berilgan KONTEKST ma'lumotlariga tayan; agar kontekstda javob bo'lmasa, umumiy ishonchli tibbiy bilimga asoslan, lekin aniq dozani o'ylab topma. Aniq, qisqa va tushunarli javob ber. Doimo o'zbek tilida javob ber. Javob oxirida qisqa eslatma qo'sh: "⚠️ Bu ma'lumot faqat yo'naltiruvchi; yakuniy qaror shifokorники."`,
  ru: `Ты — "MedCore AI", помощник-медицинский справочник для врачей и медработников. Отвечай только по медицине, лекарствам, фармакологии, лабораторным показателям и взаимодействиям препаратов. Опирайся на приведённый КОНТЕКСТ; если в нём нет ответа — используй надёжные общие медицинские знания, но не выдумывай точные дозы. Отвечай точно и кратко. Всегда отвечай на русском языке. В конце добавь короткую заметку: "⚠️ Информация только справочная; окончательное решение принимает врач."`,
  en: `You are "MedCore AI", a medical-reference assistant for clinicians. Answer only on medicine, drugs, pharmacology, laboratory values and drug interactions. Rely on the provided CONTEXT; if it lacks the answer, use reliable general medical knowledge but do not invent exact doses. Be accurate and concise. Always answer in English. End with a short note: "⚠️ For reference only; the final decision rests with the physician."`
};

// ── Ta'lim (klinik protokollar) bo'yicha RAG ──
async function findEdu(env, query, max = 3) {
  const chunks = await getJSON(env, 'edu.json');   // [{chapter, text}]
  if (!Array.isArray(chunks)) return [];
  const toks = tokenize(query);
  if (!toks.length) return [];
  const scored = [];
  for (const c of chunks) {
    const low = (c.text || '').toLowerCase();
    let score = 0;
    for (const t of toks) if (low.includes(t)) score++;
    if (score > 1) scored.push([score, c]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  return scored.slice(0, max).map(s => `[Ta'lim — ${s[1].chapter}] ${clip(s[1].text, 900)}`);
}

async function buildContext(env, query, lang) {
  const drugs = await findDrugs(env, query, 4);
  const parts = [];
  for (const r of drugs) parts.push(await drugContext(env, r, lang));
  const labs = await labContext(env, query, lang, 3);
  parts.push(...labs);
  const edu = await findEdu(env, query, 3);
  parts.push(...edu);
  return parts.join('\n\n');
}

function corsHeaders(env, origin) {
  const allow = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  const ok = origin && allow.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : allow[0] || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(env, origin);

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method === 'GET') return new Response('MedCore AI OK', { headers: cors });
    if (request.method !== 'POST' || url.pathname !== '/chat')
      return new Response('not found', { status: 404, headers: cors });

    // CORS: faqat ruxsat etilgan manbalar (ilova) uchun
    const allow = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    if (origin && allow.length && !allow.includes(origin))
      return new Response(JSON.stringify({ error: 'forbidden origin' }), { status: 403, headers: { ...cors, 'content-type': 'application/json' } });

    let body;
    try { body = await request.json(); } catch { return new Response(JSON.stringify({ error: 'bad request' }), { status: 400, headers: { ...cors, 'content-type': 'application/json' } }); }

    const history = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
    const last = [...history].reverse().find(m => m.role === 'user');
    const query = (last && last.content || body.message || '').toString().slice(0, 2000);
    if (!query.trim()) return new Response(JSON.stringify({ error: 'empty' }), { status: 400, headers: { ...cors, 'content-type': 'application/json' } });

    const lang = pickLang(body.lang, query);
    let context = '';
    try { context = await buildContext(env, query, lang); } catch (e) { context = ''; }

    const sys = SYS[lang] + (context ? `\n\n=== KONTEKST (ilova bazasidan) ===\n${clip(context, 6000)}` : '');
    const messages = [
      { role: 'system', content: sys },
      ...history.filter(m => m.role === 'user' || m.role === 'assistant').map(m => ({ role: m.role, content: String(m.content || '').slice(0, 2000) }))
    ];

    try {
      const out = await env.AI.run(env.MODEL, { messages, max_tokens: 1024, temperature: 0.3 });
      const answer = (out && (out.response ?? out.result?.response)) || '';
      return new Response(JSON.stringify({ answer, lang }), { headers: { ...cors, 'content-type': 'application/json' } });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'ai_error', detail: String(e && e.message || e) }), { status: 502, headers: { ...cors, 'content-type': 'application/json' } });
    }
  }
};
