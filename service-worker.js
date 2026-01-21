self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('schema-v7').then((cache) =>
      cache.addAll(['./', './index.html', './manifest.json']) 
      cache.addAll(['./', './index.html', './manifest.json', './override.css'])                            
    )
  );
});
