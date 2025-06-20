document.addEventListener("DOMContentLoaded", ( ) => {
  const navlinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();
  navlinks.forEach(link => {
    if(link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList>removeEventListener("scrolled");
    }
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  const topBtn = document.createElement("button");
  topBtn.innerText = "↑";
  topBtn.className = "back-to-top";
  document.body.appendChild(topBtn);
  
  window.addEventListener("scroll", ( ) => {
    topBtn.style.display = window.scrollY >300 ? "block" : "none";
  });
  topBtn.addEventListener("click", ( ) => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  });
});