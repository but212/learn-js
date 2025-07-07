const cssMap = {
  display: "grid",
  "font-size": "48px",
  "margin-block-end": "40px",
  gap: "12px",
};

// // for in 문
// {
//   for (let cssStyle in cssMap) {
//     console.log(cssStyle);
//   }
// }

// for of 문
{
  // console.log(Object.entries(cssMap)) // Object.entries를 통해 배열로 변경 가능
  for (const [key, value] of Object.entries(cssMap)) {
    console.log(key);
    console.log(value);
  }
}
