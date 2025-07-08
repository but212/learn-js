// const fruits = "키위 사과 배 참외 키위 망고 파인애플 키위".split(" ");

// // 명령적 코드
// {
//   console.log(1 + 1); // 2
//   let kiwiCount = 0;
//   for (let fruit of fruits) {
//     if (fruit === "키위") kiwiCount += 1;
//   }
//   console.log(kiwiCount);
// }

// // 선언적 코드
// {
//   let kiwiCount = calcuateKiwiCount(fruits);
//   console.log(kiwiCount); // 3
//   function calcuateKiwiCount(fruits) {
//     return fruits.filter((item) => item === "키위").length;
//   }
// }

// {
//   const timetable = {
//     월요일: ["수학", "영어", "체육"],
//     화요일: ["국어", "사회", "음악"],
//     수요일: ["과학", "미술", "수학"],
//     목요일: ["영어", "국어", "체육"],
//     금요일: ["사회", "과학", "음악"],
//   };
//   // 과목별 갯수를 포함하는 객체 생성
//   // reduce() 활용
//   const subjectCounts = Object.values(timetable).reduce((acc, daySubjects) => {
//     daySubjects.forEach((subject) => {
//       acc[subject] = (acc[subject] || 0) + 1;
//     });
//     return acc;
//   }, {});
//   console.log(subjectCounts);
// }

// --------------------------------------------------------------------------
// 📌 실습
// --------------------------------------------------------------------------

// 출석 체크된 학생 수 세기
// 출석한 학생만 골라서 출석자 수를 계산해 콘솔 패널에 출력해보세요.
// {
//   const students = [
//     { id: 1, name: "김지훈", email: "jihun.kim@example.com", isPresent: true },
//     {
//       id: 2,
//       name: "박아름",
//       email: "areum.park@example.com",
//       isPresent: false,
//     },
//     { id: 3, name: "이민수", email: "minsu.lee@example.com", isPresent: true },
//     { id: 4, name: "최수빈", email: "subin.choi@example.com", isPresent: true },
//     {
//       id: 5,
//       name: "정하늘",
//       email: "haneul.jung@example.com",
//       isPresent: false,
//     },
//     {
//       id: 6,
//       name: "윤다현",
//       email: "dahyun.yoon@example.com",
//       isPresent: true,
//     },
//     { id: 7, name: "한지민", email: "jimin.han@example.com", isPresent: false },
//     { id: 8, name: "오세영", email: "seyoung.oh@example.com", isPresent: true },
//     { id: 9, name: "서윤호", email: "yunho.seo@example.com", isPresent: true },
//     {
//       id: 10,
//       name: "배예진",
//       email: "yejin.bae@example.com",
//       isPresent: false,
//     },
//   ];
// // 1. 명령형 코드
// {
//   let acc = 0;
//   students.forEach((student) => {
//     acc = acc + (student.isPresent ? 1 : 0);
//   });
//   console.log(acc);
// };
// // 2. 선언적 코드
// {
//   const acc = students.filter(({ isPresent }) => isPresent).length;
//   console.log(acc);
// }
// }

// // 판매 가능한 상품명 출력
// // 재고가 있는 상품만 걸러내 상품명을 콘솔 패널에 출력하세요.
// {
//   const products = [
//     { id: 1, name: "파운데이션", stock: 5, price: 32000 },
//     { id: 2, name: "블러셔", stock: 0, price: 17000 },
//     { id: 3, name: "아이섀도우", stock: 12, price: 22000 },
//     { id: 4, name: "립스틱", stock: 3, price: 15000 },
//     { id: 5, name: "브러시 세트", stock: 7, price: 28000 },
//     { id: 6, name: "아이라이너", stock: 4, price: 13000 },
//     { id: 7, name: "마스카라", stock: 2, price: 16000 },
//     { id: 8, name: "컨실러", stock: 6, price: 21000 },
//     { id: 9, name: "하이라이터", stock: 0, price: 18000 },
//     { id: 10, name: "쿠션 팩트", stock: 8, price: 35000 },
//   ];
//   console.log(products);
//   // // 1. 명령형 코드
//   // {
//   // }
//   // 2. 선언적 코드
//   {
//     const numberItemsInStock = products.filter(({ stock }) => stock > 0);
//     console.log(numberItemsInStock);
//   }
// }

{
  /**
   * 배열에서 조건에 따라 걸러서 반환하는 함수
   * @param {T[]} array 대상 배열
   * @param {Function} callback 조건을 실행하는 콜백함수
   * @returns {T[]} 조건으로 걸러진 배열
   */
  function filter(array, callback) {
    // 명령형 코드
    const filteredArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      callback(item, index, array) ? filteredArray.push(item) : null;
      // console.log('참인 아이템 =', item)
    }

    return filteredArray;
  }

  const numbers = [2, 9, 21, 34];

  // const result = filter(numbers, (item, index, array) => {
  //   console.log(item)
  //   console.log(index)
  //   console.log(array)
  // })

  const result = filter(numbers, (n) => n > 5 && n < 30);
  console.log(result); // [9, 21]
}

{
  /**
   * 배열에 대하여 매핑하는 함수
   * @param {Array} likeArray 대상 배열 변수
   * @param {Function} callback 각 아이템에 적용할 콜백함수
   * @returns {Array} 적용 후 결과 배열
   */
  function map(likeArray, callback) {
    let result = [];
    for (let index = 0; index < likeArray.length; index += 1) {
      const item = callback(likeArray[index], index, likeArray);
      result.push(item);
    }
    return result;
  }

  const numbers = [2, 9, 21, 34];

  const result = map(numbers, (n) => n ** 2);
  console.log(result); // [4, 81, 441, 1156]
}
