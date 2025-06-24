/**
 * DOM 요소를 선택하는 함수
 * @param {string} selector - CSS 선택자
 * @param {Document|Element} [context=document] - 선택 범위 요소
 * @returns {Element|null} 선택된 요소 또는 null
 */
function query(selector, context = document) {
  if (!selector) return null;
  return context.querySelector(selector);
}

/**
 * DOM 요소를 선택하는 함수
 * @param {string} selector - CSS 선택자
 * @param {Document|Element} [context=document] - 선택 범위 요소
 * @returns {NodeList} 선택된 요소 목록
 */
function queryAll(selector, context = document) {
  if (!selector) return null;
  return context.querySelectorAll(selector);
}
