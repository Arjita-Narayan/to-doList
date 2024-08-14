const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "style.css",
  "script.js",
  "sw_cached_pages.js",
  "/images/checked.png",
  "/images/icon.png",
  "/images/unchecked.png",
];

//Call Install Event
self.addEventListener("install", (e) => {
  console.log("Service Worker:Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker:Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", (e) => {
  console.log("Service Worker:Activated");

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker:Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
//Call Fetch Event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker:Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
