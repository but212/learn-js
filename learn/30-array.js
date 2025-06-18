// ----------------------------------------
// 배열(Array)
// ----------------------------------------

// // 리터럴 방식
// const shoppingBasket = ["대파", "계란", "두부", "시금치", "양파", "케첩"];
// console.log(shoppingBasket);

// const numberOfItems = shoppingBasket.length;

// console.log("장바구니 아이템 갯수: ", numberOfItems);

// // 객체 생성자 메서드 방식
// const numerics = Array("zero", "one", "two", "three", "four", "five");

// console.log(numerics);

// // 이 둘은 동일
// console.log(shoppingBasket[0]);
// console.log(shoppingBasket.at(0));
// // 대신 at은 음수 인덱스가 가능 -1 === n - 1 === last
// console.log(shoppingBasket.at(-1));

// // 배열 수정
// shoppingBasket[2] = "순두부";
// console.log("새 장바구니 = ", shoppingBasket);

// const onlyOneNumberListLiteral = [99];
// console.log(onlyOneNumberListLiteral.length);
// const onlyOneNumberList = new Array(99);
// console.log(onlyOneNumberList.length);
// const onlyOneNumberListTwoArg = new Array(99, 100);
// console.log(onlyOneNumberListTwoArg.length);

// ----------------------------------------
// 배열(Array)
// ----------------------------------------

// 배열에 대해 이해할 수 있는 연습을 진행합니다.
// 빈 배열을 생성합니다.
// 3개의 항목을 포함하는 배열을 작성합니다.

// instructors 배열에서 "야무" 항목을 가져와 yamoo9 변수에 할당합니다.
// instructors 배열에서 "슬비" 항목 값을 "김데레사"로 변경합니다.
// const instructors = ['야무', '슬비']

let emptyArray = [];
console.log(emptyArray);

let arr = [1, 2, 3];
console.log(arr);

const instructors = ["야무", "슬비"];
console.log(instructors);
let yamoo9 = instructors[0];
instructors[1] = "김데레사";
console.log(yamoo9);
console.log(instructors);
