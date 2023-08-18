// height para moviles
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// mensaje de informacion
let closeInformationButton = document.querySelector(".information__close__button");
let informationContainer = document.querySelector(".information__container");
let autoCloseTimeout; // almacena el id del timeout

const closeInformationMessage = () => {
    informationContainer.classList.add("information__container-disabled");
    clearTimeout(autoCloseTimeout); // cancela el cierre automatico si se cierra manualmente
}

const setInformationMessage = (title, description) => {
    if (!informationContainer.classList.contains("information__container-disabled")) {
        closeInformationMessage();
        autoCloseTimeout = setTimeout(() => {
            setInformationMessage(title, description);
        }, 100);
    } else {
        informationContainer.classList.remove("information__container-disabled");
        let messageTitle = document.querySelector(".information__title");
        let messageDescription = document.querySelector(".information__description");

        messageTitle.innerHTML = title;
        messageDescription.innerHTML = description;

        autoCloseTimeout = setTimeout(closeInformationMessage, 5000); // a los 5 segundos, se cierra el mensaje automaticamente
    }
}

closeInformationButton.addEventListener("click", closeInformationMessage());