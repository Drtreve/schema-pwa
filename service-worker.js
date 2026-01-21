self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('schema-v6').then((cache) =>
      cache.addAll(['./', './index.html', './manifest.json']) 
      cache.addAll(['./', './index.html', './manifest.json', './override.css'])                            
    )
  );
});
