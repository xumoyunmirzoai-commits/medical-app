// ═══════════════════════════════════════════
//  MedCore — Service Worker (PWA + Push)
//  Offline rejimida ishlash + Bildirishnomalar
// ═══════════════════════════════════════════

// VAPID ochiq kalit (pushsubscriptionchange uchun) — index.html dagi bilan bir xil
const VAPID_PUBLIC_KEY = 'BJGIrkQeyTx2miUTO67BHbnUgS4v6wyOg6Gkmf8O_OyTF_o3o4iMEHR1syvfduGQo6vKxr8BemN1YndGAn5En5I';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

const CACHE_NAME = 'medcore-v3';
const ASSETS = [
  './',
  './index.html',
  './login.html',
  './style.css',
  './auth.css',
  './app.js',
  './auth.js',
  './i18n.js',
  './data.js',
  './pharma_data.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
];

// ── Install — cache all assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('SW: Ba\'zi assetlar keshlashda xato:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Activate — clean old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch — network first, fallback to cache ──
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('accounts.google.com') ||
      event.request.url.includes('googleapis.com/oauth2')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// ── Push Notification handler ──
self.addEventListener('push', event => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'MedCore', body: event.data ? event.data.text() : 'Yangilanish bor!' };
  }

  const title   = data.title   || '🏥 MedCore';
  const options = {
    body:    data.body    || data.message || 'Yangi ma\'lumotlar qo\'shildi.',
    icon:    data.icon    || '/medical-app/icons/icon-192x192.png',
    badge:   data.badge   || '/medical-app/icons/icon-72x72.png',
    image:   data.image   || null,
    tag:     data.tag     || 'medcore-update',
    renotify: true,
    requireInteraction: false,
    vibrate: [200, 100, 200],
    data: {
      url: data.url || 'https://xumoyunmirzoai-commits.github.io/medical-app/'
    },
    actions: [
      { action: 'open',    title: '📖 Ochish' },
      { action: 'dismiss', title: 'Yopish'  }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// ── Notification click handler ──
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const url = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : 'https://xumoyunmirzoai-commits.github.io/medical-app/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Agar ilova allaqachon ochiq bo'lsa — fokusga o'tkazish
        for (const client of clientList) {
          if (client.url.includes('medical-app') && 'focus' in client) {
            return client.focus();
          }
        }
        // Yangi oyna ochish
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});

// ── Push subscription change handler ──
self.addEventListener('pushsubscriptionchange', event => {
  event.waitUntil(
    self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    })
  );
});
