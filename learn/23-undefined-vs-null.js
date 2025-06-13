// --------------------------------------------------------------------------
// 📌 undefined vs null
// --------------------------------------------------------------------------

let data;
console.log(data); // undefined

function fn() {}
console.log(fn()); // undefined

const 소드마스터 = {
  이름: "요하네스 리히테나워",
  무기: null,
};

console.log(소드마스터.무기); // null

// 소드마스터가 무기를 획득했습니다.
소드마스터.무기 = "츠바이헨더";
console.log(소드마스터.무기); // '츠바이헨더'

console.log(null === undefined); // false
console.log(null == undefined); // true
