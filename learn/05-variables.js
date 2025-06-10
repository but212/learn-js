// ----------------
// 변수(Variable)
// ----------------

// ----------------
// 의미없는 코드
// ----------------

// console.log("변수");
// console.log(4 + 27 + "개");

// ----------------
// 의미있는 코드
// ----------------

// 처음 사과의 갯수
let apples_for_now = 4;
console.log("처음 가진 사과의 갯수: " + apples_for_now);

// 추가로 구매한 사과의 갯수
let apples_additional = 27;
console.log("추가로 구매한 사과의 갯수: " + apples_additional);

// 현재 내가 가진 사과의 갯수(변수에 "추가 대입"(add and assign)을 통해 처리)
apples_for_now += apples_additional;
console.log("현재 내가 가진 사과의 갯수: " + apples_for_now);

// 잘못된 변수 이름: 이렇게 쓰면 에러남
// 숫자로 시작할 수 없음
// let 1apple = 5;
// 하이픈(-) 사용 불가
// let apple-count = 10;
// 예약어 사용 불가
// let let = 15;
// 공백 사용 불가
// let my apple = 20;
// 특수문자($ 제외) 사용 불가
// let apple^ = 25;
// 예약어 사용 불가
// let let = 25;
// let return = 25;

// ----------------
// 값(Value)
// ----------------


let add_buy_apples; // 기본으로 undefined
console.log("add_buy_apples: " + add_buy_apples);

add_buy_apples = 27;
console.log("add_buy_apples: " + add_buy_apples);

// ----------------
// 대입 연산자
// ----------------

let x = 27; // 수학적 정의인 "Eq(x, 27)"이 아닌 x라는 공간에 27을 넣는다는 의미
console.log("x: " + x);


// ----------------
// let 변수 vs var 변수
// ----------------

// 블록 스코프(block scope)
{
    var my_name;
    console.log("my_name: " + my_name);
    
    my_name = "Sik jing yat";
    console.log("my_name in cantonese: " + my_name);
}

my_name = "석정일";
console.log("my_name in korean: " + my_name);

{
    let my_name;
    console.log("my_name: " + my_name);
    
    my_name = "Sik jing yat";
    console.log("my_name in cantonese: " + my_name);
}

my_name = "석정일";
console.log("my_name in korean: " + my_name);

// ----------------
// let 변수 vs const 상수
// ----------------

const my_name_cantonese = "Sik jing yat";
console.log("my_name in cantonese: " + my_name_cantonese);

// const는 재할당 불가능
// my_name_cantonese = "석정일";
// console.log("my_name in korean: " + my_name_cantonese);
