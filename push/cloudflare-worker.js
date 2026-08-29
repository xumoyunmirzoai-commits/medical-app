// ═══════════════════════════════════════════════════════════════
//  MedCore — Push obunalarini saqlovchi Cloudflare Worker
//  Vazifasi: foydalanuvchilar push obunasini saqlash (yagona "ombor").
//  Yuborish ishini GitHub Action `web-push` kutubxonasi orqali bajaradi.
//
//  SOZLASH (bir martalik):
//   1. Cloudflare hisobida KV namespace yarating, nomi: SUBSCRIPTIONS
//   2. Bu Worker'ni deploy qiling, KV binding nomi: SUBS
//   3. Worker Secret qo'shing: ADMIN_KEY = (uzun tasodifiy parol)
//   4. Worker URL'ini index.html dagi PUSH_API ga yozing
//   5. ADMIN_KEY ni GitHub Secrets'ga PUSH_ADMIN_KEY sifatida qo'shing
// ═══════════════════════════════════════════════════════════════

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS }
  });
}

// endpoint'dan barqaror kalit yasash (bir foydalanuvchi = bir yozuv)
async function keyFor(endpoint) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(endpoint));
  return 'sub_' + [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // ── Obuna qo'shish ──
    if (url.pathname === '/subscribe' && request.method === 'POST') {
      try {
        const sub = await request.json();
        if (!sub || !sub.endpoint) return json({ error: 'invalid subscription' }, 400);
        const k = await keyFor(sub.endpoint);
        await env.SUBS.put(k, JSON.stringify(sub));
        return json({ ok: true });
      } catch (e) {
        return json({ error: String(e) }, 400);
      }
    }

    // ── Obunani o'chirish (push 404/410 qaytarsa) ──
    if (url.pathname === '/remove' && request.method === 'POST') {
      try {
        const { endpoint } = await request.json();
        if (!endpoint) return json({ error: 'endpoint required' }, 400);
        await env.SUBS.delete(await keyFor(endpoint));
        return json({ ok: true });
      } catch (e) {
        return json({ error: String(e) }, 400);
      }
    }

    // ── Barcha obunalar ro'yxati (faqat ADMIN_KEY bilan — GitHub Action uchun) ──
    if (url.pathname === '/list' && request.method === 'GET') {
      if (url.searchParams.get('key') !== env.ADMIN_KEY) {
        return json({ error: 'unauthorized' }, 401);
      }
      const out = [];
      let cursor;
      do {
        const page = await env.SUBS.list({ cursor });
        for (const k of page.keys) {
          const v = await env.SUBS.get(k.name);
          if (v) out.push(JSON.parse(v));
        }
        cursor = page.list_complete ? null : page.cursor;
      } while (cursor);
      return json({ count: out.length, subscriptions: out });
    }

    // ── Soni (ochiq) ──
    if (url.pathname === '/count' && request.method === 'GET') {
      const page = await env.SUBS.list();
      return json({ count: page.keys.length });
    }

    return json({ service: 'medcore-push', ok: true });
  }
};
