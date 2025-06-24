/**
 * 해당하는 DOM 요소를 선택하는 함수
 * @param {string} selector - CSS 선택자
 * @param {Document|Element} [context=document] - 선택 범위 요소 (기본값: document)
 * @returns {Element|null} 선택된 요소 또는 null
 */
function query(selector, context = document) {
  if (!selector) return null;
  return context.querySelector(selector);
}

/**
 * 해당하는 DOM 요소를 전부 선택하는 함수
 * @param {string} selector - CSS 선택자
 * @param {Document|Element} [context=document] - 선택 범위 요소 (기본값: document)
 * @returns {NodeList} selector에 해당하는 모든 요소 목록
 */
function queryAll(selector, context = document) {
  if (!selector) return document.createDocumentFragment().children;
  return context.querySelectorAll(selector);
}

/**
 * ID로 DOM 요소를 선택하는 함수
 * @param {string} id - 요소의 ID
 * @param {Document} [context=document] - 선택 범위 요소 (기본값: document)
 * @returns {Element|null} 선택된 요소 또는 null
 */
function byId(id, context = document) {
  if (!id) return null;
  return context.getElementById(id);
}

/**
 * 태그 이름으로 DOM 요소들을 선택하는 함수
 * @param {string} tagName - 태그 이름
 * @param {Document|Element} [context=document] - 선택 범위 요소 (기본값: document)
 * @returns {HTMLCollection} 선택된 요소 컬렉션
 */
function byTagName(tagName, context = document) {
  if (!tagName) return document.createDocumentFragment().children;
  return context.getElementsByTagName(tagName);
}

/**
 * 클래스 이름으로 DOM 요소들을 선택하는 함수
 * @param {string} className - 클래스 이름
 * @param {Document|Element} [context=document] - 선택 범위 요소 (기본값: document)
 * @returns {NodeList} 선택된 요소 목록
 */
function byClassName(className, context = document) {
  if (!className) return document.createDocumentFragment().children;
  return context.getElementsByClassName(className);
}
