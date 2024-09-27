import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./styles/main.scss";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  var swiper1 = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination", // Selector for pagination
      clickable: true, // Allows pagination bullets to be clickable
    },
  });

  var swiper2 = new Swiper(".partnership__list", {
    modules: [Autoplay],
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true, // Adds blank slides to maintain the loop
    cssMode: true,
    slidesPerView: 5,
    speed: 3000,
    grabCursor: true,
  });
});
