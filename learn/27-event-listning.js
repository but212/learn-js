// const clickableButton = document.querySelector(".clickable");

// clickableButton.addEventListener("click", function () {
//   console.log("click the clickable button.");
// });

const clickableButton = document.querySelector(".clickable");
clickableButton.addEventListener("click", (e) => {
  // addEventListner()에 전달된 함수, 즉 이벤트 리스너는
  // event객체를 매개변수로 전달받는다.
  // pointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log("이벤트 객체 = ", e);

  //   if (document.body.classList.contains("is-active")) {
  //     document.body.classList.remove("is-active");
  //   } else {
  //     document.body.classList.add("is-active");
  //   }

  //   if (clickableButton.classList.contains("is-active")) {
  //     clickableButton.classList.remove("is-active");
  //   } else {
  //     clickableButton.classList.add("is-active");
  //   }
  document.body.classList.toggle("is-active");
  clickableButton.classList.toggle("is-active");
});
