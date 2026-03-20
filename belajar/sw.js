// ============================================================
//  sw.js — BelajarCeria Service Worker
//  Strategi:
//    • Static assets  → Cache First  (offline-ready)
//    • Google Fonts   → Network First, fallback ke cache
//    • Chart.js CDN   → Cache First  (versi pin ke cache-name)
//  Cache: 'belajarceria-v1'
// ============================================================

const CACHE_NAME    = 'belajarceria-v1';
const FONT_CACHE    = 'belajarceria-fonts-v1';

// ── Aset yang di-pre-cache saat install ───────────────────────
const STATIC_ASSETS = [
  '/belajar/',
  '/belajar/index.html',
  '/belajar/style.css',
  '/belajar/app.js',
  '/belajar/data.js',
  '/belajar/manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js',
];

// ── Origin yang dianggap "font" (network-first) ───────────────
const FONT_ORIGINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
];

// ── Helper: apakah URL termasuk font? ─────────────────────────
function isFontRequest(url) {
  return FONT_ORIGINS.some(origin => url.startsWith(origin));
}

// ── Helper: apakah URL termasuk aset statis kita? ─────────────
function isStaticAsset(url) {
  // File milik app (same-origin) atau Chart.js CDN
  const appOrigins = [
    self.location.origin,
    'https://cdn.jsdelivr.net',
  ];
  return appOrigins.some(o => url.startsWith(o));
}

// ============================================================
//  EVENT: install — pre-cache semua aset statis
// ============================================================
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-caching static assets…');
        // addAll gagal total jika satu URL error —
        // pakai Promise.allSettled agar CDN yang timeout tidak blokir install
        return Promise.allSettled(
          STATIC_ASSETS.map(url =>
            cache.add(url).catch(err =>
              console.warn(`[SW] Failed to cache ${url}:`, err)
            )
          )
        );
      })
      .then(() => {
        console.log('[SW] Install complete — skipping waiting');
        return self.skipWaiting();   // aktifkan SW baru segera
      })
  );
});

// ============================================================
//  EVENT: activate — hapus cache lama
// ============================================================
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== FONT_CACHE)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => {
      console.log('[SW] Activated — claiming clients');
      return self.clients.claim();   // ambil alih tab yang sudah terbuka
    })
  );
});

// ============================================================
//  EVENT: fetch — routing strategi
// ============================================================
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = request.url;

  // Abaikan non-GET dan chrome-extension
  if (request.method !== 'GET') return;
  if (url.startsWith('chrome-extension://')) return;

  // ── Strategi A: Network First untuk Google Fonts ──────────
  if (isFontRequest(url)) {
    event.respondWith(networkFirstFont(request));
    return;
  }

  // ── Strategi B: Cache First untuk aset statis ─────────────
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // ── Default: network saja (tidak di-cache) ─────────────────
  // (misalnya analytics, API eksternal lain)
});

// ============================================================
//  STRATEGI: Cache First
//  Cek cache → ada? kembalikan. Tidak? fetch → simpan ke cache.
// ============================================================
async function cacheFirst(request) {
  const cached = await caches.match(request, { ignoreSearch: false });
  if (cached) return cached;

  try {
    const response = await fetch(request);
    // Hanya cache response yang valid (status 200, bukan opaque error)
    if (response && response.status === 200 && response.type !== 'error') {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline dan tidak ada cache — kembalikan halaman offline fallback
    const fallback = await caches.match('/index.html');
    return fallback || new Response('Offline', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

// ============================================================
//  STRATEGI: Network First (untuk Font)
//  Coba ambil dari jaringan → berhasil? update cache.
//  Gagal (offline)? kembalikan dari cache font.
// ============================================================
async function networkFirstFont(request) {
  const fontCache = await caches.open(FONT_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      fontCache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await fontCache.match(request);
    if (cached) return cached;
    // Font tidak tersedia offline — browser akan fallback ke system font
    return new Response('', { status: 408 });
  }
}

// ============================================================
//  MESSAGE: skip waiting dari halaman (untuk update segera)
// ============================================================
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
