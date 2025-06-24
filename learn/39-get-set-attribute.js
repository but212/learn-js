/* global query */
// 외부로부터 코드 보호
// 블록 스코프
{
  const noticeElement = document.getElementById("notice");

  noticeElement.addEventListener("click", () => {
    noticeElement.setAttribute("contenteditable", true);
    noticeElement.setAttribute("data-role", "student");
    noticeElement.setAttribute("data-status", "offline");
    noticeElement.setAttribute("data-user-id", "1004");
  });

  const submitButton = query('form button[type="submit"]');

  submitButton.addEventListener("mouseenter", () => {
    const role = noticeElement.getAttribute("data-role");
    console.log("role =", role);
    const status = noticeElement.getAttribute("data-status");
    console.log("status =", status);
    const userId = noticeElement.getAttribute("data-user-id");
    console.log("userId =", userId);
    const category = noticeElement.getAttribute("data-category");
    console.log("category =", category);
    const idName = noticeElement.getAttribute("id");
    console.log("idName =", idName);
    const className = noticeElement.getAttribute("class");
    console.log("className =", className);
  });
}
