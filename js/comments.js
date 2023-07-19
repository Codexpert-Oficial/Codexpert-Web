
arrowsLeft = document.querySelectorAll(".comments__arrow__container-left");
arrowsRight = document.querySelectorAll(".comments__arrow__container-right");
sliderContainer = document.querySelector(".comments__slider");
sliderElements = document.querySelectorAll(".comment__element");

let position = 0;


arrowsLeft.forEach(arrowLeft => {
  arrowLeft.addEventListener("click", () => {
    sliderElements[position].classList.remove("comment__element-active");
    position = correctPosition(position - 1);
    sliderElements[position].classList.add("comment__element-active");

    let getWidthELement = window.getComputedStyle(sliderElements[position]);
    let WidthELement = getWidthELement.width.slice(0, -2);
    sliderContainer.scrollLeft -= Number(WidthELement);

    arrowRight = arrowLeft.parentElement.querySelector(".comments__arrow__container-right");
    arrowRight.classList.remove("comments__arrow__container-disabled");

    if (position == 0) {
      arrowLeft.classList.add("comments__arrow__container-disabled");
    } else {
      arrowLeft.classList.remove("comments__arrow__container-disabled");
    }
  });
});

arrowsRight.forEach(arrowRight => {
  arrowRight.addEventListener("click", () => {
    sliderElements[position].classList.remove("comment__element-active");
    position = correctPosition(position + 1);
    sliderElements[position].classList.add("comment__element-active");

    let getWidthELement = window.getComputedStyle(sliderElements[position]);
    let WidthELement = getWidthELement.width.slice(0, -2);
    sliderContainer.scrollLeft += Number(WidthELement);

    arrowLeft = arrowRight.parentElement.querySelector(".comments__arrow__container-left");
    arrowLeft.classList.remove("comments__arrow__container-disabled");

    if (position == sliderElements.length - 1) {
      arrowRight.classList.add("comments__arrow__container-disabled");
    } else {
      arrowRight.classList.remove("comments__arrow__container-disabled");
    }
  });
});

function correctPosition(position) {
  console.log(position);
  if (position < 0) {
    position = 0;
  } else if (position > sliderElements.length - 1) {
    position = sliderElements.length - 1;
  }
  return position;
}



