var favoritesSlider = new Swiper(".kk-favorites", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".kk-favorites__button-next",
    prevEl: ".kk-favorites__button-prev",
  },
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var bestsellersSlider = new Swiper(".kk-bestsellers__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".kk-bestsellers__button-next",
    prevEl: ".kk-bestsellers__button-prev",
  },
  mousewheel: {
    forceToAxis: true,
  },
});

var mainSlider = new Swiper(".main-slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 12,
  navigation: {
    nextEl: ".kk-mainslider__button-next",
    prevEl: ".kk-mainslider__button-prev",
  },
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
