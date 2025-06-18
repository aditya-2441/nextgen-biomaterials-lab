// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Scroll-triggered fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-section');
  observer.observe(section);
});

// Basic contact form handling
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name && email && message) {
      console.log("Form Submitted:", { name, email, message });
      alert('Thank you for reaching out!');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Fade-in effect CSS injection (auto)
const fadeStyle = document.createElement("style");
fadeStyle.innerHTML = `
.fade-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}
.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
`;
document.head.appendChild(fadeStyle);