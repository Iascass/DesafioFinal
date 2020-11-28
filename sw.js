self.addEventListener('install', function(evt){
  console.log('install sw');
})
self.addEventListener('activate', function(evt){
  console.log('active sw');
})
self.addEventListener('fecth', function(evt){
  console.log('fecth sw');
})
