let scope = 10;
{
  let scope = 20;

  {
    let scope = 30;
    console.log(scope);
  }
  console.log(scope);
}
console.log(scope);

// ----------------------------------------------
// 함수 스코프
// ----------------------------------------------

function func1() {
  let name = "함수";
  function func2() {
    let name = "중첩함수";
    console.log(name);
  }
  func2();
  console.log(name);
}
func1();
