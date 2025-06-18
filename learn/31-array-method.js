// ----------------------------------------
// 배열 메서드(Array Method)
// ----------------------------------------

// const JS_학습_주제 = [
//   "변수",
//   "함수",
//   "조건문",
//   "객체",
//   "배열",
//   "비교 연산자",
//   "부정 연산자",
// ];

// // 배열 항목 위치(index) 찾기(find)
// let 함수_인덱스, 비교_연산자_인덱스;

// 함수_인덱스 = JS_학습_주제.indexOf("함수"); // 기대값: 1 / 결과값: ?
// console.log("함수_인덱스 =", 함수_인덱스);
// 함수_인덱스 = JS_학습_주제.indexOf("함 수"); // 기대값: -1 / 결과값: ?
// console.log("함수_인덱스 =", 함수_인덱스);

// 비교_연산자_인덱스 = JS_학습_주제.indexOf("비교");
// console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

// 비교_연산자_인덱스 = JS_학습_주제.indexOf("비교연산자");
// console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

// 비교_연산자_인덱스 = JS_학습_주제.indexOf("비교 연산자");
// console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: 5 / 결과값: 5

// function hasItem(arr, elem) {
//   return !(arr.indexOf(elem) < 0);
// }

// const fruitBasket = ["패션후르츠", "애플망고", "워터멜론", "오렌지"];

// console.log(hasItem(fruitBasket, "애플망고"));
// console.log(hasItem(fruitBasket, "오렌지"));
// console.log(hasItem(fruitBasket, "어륀지"));

// // 대신 includes를 사용가능
// console.log(fruitBasket.includes("워터멜론"));

// // 레퍼런스 타입은 findIndex로 indexOf 대체(callback 매개변수)
// const bootcamp14 = [{ studentName: "석정일" }, { studentName: "김동규" }];

// console.log(
//   bootcamp14.findIndex((student) => {
//     const ret = student.studentName === "김동규";
//     return ret;
//   })
// );

// // 배열에 요소 추가
// console.log({ bootcamp14 });

// // unshift: 첫 번째 인덱스에 요소 추가하고 인덱스 + 1
// const res = bootcamp14.unshift({ studentName: "오경태" }); // 반환 값: 배열의 길이
// console.log(res);
// console.log({ bootcamp14 });

// // push: 끝에 추가하고 인덱스 + 1
// bootcamp14.push({ studentName: "고우현" }, { studentName: "장효정" });
// console.log({ bootcamp14 });

// // 배열에서 요소 제거

// // shift: 첫 번째 인덱스에 요소 제거하고 인덱스 - 1
// {
//   const oh = bootcamp14.shift();
//   console.log({ bootcamp14 }, oh);

//   const suk = bootcamp14.shift();
//   console.log({ bootcamp14 }, suk);
// }

// // pop: 끝 위치에서 제거
// {
//   const jang = bootcamp14.pop();
//   console.log({ bootcamp14 }, jang);
// }

const numbers = [9, 10, 3, 4, 7, 8];

// 맨 앞 제거 후 추가
//numbers.splice(0, 2); // 이러면 제거만 한다.
numbers.splice(0, 2, 1, 2); // 제거후 1, 2,를 삽입

// 맨 뒤 제거 후 추가
numbers.splice(4, 2, 5, 6);

// 중간항목 삭제

console.log(numbers);
const removeItems = numbers.splice(2, 2);
console.log(removeItems);
console.log(numbers);

// 중간에 제거 없이 추가
numbers.splice(2, 0, 100);
console.log(numbers);

// 배열 슬라이싱: 배열 복사
let copy = numbers.slice(); // 완전히 다 복사됨
console.log(copy);

let partialCopy = numbers.slice(2, 4); // numbers[2] ~ [4] 까지만 복사
console.log(partialCopy);
