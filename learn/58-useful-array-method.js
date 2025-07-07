// {
//   const people = [
//     { id: 1, name: "지훈" },
//     { id: 2, name: "아름" },
//     { id: 3, name: "한영" },
//   ];

//   //   let foundIndex = people.findIndex((p) => {
//   //     return p.name === "아름";
//   //   }); // 1
//   let foundIndex = people.findIndex((p) => {
//     return p.name === "다름";
//   }); // -1

//   console.log(foundIndex);
// }

// // find() 메서드
// {
//   const people = [
//     { id: 1, name: "지훈" },
//     { id: 2, name: "아름" },
//     { id: 3, name: "한영" },
//   ];
//   const hanyuoung = people.find((person) => person.name === "반영");
//   console.log(hanyuoung);
// }

// // filter 메서드
// {
//   const people = [
//     { id: 1, name: "최지훈" },
//     { id: 2, name: "박아름" },
//     { id: 3, name: "박한영" },
//     { id: 4, name: "강주선" },
//     { id: 5, name: "김박군" },
//   ];
//   // 사람들 중에 성이 박으로 시작하는 사람들(집합, 배열)을 거르고 싶어요!
//   // 걸러낸다. 필터링(filtering)한다.
//   const parkPersons = people.filter((person) => person.name.startsWith("박"));
//   console.log(parkPersons);
// }

// // map 메서드
// {
//   const people = [
//     { id: 1, name: "최지훈" },
//     { id: 2, name: "박아름" },
//     { id: 3, name: "박한영" },
//     { id: 4, name: "강주선" },
//     { id: 5, name: "김박군" },
//   ];
//   const newPerson = people.map((p) => {
//     // 배열 안에 객체는 참조 타입이기 때문에
//     // 복사해야 한다.
//     const newP = { ...p };
//     newP.job = "프론트엔드 개발자";
//     return newP;
//   });
//   console.log(newPerson);
//   console.log(people);
//   const numbers = [2, 6, 8];
//   // const doubleNumbers = [4, 36, 64]
//   const doubleNumbers = numbers.map((n) => n ** 2);
//   console.log(doubleNumbers);
//   console.log(numbers);
// }

// // forEach vs map
// {
//   // 리턴값이 없음
//   const numbers = [3, 6, 9];
//   const forEachResult = numbers.forEach((number) => {
//     return number ** 2;
//   });
//   console.log(forEachResult); // undefined
//   // 리턴값을 쓸수 있음
//   const mapResult = numbers.map((number) => {
//     return number ** 2;
//   });
//   console.log(mapResult);
// }

// // foreach vs map의 작동방식과 유사한 함수
// {
//   const numbers = [2, 5, 7, 8, 12, 32, 44, 59];
//   let total = sum(...numbers);
//   console.log(total);
//   loop(...numbers);
//   // map과 유사
//   function sum(...numbers) {
//     let result = 0;
//     numbers.forEach((n) => {
//       result += n;
//     });
//     return result;
//   }
//   // forEach와 유사
//   function loop(...numbers) {
//     numbers.forEach((n) => {
//       console.log(n);
//     });
//   }
// }

// // 용도별 함수 작성 방법 비교: forEach() vs. map()
// {
//   const list = ["하나", "둘", "셋"];
//   const forEachResult = forEach(list, (item, index, list) => {
//     console.log(list);
//     console.log(index, item);
//   });
//   console.log({ forEachResult });
//   const mapResult = map(list, (item, index, list) => {
//     console.log(list);
//     console.log(index, item);
//     return item.repeat(2);
//   });
//   console.log({ mapResult });
//   console.log({ list });
//   function forEach(list, callback) {
//     for (let index = 0; index < list.length; index = index + 1) {
//       const item = list.at(index);
//       callback(item, index, list);
//     }
//     // return undefined
//   }
//   function map(list, callback) {
//     const mapResult = [];
//     for (let index = 0, length = list.length; index < length; index += 1) {
//       const item = list.at(index);
//       mapResult.push(callback(item, index, list));
//     }
//     return mapResult;
//   }
// }

// // 배열 객체의 메서드 체이닝
// {
//   const numbers = ["one", "two", "three"];
//   const doubleNumbers = numbers
//     .filter((n) => n !== "one")
//     .map((n) => n.repeat(2))
//     .map((n) => n.toUpperCase());
//   console.log(doubleNumbers);
//   // const filterNumbers = numbers.filter(n => n > 1)
//   // console.log(filterNumbers) // [2, 3]
//   // const squartNumbers = filterNumbers.map(n => n ** 2)
//   // console.log(squartNumbers) // [4, 9]
// }

// // GSAP 메서드 체이닝
// {
//   /* global gsap */
//   const tl = gsap.timeline({
//     defaults: { opacity: 0, y: -100, scale: 0 },
//   });
//   tl.to("h1", { y: 0, scale: 1 }) // Timeline { to, from, set, call, ... }
//     .to("p", { y: 0, scale: 1 }, "+=0.4");
// }

{
  const users = [
    { id: 1, name: "지수", location: "서울", nationality: "대한민국" },
    { id: 2, name: "유키", location: "오사카", nationality: "일본" },
    { id: 3, name: "아리아", location: "뉴욕", nationality: "미국" },
    { id: 4, name: "유나", location: "부산", nationality: "대한민국" },
    { id: 5, name: "마테오", location: "방콕", nationality: "태국" },
    { id: 6, name: "올리비아", location: "토론토", nationality: "캐나다" },
    { id: 7, name: "노아", location: "베를린", nationality: "독일" },
    { id: 8, name: "민지", location: "인천", nationality: "대한민국" },
    { id: 9, name: "에이든", location: "파리", nationality: "프랑스" },
    { id: 10, name: "현지", location: "대구", nationality: "대한민국" },
    { id: 11, name: "루카스", location: "도쿄", nationality: "일본" },
    { id: 12, name: "아일라", location: "로스앤젤레스", nationality: "미국" },
    { id: 13, name: "은우", location: "광주", nationality: "대한민국" },
    { id: 14, name: "밀라", location: "하노이", nationality: "베트남" },
    { id: 15, name: "지민", location: "제주", nationality: "대한민국" },
    { id: 16, name: "히로", location: "교토", nationality: "일본" },
    { id: 17, name: "엠마", location: "시카고", nationality: "미국" },
    { id: 18, name: "유토", location: "나고야", nationality: "일본" },
    { id: 19, name: "클로이", location: "시드니", nationality: "호주" },
    { id: 20, name: "지원", location: "대전", nationality: "대한민국" },
    { id: 21, name: "레비", location: "런던", nationality: "영국" },
    { id: 22, name: "서진", location: "수원", nationality: "대한민국" },
    { id: 23, name: "유키", location: "후쿠오카", nationality: "일본" },
    { id: 24, name: "메이슨", location: "멜버른", nationality: "호주" },
    { id: 25, name: "하나", location: "상하이", nationality: "중국" },
  ];

  //   // 실습 1. 거주지 일치, 인덱스 출력
  //   (() => {
  //     let location = "수원";
  //     let foundMatchIndex = users.findIndex((user) => user.location === location);
  //     const matchIndexUser = users.at(foundMatchIndex);
  //     console.log(matchIndexUser);
  //   })();

  //   // 실습 2
  //   {
  //     let nationality = "아프리카";
  //     const foundUser = users.find((user) => user.nationality === nationality);
  //     console.log(foundUser ? foundUser.name : "그런 사람 없습니다.");
  //   }

  // 실습 3. 국적 일치, 사용자 그룹 출력
  {
    let nationality = "대한민국";
    const foundUser = users.filter((user) => user.nationality === nationality);
    console.log(JSON.stringify(foundUser));
  }
}
