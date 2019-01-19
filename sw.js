self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
      'index.html',
'left-sidebar.html',
'no-sidebar.html',
'right-sidebar.html',
'/assets/css/font-awesome.min.css',
'/assets/css/images/bg02.jpg',
'/assets/css/images/bg02.png',
'/assets/css/main.css',
'/assets/fonts/fontawesome-webfont.eot',
'/assets/fonts/fontawesome-webfont.svg',
'/assets/fonts/fontawesome-webfont.ttf',
'/assets/fonts/fontawesome-webfont.woff',
'/assets/fonts/fontawesome-webfont.woff2',
'/assets/fonts/FontAwesome.otf',
'/assets/js/breakpoints.min.js',
'/assets/js/browser.min.js',
'/assets/js/jquery.dropotron.min.js',
'/assets/js/jquery.min.js',
'/assets/js/main.js',
'/assets/js/util.js',
'/assets/sass/libs/_breakpoints.scss',
'/assets/sass/libs/_functions.scss',
'/assets/sass/libs/_html-grid.scss',
'/assets/sass/libs/_mixins.scss',
'/assets/sass/libs/_vars.scss',
'/assets/sass/libs/_vendor.scss',
'/assets/sass/main.scss',
'/images/pic01.jpg',
'/images/pic02.jpg',
'/images/pic03.jpg',
'/images/pic04.jpg',
'/images/pic05.jpg',
'/images/pic06.jpg',
'/images/pic07.jpg',
'/images/logo.png',

     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
