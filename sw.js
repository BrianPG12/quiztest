const CACHE_NAME = "kana-quiz-v38";
const SCOPE_URL = new URL(self.registration.scope);
const BASE_PATH = SCOPE_URL.pathname.endsWith("/") ? SCOPE_URL.pathname : `${SCOPE_URL.pathname}/`;
const INDEX_PATH = `${BASE_PATH}index.html`;
const ASSETS = [
  BASE_PATH,
  INDEX_PATH,
  `${BASE_PATH}styles.css`,
  `${BASE_PATH}script.js`,
  `${BASE_PATH}manifest.webmanifest`,
  `${BASE_PATH}icon.svg`
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  if (!isSameOrigin) {
    return;
  }

  const isAppAsset = requestUrl.pathname.startsWith(BASE_PATH) || requestUrl.pathname === "/";

  if (!isAppAsset) {
    return;
  }

  const isNavigationRequest = event.request.mode === "navigate";
  const isVersionedAsset = requestUrl.searchParams.has("v");

  // For page navigations, prefer network so layout HTML updates are picked up immediately.
  if (isNavigationRequest) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(INDEX_PATH, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(INDEX_PATH))
    );
    return;
  }

  // Versioned assets should prefer network so UI updates land quickly on mobile.
  if (isVersionedAsset) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match(INDEX_PATH)))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(INDEX_PATH));
    })
  );
});
