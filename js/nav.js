
// nav mobile bars
let barsMenuOpen = document.querySelector(".nav__menu__bars-open");
let barsMenuClose = document.querySelector(".nav__menu__bars-close");
let navContainerMobile = document.querySelector(".nav__container-mobile");
let allNavLinks = document.querySelectorAll(".nav__element__link");

function closeMenu() {
    navContainerMobile.style.left = "1000px";
    barsMenuClose.style.display = "none";
    barsMenuOpen.style.display = "flex";
}

barsMenuOpen.addEventListener("click", (e) => {
    e.preventDefault();
    navContainerMobile.style.left = "0px";
    barsMenuOpen.style.display = "none";
    barsMenuClose.style.display = "flex";
})

barsMenuClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
})

allNavLinks.forEach((linkNav) => {
    linkNav.addEventListener("click", () => {
        closeMenu();
    })
});