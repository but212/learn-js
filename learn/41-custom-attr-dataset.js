/* global byId*/

// {
//   const para = byId("notice");
//   // data-* 사용자(개발자) 정의 속성 쓰기
//   para.dataset.category = "frontend-web-development";
//   para.dataset.userId = "user-zkjdkvjisI";
//   para.dataset.status = "inactive";
//   para.dataset.role = "guest";
//   // data-* 사용자(개발자) 정의 속성 읽기
//   console.log(para.dataset.category);
//   console.log(para.dataset.userId);
//   console.log(para.dataset.status);
//   console.log(para.dataset.role);
// }

{
  const paraElem = byId("notice");

  // paraElem.removeAttribute("id");
  // paraElem.removeAttribute("class");
  // paraElem.removeAttribute("data-role");
  // paraElem.removeAttribute("data-category");
  // paraElem.removeAttribute("data-user-id");

  const willRemoveAttr = [
    "id",
    "class",
    "data-role",
    "data-category",
    "data-user-id",
  ];

  willRemoveAttr.forEach((attrName) => {
    paraElem.removeAttribute(attrName);
  });
}
