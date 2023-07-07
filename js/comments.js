arrowLeft = document.querySelector(".comments__arrow__container-left");
arrowRight = document.querySelector(".comments__arrow__container-right");
sliderContainer = document.querySelector(".comments__slider");
sliderElements = document.querySelectorAll(".comment__element");

let position = 0;

arrowLeft.addEventListener("click", () => {
  sliderElements[position].classList.remove("comment__element-active");
  position = correctPosition(position - 1);
  sliderElements[position].classList.add("comment__element-active");
  sliderContainer.scrollLeft -= 800;
});

arrowRight.addEventListener("click", () => {
  sliderElements[position].classList.remove("comment__element-active");
  position = correctPosition(position + 1);
  sliderElements[position].classList.add("comment__element-active");
  sliderContainer.scrollLeft += 800;
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
