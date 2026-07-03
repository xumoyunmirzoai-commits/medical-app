// ═══════════════════════════════════════════════════════════
//  MedCore — Jamiyat (Social) Worker  [Cloudflare Workers + D1]
//  Profil, obuna (follow), postlar (YouTube video / material havola),
//  like, komment va shaxsiy chat. Bepul rejada (D1, polling).
//
//  Sozlash:
//    [[d1_databases]] binding = DB
//    GOOGLE_CLIENT_ID (var), ALLOWED_ORIGINS (var)
//    SESSION_SECRET (secret), BOT_TOKEN (secret, Telegram login uchun)
// ═══════════════════════════════════════════════════════════

const enc = new TextEncoder();
const b64url = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64urlStr = s => b64url(enc.encode(s));
function b64urlDecode(s) { s = s.replace(/-/g, '+').replace(/_/g, '/'); return atob(s); }
const uid = () => (Date.now().toString(36) + Math.random().toString(36).slice(2, 9));
const now = () => Date.now();
const clip = (s, n) => { s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n) : s; };

// ── HMAC sessiya tokeni ──
async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
async function makeToken(env, userId) {
  const payload = JSON.stringify({ u: userId, e: now() + 30 * 864e5 }); // 30 kun
  const p = b64urlStr(payload);
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(env.SESSION_SECRET), enc.encode(p));
  return p + '.' + b64url(sig);
}
async function verifyToken(env, token) {
  if (!token || token.indexOf('.') < 0) return null;
  const [p, sig] = token.split('.');
  try {
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(env.SESSION_SECRET),
      Uint8Array.from(b64urlDecode(sig), c => c.charCodeAt(0)), enc.encode(p));
    if (!ok) return null;
    const data = JSON.parse(b64urlDecode(p));
    if (!data.e || data.e < now()) return null;
    return data.u;
  } catch (e) { return null; }
}

// ── Provayderlarni tekshirish ──
async function verifyGoogle(env, idToken) {
  try {
    const r = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken));
    if (!r.ok) return null;
    const j = await r.json();
    if (env.GOOGLE_CLIENT_ID && j.aud !== env.GOOGLE_CLIENT_ID) return null;
    if (!j.sub) return null;
    return { id: 'google:' + j.sub, email: j.email || '', name: j.name || j.email || 'Foydalanuvchi', avatar: j.picture || '' };
  } catch (e) { return null; }
}
async function verifyTelegram(env, initData) {
  try {
    if (!env.BOT_TOKEN) return null;
    const params = new URLSearchParams(initData);
    const hash = params.get('hash'); params.delete('hash');
    const dcs = [...params.entries()].map(([k, v]) => k + '=' + v).sort().join('\n');
    const secret = await crypto.subtle.sign('HMAC', await hmacKey('WebAppData'), enc.encode(env.BOT_TOKEN));
    const key = await crypto.subtle.importKey('raw', secret, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const mac = await crypto.subtle.sign('HMAC', key, enc.encode(dcs));
    const hex = [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, '0')).join('');
    if (hex !== hash) return null;
    const u = JSON.parse(params.get('user') || '{}');
    if (!u.id) return null;
    return { id: 'tg:' + u.id, email: '', name: [u.first_name, u.last_name].filter(Boolean).join(' ') || u.username || 'Telegram', avatar: u.photo_url || '' };
  } catch (e) { return null; }
}

// ── CORS ──
function cors(env, origin) {
  const allow = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  const ok = origin && allow.includes(origin);
  return { 'Access-Control-Allow-Origin': ok ? origin : (allow[0] || '*'), 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type,Authorization', 'Access-Control-Max-Age': '86400', 'Vary': 'Origin' };
}
const J = (obj, h, status = 200) => new Response(JSON.stringify(obj), { status, headers: { ...h, 'content-type': 'application/json' } });

// ── DB yordamchilar ──
async function upsertUser(env, u) {
  const ex = await env.DB.prepare('SELECT id FROM users WHERE id=?').bind(u.id).first();
  if (ex) {
    await env.DB.prepare('UPDATE users SET name=?, avatar=?, email=? WHERE id=?').bind(u.name, u.avatar, u.email, u.id).run();
  } else {
    await env.DB.prepare('INSERT INTO users(id,email,name,avatar,bio,created) VALUES(?,?,?,?,?,?)').bind(u.id, u.email, u.name, u.avatar, '', now()).run();
  }
  return env.DB.prepare('SELECT id,email,name,avatar,bio,created FROM users WHERE id=?').bind(u.id).first();
}

async function postView(env, row, me) {
  const likes = (await env.DB.prepare('SELECT COUNT(*) c FROM likes WHERE post_id=?').bind(row.id).first()).c;
  const comments = (await env.DB.prepare('SELECT COUNT(*) c FROM comments WHERE post_id=?').bind(row.id).first()).c;
  let liked = false;
  if (me) liked = !!(await env.DB.prepare('SELECT 1 FROM likes WHERE post_id=? AND user_id=?').bind(row.id, me).first());
  const a = await env.DB.prepare('SELECT id,name,avatar FROM users WHERE id=?').bind(row.author_id).first();
  return { ...row, author: a || { id: row.author_id, name: '—', avatar: '' }, likes, comments, liked };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const H = cors(env, origin);
    if (request.method === 'OPTIONS') return new Response(null, { headers: H });
    if (request.method === 'GET' && url.pathname === '/') return new Response('MedCore Social OK', { headers: H });

    const seg = url.pathname.split('/').filter(Boolean);
    const auth = request.headers.get('Authorization') || '';
    const me = await verifyToken(env, auth.replace(/^Bearer\s+/i, ''));
    const body = async () => { try { return await request.json(); } catch { return {}; } };
    const need = () => me ? null : J({ error: 'auth' }, H, 401);

    try {
      // ── Sessiya ochish ──
      if (request.method === 'POST' && seg[0] === 'auth' && seg[1] === 'session') {
        const b = await body();
        let prof = null;
        if (b.provider === 'google' && b.id_token) prof = await verifyGoogle(env, b.id_token);
        else if (b.provider === 'telegram' && b.initData) prof = await verifyTelegram(env, b.initData);
        if (!prof) return J({ error: 'invalid_credentials' }, H, 401);
        const user = await upsertUser(env, prof);
        const token = await makeToken(env, user.id);
        return J({ token, user }, H);
      }

      // ── Men ──
      if (seg[0] === 'me') {
        if (need()) return need();
        if (request.method === 'GET') return J({ user: await env.DB.prepare('SELECT id,email,name,avatar,bio,created FROM users WHERE id=?').bind(me).first() }, H);
        if (request.method === 'PUT') {
          const b = await body();
          await env.DB.prepare('UPDATE users SET name=COALESCE(?,name), bio=COALESCE(?,bio), avatar=COALESCE(?,avatar) WHERE id=?')
            .bind(b.name != null ? clip(b.name, 80) : null, b.bio != null ? clip(b.bio, 500) : null, b.avatar != null ? clip(b.avatar, 500) : null, me).run();
          return J({ user: await env.DB.prepare('SELECT id,email,name,avatar,bio,created FROM users WHERE id=?').bind(me).first() }, H);
        }
      }

      // ── Odamlar (kashf etish / qidiruv) ──
      if (seg[0] === 'people' && request.method === 'GET') {
        const q = (url.searchParams.get('q') || '').trim().toLowerCase();
        let rows;
        if (q) rows = (await env.DB.prepare("SELECT id,name,avatar,bio FROM users WHERE lower(name) LIKE ?1 ORDER BY created DESC LIMIT 40").bind('%' + q + '%').all()).results;
        else rows = (await env.DB.prepare('SELECT id,name,avatar,bio FROM users ORDER BY created DESC LIMIT 40').all()).results;
        const out = [];
        for (const u of rows) {
          if (u.id === me) continue;
          const followers = (await env.DB.prepare('SELECT COUNT(*) c FROM follows WHERE target_id=?').bind(u.id).first()).c;
          let isFollowing = false;
          if (me) isFollowing = !!(await env.DB.prepare('SELECT 1 FROM follows WHERE follower_id=? AND target_id=?').bind(me, u.id).first());
          out.push({ ...u, followers, isFollowing });
        }
        return J({ people: out }, H);
      }

      // ── Profil ko'rish ──
      if (seg[0] === 'users' && seg[1]) {
        const id = decodeURIComponent(seg[1]);
        const u = await env.DB.prepare('SELECT id,name,avatar,bio,created FROM users WHERE id=?').bind(id).first();
        if (!u) return J({ error: 'not_found' }, H, 404);
        const followers = (await env.DB.prepare('SELECT COUNT(*) c FROM follows WHERE target_id=?').bind(id).first()).c;
        const following = (await env.DB.prepare('SELECT COUNT(*) c FROM follows WHERE follower_id=?').bind(id).first()).c;
        const posts = (await env.DB.prepare('SELECT COUNT(*) c FROM posts WHERE author_id=?').bind(id).first()).c;
        let isFollowing = false;
        if (me) isFollowing = !!(await env.DB.prepare('SELECT 1 FROM follows WHERE follower_id=? AND target_id=?').bind(me, id).first());
        return J({ user: u, followers, following, posts, isFollowing }, H);
      }

      // ── Obuna ──
      if (seg[0] === 'follow' && seg[1]) {
        if (need()) return need();
        const target = decodeURIComponent(seg[1]);
        if (target === me) return J({ error: 'self' }, H, 400);
        if (request.method === 'POST') { await env.DB.prepare('INSERT OR IGNORE INTO follows(follower_id,target_id,created) VALUES(?,?,?)').bind(me, target, now()).run(); return J({ ok: true, following: true }, H); }
        if (request.method === 'DELETE') { await env.DB.prepare('DELETE FROM follows WHERE follower_id=? AND target_id=?').bind(me, target).run(); return J({ ok: true, following: false }, H); }
      }

      // ── Lenta ──
      if (seg[0] === 'feed' && request.method === 'GET') {
        const scope = url.searchParams.get('scope') || 'all';
        let rows;
        if (scope === 'following' && me) {
          rows = (await env.DB.prepare('SELECT * FROM posts WHERE author_id IN (SELECT target_id FROM follows WHERE follower_id=?) OR author_id=? ORDER BY created DESC LIMIT 40').bind(me, me).all()).results;
        } else {
          rows = (await env.DB.prepare('SELECT * FROM posts ORDER BY created DESC LIMIT 40').all()).results;
        }
        const out = []; for (const r of rows) out.push(await postView(env, r, me));
        return J({ posts: out }, H);
      }

      // ── Kanal (foydalanuvchi postlari) ──
      if (seg[0] === 'channel' && seg[1] && request.method === 'GET') {
        const id = decodeURIComponent(seg[1]);
        const rows = (await env.DB.prepare('SELECT * FROM posts WHERE author_id=? ORDER BY created DESC LIMIT 60').bind(id).all()).results;
        const out = []; for (const r of rows) out.push(await postView(env, r, me));
        return J({ posts: out }, H);
      }

      // ── Postlar ──
      if (seg[0] === 'posts') {
        if (!seg[1] && request.method === 'POST') {
          if (need()) return need();
          const b = await body();
          const type = b.type === 'material' ? 'material' : 'video';
          const title = clip((b.title || '').trim(), 160);
          if (!title) return J({ error: 'title_required' }, H, 400);
          let yt_id = null, link = null, thumb = b.thumb || '';
          if (type === 'video') {
            yt_id = extractYT(b.yt_id || b.link || '');
            if (!yt_id) return J({ error: 'bad_youtube' }, H, 400);
            thumb = 'https://i.ytimg.com/vi/' + yt_id + '/hqdefault.jpg';
          } else {
            link = clip((b.link || '').trim(), 800);
            if (!/^https?:\/\//i.test(link)) return J({ error: 'bad_link' }, H, 400);
          }
          const id = uid();
          await env.DB.prepare('INSERT INTO posts(id,author_id,type,title,descr,yt_id,link,thumb,tag,created) VALUES(?,?,?,?,?,?,?,?,?,?)')
            .bind(id, me, type, title, clip(b.descr || '', 4000), yt_id, link, thumb, clip(b.tag || '', 40), now()).run();
          const row = await env.DB.prepare('SELECT * FROM posts WHERE id=?').bind(id).first();
          return J({ post: await postView(env, row, me) }, H);
        }
        if (seg[1] && !seg[2]) {
          const row = await env.DB.prepare('SELECT * FROM posts WHERE id=?').bind(seg[1]).first();
          if (!row) return J({ error: 'not_found' }, H, 404);
          if (request.method === 'GET') return J({ post: await postView(env, row, me) }, H);
          if (request.method === 'DELETE') { if (need()) return need(); if (row.author_id !== me) return J({ error: 'forbidden' }, H, 403); await env.DB.prepare('DELETE FROM posts WHERE id=?').bind(seg[1]).run(); await env.DB.prepare('DELETE FROM likes WHERE post_id=?').bind(seg[1]).run(); await env.DB.prepare('DELETE FROM comments WHERE post_id=?').bind(seg[1]).run(); return J({ ok: true }, H); }
        }
        // like
        if (seg[1] && seg[2] === 'like') {
          if (need()) return need();
          if (request.method === 'POST') { await env.DB.prepare('INSERT OR IGNORE INTO likes(user_id,post_id,created) VALUES(?,?,?)').bind(me, seg[1], now()).run(); }
          if (request.method === 'DELETE') { await env.DB.prepare('DELETE FROM likes WHERE user_id=? AND post_id=?').bind(me, seg[1]).run(); }
          const c = (await env.DB.prepare('SELECT COUNT(*) c FROM likes WHERE post_id=?').bind(seg[1]).first()).c;
          return J({ likes: c, liked: request.method === 'POST' }, H);
        }
        // comments
        if (seg[1] && seg[2] === 'comments') {
          if (request.method === 'GET') {
            const rows = (await env.DB.prepare('SELECT c.id,c.text,c.created,u.id uid,u.name,u.avatar FROM comments c LEFT JOIN users u ON u.id=c.author_id WHERE c.post_id=? ORDER BY c.created DESC LIMIT 200').bind(seg[1]).all()).results;
            return J({ comments: rows.map(r => ({ id: r.id, text: r.text, created: r.created, author: { id: r.uid, name: r.name, avatar: r.avatar } })) }, H);
          }
          if (request.method === 'POST') {
            if (need()) return need();
            const b = await body(); const text = clip((b.text || '').trim(), 2000);
            if (!text) return J({ error: 'empty' }, H, 400);
            const id = uid();
            await env.DB.prepare('INSERT INTO comments(id,post_id,author_id,text,created) VALUES(?,?,?,?,?)').bind(id, seg[1], me, text, now()).run();
            const u = await env.DB.prepare('SELECT id,name,avatar FROM users WHERE id=?').bind(me).first();
            return J({ comment: { id, text, created: now(), author: u } }, H);
          }
        }
      }

      // ── Chat: suhbatlar ro'yxati ──
      if (seg[0] === 'threads' && request.method === 'GET') {
        if (need()) return need();
        const rows = (await env.DB.prepare(
          `SELECT other, MAX(created) last FROM (
             SELECT to_id other, created FROM messages WHERE from_id=?1
             UNION ALL SELECT from_id other, created FROM messages WHERE to_id=?1
           ) GROUP BY other ORDER BY last DESC LIMIT 50`).bind(me).all()).results;
        const out = [];
        for (const r of rows) {
          const u = await env.DB.prepare('SELECT id,name,avatar FROM users WHERE id=?').bind(r.other).first();
          const lastMsg = await env.DB.prepare('SELECT text,from_id,created FROM messages WHERE (from_id=?1 AND to_id=?2) OR (from_id=?2 AND to_id=?1) ORDER BY created DESC LIMIT 1').bind(me, r.other).first();
          const unread = (await env.DB.prepare('SELECT COUNT(*) c FROM messages WHERE from_id=? AND to_id=? AND seen=0').bind(r.other, me).first()).c;
          out.push({ user: u || { id: r.other, name: '—' }, last: lastMsg, unread });
        }
        return J({ threads: out }, H);
      }
      // ── Chat: suhbat / yuborish ──
      if (seg[0] === 'messages' && seg[1]) {
        if (need()) return need();
        const other = decodeURIComponent(seg[1]);
        if (request.method === 'GET') {
          const rows = (await env.DB.prepare('SELECT id,from_id,to_id,text,created,seen FROM messages WHERE (from_id=?1 AND to_id=?2) OR (from_id=?2 AND to_id=?1) ORDER BY created ASC LIMIT 300').bind(me, other).all()).results;
          await env.DB.prepare('UPDATE messages SET seen=1 WHERE from_id=? AND to_id=? AND seen=0').bind(other, me).run();
          return J({ messages: rows }, H);
        }
        if (request.method === 'POST') {
          const b = await body(); const text = clip((b.text || '').trim(), 4000);
          if (!text) return J({ error: 'empty' }, H, 400);
          const partner = await env.DB.prepare('SELECT id FROM users WHERE id=?').bind(other).first();
          if (!partner) return J({ error: 'no_user' }, H, 404);
          const id = uid();
          await env.DB.prepare('INSERT INTO messages(id,from_id,to_id,text,created,seen) VALUES(?,?,?,?,?,0)').bind(id, me, other, text, now()).run();
          return J({ message: { id, from_id: me, to_id: other, text, created: now(), seen: 0 } }, H);
        }
      }
      // ── O'qilmagan xabarlar soni (bildirishnoma) ──
      if (seg[0] === 'unread' && request.method === 'GET') {
        if (need()) return need();
        const c = (await env.DB.prepare('SELECT COUNT(*) c FROM messages WHERE to_id=? AND seen=0').bind(me).first()).c;
        return J({ unread: c }, H);
      }

      return J({ error: 'not_found' }, H, 404);
    } catch (e) {
      return J({ error: 'server', detail: String(e && e.message || e) }, H, 500);
    }
  }
};

// YouTube id ni havoladan ajratish
function extractYT(s) {
  s = (s || '').trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  const m = s.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
