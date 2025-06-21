document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu").querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Optional: Close menu on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("active"));
  });

  // Highlight active nav link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Scroll navbar shadow
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Back to top button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerText = "↑ Top";
  backToTopBtn.className = "back-to-top";
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
});