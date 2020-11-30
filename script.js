.kitchen-sink-drawer{
  $custom-size: 500px;
  @include bmd-drawer-x-out($custom-size);
  &:not(.bmd-drawer-out){
    @each $breakpoint in map-keys($grid-breakpoints){
      @include bmd-drawer-x-in-up($custom-size, $breakpoint);
    }
  }
}

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
