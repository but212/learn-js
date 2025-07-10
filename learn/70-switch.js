// {
//   // switch 문
//   {
//     const day = Number(prompt("1 ~ 7 사이의 숫자를 입력해주세요."));
//     switch (day) {
//       case 1:
//         console.log("월요일");
//         break;
//       case 2:
//         console.log("화요일");
//         break;
//       case 3:
//         console.log("수요일");
//         break;
//       case 4:
//         console.log("목요일");
//         break;
//       case 5:
//         console.log("금요일");
//         break;
//       case 6:
//         console.log("토요일");
//         break;
//       case 7:
//         console.log("일요일");
//         break;
//       default:
//         console.log("1 ~ 7 사이의 숫자를 입력해주세요.");
//         break;
//     }
//   }
//   // if 문
//   {
//     const day = Number(prompt("1 ~ 7 사이의 숫자를 입력해주세요."));
//     if (day === 1) {
//       console.log("월요일");
//     } else if (day === 2) {
//       console.log("화요일");
//     } else if (day === 3) {
//       console.log("수요일");
//     } else if (day === 4) {
//       console.log("목요일");
//     } else if (day === 5) {
//       console.log("금요일");
//     } else if (day === 6) {
//       console.log("토요일");
//     } else if (day === 7) {
//       console.log("일요일");
//     } else {
//       console.log("1 ~ 7 사이의 숫자를 입력해주세요.");
//     }
//   }
// }

{
  // // 객체를 룩업테이블로 활용한 상수논리
  // {
  //   const hobbyList = {
  //     독서: () => console.log("독서를 좋아해요."),
  //     여행: () => console.log("여행을 좋아해요."),
  //     요리: () => console.log("요리를 좋아해요."),
  //     운동: () => console.log("운동을 좋아해요."),
  //     게임: () => console.log("게임을 좋아해요."),
  //     영화: () => console.log("영화를 좋아해요."),
  //     음악: () => console.log("음악을 좋아해요."),
  //     책: () => console.log("책 읽기를 좋아해요."),
  //   };
  //   let userHobby = prompt("당신의 취미는 무엇인가요?");

  //   if (hobbyList[userHobby]) {
  //     hobbyList[userHobby]();
  //   } else {
  //     console.log("그런 취미는 없네요.");
  //   }
  // }

  // switch 문
  {
    let userHobby = prompt("당신의 취미는 무엇인가요?");
    switch (userHobby) {
      case "독서":
        console.log("독서를 좋아해요.");
        break;
      case "여행":
        console.log("여행을 좋아해요.");
        break;
      case "요리":
        console.log("요리를 좋아해요.");
        break;
      case "운동":
        console.log("운동을 좋아해요.");
        break;
      case "게임":
        console.log("게임을 좋아해요.");
        break;
      case "영화":
        console.log("영화를 좋아해요.");
        break;
      case "음악":
        console.log("음악을 좋아해요.");
        break;
      case "책":
        console.log("책 읽기를 좋아해요.");
        break;
      default:
        console.log("그런 취미는 없네요.");
        break;
    }
  }

  // // if 방식
  // {
  //   let userHobby = prompt("당신의 취미는 무엇인가요?");
  //   if (userHobby === "독서") {
  //     console.log("독서를 좋아해요.");
  //   } else if (userHobby === "여행") {
  //     console.log("여행을 좋아해요.");
  //   } else if (userHobby === "요리") {
  //     console.log("요리를 좋아해요.");
  //   } else if (userHobby === "운동") {
  //     console.log("운동을 좋아해요.");
  //   } else if (userHobby === "게임") {
  //     console.log("게임을 좋아해요.");
  //   } else if (userHobby === "영화") {
  //     console.log("영화를 좋아해요.");
  //   } else if (userHobby === "음악") {
  //     console.log("음악을 좋아해요.");
  //   } else if (userHobby === "책") {
  //     console.log("책 읽기를 좋아해요.");
  //   } else {
  //     console.log("그런 취미는 없네요.");
  //   }
  // }
}
