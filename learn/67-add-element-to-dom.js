// {
//   const sectionElement = document.createElement("section");
//   const mountElement = document.querySelector(".mount");
//   sectionElement.classList.add("section-content");
//   sectionElement.dataset.category = "sports";
//   sectionElement.textContent = "축구는 역시 로마";
//   sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`;
//   console.log(sectionElement);
//   mountElement.appendChild(sectionElement);
//   // <table> 요소 생성
//   const tableElement = document.createElement("table");
//   // 생성된 요소에 클래스 이름 설정(추가)
//   tableElement.classList.add("lookup");
//   // 커스텀 속성 설정(추가)
//   tableElement.dataset.lookup = "food-table";
//   // 표 제목 텍스트 콘텐츠 추가
//   tableElement.textContent = `식사 룩업`;
//   // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
//   tableElement.innerHTML = `<caption>식단표</caption>`;
//   mountElement.appendChild(tableElement);
// }

// {
//   const article = document.querySelector("article");
//   const articleList = article.querySelector(".ramen-cooking-recipe");
//   const listItem = document.createElement("li");
//   listItem.textContent = "맛있게 먹습니다.";
//   articleList.appendChild(listItem);
// }

// 요소 위치 변경
// {
//   const button = document.querySelector("button");
//   const section = button.nextElementSibling;
//   const [list1, list2] = section.children;

//   button.addEventListener("click", () => {
//     const firstFruit = list1.lastElementChild;
//     if (!firstFruit) {
//       return;
//     }

//     list2.appendChild(firstFruit);
//   });
// }

{
  const articleRamenRecipe = document.querySelector(".ramen-cooking-recipe");
  const targetRecipe = articleRamenRecipe.children[2];

  const recipeItem = document.createElement("li");
  recipeItem.textContent = "면을 넣고 3~4분간 끓입니다.";

  targetRecipe.parentElement.insertBefore(recipeItem, targetRecipe);
}
