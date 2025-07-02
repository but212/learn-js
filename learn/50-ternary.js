// const user = {
//   name: "석정일",
//   age: 23,
//   role: "손님",
// };
// // 삼항연산자
// {
//   user.role === "관리자"
//     ? console.log(user.name + "님은 관리자이므로 접근이 가능합니다.")
//     : console.warn(user.name + "님은 관리자가 아니므로 접근이 불가능합니다.");
// }

// // 조건문 vs 조건식
// {
//   {
//     // 조건문: 값 반환 x 간접적 할당으로만 대입가능
//     let message = "";
//     if (user.role === "관리자") {
//       message = user.name + "님은 관리자이므로 접근이 가능합니다.";
//     } else {
//       message = user.name + "님은 관리자가 아니므로 접근이 불가능합니다.";
//     }
//     console.log(message);
//   }
//   {
//     // 조건식: 값 반한 O 직접 할당 가능
//     let message =
//       user.role === "관리자"
//         ? user.name + "님은 관리자이므로 접근이 가능합니다."
//         : user.name + "님은 관리자가 아니므로 접근이 불가능합니다.";
//     console.log(message);
//   }
// }

// // 조건이 다수인 경우, 조건식 vs 조건문
// {
//   // 조건문
//   {
//     let warningMessage = "";
//     if (user.age >= 19) {
//       warningMessage = "19세 이상이므로 출입이 가능합니다. 😄";
//       if (user.role === "관리자") {
//         warningMessage += "\n관리자이므로 모든 접근이 가능합니다. ✅";
//       } else {
//         warningMessage +=
//           "\n관리자가 아니므로 모든 접근을 사용할 수 없습니다. ❌";
//       }
//     } else {
//       warningMessage = "19세 미만이므로 출입이 불허합니다. ⚠️";
//     }
//     console.log(warningMessage);
//   }
//   // 조건식
//   {
//     let warningMessage =
//       user.age >= 19
//         ? `19세 이상이므로 출입이 가능합니다. 😄\n` +
//           (user.role === "관리자"
//             ? "관리자이므로 모든 접근이 가능합니다. ✅"
//             : "관리자가 아니므로 모든 접근을 사용할 수 없습니다. ❌")
//         : "19세 미만이므로 출입이 불허합니다. ⚠️";
//     console.log(warningMessage);
//   }
// }

// // 실습 1
// {
//   {
//     function getEntranceFeeByAgeWithTernary(age) {
//       if (age < 0) {
//         return 6000;
//       }
//       // [13 > age: 2000, 65 > age: 5000, 65 < age: 3000]
//       return age < 13 ? 2000 : age < 65 ? 5000 : 3000;
//     }
//     const entranceFees = [
//       getEntranceFeeByAgeWithTernary(21),
//       getEntranceFeeByAgeWithTernary(10),
//       getEntranceFeeByAgeWithTernary(73),
//     ];
//     console.log(entranceFees); // [5000, 2000, 3000]
//   }
//   {
//     function getEntranceFeeByAgeWithStatement(age) {
//       if (age < 0) {
//         return null;
//       } else if (age < 13) {
//         return 2000;
//       } else if (age < 65) {
//         return 5000;
//       } else if (age > 65) {
//         return 3000;
//       }
//     }
//     const entranceFees = [
//       getEntranceFeeByAgeWithStatement(21),
//       getEntranceFeeByAgeWithStatement(10),
//       getEntranceFeeByAgeWithStatement(73),
//     ];
//     console.log(entranceFees); // [5000, 2000, 3000]
//   }
// }

// 실습 2 (조건문 : 조건이 많으니까)
{
  function getGradeByScore(score) {
    let grade;

    // 90 ~ 100 A
    if (score >= 90) {
      grade = "A";
    }
    // 80 ~ 89 B
    else if (score >= 80) {
      grade = "B";
    }
    // 70 ~ 79 C
    else if (score >= 70) {
      grade = "C";
    }
    // 60 ~ 69 D
    else if (score >= 60) {
      grade = "D";
    }
    // 0 ~ 59 F
    else {
      grade = "F";
    }

    return grade;
  }

  const grades = [
    getGradeByScore(75),
    getGradeByScore(82),
    getGradeByScore(96),
    getGradeByScore(50),
  ];

  console.log(grades); // ['C', 'B', 'A', 'F']
}
