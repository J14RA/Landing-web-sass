import "../scss/main.scss"; // Import the SCSS file for Webpack to bundle

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  watchSlidesVisibility: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
