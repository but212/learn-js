const body = document.body;
const siteContainer = body.querySelector(".site-container");
const button = siteContainer.querySelector("button");
const OFFSITE_TOGGLE_CLASS = "offsite-is-open";

button.addEventListener("click", () => {
  if (body.classList.contains(OFFSITE_TOGGLE_CLASS)) {
    body.classList.remove(OFFSITE_TOGGLE_CLASS);
    button.textContent = "메뉴 열기";
  } else {
    body.classList.add(OFFSITE_TOGGLE_CLASS);
    button.textContent = "메뉴 닫기";
  }
});
