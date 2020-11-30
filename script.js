function shareImage(titulo, texto, url) {
  if (navigator.share) {
    navigator.share({
      title: titutlo,
      text: texto,
      url: url
    })
      .then(() => console.log('Compartilhamento com sucesso'))
      .catch((error) => console.log('Erro ao compartilhar', error));
  }
}
