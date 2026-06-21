// Lokal sinov: worker'ni haqiqiy tarmoqsiz tekshirish.
// fetch'ni mock qilamiz: bot-data -> lokal fayllar; Telegram API -> log.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BOT_DATA = path.join(__dirname, '..', 'bot-data');
const DATA_BASE = 'mock://data/';

const sent = [];
const realFetch = globalThis.fetch;
globalThis.fetch = async (url, opts) => {
  url = String(url);
  if (url.startsWith(DATA_BASE)) {
    const rel = url.slice(DATA_BASE.length);
    try {
      const buf = await readFile(path.join(BOT_DATA, rel), 'utf8');
      return new Response(buf, { status: 200, headers: { 'content-type': 'application/json' } });
    } catch { return new Response('not found', { status: 404 }); }
  }
  if (url.includes('api.telegram.org')) {
    const method = url.split('/').pop();
    const body = opts && opts.body ? JSON.parse(opts.body) : {};
    if (method === 'getChatMember') return new Response(JSON.stringify({ ok: true, result: { status: 'member' } }), { status: 200 });
    if (method === 'answerCallbackQuery') return new Response(JSON.stringify({ ok: true, result: true }), { status: 200 });
    sent.push({ method, text: body.text, buttons: (body.reply_markup && body.reply_markup.inline_keyboard || []).map(r => r.map(b => b.text + (b.callback_data ? ' [' + b.callback_data + ']' : (b.url ? ' (url)' : '')))) });
    return new Response(JSON.stringify({ ok: true, result: { message_id: 1 } }), { status: 200 });
  }
  return realFetch(url, opts);
};

const env = { BOT_TOKEN: 'TEST', CHANNEL: '@MedCore_Tibbiyot_Platformasi', DATA_BASE };
const worker = (await import('./worker.js')).default;

function showLast(label) {
  const m = sent[sent.length - 1];
  console.log('\n=== ' + label + ' ===');
  if (!m) { console.log('(javob yo\'q)'); return; }
  console.log('[' + m.method + ']', (m.text || '').split('\n')[0].slice(0, 90));
  (m.buttons || []).forEach(r => console.log('   ', r.join('  |  ')));
}
async function update(u) {
  await worker.fetch(new Request('https://w/', { method: 'POST', body: JSON.stringify(u) }), env);
}
const msg = (text) => ({ message: { message_id: 1, chat: { id: 1 }, from: { id: 1, language_code: 'uz' }, text } });
const cb = (data) => ({ callback_query: { id: 'x', data, from: { id: 1, language_code: 'uz' }, message: { message_id: 1, chat: { id: 1 } } } });

await update(msg('/start'));         showLast('/start');
await update(cb('uz|cats'));         showLast('Dorilar guruhlari');
await update(cb('uz|g:musculoskeletal:0')); showLast('Tayanch-harakat dorilari (1-sahifa)');
// birinchi dorini ochamiz
const firstDrug = (sent[sent.length - 1].buttons[0][0].match(/\[(.+?)\]/) || [])[1];
await update(cb(firstDrug));         showLast('Dori kartasi: ' + firstDrug);
// farmakologiya tugmasi bo'lsa
const pharmaBtn = (sent[sent.length - 1].buttons.flat().find(x => /\[uz\|p:/.test(x)) || '').match(/\[(.+?)\]/);
if (pharmaBtn) { await update(cb(pharmaBtn[1])); showLast('Farmakodinamika'); }
await update(cb('uz|lab'));          showLast('Laboratoriya bo\'limlari');
await update(cb('uz|lc:cbc'));       showLast('CBC ko\'rsatkichlari');
await update(cb('uz|lt:hgb'));       showLast('Gemoglobin kartasi');
await update(cb('uz|lh:hgb'));       showLast('Gemoglobin — yuqori sabablari');
await update(msg('diklofenak'));     showLast('Qidiruv: diklofenak');
await update(cb('ru|home'));         showLast('Til -> RU (home)');

console.log('\nJami yuborilgan xabarlar:', sent.length, '— XATOSIZ ishladi.');
