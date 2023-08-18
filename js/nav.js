
// dark mode
let swtichButton = document.querySelector(".nav__elemet__switch");
let switchBackground = document.querySelector(".switch__background");
let switchCircle = document.querySelector(".switch__circle");
let darkMode = true;

swtichButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchCircle.classList.toggle("switch__circle-active");
    if (darkMode) {
        darkMode = false;
        setInformationMessage("activando modo oscuro", "Los estilos y colores de la pagina han sido modificados a modo oscuro para una mejor experiencia de usuario.");
    } else {
        darkMode = true;
        setInformationMessage("activando modo claro", "Los estilos y colores de la pagina han sido modificados a modo claro para una mejor experiencia de usuario.");
    }
    closeMenu()
})

// translate
let translateButton = document.querySelector(".nav__element__tanslate");
let language = "esp";

translateButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (language == "esp") {
        language = "eng"
        setInformationMessage("translating into english", "The language of the page has been changed to English, you can change it back to Spanish whenever you want.");
    } else {
        language = "esp"
        setInformationMessage("traduciendo al español", "El lenguaje de la pagina se ha cambiado al español, podras cambiarlo nuevamente al ingles cuando quieras.");
    }
    closeMenu()
})


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