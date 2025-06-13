// --------------------------------------------------------------------------
// 📌 .toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
// --------------------------------------------------------------------------

// 타입 변경
// console.log("안녕".toString())
// console.log((1004).toString());
// console.log(true.toString())
// console.log(false.toString())
// console.log(undefined.toString()) // 에러
// console.log(null.toString()) // 에러

// 10진수 -> 2진수 변경
let n = 7;
console.log(n.toString(2)); // 111

// 10진수 -> 16진수 변경
let white = 255;
console.log(white.toString(2));
console.log(white.toString(8));
console.log(white.toString(16));

// 10진수를 2진수, 8진수, 16진수로 변경하는 함수 작성
function toBinary(value) {
  return value.toString(2);
}

function toOctal(value) {
  return value.toString(8);
}

function toHex(value) {
  return value.toString(16);
}

console.log(toBinary(255));
console.log(toOctal(255));
console.log(toHex(255));

// --------------------------------------------------------------------------
// 📌 parseInt(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// 단위 제거 parseInt나 parseFloat는 단위를 제거할 수 있다.
let margin_set = "42px";
console.log(parseInt(margin_set));
console.log(parseFloat("1.625rem"));

// 단위 제거 함수 작성
function remove_unit(number_with_unit) {
  return parseFloat(number_with_unit);
}

console.log(remove_unit("16px"));
console.log(remove_unit("1.5rem"));

// 2진수 문자열 -> 10진수 변경
console.log(parseInt("11", 2));
console.log(parseInt("10", 2));

// 16진수 문자열 -> 10진수 변경
console.log(parseInt("ff", 16));

// 16진수 문자열을 10진수로 변경하는 함수 작성
function hex_to_dec(num) {
  return parseInt(num, 16);
}

console.log(hex_to_dec("f0"));
console.log(hex_to_dec("ff"));
