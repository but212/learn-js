/*
 *  function make_some_ramen(pot, ramen_specify, additional_ingrediant) {
 *      let result_ramen = boil_the_water(pot);
 *      result_ramen += additional_ingrediant.spring_onion;
 *      result_ramen += ramen_specify.soup;
 *      result_ramen += ramen_specify.noddles;
 *      return result_ramen;
 *  }
 */
function drawWater() {
  console.log("빈 양동이 가져오기");
  console.log("양동이 들고 우물로 이동");
  console.log("우물에서 물 길러오기");
  console.log("집으로 귀가");
  console.log("물 길어오기 완료!");
}

drawWater();

/**
 * 다이어리 시작에 쓰일 문자열을 반환하는 함수
 *
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 * @param {String} where
 * @returns {String}
 * year, month, day를 조합해서 다이어리 시작에 쓰일 문자열을 반환
 */
function write_diary_init(year, month, day, where) {
  let foot_add = "일에 쓰인 일기입니다.";
  return (
    year +
    "년 " +
    month +
    "월 " +
    day +
    foot_add +
    " " +
    where +
    "에 있었습니다."
  );
}

console.log(write_diary_init(2025, 6, 10, "롯데타워"));
console.log(write_diary_init(2025, 6, 11, "수원화성"));

// 예약어는 함수이름이 될 수 있음: return, let 등

/**
 * 인자에 쓰인 두 숫자를 합쳐주는 함수
 * @param {Number} Num1 첫 번쨰 숫자
 * @param {Number} Num2 두 번째 숫자
 * @returns {Number} 두 숫자의 합
 */
function sumNumber(Num1, Num2) {
  return Num1 + Num2;
}

/**
 * sumNumber를 콘솔 출력하는 함수
 * @param {Number} Num1 첫 번째 숫자
 * @param {Number} Num2 두 번째 숫자
 */
function printSumNumber(Num1, Num2) {
  console.log("첫 번째 수:", Num1);
  console.log("두 번째 수:", Num2);
  console.log("두 수 의 합:", sumNumber(Num1, Num2));
}

printSumNumber(19, 19);

// 함수는 실행될 수 있다.
// 함수는 실행되면 결괏값을 반환한다.
// 계산된 값을 반환할 때 return 키워드를 사용한다.

/**
 * 인자로 전달된 Num1에서 Num2를 뺴는 함수
 * @param {Number} Num1 첫 번째 숫자
 * @param {Number} Num2 두 번째 숫자
 * @returns Num1에서 Num2를 뺸 숫자
 */
function subNumber(Num1, Num2) {
  // 지역변수로 계산값 할당
  let ret = Num1 - Num2;

  // 결괏값 반환
  return ret;
}

let SubNum = subNumber(30, 3);
console.log("빼기 결괏값:", SubNum);

/**
 * 인자로 받은 Num1과 Num2를 곱하는 함수
 * @param {Number} Num1 첫 번째 숫자
 * @param {Number} Num2 두 번째 숫자
 * @returns {Number} 인자 두 수를 곱한 수
 */
function multiplyNum(Num1, Num2) {
  return Num1 * Num2;
}
