{
  const container = document.body.querySelector(".tabs__container");
  const tabButtons = container.children.item(0).children;
  const tabContents = container.children.item(1).children;
  const CLASS_SELECT = "is-selected";
  let currentTab = 0; // 현재 탭 1번째

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", () => {
      if (i === currentTab) {
        tabButtons[i].classList.remove(CLASS_SELECT);
        tabContents[i].classList.remove(CLASS_SELECT);
        currentTab = -1;
      } else {
        if (currentTab > -1) {
          container
            .querySelector(".tab." + CLASS_SELECT)
            .classList.remove(CLASS_SELECT);
          container
            .querySelector(".tab__content." + CLASS_SELECT)
            .classList.remove(CLASS_SELECT);
        }

        tabButtons[i].classList.add(CLASS_SELECT);
        tabContents[i].classList.add(CLASS_SELECT);
        currentTab = i;
      }
    });
  }
}
