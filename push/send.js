// ═══════════════════════════════════════════════════════════════
//  MedCore — Web Push yuboruvchi (GitHub Action ichida ishlaydi)
//  Cloudflare Worker'dan obunalarni oladi va web-push bilan yuboradi.
//
//  Kerakli muhit o'zgaruvchilari (GitHub Secrets):
//   VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT (mailto:...)
//   PUSH_API   — Cloudflare Worker URL
//   PUSH_ADMIN_KEY — Worker ADMIN_KEY
//   NOTIF_TITLE, NOTIF_BODY — xabar matni
// ═══════════════════════════════════════════════════════════════

const webpush = require('web-push');

const {
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY,
  VAPID_SUBJECT = 'mailto:admin@medcore.uz',
  PUSH_API,
  PUSH_ADMIN_KEY,
  NOTIF_TITLE = 'MedCore yangilandi',
  NOTIF_BODY = 'Yangi maʼlumotlar qoʼshildi.'
} = process.env;

function need(name, val) {
  if (!val) { console.error(`❌ ${name} sozlanmagan (GitHub Secrets'ni tekshiring)`); process.exit(1); }
}
need('VAPID_PUBLIC_KEY', VAPID_PUBLIC_KEY);
need('VAPID_PRIVATE_KEY', VAPID_PRIVATE_KEY);
need('PUSH_API', PUSH_API);
need('PUSH_ADMIN_KEY', PUSH_ADMIN_KEY);

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const base = PUSH_API.replace(/\/$/, '');

const payload = JSON.stringify({
  title: NOTIF_TITLE,
  body: NOTIF_BODY,
  url: 'https://xumoyunmirzoai-commits.github.io/medical-app/',
  icon: 'https://xumoyunmirzoai-commits.github.io/medical-app/icons/icon-192x192.png',
  badge: 'https://xumoyunmirzoai-commits.github.io/medical-app/icons/icon-72x72.png',
  tag: 'medcore-update'
});

(async () => {
  // 1. Obunalarni Worker'dan olish
  const res = await fetch(`${base}/list?key=${encodeURIComponent(PUSH_ADMIN_KEY)}`);
  if (!res.ok) { console.error(`❌ /list xatosi: HTTP ${res.status}`); process.exit(1); }
  const { subscriptions = [] } = await res.json();
  console.log(`📋 ${subscriptions.length} ta obuna topildi`);
  if (subscriptions.length === 0) { console.log('Hech kim obuna boʼlmagan — yuborilmadi.'); return; }

  let ok = 0, gone = 0, failed = 0;

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(sub, payload, { TTL: 86400 });
      ok++;
    } catch (err) {
      const code = err.statusCode;
      if (code === 404 || code === 410) {
        // Obuna eskirgan — Worker'dan o'chirish
        gone++;
        try {
          await fetch(`${base}/remove`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ endpoint: sub.endpoint })
          });
        } catch (_) {}
      } else {
        failed++;
        console.warn(`⚠️  Yuborish xatosi (HTTP ${code || '?'})`);
      }
    }
  }

  console.log(`✅ Yuborildi: ${ok} | 🗑️ Eskirgan oʼchirildi: ${gone} | ❌ Xato: ${failed}`);
  if (ok === 0 && failed > 0) process.exit(1);
})().catch(e => { console.error('❌ Umumiy xato:', e); process.exit(1); });
