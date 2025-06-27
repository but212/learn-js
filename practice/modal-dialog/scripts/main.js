const body = document.body;
const modalOverlay = body.querySelector(".modal-overlay");
const modalCloseButton = modalOverlay.querySelector(".modal-close-button");
const modalOpenButton = body.querySelector(".button");

modalOpenButton.addEventListener("click", () => {
  body.classList.add("modal-open");
});

modalCloseButton.addEventListener("click", () => {
  body.classList.remove("modal-open");
});

// 이벤트 위임(Event Deligation)을 통해서 Dimmed된 부분을 클릭해도 모달이 닫히도록 설정 가능
