// 참조에 대해서
// 객체의 대입은 참조다.
// 이 예제에서 obj1과 obj2는 같은 공간의 참조한 것

let obj1 = {};
let obj2 = obj1;
obj2.food = "햄버거";
console.log(obj1);

// 객체 비교는 참조의 비교다.
const user1 = { 이름: "석정일" };
const user2 = { 이름: "석정일" };
console.log(user1 === user2); // false

const user3 = user2; // user2가 user3에 참조됨
console.log(user2 === user3); // true
