$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
