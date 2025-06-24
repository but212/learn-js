/**
 * DOM 요소를 선택하는 유틸리티 함수
 * @param {string} selector - CSS 선택자 문자열
 * @param {Element|Document} [context=document] - 검색할 컨텍스트 (기본값: document)
 * @param {boolean} [returnSingle=false] - true이면 첫 번째 요소만 반환, false이면 모든 매칭 요소 반환
 * @returns {Element|null} - returnSingle === true인 경우, 첫 번째 요소 또는 null
 * @returns {NodeListOf<Element>} - returnSingle === false인 경우, 매칭되는 모든 요소들
 * @throws {Error} 유효하지 않은 컨텍스트가 전달된 경우
 * @throws {Error} 유효하지 않은 선택자가 전달된 경우
 *
 * @example
 * // ID로 단일 요소 선택
 * const element = query('#myId');
 *
 * @example
 * // 클래스로 모든 요소 선택
 * const elements = query('.myClass');
 *
 * @example
 * // 특정 컨텍스트 내에서 검색
 * const container = document.getElementById('container');
 * const buttons = query('button', container);
 *
 * @example
 * // 첫 번째 요소만 반환
 * const firstDiv = query('div', document, true);
 */
function query(selector, context = document, returnSingle = false) {
  // 입력 유효성 검사
  if (typeof selector !== "string" || !selector.trim()) {
    throw new Error("Invalid selector: must be a non-empty string");
  }

  if (!(context instanceof Element || context instanceof Document)) {
    throw new Error("Invalid context: must be an Element or Document");
  }

  try {
    // ID 선택자 최적화 (document 컨텍스트에서만)
    if (
      selector.startsWith("#") &&
      !selector.includes(" ") &&
      context === document
    ) {
      const element = document.getElementById(selector.slice(1));
      return element;
    }

    // 일반적인 선택자 처리
    if (returnSingle) {
      return context.querySelector(selector);
    } else {
      return context.querySelectorAll(selector);
    }
  } catch (error) {
    throw new Error(`Invalid CSS selector: ${selector}. ${error.message}`);
  }
}
