{
  const carousel = document.querySelector(".carousel"); // 캐러셀 컴포넌트 찾기
  const carouselContentsWrapper = carousel.querySelector(".carousel__contents"); // 캐러셀 컨텐츠 래퍼
  const carouselCotents =
    carouselContentsWrapper.querySelectorAll(".carousel__content");
  const carouselPrevButton = carousel.querySelector("[aria-label^='이전']"); // 이전 탐색버튼 찾기
  const carouselNextButton = carousel.querySelector("[aria-label^='다음']"); // 이전 탐색버튼 찾기
  const CLASS_SELECTED = "is-selected"; // 활성상태 클래스 이름 유지보수 고려 상수
  let selectedIndex = -1;

  for (let i = 0; i < carouselCotents.length; ++i) {
    if (carouselCotents.item(i).classList.contains(CLASS_SELECTED)) {
      selectedIndex = i;
      break;
    }
  }

  if (selectedIndex === -1) {
    console.warn("어떤 캐러셀도 선택되지 않았습니다.");
  } else if (selectedIndex === 0) {
    carouselPrevButton.hidden = true;
  } else if (selectedIndex >= carouselCotents.length - 1) {
    carouselNextButton.hidden = true;
  }

  // 다음 탐색 버튼 클릭 이벤트 리스너 추가
  // 구현할 기능은 다음 컨텐츠 탐색
  carouselNextButton.addEventListener("click", () => {
    //  현재 선택된 컨텐츠 찾기
    const selectedContent = carouselContentsWrapper.querySelector(
      "." + CLASS_SELECTED
    );
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue("left");

    carouselContentsWrapper.style.setProperty(
      "transform",
      "translateX(-" + distance + ")"
    );

    selectedContent.classList.remove(CLASS_SELECTED);
    nextContent.classList.add(CLASS_SELECTED);

    carouselNextButton.hidden = !nextContent.nextElementSibling; // 만약 다음의 다음이 존재하지 않으면 다음 버튼을 감춘다.
    carouselPrevButton.hidden = false;
  });

  carouselPrevButton.addEventListener("click", () => {
    const selectedContent = carouselContentsWrapper.querySelector(
      "." + CLASS_SELECTED
    );
    const prevContent = selectedContent.previousElementSibling;
    const distance = getComputedStyle(prevContent).getPropertyValue("left");

    carouselContentsWrapper.style.setProperty(
      "transform",
      "translateX(-" + distance + ")"
    );

    selectedContent.classList.remove(CLASS_SELECTED);
    prevContent.classList.add(CLASS_SELECTED);

    carouselPrevButton.hidden = !prevContent.previousElementSibling;
    carouselNextButton.hidden = false;
  });
}
