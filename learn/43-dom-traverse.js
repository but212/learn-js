{
  const starWars = document.getElementById("star-wars");
  console.log(starWars);

  // querySelectorAll() - HTMLCollection
  const characters = starWars.querySelectorAll(".character");
  // console.log(characters);

  // chileren - NodeList(배열 객체)
  const child = starWars.children;
  // console.log(child);

  // firsChild
  console.log(
    "첫번째 자식 ( 노드 타입:",
    starWars.firstChild.nodeType,
    ") 1 = 요소, 2 = 속성, 3 = 텍스트"
  );

  // firsElementChild
  console.log(
    "첫번째 자식 ( 노드 타입:",
    starWars.firstElementChild.nodeType,
    ") 1 = 요소, 2 = 속성, 3 = 텍스트"
  );
}
