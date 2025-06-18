// --------------------------------------------------------------------------
// 📌 Bom
// --------------------------------------------------------------------------

// console.log(window);

// // window 객체의 모든 속성에 접근하려면 점 표기법을 사용하거나, 대괄호 표기법을 사용합니다.
// console.log(window.document); // Document {}
// console.log(window["document"]); // Document {}

// // window 객체는 근본이 되는 객체이므로 JavaScript에서 코드 작성 시, 생략이 가능합니다.
// console.log(document); // Document {}

// // 브라우저 윈도우 객체
// console.log(window);

// // 모니터 스크린 객체
// console.log(window.screen);
// console.log(screen);

// // 로케이션 객체
// console.log(window.location);
// console.log(location);
// console.log(location.hash);

// // 히스토리 객체
// console.log(history);

// // 도큐먼트 객체
// console.log(document);

// --------------------------------------------------------------------------
// 📌 DOM(문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들 (Web APIs)
// --------------------------------------------------------------------------

// DOM
// console.dir(document); // 브라우저 객체 중 도큐멘트 객체
// console.log(document.compatMode); // 웹 표준 호환 모드인지 확인
// console.log(document.activeElement); // 초점(focus)이 주어진 엘리먼트(요소)

// Document.getElementsByTagName(tagName);
// Document.getElementsById(idName);

// console.log(document.getElementsByTagName("h1"));

// Document.getElementById(idName)
// const emailInput = document.getElementById("useremail");
// console.log(emailInput);

// 이런 식의 주먹구구식 id 이름은 지양해야함.
// let myMight = document.getElementById("mine");
// console.log(myMight);

// Document.getElementsByName(name)
// console.log(document.getElementsByName("useremail"));

// Document.getElementsByClassName(className)
// const items = document.getElementsByClassName("item");
// console.log(items);

const app = document.getElementById("app");

// HTMLDivElement가 됨 Element임
console.log(app);

// Element도 querySelector가 가능
const appFirstLI = app.querySelector("li.item");

console.log(appFirstLI);
