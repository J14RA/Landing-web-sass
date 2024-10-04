import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./styles/main.scss";
import "./index.html";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Hamburger Menu Toggle
function setupMobileNav() {
  const toggleButton = document.querySelector(".mobile-nav__toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".mobile-nav-overlay");

  if (toggleButton && mobileNav && overlay) {
    // Toggle the mobile nav and overlay when the button is clicked
    toggleButton.addEventListener("click", () => {
      mobileNav.classList.toggle("mobile-nav--active");
    });

    // Close the mobile nav when overlay is clicked
    overlay.addEventListener("click", () => {
      mobileNav.classList.remove("mobile-nav--active");
    });
  } else {
    console.error("Toggle button, mobile nav, or overlay not found.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Swiper instances with breakpoints
  function initializeSwipers() {
    const swiper1 = new Swiper(".swiper", {
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
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });

    const swiper2 = new Swiper(".partnership__list", {
      modules: [Autoplay],
      loop: true,
      freeMode: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      loopFillGroupWithBlank: true,
      cssMode: true,
      slidesPerView: 5,
      speed: 3000,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
      },
    });
  }

  // Tab Functionality
  function setupTabs() {
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablinks");

    function openTitle(titleName) {
      tabcontent.forEach((content) => (content.style.display = "none"));
      tablinks.forEach((link) => link.classList.remove("active"));

      const targetTab = document.getElementById(titleName);
      if (targetTab) {
        targetTab.style.display = "block";
        document
          .querySelector(`button[data-title='${titleName}']`)
          ?.classList.add("active");
      }
    }

    tablinks.forEach((button) => {
      button.addEventListener("click", (event) => {
        const titleName = event.currentTarget.getAttribute("data-title");
        openTitle(titleName);
      });
    });

    openTitle("Fintech");
  }

  // Initialize all components
  setupMobileNav();
  initializeSwipers();
  setupTabs();
});
