var favoritesSlider = new Swiper(".swiper-container", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".kk-favorites__button-next",
    prevEl: ".kk-favorites__button-prev",
  },
});

var bestsellersSlider = new Swiper(".kk-bestsellers__slider", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".kk-bestsellers__button-next",
    prevEl: ".kk-bestsellers__button-prev",
  },
});

var mainSlider = new Swiper(".main-slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 12,
  navigation: {
    nextEl: ".kk-bestsellers__button-next",
    prevEl: ".kk-bestsellers__button-prev",
  },
});
