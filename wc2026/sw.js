const CACHE_NAME = 'wc2026-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-512.png'
];

// Install and Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch from Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});