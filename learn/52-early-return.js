// // early return 예시 - 가독성과 성능이 올라감, 중첩을 피함
// {
//   function hasOwnClassName(element) {
//     if (!element.classList.contains("own")) {
//       return false;
//     }
//     element.classList.add("yes");
//     element.setAttribute("data-has-own", "true");
//     element.style.setProperty("--color", "maroon");
//     element.setAttribute(
//       "data-top",
//       element.getBoundingClientRect().top + "px"
//     );
//     return true;
//   }
//   document.body.className = "own";
//   const result = hasOwnClassName(document.body);
//   console.log(result);
// }

// {
//   // 빠른 반환을 사용하지 않은 경우
//   function getGift1(score) {
//     let gift = null;
//     if (score === 100) {
//       gift = "노트북";
//     } else if (score > 75) {
//       gift = "태블릿";
//     } else if (score > 50) {
//       gift = "스마트폰";
//     }
//     return gift;
//   }
//   // 빠른 반환을 사용하는 경우
//   function getGift2(score) {
//     if (score === 100) return "노트북";
//     if (score > 75) return "태블릿";
//     if (score > 50) return "스마트폰";
//     return null;
//   }
//   const gift1 = getGift1(50);
//   const gift2 = getGift2(100);
//   console.log(gift1, gift2);
// }

// {
//   // 실습 1
//   const practice1 = document.querySelector(".practice1");
//   const output = document.querySelector("output");
//   // 사용자가 입력한 값이 없으면 "빠른 반환"을 사용해 경고 메시지를 띄우고,
//   // 입력이 있을 때만 결과를 출력합니다.
//   practice1.addEventListener("click", (e) => {
//     const submitButton = e.target.closest("[type='submit']");
//     if (!submitButton) {
//       return;
//     }
//     e.preventDefault();
//     const userInput = document.getElementById("username");
//     const userInputValue = userInput.value.trim();
//     if (!userInputValue) {
//       alert("이름을 입력하세요.");
//       userInput.select();
//       return;
//     }
//     output.value = userInputValue;
//     userInput.value = "";
//   });
// }

// // 실습 2
// {
//   const practice2 = document.querySelector(".practice2");
//   const input = practice2.querySelector("input");
//   const button = practice2.querySelector("button");
//   const output = practice2.querySelector("output");
//   button.addEventListener("click", () => {
//     const score = Number(input.value);
//     const grade = getGrade(score);
//     console.log("your grade is " + grade);
//   });
//   function getGrade(score) {
//     if (score > 100 || score < 0 || typeof score !== "number") {
//       return null;
//     } else if (score >= 90) {
//       return "A";
//     } else if (score >= 75) {
//       return "B";
//     } else if (score >= 60) {
//       return "C";
//     } else {
//       return "F";
//     }
//   }
// }
