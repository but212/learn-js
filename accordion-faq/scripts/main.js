const faqContainer = document.body.querySelector(".faq-container");
const faqItems = faqContainer.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelector("button");
  faqBtn.addEventListener("click", () => {
    if (!item.classList.contains("is-open")) {
      item.classList.add("is-open");
    } else {
      item.classList.remove("is-open");
    }
  });
});
