{
  const tabContainer = document.querySelector(".tabs__container");
  const tabs = [...tabContainer.querySelectorAll(".tab")];
  const tabContents = [...tabContainer.querySelectorAll(".tab__content")];
  const SELECTED_CLASSNAME = "is-selected";

  let selectedIndex = getSelectedIndex();

  tabContainer.addEventListener("click", ({ target }) => {
    const button = target.closest(".tabs button");

    if (!button) return;

    if (selectedIndex > -1) {
      tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME);
      tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME);
    }

    const index = getSelectIndex(button);

    tabs.at(index).classList.add(SELECTED_CLASSNAME);
    tabContents.at(index).classList.add(SELECTED_CLASSNAME);

    selectedIndex = index;
  });

  function getSelectedIndex() {
    return tabs.findIndex((tab) => tab.classList.contains(SELECTED_CLASSNAME));
  }

  function getSelectIndex(button) {
    return tabs.findIndex((tab) => tab === button);
  }
}
