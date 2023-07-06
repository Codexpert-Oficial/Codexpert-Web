
let swtichButton = document.querySelector(".nav__elemet__switch");
let switchBackground = document.querySelector(".switch__background");
let switchCircle = document.querySelector(".switch__circle");

swtichButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchCircle.classList.toggle("switch__circle-active")
})