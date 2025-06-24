// // 인라인 스타일 값 읽기
// {
//   const body = document.body;
//   const h1 = document.querySelector("h1");

//   console.log(body.style.backgroundColor);
//   console.log(h1.style.color);
// }

// // 인라인 스타일이 아닌 값 읽기 - Computed Style 브라우저가 읽는 값
// {
//   const body = document.body;
//   const h1 = document.querySelector("h1");
//   console.log(getComputedStyle(body).getPropertyValue("background-color"));
//   console.log(getComputedStyle(h1).getPropertyValue("color"));
//   const minBlockSize =
//     getComputedStyle(body).getPropertyValue("min-block-size");
//   console.log(minBlockSize);
// }

// // 인라인 스타일이 아닌 값 쓰기
// {
//   // h1 요소 접근 변수에 참조
//   const heading1 = document.querySelector("h1");
//   // console.log(heading1)
//   // h1 요소의 글자 크기 스타일 값 읽기
//   const heading1Styles = getComputedStyle(heading1);
//   const heading1FontSize = heading1Styles.getPropertyValue("--font-size");
//   const contFontsize = Number.parseFloat(heading1FontSize) + 84 + "px";
//   console.log(heading1FontSize);
//   // h1 요소의 글자 크기를 읽은 값에 + 84px 추가한 값 다시 h1 요소에 쓰기
//   heading1.style.setProperty("--font-size", contFontsize);
// };

{
  const heading1 = document.querySelector("h1");
  const heading1PseudoElemStyles = getComputedStyle(heading1, "::after");
  console.log(heading1PseudoElemStyles.getPropertyValue("content"));
  console.log(heading1PseudoElemStyles.getPropertyValue("position"));
  console.log(heading1PseudoElemStyles.getPropertyValue("right"));
  console.log(heading1PseudoElemStyles.getPropertyValue("top"));
}
