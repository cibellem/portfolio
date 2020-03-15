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

//

// function hideNav() {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.querySelector(".topnav").style.top = "0";
//     } else {
//       document.querySelector(".topnav").style.top = "-65px";
//     }
//     prevScrollpos = currentScrollPos;
//   };
// }

// hideNav();

function showNav() {
  const navbar = document.querySelector(".topnav ");
  navbar.addEventListener("mouseenter", function() {
    navbar.style.top = "0";
  });
}
showNav();

//Get the button
var myarrow = document.querySelector(".arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};
myarrow.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myarrow.style.display = "block";
  } else {
    myarrow.style.display = "none";
  }
}
