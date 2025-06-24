// {
//   const headline = document.querySelector("h1");
//   headline.addEventListener("mouseenter", () => {
//     headline.style.fontSize = "80px";
//     console.log("mouse enter");
//   });
//   headline.addEventListener("mouseleave", () => {
//     headline.style.fontSize = "40px";
//     console.log("mouse leave");
//   });
// }

{
  const headline = document.querySelector("h1");

  console.log(headline);

  // JS에서 CSS 변수를 바꾸는 방법
  // 방법 1. X
  // headeline.style.--font-size = "400px"
  // 방법 2. X
  // headeline.style["--font-size"] = "400px"
  // 방법 3. O
  headline.style.setProperty("--font-size", "30px");
}
