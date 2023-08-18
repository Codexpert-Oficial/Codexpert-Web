
let inputName = document.querySelector(".contact__input__name");
let inputEmail = document.querySelector(".contact__input__email");
let inputMessage = document.querySelector(".contact__input__message");
let inputButton = document.querySelector(".contact__button");

inputButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    setInformationMessage("completa todos los campos", "Por favor, completa los datos del formulario para que tu mensaje pueda ser enviado exitosamente.")
})