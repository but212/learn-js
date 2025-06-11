// 화살표 함수의 객체 리턴을 대괄호로 묶으면 return을 명시적으로 써야한다.
// let getStyles = () => {
//   return {
//     display: "grid",
//     "row-gap": 16,
//   };
// };

// 화살표 함수의 객체 리턴 첫번째를 소괄호로 묶으면 return을 안써도 된다.
let getStyles = () => ({
  display: "grid",
  "row-gap": 16,
});

console.log(getStyles());
