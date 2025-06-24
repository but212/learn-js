{
  const accordionContainer = document.querySelector(".accordion__container");
  const accordions = accordionContainer.querySelectorAll(".accordion");

  accordions.forEach((arg) => {
    const accordionButton = arg.querySelector("button");
    accordionButton.addEventListener("click", () => {
      arg.classList.toggle("is-open");
    });
  });
}
