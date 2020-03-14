const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");
    //  Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
const navLink = document.querySelectorAll(".nav-links li");
navLink.addEventListener("click", () => {
  navLinks.style.display = "none";
});

//

function hideNav() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".topnav").style.top = "0";
    } else {
      document.querySelector(".topnav").style.top = "-65px";
    }
    prevScrollpos = currentScrollPos;
  };
}

hideNav();

function showNav() {
  const navbar = document.querySelector(".topnav ");
  navbar.addEventListener("mouseenter", function() {
    navbar.style.top = "0";
  });
}
showNav();

function arrowDown() {
  const arrow = document.querySelector(".arrow");
  arrow.addEventListener("click", function() {});
}
arrowDown();
