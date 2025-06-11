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
