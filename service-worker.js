self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('schema-v1').then(cache =>
      cache.addAll(['./', './index.html'])
    )
  );
});
