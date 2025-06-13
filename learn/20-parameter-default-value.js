// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function get_money(price, unit) {
  const VALID_UNITS = {
    $: "$",
    달러: "$",
  };

  if (VALID_UNITS[unit]) {
    return VALID_UNITS[unit] + price;
  }
  return "₩" + price;
}

let money_kr = get_money(5000 + 2000 + 1500 + 500); // '10000원'
let money_us = get_money(10.5 + 90 - 20 + 0.25, "$"); // '$80.75'

console.log(money_kr);
console.log(money_us);
