$(document).ready(function () {
    $(".image-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-angle-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-angle-right"></i></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });
  