// ═══════════════════════════════════════════
//  MedCore — Service Worker (PWA)
//  Offline rejimida ishlash uchun
// ═══════════════════════════════════════════

const CACHE_NAME = 'medcore-v1';
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

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('SW: Ba\'zi assetlar keshlashda xato:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip Google APIs (auth)
  if (event.request.url.includes('accounts.google.com') ||
      event.request.url.includes('googleapis.com/oauth2')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache fresh responses
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Network failed — use cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
