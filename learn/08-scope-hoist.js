// 기본적으로 함수에 return이 없으면
// return undefined;로 설정

// -----------------------------------------
// 스코프(Scope)
// - 코드 영역(범위)
// - 전역(전체 영역: global scope)
// - 지역(일부 영역: local scope)
//
//
// 호이스트(Hoist)
// - 무엇을 끌어올리나?
// - 함수 선언을 코드 작성 영역의 가장 상단으로 끌어올린다.
//
// -----------------------------------------

// 함수 실행은 메모리에 있는 함수를 콜하는 것 호이스트 됨
func();

// 함수 선언 및 호이스트(Function Declaration and Function Hoist)
// 선언된 함수는 코드를 작성하는 영역의 가장 상위로 끌어올려진 것처럼 작동된다.
// 함수 선언은 컴퓨터 메모리에 함수를 저장하는 것
function func() {
  console.log("Hello, New world!");
}

// 변수 선언 및 호이스트(Variable Declaration and Hoist)
// 변수 선언만 호이스팅 되고 할당은 호이스팅 안됨 => undefined가 됨
// console.log(MyName);

// // var변수 선언
// var MyName = "석정일";

// var MyName;

// console.log(MyName);

// MyName = "석정일";

// let 변수 선언(호이스팅 안됨 오류)
// console.log(MyName);
// let MyName = "석정일";

// 함수 호이스트 활용
run();
goHome();
eatTheLunch();
doStudying();

function run() {
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("running");
  console.log("finally i arrive in there.");
}

function goHome() {
  run();
  console.log("Home, sweet home");
}

function eatTheLunch() {
  console.log("eat the sandwitch");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("Yum");
  console.log("good at taste!");
}

function doStudying() {
  console.log("I will study now");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("now i'm tired");
}

// -----------------------------------------
// 함수를 만드는 2가지 방법
// -----------------------------------------
// 1. 함수 선언(function declaration):
//  - function으로 시작
//  - 호이스트 현상
// 2. 함수 표현식(function expression):
//  - let, var, const 변수로 시작
//  - 호이스트 현상 없음
// -----------------------------------------

// 함수 선언
function look(who) {
  console.log(who + "를(을) 보다");
}

// 함수 표현식
// JS는 함수를 값으로 평가
// let look = function() {}
// 이런식으로도 가능

let 보다 = function (who) {
  console.log(who + "를(을) 보다");
};

보다("공무원");
look("선생님");

let doSomething = function something() {
  console.log(something);
};

doSomething();
