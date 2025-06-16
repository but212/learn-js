const exorcistCharacters = document.getElementById("exorcist-characters");

const yoHan = exorcistCharacters.querySelector(".character.yo-han");

const masterChoi = exorcistCharacters.querySelector(".character.master-choi");

// 채신기술(영하고 MZ함)
masterChoi.classList.add("active");

const villainGhost = exorcistCharacters.querySelector('[data-type="villain"]');

villainGhost.classList.add("alpha", "beta");
console.log(villainGhost.className);

villainGhost.classList.remove("beta");
console.log(villainGhost.className);
console.log(
  "villainGhost의 0번째 class 아이템: ",
  villainGhost.classList.item(0)
);

console.log(
  "villainGhost의 class 아이템 갯수: ",
  villainGhost.classList.length
);
console.log("villainGhost의 class 전체: ", villainGhost.classList.value);

villainGhost.classList.toggle("beta");
console.log(villainGhost.className);

villainGhost.classList.replace("beta", "gamma");
console.log(
  "villainGhost의 beta를 gamma로 replace(함수를 통해): ",
  villainGhost.classList.value
);

// 이전시대의 사용하는 방법(OLD)
// masterChoi.className += " active";

// villainGhost.className += " a c b";
// console.log(villainGhost.className);
