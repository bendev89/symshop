/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.scss";
// import "./js/main";
// import "./js/vendor/jquery-3.5.1.min";

// You can specify which plugins you need
import { Tooltip, Toast, Popover } from "bootstrap";

// start the Stimulus application
/*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
// $(window).on("scroll", function (e) {
//   var window_top = $(window).scrollTop() + 1;
//   if (window_top > 250) {
//     $(".sticky-nav").addClass("menu_fixed animated fadeInDown");
//   } else {
//     $(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
//   }
// });
const stickyNav = document.querySelector(".sticky-nav");
window.addEventListener("scroll", () => {
  const window_top = window.scrollY + 1;
  if (window_top > 250) {
    stickyNav.classList.add("menu_fixed", "animated", "fadeInDown");
  } else {
    stickyNav.classList.remove("menu_fixed", "animated", "fadeInDown");
  }
});
/*----------------------------------------
            Background Image
    -------------------------------------------*/

// $("[data-bg-image]").each(function () {
//   var $this = $(this),
//     $image = $this.data("bg-image");
//   $this.css("background-image", "url(" + $image + ")");
// });
const heroSlideItem = document.querySelectorAll(".hero-slide-item ");
heroSlideItem.forEach((element) => {
  let bgImg = element.dataset.bgImage;
  element.style.backgroundImage = `url(${bgImg})`;
});

import "./bootstrap";

import Swiper from "swiper/bundle";

// init Swiper:
const hero = new Swiper(".hero-slider.swiper-container", {
  loop: true,
  speed: 2000,
  effect: "fade",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const categorySlider = new Swiper(".tab-slider.swiper-container", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  speed: 1500,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    478: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
