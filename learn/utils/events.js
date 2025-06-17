/**
 * 요소에 이벤트 리스너를 추가합니다.
 * @param {HTMLElement} element - 이벤트를 추가할 요소
 * @param {string} eventType - 이벤트 유형
 * @param {Function} listener - 이벤트 리스너 함수
 */
export function addEventToElement(element, eventType, listener) {
  element.addEventListener(eventType, listener);
}

/**
 * 클릭 이벤트 핸들러
 * @param {MouseEvent} e - 클릭 이벤트 객체
 */
export function handleClick(e) {
  console.log(`클릭한 버튼: ${e.target.className}`);
}

/**
 * 마우스 진입 이벤트 핸들러
 * @param {MouseEvent} e - 마우스 이벤트 객체
 */
export function handleMouseEnter(e) {
  document.body.classList.add("is-active");
  e.target.classList.add("is-active");
}

/**
 * 마우스 이탈 이벤트 핸들러
 * @param {MouseEvent} e - 마우스 이벤트 객체
 */
export function handleMouseLeave(e) {
  document.body.classList.remove("is-active");
  e.target.classList.remove("is-active");
}
