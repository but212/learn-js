// ----------------------------------------
// 루프(loop)
// ----------------------------------------

// function draw(count) {
//   console.log("도화지에 그림을 그리다");
//   console.log(count, "번 그림을 그렸습니다.");
// }

// function drawIter(iteration) {
//   let laps = 0;
//   while (laps++ < iteration) {
//     draw(laps);
//   }
// }

// drawIter(20);

// let userInput = prompt("1부터 10까지 숫자를 입력하세요.");
// userInput = Number.parseInt(userInput, 10);

// while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//   console.error("입력값이 1부터 10까지의 숫자여야 합니다.");
//   userInput = prompt("1부터 10까지 숫자를 입력하세요.");
// }

// console.log(userInput + 10, typeof userInput);

// 흐름제어 continue, break

// (() => {
//   let drawCount = 0;

//   while (drawCount++ < 20) {
//     if (drawCount > 10 && drawCount <= 15) {
//       continue;
//     }

//     draw(drawCount);

//     if (drawCount >= 17) {
//       break;
//     }
//   }

//   console.log("마지막 그림 그린 횟수: ", drawCount);
// })();

// {
//   let condition = false;

//   // do-while 문
//   // 어떻게든 한번은 무조건 실행

//   do {
//     console.log("condition is true!");
//   } while (condition);
// }

// // 1~10 숫자입력을 do-while 문으로 변경한 예시
// let userInput;

// do {
//   userInput = prompt("1부터 10까지 숫자를 입력하세요.");
//   userInput = Number.parseInt(userInput, 10);

//   if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//     console.error("1 ~ 10까지의 숫자여야 합니다.");
//   }
// } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10);

// console.log(userInput, typeof userInput);

// // for 문
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

// {
//   const numbers = [11, 22, 33, 44, 55, 66];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 33) {
//       break;
//     }

//     console.log(numbers[i]);
//   }
// }

// {
//   const fruitBasket = ["체리망고", "토마토", "스트로베리"];
//   for (let i = 0; i < fruitBasket.length; i++) {
//     console.log(fruitBasket[i]);
//   }

//   const students = [
//     { 이름: "홍민영" },
//     { 이름: "윤정화" },
//     { 이름: "허시온" },
//     { 이름: "조선현" },
//     { 이름: "성정현" },
//     { 이름: "조장원" },
//   ];
//   // // 정순
//   // console.time("정순환");
//   // for (let i = 0; i < students.length; i++) {
//   //   console.log(students[i]);
//   // }
//   // console.timeEnd("정순환");
//   // // 역순 - 더 빠름
//   // console.time("역순환");
//   // for (let i = students.length - 1; i >= 0; i--) {
//   //   console.log(students[i]);
//   // }
//   // console.timeEnd("역순환");

//   // for of 문
//   for (const student of students) {
//     if (student === "김동규") {
//       continue;
//     }
//     console.log(student);
//   }
// }

{
  const webTech = {
    html: "hyper text markup language",
    css: "cascading style sheet",
    js: "javascript",
  };

  for (const key in webTech) {
    const value = webTech[key];
    console.table({
      key: key,
      value: value,
    });
  }
}
