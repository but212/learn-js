let predicate = 10;
let value = 8;

if (predicate == value) {
  console.log("it is true");
} else {
  console.log("it is false");
}

const TRAFFIC_LIGHT = ["red", "yellow", "green"];

function walk_in_sidewalk(light) {
  console.log("it is " + light + " light");
  if (light === TRAFFIC_LIGHT[2]) {
    console.log("let's walk");
  } else {
    console.log("don't walk");
  }
}

walk_in_sidewalk("red");
walk_in_sidewalk("yellow");
walk_in_sidewalk("green");

// 프로그래밍 조건문

// "참 같은" 값은 true
// "거짓 같은" 값은 false
// 거짓으로 여겨지는 값
// false
// 0
// ''
// null
// undefined
// NaN(숫자 + null)

// 음수는 참임
// 빈 객체도 참임
