// if … else 명령문을 사용하여 프로그램의 흐름을 제어하는 것은 매우 중요합니다.

// 1. 명호는 24살, 아현이는 27살, 재웅이는 41살입니다.
//     1. 성현이의 나이를 설정합니다.
//     2. 성현이가 명호보다 어린지 확인하여 적절한 로그가 출력되도록 구성합니다.
//     3. 성현이가 아현이보다 나이가 많은 지 확인한 후, 그렇다면 로그를 출력하도록 작성합니다.
//     4. 성현이가 재웅이보다 나이가 많은 지 확인하기 위한 코드 또한 작성해보세요.

const myeongho = {
  person_name: "명호",
  person_age: 24,
};

const ahyeon = {
  person_name: "아현",
  person_age: 27,
};

const jaewoong = {
  person_name: "재웅",
  person_age: 41,
};

const seonghyeon = {
  person_name: "성현",
  person_age: 31,
};

function young_mz(person_from, person_to) {
  if (person_from.person_age < person_to.person_age) {
    console.log(
      person_from.person_name +
        "이는 " +
        person_to.person_name +
        "보다 영하고 MZ합니다."
    );
  } else {
    console.log(
      person_from.person_name +
        "이는 " +
        person_to.person_name +
        "보다 영하지 않고 MZ하지 않습니다."
    );
  }
}

young_mz(seonghyeon, myeongho);
young_mz(seonghyeon, ahyeon);
young_mz(seonghyeon, jaewoong);

// 2. 다음 중, 거짓(falsey)으로 평가되는 것을 골라보세요.
//     1. `null` false
//     2. `true` true
//     3. `-1` true
//     4. `undefined` false
//     5. `0` false
//     6. `""`
//     7. `{}`
//     8. `false`
//     9. `" "`
//     10. `{ isHavingFun: true }`

/**
 * value가 falsey한지 알려주는 함수
 * @param {String} value_name_tag value의 이름을 담은 문자열
 * @param {*} value falsey한지 알려는 객체
 * @returns {String} falsey한지 아닌지 알려주는 로그 문자열
 */
function is_that_falsey(value_name_tag, value) {
  let ret = "value is " + value_name_tag;

  if (value) {
    ret = ret + ". it's not falsey";
  } else {
    ret = ret + ". it's falsey";
  }

  return ret;
}

console.log(is_that_falsey("null", null));
console.log(is_that_falsey("true", true));
console.log(is_that_falsey("-1", -1));
console.log(is_that_falsey("undefined", undefined));
console.log(is_that_falsey("0", 0));
console.log(is_that_falsey('""', ""));
console.log(is_that_falsey("{}", {}));
console.log(is_that_falsey("false", false));
console.log(is_that_falsey('" "', " "));
console.log(is_that_falsey("{ isHavingFun: true }", { isHavingFun: true }));
