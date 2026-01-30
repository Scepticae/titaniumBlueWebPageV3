// Fade in effect for web pages
window.addEventListener("load", function () {
  // Fade in after all resources (including images) are loaded
  document.body.style.opacity = "1";
});

// Contact form submission handling
(function () {
  emailjs.init("kJaTMiVWo9ma7F1UJ");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_v19j84p", "template_s0ka18a", this).then(
    function () {
      alert("Message sent!");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      alert("Failed to send message");
      console.error(error);
    }
  );
});

// Hamburger Button Action
const hamburgerBtn = document.getElementById("hamburger");
const openNav = document.getElementById("open");

hamburgerBtn.addEventListener("click", () => {
  openNav.classList.toggle("open");
});
