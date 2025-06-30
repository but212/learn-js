{
  const accordions = document.querySelector(".accordion__container");
  accordions.addEventListener("click", (e) => {
    const button = e.target.closest(".accordion__header button");
    if (!button) {
      return;
    }

    button.closest(".accordion").classList.toggle("is-open");
  });
}
