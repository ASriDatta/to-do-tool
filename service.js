var cachename = 'to do list app';
var offlineassets =[
        'index.html',
        'assets/todo.css',
        'assets/todo.js',
        'lib/Bootstrap/bootstrap.min.css',
        'lib/Bootstrap/bootstrap.min.js',
        'lib/jQuery/jquery.min.js',
        'lib/jQuery/jquery.ui.min.css'
        'lib/jQuery/jquery.ui.min.js'
    ]
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  console.log("done");
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.respondWith(cache.match('index.html'));
});
self.addEventListener('fetch', event => {
  event.respondWith(cache.match(event.request.url))
});