// // 배열 전개
// {
//   const breads = ["크림빵", "소보로빵", "소금빵"];
//   console.log(...breads);
// }

// {
//   const messages = ["안녕?", "안녕!", "안녕하세요!?"];
//   function log(message1, message2, message3) {
//     console.log(message1);
//     console.log(message2);
//     console.log(message3);
//   }
//   // log(messages[0], messages.at(1), messages[2])
//   log(...messages);
// }

// {
//   const team = ["one", "two", "three"];
//   const anotherTeam = ["four", "five", ...team, "six"];
//   console.log(anotherTeam);
// }

// {
//   const itemToAdd = 1;
//   const existingArray = [2, 3];
//   const arr = [];
//   arr.push(itemToAdd);
//   arr.concat(existingArray);
//   console.log(arr);
// }

// // HTMLCollection or NodeList -> Array 변환
// {
//   const arrayBodyChildren = Array.from(document.body.children);
//   console.log(...arrayBodyChildren);
// }

// // 나머지 매개변수 (Rest Parameters)
// {
//   function toArray(likeArrayObject) {
//     return Array.prototype.slice.call(likeArrayObject);
//   }
//   function logNames() {
//     /* 인자(arguments): 매개변수의 집합 */
//     // console.log(arguments)
//     // 인자 집합은 배열이 아니다. 유사 배열 객체이다.
//     console.log(Array.isArray(arguments)); // false
//     // 유사배열 객체 -> 배열로 변경하기
//     // Array.from()
//     console.log(Array.from(arguments));
//     // 전개 구문
//     console.log([...arguments]);
//     // 메서드 빌려쓰기 패턴
//     console.log(Array.prototype.slice.call(arguments));
//     // 유틸리티 함수 활용
//     console.log(toArray(arguments));
//     for (let i = 0, l = arguments.length; i < l; i++) {
//       // const arg = arguments[i]
//       // console.log(arg)
//     }
//   }
//   logNames(
//     "진형",
//     "민희",
//     // '수영',
//     "진구",
//     // '초영',
//     "영주"
//     // '주효',
//   );
// }

// // 배열의 나머지
// {
//   const scores = [100, 92, 76];
//   const [firstScore, ...restScores] = scores;
//   console.log(firstScore); // 100
//   console.log(restScores); // [92, 76]
// }

// // 객체 전개
// {
//   const fruitBlender = {
//     blendKiwi: true,
//     blendMango: true,
//   };
//   const megaBlender = {
//     blendGuava: true,
//     ...fruitBlender, // 나머지 블렌더 변수 취합
//   };
//   console.log(megaBlender);
//   // {
//   //   blendGuava: true,
//   //   blendKiwi: true,
//   //   blendMango: true,
//   // }
// }

// // 객체 나머지 취합
// {
//   const fruitBlender = {
//     blendKiwi: true,
//     blendMango: true,
//     blendOrange: true,
//     blendPapaya: true,
//   };
//   const { blendKiwi, ...otherProps } = fruitBlender;
//   console.log(blendKiwi);
//   console.log(otherProps);
//   // {
//   //   blendMango: true,
//   //   blendOrange: true,
//   //   blendPapaya: true
//   // }
// }

// // 객체 합성
// {
//   /* global gsap */
//   const initVars = { opacity: 0, rotateX: -480 };
//   // gsap.timeline({ defaults: { ... } })
//   const commonVars = { opacity: 1, rotateX: 0 };
//   // const h1Vars = { scale: 1, delay: 0.5 }
//   // const pVars = { y: -50, color: '#551b8b', scale: 1.2, delay: 0.8 }
//   // // console.log(Object.assign({}, commonVars, h1Vars))
//   // console.log({ ...commonVars, ...h1Vars })
//   // console.log(commonVars)
//   // console.log(h1Vars)
//   gsap.set("h1, p", initVars);
//   gsap.to("h1", { ...commonVars, scale: 1, delay: 0.5 });
//   gsap.to("p", {
//     ...commonVars,
//     y: -50,
//     color: "#551b8b",
//     scale: 1.2,
//     delay: 0.8,
//   });
// }
