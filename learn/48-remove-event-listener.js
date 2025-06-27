{
  const buttonGroup = document.querySelector("[role='group']");
  const testerButton = buttonGroup.querySelector("[data-role='tester'");

  function handleClick() {
    console.log("테스트 버튼에 이벤트 연결");
  }
  buttonGroup.addEventListener("click", (e) => {
    const target = e.target.closest("button");

    if (target) {
      if (target.dataset.role === "add-event") {
        console.log("이벤트 연결됨");
        testerButton.textContent = "이벤트 추가됨";
        testerButton.addEventListener("click", handleClick);
      }
      if (target.dataset.role === "remove-event") {
        console.log("이벤트 제거됨");
        testerButton.textContent = "이벤트 제거됨";
        testerButton.removeEventListener("click", handleClick);
      }
    }
  });
}
