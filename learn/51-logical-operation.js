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

{
  let x, y, z;
  x = "엑-스";
  y = NaN;
  z = Math.random() > 0.5;
  console.log(x && z && y); // false or NaN

  let result1 = x && play();
  let result2 = y && study;

  console.log("1. " + result1);
  console.log("2. " + result2);

  function study() {
    return "우리는 함께 공부한다.";
  }

  function play() {
    return "우리는 함께 논다.";
  }
}
