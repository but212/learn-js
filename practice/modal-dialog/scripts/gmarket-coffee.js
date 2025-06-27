const body = document.body;
const nonModalDialog = body.querySelector(".dialog-non-modal");
nonModalDialog.querySelector(".close-button").addEventListener("click", () => {
  nonModalDialog.classList.remove("is-open");
});
