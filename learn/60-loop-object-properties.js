// const cssMap = {
//   display: "grid",
//   "font-size": "48px",
//   "margin-block-end": "40px",
//   gap: "12px",
// };

// // for in 문
// {
//   for (let cssStyle in cssMap) {
//     console.log(cssStyle);
//   }
// }

// // for of 문
// {
//   // console.log(Object.entries(cssMap)) // Object.entries를 통해 배열로 변경 가능
//   for (const [key, value] of Object.entries(cssMap)) {
//     console.log(key);
//     console.log(value);
//   }
// }

// {
//   // 객체 -> 배열
//   // console.log(Object.keys(cssMap))
//   // console.log(Object.values(cssMap))
//   // console.log(Object.entries(cssMap))
//   // 객체 순환 속성 및 값을 확인
//   // 객체 -> 배열 -> for...of 문
//   for (const [key, value] of Object.entries(cssMap)) {
//     console.log({ key, value });
//   }
//   for (const key of Object.keys(cssMap)) {
//     console.log(key);
//   }
//   for (const value of Object.values(cssMap)) {
//     console.log(value);
//   }
// }

// 실습 1
{
  const programming_language = {
    자바스크립트: "Javascript",
    파이썬: "Python",
    루비: "Ruby",
    고: "Golang",
  };
  Object.keys(programming_language).forEach((lang) => console.log(lang));
}

// 실습 2
{
  const score = {
    수학: 90,
    과학: 85,
    영어: 92,
    국어: 100,
  };

  // reduce()
  const totalScore = Object.values(score).reduce(
    (totalScore, score) => totalScore + score,
    0
  );
  console.log(totalScore);
}

// 실습 3. 객체의 키, 값 표로 출력
// 다음 객체의 키, 값을 표(table)로 템플릿 스트링으로 출력합니다.
{
  const 프로필 = {
    이름: "하영",
    성별: "여성",
    나이: 26,
    거주지: "서울",
    직업: "공무원",
  };

  let tableHTML = `
  <table id="practice">
	<caption>프로필 정보</caption>
	<tbody>
		<tr>
			${Object.entries(프로필)
        .map((info) => {
          return `
                        <th scope="row">${info[0]}</th>
                        <td>${info[1]}</td>
                    `;
        })
        .join("")}
		</tr>
	</tbody>
  </table>
  `;

  console.log(tableHTML);
}
