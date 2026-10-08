const VERSION = 'v2';
const CACHE = `matematika-sma-${VERSION}`;
const CACHE_PREFIX = 'matematika-sma-';

// Base diturunkan dari scope registrasi agar tetap benar di bawah subpath.
function resolveBase() {
  const scope = self.registration && self.registration.scope;
  if (scope) return scope.endsWith('/') ? scope : `${scope}/`;
  const path = self.location.pathname;
  return path.slice(0, path.lastIndexOf('/') + 1);
}

const BASE = resolveBase();
const OFFLINE_URL = `${BASE}offline.html`;
const PRECACHE = [BASE, OFFLINE_URL, `${BASE}manifest.webmanifest`, `${BASE}favicon.svg`];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        Promise.all(
          PRECACHE.map((url) =>
            cache.add(new Request(url, { cache: 'reload' })).catch(() => undefined),
          ),
        ),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function networkFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = (await cache.match(request)) || (await cache.match(request, { ignoreSearch: true }));
    if (cached) return cached;
    const fallback = await cache.match(fallbackUrl);
    if (fallback) return fallback;
    throw error;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => undefined);
  if (cached) return cached;
  const response = await network;
  if (response) return response;
  throw new Error('offline');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, OFFLINE_URL));
    return;
  }

  // Aset ber-hash tidak akan berubah: layani dari cache lebih dulu.
  if (url.pathname.includes('/_astro/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
