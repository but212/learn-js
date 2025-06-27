// {
//   const linkList = document.querySelector(".link-list");
//   const links = linkList.querySelectorAll("a");
//   links.forEach((link, index) => {
//     link.addEventListener("click", (e) => {
//       if (!e.defaultPrevented) {
//         e.preventDefault();
//       }
//       console.log(index + 1);
//       const linkElement = e.currentTarget;
//       console.log(linkElement.getAttribute("href"));
//     });
//   });
// }

// // 이벤트 대상 확인 + 이벤트 위임으로 단 1개의 이벤트리스너로 처리 가능
// {
//   const linkList = document.querySelector(".link-list");
//   linkList.addEventListener("click", (e) => {
//     if (!e.defaultPrevented) {
//       e.preventDefault();
//     }
//     const target = e.target;
//     console.log("<" + target.nodeName.toLowerCase() + ">요소를 클릭했습니다."); // "a", "li", "ul"
//   });
// }

// // e.target이 일치하는지 검사
// {
//   const linkList = document.querySelector(".link-list");
//   linkList.addEventListener("click", (e) => {
//     if (!e.defaultPrevented) e.preventDefault();
//     const target = e.target;
//     if (target.matches('a[href="/community"]')) {
//       console.log(target.getAttribute("href"));
//     }
//   });
// }

// 이벤트 대상(event target)이 일치하는 지 검사
// element.matches(selector)
{
  const linkList = document.querySelector(".link-list");
  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) {
      e.preventDefault();
    }

    const target = e.target.closest("a[href]");

    if (target.matches('a[href="/news"]')) {
      console.log(target.getAttribute("href"));
    } else {
      console.log(target.localName);
    }
  });
}
