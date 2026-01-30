// Fade in effect for web pages
window.addEventListener("load", function () {
  // Fade in after all resources (including images) are loaded
  document.body.style.opacity = "1";
});

// Hamburger Button Action
const hamburgerBtn = document.getElementById("hamburger");
const openNav = document.getElementById("open");

hamburgerBtn.addEventListener("click", () => {
  console.log("clicked");
  openNav.classList.toggle("open");
});
