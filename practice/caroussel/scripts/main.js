const carousel = document.querySelector(".carousel");
const carouselButtons = carousel.querySelectorAll(".carousel__button");
const carouselPrevButton = carouselButtons[0];
const carouselNextButton = carouselButtons[1];
const carouselContents = carousel.querySelector(".carousel__contents");
const carouselSlides = carousel.querySelectorAll(".carousel__content");
const carouselIndicators = carousel.querySelectorAll(".carousel__indicator");
const carouselSlideCount = carouselSlides.length; // 캐러셀의 갯수
const carouselSlideWidth =
  getComputedStyle(carousel).getPropertyValue("--width"); // 슬라이드의 너비: 800px
const CLASS_SELECT = "is-selected";
let carouselCurrentIndex = 0;

function updateCarousel(newIndex) {
  const newTransform = -newIndex * Number.parseFloat(carouselSlideWidth);
  carouselContents.style.setProperty(
    "transform",
    "translateX(" + newTransform + "px)"
  );

  carouselPrevButton.hidden = newIndex === 0;
  carouselNextButton.hidden = newIndex >= carouselSlideCount - 1;

  carouselIndicators[carouselCurrentIndex].classList.remove(CLASS_SELECT);
  carouselSlides[carouselCurrentIndex].classList.remove(CLASS_SELECT);
  carouselIndicators[newIndex].classList.add(CLASS_SELECT);
  carouselSlides[newIndex].classList.add(CLASS_SELECT);

  carouselCurrentIndex = newIndex;

  carouselSlides.forEach((slide) => {
    const link = slide.querySelector("a");
    if (slide.classList.contains(CLASS_SELECT)) {
      link.setAttribute("tabindex", "1");
    } else {
      link.setAttribute("tabindex", "-1");
    }
  });
}

function init(index) {
  updateCarousel(index);
  carouselPrevButton.addEventListener("click", () => {
    updateCarousel(carouselCurrentIndex - 1);
  });

  carouselNextButton.addEventListener("click", () => {
    updateCarousel(carouselCurrentIndex + 1);
  });

  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      updateCarousel(index);
    });
  });
}
