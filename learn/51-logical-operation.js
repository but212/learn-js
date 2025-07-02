// {
//   let isLightGreen = false;
//   let noCarsAround = false;
//   if (isLightGreen || noCarsAround) {
//     walk();
//   } else {
//     stop();
//   }
//   function walk() {
//     console.log("건너라");
//   }
//   function stop() {
//     console.log("멈춰라");
//   }
// }

// and 연산자를 활용한 함수 실행
// {
//   let x, y, z;
//   x = "엑-스";
//   y = NaN;
//   z = Math.random() > 0.5;
//   console.log(x && z && y); // false or NaN
//   let result1 = x && play();
//   let result2 = y && study;
//   console.log("1. " + result1);
//   console.log("2. " + result2);
//   function study() {
//     return "우리는 함께 공부한다.";
//   }
//   function play() {
//     return "우리는 함께 논다.";
//   }
// }

// or 연산자를 활용한 함수실행
// {
//   const user = {
//     name: "석정일",
//     email: "wjddlf211@naver.com",
//     isSigned: false,
//   };
//   user.isSigned || signIn();
//   function signIn() {
//     console.log("로그인 합니다.");
//   }
//   function signOut() {
//     console.log("로그아웃 합니다.");
//   }
// }

// 실습 1
// 다음 조건을 모두 만족해야 영화관에 입장할 수 있습니다.
// - 18세 이상 관람 가능
// - 신분증 필수
// canWatchMovie 함수 코드를 작성하세요. (논리 연산자 활용)
{
  function canWatchMovie(person) {
    const result = person.age > 17 && person.idCard && "관람 허용";

    if (!result) {
      return "관람 불가";
    }

    return result;
  }

  const results = [
    canWatchMovie({ age: 21, idCard: true }),
    canWatchMovie({ age: 15, idCard: false }),
  ];

  console.log(results); // ['관람 허용', '관람 불가']
}

// 실습 2
// 다음 중 하나라도 만족하면 우산을 가져갑니다.
// - 비가 온다.
// - 일기예보에 비 소식이 있다.
// needUmbrella 함수 코드를 작성하세요. (논리 연산자 활용)
{
  function needUmbrella(weather) {
    return weather.isRaining || weather.forecastRain;
  }
  const results = [
    needUmbrella({ isRaining: false, forecastRain: true }),
    needUmbrella({ isRaining: false, forecastRain: false }),
  ];
  console.log(results); // [true, false]
}
