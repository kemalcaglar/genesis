var css = `<style>.last-look-titresim {
    animation: animasyonAdi 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes animasyonAdi {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }</style>
  `
  jQuery("head").append(css);
  
setInterval(() => {
        jQuery("#last-look_kulakcik").addClass("last-look-titresim");
}, 10000); 
setInterval(() => {
    jQuery("#last-look_kulakcik").removeClass("last-look-titresim");
}, 11000);