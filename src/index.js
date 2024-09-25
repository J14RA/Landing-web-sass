// src/index.js
import Swiper from "swiper"; // No need to import Navigation and Pagination separately
import "swiper/swiper-bundle.css";
import "./styles/main.scss";

// Initialize Swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
