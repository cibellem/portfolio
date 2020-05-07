// Global Variables
let sidenav = document.querySelector(".sidenav");
let closeBtn = document.querySelector(".closebtn");
let sectionProject = document.getElementById("projects");
let buttonAction = document.getElementById("button");
buttonAction.addEventListener("click", scrollToProjects);
// Listeners
console.log(closeBtn);

// window.addEventListener("scroll", scrollBg);

// function openNav() {
//   let navBar = document.querySelector(".sidenav");
//   navBar.style.width = "250px";
//   navBar.style.display = "block";
//   document.querySelector(".main").style.marginLeft = "250px";
// }

//Changes background color when scroolls to a diferent section
// function scrollBg() {
//   if (this.scrollY > this.innerHeight / 1.5) {
//     sectionProject.classList.add("bg-active");
//   } else {
//     sectionProject.classList.remove("bg-active");
//   }
// }

function scrollToProjects() {
  window.scrollTo(0, 1000);
}

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.style.display = "flex";
  closeBtn.style.display = "block";
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
