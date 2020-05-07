// Global Variables
let sidenav = document.querySelector(".sidenav");
let closeBtn = document.querySelector(".closebtn");
let sectionProject = document.getElementById("projects");
let buttonAction = document.getElementById("button");

// Listeners

buttonAction.addEventListener("click", scrollToProjects);

function scrollToProjects() {
  window.scrollTo(0, 1000);
}

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.style.display = "flex ";
  sidenav.style.transition = "ease-in-out 1s;";
  closeBtn.style.display = "block";
  document.getElementById("mySidenav").style.width = "150px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
