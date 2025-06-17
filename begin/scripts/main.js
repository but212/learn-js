const siteContainer = document.querySelector(".site-container");
const button = siteContainer.querySelector("button");
const offSiteContainer = document.querySelector(".offsite-container");

button.addEventListener("click", () => {
  offSiteContainer.classList.toggle("is-open");
  siteContainer.classList.toggle("is-open");
  if (siteContainer.classList.contains("is-open")) {
    button.textContent = "메뉴 닫기";
  } else {
    button.textContent = "메뉴 열기";
  }
});
