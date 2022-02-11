/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-9dbd5be';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./ezopovy_bajky_002.html","./ezopovy_bajky_005.html","./ezopovy_bajky_006.html","./ezopovy_bajky_007.html","./ezopovy_bajky_008.html","./ezopovy_bajky_009.html","./ezopovy_bajky_010.html","./ezopovy_bajky_011.html","./ezopovy_bajky_012.html","./ezopovy_bajky_013.html","./ezopovy_bajky_014.html","./ezopovy_bajky_015.html","./ezopovy_bajky_016.html","./ezopovy_bajky_017.html","./ezopovy_bajky_018.html","./ezopovy_bajky_019.html","./colophon.html","./ezopovy_bajky_020.html","./ezopovy_bajky_021.html","./ezopovy_bajky_022.html","./ezopovy_bajky_023.html","./ezopovy_bajky_024.html","./ezopovy_bajky_025.html","./ezopovy_bajky_026.html","./ezopovy_bajky_027.html","./ezopovy_bajky_028.html","./ezopovy_bajky_029.html","./ezopovy_bajky_030.html","./ezopovy_bajky_031.html","./ezopovy_bajky_032.html","./ezopovy_bajky_033.html","./ezopovy_bajky_034.html","./ezopovy_bajky_035.html","./ezopovy_bajky_036.html","./ezopovy_bajky_037.html","./ezopovy_bajky_038.html","./ezopovy_bajky_039.html","./ezopovy_bajky_040.html","./ezopovy_bajky_041.html","./ezopovy_bajky_042.html","./ezopovy_bajky_043.html","./ezopovy_bajky_044.html","./ezopovy_bajky_045.html","./ezopovy_bajky_046.html","./ezopovy_bajky_047.html","./ezopovy_bajky_048.html","./ezopovy_bajky_049.html","./ezopovy_bajky_050.html","./ezopovy_bajky_051.html","./ezopovy_bajky_052.html","./ezopovy_bajky_053.html","./ezopovy_bajky_054.html","./ezopovy_bajky_055.html","./ezopovy_bajky_056.html","./ezopovy_bajky_057.html","./ezopovy_bajky_058.html","./ezopovy_bajky_059.html","./ezopovy_bajky_060.html","./ezopovy_bajky_061.html","./ezopovy_bajky_062.html","./ezopovy_bajky_063.html","./ezopovy_bajky_064.html","./ezopovy_bajky_065.html","./ezopovy_bajky_066.html","./ezopovy_bajky_067.html","./ezopovy_bajky_068.html","./ezopovy_bajky_069.html","./ezopovy_bajky_070.html","./ezopovy_bajky_071.html","./ezopovy_bajky_072.html","./ezopovy_bajky_073.html","./ezopovy_bajky_074.html","./ezopovy_bajky_075.html","./ezopovy_bajky_076.html","./ezopovy_bajky_077.html","./ezopovy_bajky_078.html","./ezopovy_bajky_079.html","./ezopovy_bajky_080.html","./ezopovy_bajky_081.html","./ezopovy_bajky_082.html","./ezopovy_bajky_083.html","./ezopovy_bajky_084.html","./ezopovy_bajky_085.html","./ezopovy_bajky_086.html","./ezopovy_bajky_087.html","./ezopovy_bajky_088.html","./ezopovy_bajky_089.html","./ezopovy_bajky_090.html","./ezopovy_bajky_091.html","./ezopovy_bajky_092.html","./ezopovy_bajky_093.html","./ezopovy_bajky_094.html","./ezopovy_bajky_095.html","./ezopovy_bajky_096.html","./ezopovy_bajky_097.html","./ezopovy_bajky_098.html","./ezopovy_bajky_099.html","./ezopovy_bajky_100.html","./ezopovy_bajky_101.html","./ezopovy_bajky_102.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.jpeg","./resources/image002_fmt.jpeg","./resources/obalka_ezopovy_bajky_fmt.jpeg","./resources/upoutavka_eknihy_fmt.jpeg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
