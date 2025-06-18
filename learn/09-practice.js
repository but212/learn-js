/**
 * 로그메시지임을 알리며 콘솔에 출력하는 함수
 * @param {String} logMessage 출력하고자 하는 로그 메시지
 */
function logger(logMessage) {
  console.log("로그 메시지: " + logMessage);
}

logger("실습을 통한 연습은 언제나 옳습니다. 😊");

/**
 * 픽셀을 rem단위로 바꾸고 "'x'rem"이라는 형태의 String으로 반환하는 함수
 * @param {Number} px 대상 픽셀
 * @returns {String} 픽셀을 rem 단위로 바꾸고 후미에 rem이라는 문자를 추가해서 반환
 */
function pxToRem(px) {
  return px / 16 + "rem";
}

/**
 * rem을 픽셀 단위로 바꾸고 "'x'px" 형태의 String의 값을 반환하는 함수
 * @param {Number} rem 대상 rem
 * @returns {String} rem을 픽셀로 바꾸고 후미에 px을 붙인 문자열
 */
function remToPx(rem) {
  return rem * 16 + "px";
}

console.log(pxToRem(16));
console.log(pxToRem(24));
console.log(remToPx(1));
console.log(remToPx(1.5));

/**
 * 피자의 총 가격을 계산하는 함수
 * @param {Number} priceOfOnePizza 피자 한판 가격
 * @param {Number} pizzaCount 피자갯수
 * @returns {Number} 피자의 총 가격
 */
function getPizzaPrice(priceOfOnePizza, pizzaCount) {
  return priceOfOnePizza * pizzaCount;
}

console.log("피자 총 가격은 " + getPizzaPrice(24000, 3) + "원");

const PARKING_FEE_PER_HOUR = 1000;

/**
 * 시간을 알려주면 주차요금을 반환하는 함수
 * @param {Number} parkingHour 주차 시간
 * @returns {Number} 주차 시간에 따른 주차요금
 */
function getParkingFee(parkingHour) {
  return parkingHour * PARKING_FEE_PER_HOUR;
}

console.log("주차요금은 " + getParkingFee(10) + "원 입니다.");

/**
 * 짝수인지 아닌지 알려주는 함수(true: 짝수, false: 홀수)
 * @param {Number} num 대상 숫자
 * @returns {Boolean} 짝수인지 여부
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * 홀수인지 아닌지 알려주는 함수(true: 홀수, false: 짝수)
 * @param {Number} num 대상 숫자
 * @returns {Boolean} 홀수인지 여부
 */
function isOdd(num) {
  return !isEven(num);
}

console.log(isEven(50));
console.log(isEven(51));
console.log(isOdd(50));
console.log(isOdd(51));

/**
 * 생일 축하 문구를 만드는 함수
 * @param {String} name 생일 축하받을 사람의 이름
 * @returns {String} 이름과 함께 있는 생일 축하 문구
 */
function congratuationForBirthday(name) {
  return "생일 축하합니다. " + name + "님 💚💙";
}

console.log(congratuationForBirthday("석정일"));

// const DAYS_OF_YEAR = 365;

// /**
//  * 신년까지 남은 날짜 계산하는 함수
//  * @param {Number} currentDaySpend 신년에서 지난 날짜
//  * @returns {Number} 신년까지 남은 날짜
//  */
// function calcToNewYearsDay(currentDaySpend) {
//   return DAYS_OF_YEAR - currentDaySpend;
// }

const VAT_RATIO = 0.1;

/**
 * 부가가치세 포함 가격을 계산하는 함수
 * @param {Number} price 원래 가격
 * @returns {Number} 부가가치세 포함 가격
 */
function calcPriceWithVAT(price) {
  return price + price * VAT_RATIO;
}

console.log("라면의 VAT 포함 가격은 " + calcPriceWithVAT(800) + "원 입니다.");

const ADULT_AGE = 19;

/**
 * 성인인지 아닌지 알려주는 함수
 * @param {Number} age 대상의 나이
 * @returns {Boolean} 이 나이의 사람이 성인인지 아닌지 여부
 */
function isAdult(age) {
  return age >= ADULT_AGE;
}

console.log(isAdult(25));
console.log(isAdult(19));
console.log(isAdult(18));
