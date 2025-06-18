// ----------------------------------------
// 배열(Array)
// ----------------------------------------

// 리터럴 방식
const shoppingBasket = ["대파", "계란", "두부", "시금치", "양파", "케첩"];
console.log(shoppingBasket);

const numberOfItems = shoppingBasket.length;

console.log("장바구니 아이템 갯수: ", numberOfItems);

// 객체 생성자 메서드 방식
const numerics = Array("zero", "one", "two", "three", "four", "five");

console.log(numerics);

// 이 둘은 동일
console.log(shoppingBasket[0]);
console.log(shoppingBasket.at(0));
// 대신 at은 음수 인덱스가 가능 -1 === n - 1 === last
console.log(shoppingBasket.at(-1));

// const onlyOneNumberListLiteral = [99];
// console.log(onlyOneNumberListLiteral.length);
// const onlyOneNumberList = new Array(99);
// console.log(onlyOneNumberList.length);
// const onlyOneNumberListTwoArg = new Array(99, 100);
// console.log(onlyOneNumberListTwoArg.length);
