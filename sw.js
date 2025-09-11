const CACHE_NAME = 'elena-velas-v1';
const urlsToCache = [
  '/',
  '/mobile.html',
  '/assets/logo.png',
  '/css/style.css',
  '/js/script.js',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - devolver respuesta
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Notificaciones push
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : '¡Nueva promoción disponible!',
    icon: 'assets/logo.png',
    badge: 'assets/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver promoción',
        icon: 'assets/logo.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: 'assets/logo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Elena Velas y Aromas', options)
  );
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/mobile.html')
    );
  }
});
