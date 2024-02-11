/// <reference lib="WebWorker" />

//? export empty type because of tsc --isolatedModules flag
export type {};
declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = "offline";

const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll([
        "/despachos.json",
        "offline.html",
        new Request(OFFLINE_URL, {
          cache: "reload",
        }),
      ]);
    })(),
  );
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async (): Promise<void> => {
      if ("navigationPreload" in self.registration) {
        console.log(`navigationPreload in ${self.registration}`);
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;

          if (preloadResponse) {
            return preloadResponse;
          }

          const networkResponse = await fetch(event.request);

          return networkResponse;
        } catch (error) {
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);

          const cachedResponse = await cache.match(OFFLINE_URL);

          return cachedResponse;
        }
      })(),
    );
  }
});
