/**
 * DOM 요소를 선택하는 유틸리티 함수
 * @param {string} selector - CSS 선택자
 * @param {Element|Document} [context=document] - 검색 컨텍스트
 * @returns {Element|NodeList|null} - 선택된 요소, 요소 목록, 또는 null
 * @throws {Error} - 유효하지 않은 컨텍스트 제공 시
 * @example
 * // ID로 단일 요소 선택
 * const app = query('#app');
 *
 * // 클래스로 여러 요소 선택
 * const items = query('.item');
 *
 * // 특정 요소 내에서 검색
 * const listItem = query('li.active', app);
 */
function query(selector, context = document) {
  // 컨텍스트 유효성 검사
  if (!(context instanceof Element || context instanceof Document)) {
    throw new Error("Invalid context: must be an Element or Document");
  }

  // ID 선택 최적화
  if (selector.startsWith("#") && !selector.includes(" ")) {
    return document.getElementById(selector.slice(1));
  }

  // 클래스 선택 최적화
  if (
    selector.startsWith(".") &&
    !selector.includes(" ") &&
    !selector.includes("[") &&
    !selector.includes(":")
  ) {
    const className = selector.slice(1);
    return context.getElementsByClassName(className);
  }

  // 단일 태그 선택 최적화
  if (/^[a-zA-Z]+$/.test(selector)) {
    return context.getElementsByTagName(selector);
  }

  // 복잡한 선택자는 querySelectorAll 사용
  return context.querySelectorAll(selector);
}
