self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('schema-v3').then((cache) =>
      cache.addAll(['./', './index.html', './manifest.json'])
    )
  );
});

