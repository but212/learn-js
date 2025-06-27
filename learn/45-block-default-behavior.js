{
  const aLink = document.querySelector('a[href="https://naver.com"]');
  aLink.addEventListener("click", (e) => {
    console.log("e.currentTarget =", e.currentTarget);
  });
  aLink.addEventListener("click", (e) => {
    // 브라우저 기본 작동 방지
    if (!e.defaultPrevented) e.preventDefault();
  });
}

// {
//   const checkbox = document.getElementById("agreement");
//   console.log(checkbox.checked);

//   checkbox.addEventListener("change", (e) => {
//     // if (e.defaultPrevented) {
//     //   e.preventDefault();
//     // }
//     // change는 preventDefault가 안되어서 임의로 해야한다
//     const isChecked = e.currentTarget.checked;
//     e.currentTarget.checked = !isChecked;
//     console.log(isChecked);
//   });
// }

// 체크박스 요소의 브라우저 기본 작동 방지
// click 이벤트
// {
//   const checkbox = document.getElementById("agreement");
//   checkbox.addEventListener("click", (e) => {
//     console.dir(e);
//     if (!e.defaultPrevented) {
//       console.log("1");
//       e.preventDefault();
//     } else {
//       console.log("2");
//     }
//   });
// }

{
  const form = document.querySelector("[data-learn='form']");
  form.addEventListener("submit", (e) => {
    if (!e.defaultPrevented) {
      e.preventDefault();
    }
    console.log(e.currentTarget);
    const formElement = e.currentTarget;
    console.log(formElement);
    console.log(formElement.elements.searchTerm.value);
  });

  form.addEventListener("reset", (e) => {
    if (!e.defaultPrevented) {
      e.preventDefault();
    }
    console.log(e.currentTarget);
    const formElement = e.currentTarget;
    formElement.elements.searchTerm.value = "";
  });
}
