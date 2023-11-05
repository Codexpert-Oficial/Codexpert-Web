
let inputButton = document.querySelector(".contact__button");

inputButton.addEventListener("click", (e) => {
    
    let inputName = document.querySelector(".contact__input__name");
    let inputEmail = document.querySelector(".contact__input__email");
    let inputMessage = document.querySelector(".contact__input__message");
    

    console.log(inputName.value);
    console.log(inputEmail.value);
    console.log(inputMessage.value);
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
        e.preventDefault();
        setInformationMessage("completa todos los campos", "Por favor, completa los datos del formulario para que tu mensaje pueda ser enviado exitosamente.");
    }
    
})