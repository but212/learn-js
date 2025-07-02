// 템플릿 리터럴 예제
// ` - 백틱 기호로 개행을 포함한 범위 문자열 생성 가능
// ${} - 백틱 문자열에서 이를 통해 문자열 내에 변수 삽입 가능

// {
//   function greetWithTemplate(name, mealTime) {
//     return `안녕하세요, ${name}님. 맛있는 ${mealTime} 먹으세요!`;
//   }
//   const greet = greetWithTemplate("석정일", "점심");
//   console.log(greet);
// }

// {
//   // 문법 오류
//   // const htmlString = '<div class="practice2" style="display: flex; flex-direction: column; gap: 20px;">
//   //     <input type="number" aria-label="점수" placeholder="점수를 입력하세요" />
//   //     <button type="button">등급 확인</button>
//   //     <output>등급 출력</output>
//   //   </div>'
//   let containerClassName = "container";
//   let inputType = "number";
//   let outputValue = "아웃풋 벨류";
//   let buttonLabel = "버튼 레이블";
//   let styleRules = "display: flex; flex-direction: column; gap: 20px;";
//   let placeholderText = "점수를 입력하세요";
//   // 방법 1. 문자열 연결을 사용해 템플릿 문자열 구성
//   let htmlString =
//     '<div class="' + containerClassName + '" style="' + styleRules + '">';
//   htmlString +=
//     '<input type="' +
//     inputType +
//     '" aria-label="점수" placeholder="' +
//     placeholderText +
//     '" />';
//   htmlString += '<button type="button">' + buttonLabel + "</button>";
//   htmlString += "<output>" + outputValue + "</output>";
//   htmlString += "</div>";
//   // 방법 2. 배열을 사용해 템플릿 문자열 구성
//   htmlString = [
//     '<div class="' + containerClassName + '" style="' + styleRules + '">',
//     '<input type="' +
//       inputType +
//       '" aria-label="점수" placeholder="' +
//       placeholderText +
//       '" />',
//     '<button type="button">' + buttonLabel + "</button>",
//     "<output>" + outputValue + "</output>",
//     "</div>",
//   ].join("");
//   // 방법 3. 이스케이프 처리를 사용해 템플릿 문자열 구성
//   htmlString =
//     '\
//     <div class="' +
//     containerClassName +
//     '" style="' +
//     styleRules +
//     '">\
//       <input type="' +
//     inputType +
//     '" aria-label="점수" placeholder="' +
//     placeholderText +
//     '" />\
//       <button type="button">' +
//     buttonLabel +
//     "</button>\
//       <output>" +
//     outputValue +
//     "</output>\
//     </div>\
//   ";
//   // 방법 4. 템플릿 리터럴 방식
//   htmlString = /* html */ `
//     <div class="${containerClassName}" style="${styleRules}">
//       <input type="${inputType}" aria-label="점수 placeholder="${placeholderText}" />
//       <button type="button">${buttonLabel}</button>
//       <output>${outputValue}</output>
//     </div>
//   `;
//   console.log(htmlString);
// }

// tagged template
// {
//   function sayJavascript(x, y, z) {
//     console.log(x, y, z);
//   }
//   let langue = "Coreen";
//   // 이때 탬플릿 문자열 -> livre -> langue 순으로 인수 전달
//   let livre = "l'historee de la coree";
//   sayJavascript`
//     quel livre va etre livre?
//     -> ${livre}(${langue})
//     oui!
//   `;
// }

// {
//   /**
//    * @param {String} cssString CSS 문자열
//    * @param {Element} target 이벤트 타겟
//    */
//   function styled(cssString, target) {
//     if (!(target && target.nodeType === 1)) {
//       return;
//     }
//     target.style.cssText = cssString;
//   }
//   const headline = document.querySelector("h1");
//   const COLOR_PRIMARY = "red";
//   const COLOR_SECONDARY = "black";
//   const SPACING_SMALL = "6px";
//   const RADIUS_SMALL = "4px";
//   const FONT_SIZE_H1 = "100px";
//   const styles = /* css */ `
//     color: ${COLOR_PRIMARY};
//     background-color: ${COLOR_SECONDARY};
//     padding: ${SPACING_SMALL};
//     border-radius: ${RADIUS_SMALL};
//     font-size: ${FONT_SIZE_H1};
//     `;
//   styled(styles, headline);
// }

// 실습: 이름 입력 후, "인사하기" 버튼을 클릭하면 템플릿 리터럴을 사용해 인사 메시지를 출력합니다.
{
  const mealType = {
    breakfast: "아침",
    lunch: "점심",
    dinner: "저녁",
  };
  const practice = document.querySelector(".practice");
  const button = practice.querySelector("[type='button']");
  const form = practice.querySelector("form");
  const paragraph = practice.querySelector("p");
  button.addEventListener("click", () => {
    const username = form.elements.username.value.trim();
    const mealValue = form.elements.meal.value;
    paragraph.textContent = `안녕하세요. ${username}, ${mealType[mealValue]} 먹었나요?`;
  });
}
