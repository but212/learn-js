// // 속성 할당 단축
// {
//   const nickname = "David";
//   const cellphone = "iPhone 14";
//   const instructor = {
//     nickname,
//     cellphone,
//   };
//   console.log(instructor);
// }

// // 메서드 단축
// {
//   const instructor = {
//     nickname: "David",
//     cellphone: "iPhone 14",
//     location: "수원",
//     introduction: function () {
//       let { nickname: name, phone, location } = this;
//       console.log(name, phone, location);
//     },
//   };
//   instructor.introduction();
// }

// // 계산된 속성 이름
// {
//   let methodName = "calculateMethod";
//   let property = "currentTime";
//   const o = {
//     [property]: "00:09:21",
//     [methodName]() {
//       console.log(`${methodName} time =`, this.currentTime);
//     },
//   };
//   o[methodName]();
//   console.log(o.currentTime);
//   console.log(o[property]);
//   // 객체 속성에 접근하는 표기법
//   // - 점(.) 문법
//   // - 대괄호([]) 문법
//   // o.record
//   // o['record']()
// }
