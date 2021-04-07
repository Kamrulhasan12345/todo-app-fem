const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'styles/style.css',
  'styles/fonts.css',
  'scripts/script.js',
  'images/bg-desktop-dark.jpg',
  'images/bg-desktop-light.jpg',
  'images/bg-mobile-dark.jpg',
  'images/bg-mobile-light.jpg',
  'images/favicon-32x32.png',
  'images/icon-check.svg',
  'images/icon-cross.svg',
  'images/icon-moon.svg',
  'images/icon-sun.svg',
  'fonts/josefin-sans-v17-latin-700.eot',
  'fonts/josefin-sans-v17-latin-700.svg',
  'fonts/josefin-sans-v17-latin-700.ttf',
  'fonts/josefin-sans-v17-latin-700.woff',
  'fonts/josefin-sans-v17-latin-700.woff2',
  'fonts/josefin-sans-v17-latin-regular.eot',
  'fonts/josefin-sans-v17-latin-regular.svg',
  'fonts/josefin-sans-v17-latin-regular.ttf',
  'fonts/josefin-sans-v17-latin-regular.woff',
  'fonts/josefin-sans-v17-latin-regular.woff2'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});