import {
  addEventToElement,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
} from "./utils/events.js";

// --------------------------------------------
// 변수선언
// --------------------------------------------

const buttons = Array.from({ length: 5 }, function (_, i) {
  return document.querySelector(`.clickable-${i + 1}`);
});

// --------------------------------------------
// 이벤트 핸들러 등록
// --------------------------------------------

buttons.forEach(function (button) {
  addEventToElement(button, "click", handleClick);
  addEventToElement(button, "mouseenter", handleMouseEnter);
  addEventToElement(button, "mouseleave", handleMouseLeave);
});
