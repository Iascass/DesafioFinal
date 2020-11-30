

function shareImage(titulo, texto, url) {
  if (navigator.share) {
    navigator.share({
      title: titutlo,
      text: texto,
      url: url,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
