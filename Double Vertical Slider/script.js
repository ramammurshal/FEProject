const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-buttons");
const downButton = document.querySelector(".down-buttons");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlidesIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlidesIndex++;
    if (activeSlidesIndex > slidesLength - 1) {
      activeSlidesIndex = 0;
    }
  } else if (direction === "down") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slidesLength - 1;
    }
  }

  slideLeft.style.transform = `translateY(${activeSlidesIndex * sliderHeight}px)`;
  slideRight.style.transform = `translateY(-${activeSlidesIndex * sliderHeight}px)`;
};

// event listener
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
