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
