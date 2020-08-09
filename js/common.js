var favoritesSlider = new Swiper(".kk-favorites__slider", {
  slidesPerView: 4,
  spaceBetween: 16,

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
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 4,
    },
  },
});

var bestsellersSlider = new Swiper(".kk-bestsellers__slider", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".kk-bestsellers__button-next",
    prevEl: ".kk-bestsellers__button-prev",
  },
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 4,
    },
  },
});

var mainSlider = new Swiper(".main-slider", {
  slidesPerView: "2",
  spaceBetween: 12,
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
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    767: {
      // slidesPerView: 4,
      slidesPerView: "auto",
    },
  },
});

// document.getElementById("mobileButton").onclick = function () {
//   document.getElementById("kkNav").classList.add("active");
// };
// document.getElementById("closeNav").onclick = function () {
//   document.getElementById("kkNav").classList.remove("active");
// };

/* Mobile hamburger button animation + open mobile menu */
$("#mobileMenu").click(function () {
  $(this).find(".menu-bars").toggleClass("menu-bars_open");
  $("#kkNav").toggleClass("active");
  $("body").toggleClass("overflow");
});
