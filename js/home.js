$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: true, // Adiciona os círculos de navegação
    autoplay: true,
    navText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
       0: {
          items: 2
       },
       400: {
          items: 3
       },
       800: {
          items: 4
       },
       1000: {
          items: 4
       }
    }
 });
 