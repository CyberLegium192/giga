const navbarButton = document.getElementById('navbar-button')
const navbarMenu = document.getElementById('navbar-menu')

function openNavbar() {
  navbarMenu.classList.add('h-full')
}
function closeNavbar() {
  navbarMenu.classList.remove('h-full')
}

document.addEventListener("scroll", () =>{
  const navbar = document.querySelector("nav")
  if (window.scrollY > 59) {
    navbar.classList.add("scrolled")
  } else{
    navbar.classList.remove("scrolled")
  }
})

