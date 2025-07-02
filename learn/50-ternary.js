{
  const user = {
    name: "석정일",
    age: 23,
    role: "손님",
  };

  user.role === "관리자"
    ? console.log(user.name + "님은 관리자이므로 접근이 가능합니다.")
    : console.warn(user.name + "님은 관리자가 아니므로 접근이 불가능합니다.");
}
