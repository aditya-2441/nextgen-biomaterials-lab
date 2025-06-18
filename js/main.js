// main.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been received.");
      form.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
});