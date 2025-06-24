/**
 * DOM 요소를 선택하는 유틸리티 함수
 * @param {string} selector - CSS 선택자
 * @param {Element|Document} [context=document] - 검색 컨텍스트
 * @returns {Element|NodeList} - 선택된 요소 또는 요소 목록
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
  if (selector.startsWith('#') && selector.indexOf(' ') === -1) {
    return document.getElementById(selector.slice(1));
  }
  
  if (selector.includes(',') || 
      selector.includes('.') || 
      selector.includes('[') || 
      selector.includes(':')) {
    return context.querySelectorAll(selector);
  }
  
  return context.querySelector(selector);
}
