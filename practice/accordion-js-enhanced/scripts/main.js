{
  const CLASS_OPEN = "is-open";
  const accordions = document.querySelector(".accordion__container");
  const accordionLinks = accordions.querySelectorAll(".accordion__inner a");

  for (const link of accordionLinks) {
    link.setAttribute("tabindex", "-1");
  }

  accordions.addEventListener("click", ({ target }) => {
    const button = target.closest("button");

    if (!button) {
      return;
    }

    const accordion = button.closest(".accordion");
    const accordionContent = accordion.querySelector(".accordion__content");
    const accordionInner = accordionContent.firstElementChild;
    const accordionLink = accordionInner.querySelector("a");
    const height = accordionInner.getBoundingClientRect().height;
    const isOpened = accordion.classList.contains(CLASS_OPEN);
    accordionContent.style.setProperty("height", isOpened ? 0 : height + "px");

    if (!accordion.classList.contains(CLASS_OPEN)) {
      accordionLink.removeAttribute("tabindex");
    } else {
      accordionLink.setAttribute("tabindex", "-1");
    }
    accordion.classList.toggle(CLASS_OPEN);
  });
}
