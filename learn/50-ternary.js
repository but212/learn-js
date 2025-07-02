const user = {
  name: "석정일",
  age: 23,
  role: "손님",
};
// // 삼항연산자
// {
//   user.role === "관리자"
//     ? console.log(user.name + "님은 관리자이므로 접근이 가능합니다.")
//     : console.warn(user.name + "님은 관리자가 아니므로 접근이 불가능합니다.");
// }

// 조건문 vs 조건식
{
  {
    // 조건문: 값 반환 x 간접적 할당으로만 대입가능
    let message = "";
    if (user.role === "관리자") {
      message = user.name + "님은 관리자이므로 접근이 가능합니다.";
    } else {
      message = user.name + "님은 관리자가 아니므로 접근이 불가능합니다.";
    }

    console.log(message);
  }

  {
    // 조건식: 값 반한 O 직접 할당 가능
    let message =
      user.role === "관리자"
        ? user.name + "님은 관리자이므로 접근이 가능합니다."
        : user.name + "님은 관리자가 아니므로 접근이 불가능합니다.";

    console.log(message);
  }
}
