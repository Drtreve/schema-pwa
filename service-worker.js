self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('schema-v5').then((cache) =>
      cache.addAll(['./', './index.html', './manifest.json'])
    )
  );
});
