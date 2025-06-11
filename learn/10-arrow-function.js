// -----------------------------------------
// 화살표 함수 표현식(Arrow Function Expression)
// -----------------------------------------

// 함수를 만드는 방법 3가지

// 1. 함수 선언
function showMeTheMoney() {
  console.log("add 50000 mineral and gas");
}

showMeTheMoney();

// 2. 함수 표현식
let powerOverwhelming = function (_) {
  console.log("I'm Immortal");
};

powerOverwhelming();

// 3. 화살표 함수 표현식
let blackSheepWall = (_) => {
  console.log("skip the fog");
};

blackSheepWall();

let readABook = (bookName, dayOfSpend) => {
  console.log(dayOfSpend + "일에 걸쳐 '" + bookName + "'를 읽다.");
};

readABook("채식주의자", 20);

// 화살표 함수의 매개변수가 1개인 경우에만 소괄호 생략가능
// let withUrl = Url => {
//     return "https://" + Url
// }

const ROOT_FONT_SIZE = 16;

// function px2rem(pxvalue) {
//   return pxvalue / ROOT_FONT_SIZE + "rem";
// }

// let px2rem = function (pxvalue) {
//   return pxvalue / ROOT_FONT_SIZE + "rem";
// };

// 화살표 함수 표현식은 return 없이 함수를 반환할 수 있다.
let px2rem = (pxvalue) => pxvalue / ROOT_FONT_SIZE + "rem";
