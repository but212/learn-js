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
 * @returns
 * year, month, day를 조합해서 다이어리 시작에 쓰일 문자열을 반환
 */
function write_diary_init(year, month, day) {
  let foot_add = "일에 쓰인 일기입니다.";
  return year + "년 " + month + "월 " + day + foot_add;
}

console.log(write_diary_init(2025, 6, 10));
