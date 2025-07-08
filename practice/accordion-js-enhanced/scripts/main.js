{
  const CLASS_OPEN = "is-open";
  const accordionContainer = document.querySelector(".accordion__container");
  const accordionLinks = accordionContainer.querySelectorAll(
    ".accordion__inner a"
  );

  accordionLinks.forEach((link) => link.setAttribute("tabindex", "-1"));

  accordionContainer.addEventListener("click", ({ target }) => {
    const button = target.closest("button");
    if (!button) {
      return;
    }

    const accordion = button.closest(".accordion");
    const content = accordion.querySelector(".accordion__content");
    const inner = content.firstElementChild;
    const link = inner.querySelector("a");

    const isOpen = accordion.classList.contains(CLASS_OPEN);
    content.style.height = isOpen
      ? "0"
      : `${inner.getBoundingClientRect().height}px`;
    link.setAttribute("tabindex", isOpen ? "-1" : "0");

    accordion.classList.toggle(CLASS_OPEN);
  });
}
