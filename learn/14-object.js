// ----------------------------------------------
// 객체
// ----------------------------------------------

// 객체 리터릴
const coffee = {
  Volume: 600,
  Brand: "Starbucks",
  MenuName: "Americano",
};

console.log(coffee);

const myLaptopComputer = {
  Brand: "Samsung",
  Processor: "Intel i5",
  memory: 16,
  OS: "Windows 11",
  booting: function () {
    console.log("it's boot on");
  },
  playMusic: function (songName) {
    console.log("now i'm play " + songName);
  },
};

myLaptopComputer.booting();
myLaptopComputer["booting"]();
myLaptopComputer.playMusic("Gimme Shelter");
myLaptopComputer["playMusic"]("Angie");

const body = {
  "font-weight": 500,
  "font-family": "Helvetica Neue, sans-serif",
  margin: "40px",
};

console.log(body["font-weight"]);
console.log(body["font-family"]);
console.log(body["margin"]);
console.log(body.margin);

// 객체 생성 및 변경
// const heading1 = new Object();
// heading1['font-weight'] = 200;
// heading1['font-size'] = "1rem";

// 이걸 쉽게 하는 것이 객체리터럴
const heading1 = {
  "font-weight": 200,
  "font-size": "1rem",
};

// 함수는 객체이며 값으로 취급된다.
function sayHello() {
  return "안녕";
}

function greeting(primaryMsg, name) {
  console.log(primaryMsg() + " " + name);
}

greeting(sayHello, "석정일");

// 고차함수 - 함수는 값이므로 함수가 값이므로 변수에 저장, 매개변수로 전달, 다른 함수의 반환값이 될 수 있다.
// 일급객체 - 함수는 값이므로 함수가 매개변수로 전달될 수 있다.
