let images = document.querySelectorAll(".workTeam__element__img");
let imagesArrowsRight = document.querySelectorAll(".workTeam__element__icon__right");
let imagesArrowsLeft = document.querySelectorAll(".workTeam__element__icon__left");
let linksContainer = document.querySelectorAll(".workTeam__element__links");


for (let i = 0; i < images.length; i++) {
    imagesArrowsRight[i].addEventListener("click", () => {
        imagesArrowsRight[i].classList.toggle("workTeam__element__icon__right-disabled");
        imagesArrowsLeft[i].style.display = "flex"
        MoveImage(i);
        setTimeout(() => {
            images[i].style.pointerEvents = "none"
            imagesArrowsLeft[i].classList.toggle("workTeam__element__icon__left-disabled");
            imagesArrowsRight[i].style.display = "none"
        }, 400);
    });
    
    imagesArrowsLeft[i].addEventListener("click", () => {
        imagesArrowsLeft[i].classList.toggle("workTeam__element__icon__left-disabled");
        imagesArrowsRight[i].style.display = "flex"
        MoveImage(i);
        setTimeout(() => {    
            images[i].style.pointerEvents = "all"
            imagesArrowsRight[i].classList.toggle("workTeam__element__icon__right-disabled");
            imagesArrowsLeft[i].style.display = "none"
        }, 400);
    });
}

const MoveImage = (i) => {
    images[i].classList.toggle("workTeam__element__img-right");
    linksContainer[i].style.filter = "brightness(2)";
}
