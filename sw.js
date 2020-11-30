const cacheName="info-v1.2"
const files = [
  '/DesafioFinal/',
  '/DesafioFinal/index.html',
  '/DesafioFinal/style.css',
  '/DesafioFinal/script.js',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css',
  'Imagens/favicon.ico'
]

self.addEventListener('install', function(evt){
  console.log('install sw');
  evt.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log('colocando arquivos no cache')
      cache.addAll(files)
    })
  )


})
self.addEventListener('activate', function(evt){
  console.log('active sw');

  evt.waitUntil(
    caches.keys().then(function(keys) {
      return Promises.all(
        keys.filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      )
    })
  )

})
self.addEventListener('fecth', function(evt){
  console.log('fecth sw');
  evt.respondWith(
    caches.match(evt.request).then(function(res){
      return res || fecth(evt.request)
    })
  )

})
