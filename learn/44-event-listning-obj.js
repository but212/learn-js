// 이러면 버튼의 변수명을 변경시 문제가 생김
// {
//   const buttonChangeBg = document.querySelector(
//     '[data-name="change-bg-color"]'
//   );
//   buttonChangeBg.addEventListener("click", handleChangeButtonStyles);
//   function handleChangeButtonStyles() {
//     button.style.cssText =
//       "\
//     background-color: #e54d26;\
//     padding: 8px 16px;\
//     border: 0;\
//     border-radius: 4px;\
//     ";
//   }
// }

// this로 바꿔줄 수 있음 Event발생시 this는 청취요소<button>을 가리킴
// 단 화살표 함수에서는 문제가 일어남 이때 this는 window 전역객체
// {
//   const buttonChangeBg = document.querySelector(
//     '[data-name="change-bg-color"]'
//   );
//   const btn = document.querySelector('[data-name="change-bg-color"]');
//   btn.addEventListener("click", () => {
//     console.log(this); // window 전역객체
//   });
//   buttonChangeBg.addEventListener("click", handleChangeButtonStyles);
//   function handleChangeButtonStyles() {
//     this.style.cssText =
//       "\
//     background-color: #e54d26;\
//     padding: 8px 16px;\
//     border: 0;\
//     border-radius: 4px;\
//     ";
//   }
// }

// event.currentTarget으로 이벤트 타겟을 접근
{
  const btn = document.querySelector('[data-name="change-bg-color"]');
  btn.addEventListener("click", (e) => {
    e.currentTarget.style.cssText =
      "\
    background-color:rgb(110, 30, 10);\
    color: white;\
    padding: 8px 16px;\
    border: 0;\
    border-radius: 4px;\
    ";
  });
}
