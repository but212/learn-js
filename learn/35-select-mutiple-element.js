// {
//   // nav의 모든 a를 찾자
//   const navLinks = document.querySelectorAll("nav a"); // 이거는 배열이 아닌 NodeList
//   console.log(navLinks);
//   console.log(Array.isArray(navLinks));
//   const navLinksArray = Array.from(navLinks); // 이렇게 배열과 유사한 타입을 배열로 바꿀 수 있다.
//   console.log(navLinksArray);
//   console.log(Array.isArray(navLinksArray));
// }

// {
//   const lifeTips = document.querySelector(".life-tips");
//   const paragraphs = lifeTips.querySelectorAll("p");
//   // const firstElemOfParagraph = paragraphs.item(0);
//   // const secondElemOfParagraph = paragraphs.item(1);

//   // Loop (반복, 순환)
//   // - while
//   let i = 0,
//     l = paragraphs.length;
//   while (i < l) {
//     const paragraphElement = paragraphs.item(i);
//     console.log(paragraphElement);
//     ++i;
//   }

//   // - do...while

//   // - for
//   for (let i = 0, l = paragraphs.length; i < l; ++i) {
//     const paragraphElement = paragraphs.item(i);
//     console.log(paragraphElement);
//   }

//   // for of
//   for (const paragraphElement of paragraphs) {
//     console.log(paragraphElement);
//   }

//   paragraphs.forEach((para) => {
//     console.log(para);
//   });
// }

// {
//   const paragraphs = document.querySelectorAll(".life-tips p");

//   console.log(paragraphs[0] === paragraphs.item(0));
//   console.log(paragraphs[1] === paragraphs.item(1));
//   console.log(paragraphs[2] === paragraphs.item(2));
// }

// NodeList vs HTMLCollection
// {
//   console.group("DOM 업데이트 전");
//   // HTMLCollection (Live)
//   const paras = document.getElementsByTagName("p");
//   console.log("HTMLCollection(라이브 콜렉션: 살아있는 집합) =", paras.length);

//   const paraClasses = document.getElementsByClassName("para");
//   console.log(
//     "HTMLCollection(라이브 콜렉션: 살아있는 집합) =",
//     paraClasses.length
//   );

//   // NodeList
//   const paragraphs = document.querySelectorAll("p");
//   console.log("NodeList(스태틱 콜렉션: 고정된 집합)", paragraphs.length);
//   console.groupEnd();

//   // Update DOM
//   document.querySelector(".life-tips").innerHTML +=
//     "<p>씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>";

//   console.group("DOM 업데이트 후");
//   console.log("HTMLCollection(라이브 콜렉션: 살아있는 집합) =", paras.length);
//   console.log(
//     "HTMLCollection(라이브 콜렉션: 살아있는 집합) =",
//     paraClasses.length
//   );
//   console.log("NodeList(스태틱 콜렉션: 고정된 집합)", paragraphs.length);
//   console.groupEnd();
// }

{
  const starWars = document.querySelector("#star-wars");

  // 1. 좋은 사람(Good Guy)을 모두 선택하세요.
  const goodGuys = starWars.querySelectorAll("[data-type='good-guy']");

  // 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
  goodGuys.forEach((guy) => {
    guy.classList.add("excellent");
  });

  // 3. 빌런(Villain)을 모두 선택하세요.
  const villans = starWars.querySelectorAll("[data-type='villain']");

  // 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
  villans.forEach((villan) => {
    villan.classList.add("naughty");
  });

  // 5. 모든 캐릭터(Character)를 선택하세요.
  const characters = starWars.querySelectorAll("*");

  // 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
  characters.forEach((char) => {
    char.classList.add("star-wars");
  });
}
