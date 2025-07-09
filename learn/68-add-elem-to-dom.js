// {
//   // <li>면이 익으면 불을 끄고 그릇에 옮깁니다.</li>
//   // <li>물을 냄비에 붓고 끓입니다 (약 500ml).</li>
//   // <li>물이 끓으면 스프를 먼저 넣습니다.</li>
//   // <li>취향에 따라 파, 계란, 치즈 등을 추가합니다.</li>
//   // <li>호호 불며 맛있게 먹습니다.</li>
//   const recipeList = [
//     "면이 익으면 불을 끄고 그릇에 옮깁니다.",
//     "물을 냄비에 붓고 끓입니다 (약 500ml)",
//     "물이 끓으면 스프를 먼저 넣습니다.",
//     "취향에 따라 파, 계란, 치즈 등을 추가합니다.",
//     "호호 불며 맛있게 먹습니다.",
//   ];
//   const listElem = document.querySelector(".ramen-cooking-recipe");
//   for (const recipe of recipeList) {
//     const item = document.createElement("li");
//     item.textContent = recipe;
//     listElem.appendChild(item);
//   }
// }

// {
//   const list = document.querySelector(".ramen-cooking-recipe");
//   // prepend()
//   // 부모 요소의 첫 번째 자식 요소로 삽입
//   const prependElements = [
//     createElement("li", "맛있는 면을 준비합니다."),
//     createElement("li", "라면 봉지를 열고 스프를 꺼냅니다."),
//     createElement("li", "면을 꺼내 끓는 물이 담긴 냄비에 넣습니다."),
//   ];
//   list.prepend(...prependElements);
//   // append()
//   // 부모 요소의 마지막 자식 요소로 삽입
//   // appendChild(element)
//   // append(element, element, element, ...) // appendChild 대신
//   // append(text, text, text, ...) // textContent 대신
//   const appendElements = [
//     createElement("li", "친구들을 불러 라면을 함께 먹는다."),
//     createElement("li", "친구들에게 설거지를 부탁한다."),
//   ];
//   list.append(...appendElements);
//   // before()
//   const beforeElements = [
//     createElement("li", "before content 1"),
//     createElement("li", "before content 2"),
//   ];
//   const beforeTargetElement = list.children[4];
//   beforeTargetElement.before(...beforeElements);
//   // after()
//   const afterElements = [
//     createElement("li", "after content A"),
//     createElement("li", "after content Z"),
//   ];
//   const afterTargetElement = list.children[6];
//   afterTargetElement.after(...afterElements);
//   // insertAdjacentElement()
//   const elementInfo = {
//     position: "afterend",
//     element: createElement(
//       "span",
//       "인접한 요소로 삽입(insert adjacent element)"
//     ),
//   };
//   const h1 = document.querySelector("h1");
//   h1.insertAdjacentElement(elementInfo.position, elementInfo.element);
//   // insertAdjacentHTML(position, htmlCode)
//   const h2 = document.querySelector("h2");
//   h2.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <strong>🥘</strong>
//   `
//   );
// }

{
  const recipeList = [
    "면이 익으면 불을 끄고 그릇에 옮깁니다.",
    "물을 냄비에 붓고 끓입니다 (약 500ml)",
    "물이 끓으면 스프를 먼저 넣습니다.",
    "취향에 따라 파, 계란, 치즈 등을 추가합니다.",
    "호호 불며 맛있게 먹습니다.",
  ];

  // HTML 템플릿 문자열 생성
  const recipeHTMLTemplate = recipeList
    .map((content) => {
      return `<li>${content}</li>`;
    })
    .join("");

  // console.log(recipeHTMLTemplate)

  const listElement = document.querySelector(".ramen-cooking-recipe");

  // innerHTML
  // before or after
  listElement.innerHTML = recipeHTMLTemplate + listElement.innerHTML;

  // insertAdjacentHTML()
  // before or after or prepend or append
  // listElement.insertAdjacentHTML('afterbegin', recipeHTMLTemplate)
}

// fragment에 추가하기(DOM 변경을 한번에 해서 성능 최적화)
{
  const listElem = document.querySelector(".ramen-cooking-recipe");
  const fragment = document.createDocumentFragment();

  const recipeList = [
    "면이 익으면 불을 끄고 그릇에 옮깁니다.",
    "물을 냄비에 붓고 끓입니다 (약 500ml)",
    "물이 끓으면 스프를 먼저 넣습니다.",
    "취향에 따라 파, 계란, 치즈 등을 추가합니다.",
    "호호 불며 맛있게 먹습니다.",
  ];

  recipeList.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.textContent = recipe;
    fragment.appendChild(recipeItem);
  });
  listElem.append(...fragment.children);
}

/**
 * DOM에 추가될 수 있는 요소 생성 함수
 * @param {string} tagName - HTML 요소 이름
 * @param {string} textContent - 요소에 포함될 내용
 * @returns {Element} 생성된 요소
 */
function createElement(tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
}
