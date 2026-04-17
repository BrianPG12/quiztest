const CACHE_NAME = "kana-quiz-v23";
const ASSETS = [
  "/quiztest/",
  "/quiztest/index.html",
  "/quiztest/styles.css",
  "/quiztest/script.js",
  "/quiztest/manifest.webmanifest",
  "/quiztest/icon.svg"
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

  const isAppAsset =
    requestUrl.pathname.startsWith("/quiztest/") ||
    requestUrl.pathname === "/quiztest" ||
    requestUrl.pathname === "/";

  if (!isAppAsset) {
    return;
  }

  const isNavigationRequest = event.request.mode === "navigate";

  // For page navigations, prefer network so layout HTML updates are picked up immediately.
  if (isNavigationRequest) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put("/quiztest/index.html", responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match("/quiztest/index.html"))
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
        .catch(() => caches.match("/quiztest/index.html"));
    })
  );
});
