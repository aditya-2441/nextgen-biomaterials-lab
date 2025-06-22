// main.js

// Toggle mobile menu
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
}

// Tabbed content logic for publications
const tabLinks = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

if (tabLinks.length > 0 && tabContents.length > 0) {
  tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);

      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      tabLinks.forEach((link) => {
        link.classList.remove("border-blue-500", "text-blue-600", "font-semibold");
      });

      tab.classList.add("border-blue-500", "text-blue-600", "font-semibold");
      target.classList.remove("hidden");
    });
  });
}

// Scroll animations via AOS (initialize if AOS is present)
document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }
});