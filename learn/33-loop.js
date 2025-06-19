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

// {
//   const webTech = {
//     html: "hyper text markup language",
//     css: "cascading style sheet",
//     js: "javascript",
//   };

//   for (const key in webTech) {
//     const value = webTech[key];
//     console.table({
//       key: key,
//       value: value,
//     });
//   }
// }

// 컴퓨터 프로그래밍의 기본 구조 중 하나인 루프에 숙달하기 위한 연습을 진행하세요.

// 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
for (let i = 1; i <= 100; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
// 2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력
let n = 10;

while (n > 0) {
  console.log(n);
  n--;
}

// 3. for … of 문을 사용해 다음 배열의 과일 출력
const fruits = ["사과", "바나나", "귤", "복숭아"];

for (const fruit of fruits) {
  console.log(fruit);
}

// 4. do … while 문을 사용해 입력된 비밀번호(`'3001'`) 매칭 검토 후 결과 출력
let i = 0,
  input;
const attempts = ["0124", "8291", "3001", "9073"];

do {
  input = attempts[i];

  console.log("사용자 입력 시도:", input);
  if (input === "3001") {
    console.log("비밀번호와 일치합니다.");
    break;
  }

  i++;
} while (i < attempts.length);

// 5. for … in 문을 사용해 객체의 key, value 출력

const student = {
  name: "선호",
  grade: "A",
  age: 22,
};

for (const key in student) {
  const value = student[key];
  console.log(value);
}

// 6. `1`부터 `20`까지 반복
//     1. `5`부터 `10`까지는 건너띄고 나머지 출력
//     2. `17`이 되면 반복 종료

let count = 0;

while (count++ < 20) {
  if (count >= 5 && count <= 10) {
    continue;
  }

  console.log(count);

  if (count >= 17) {
    break;
  }
}
