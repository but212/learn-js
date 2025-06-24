/**
 * 객체의 속성을 바꾸던가 속성 값을 안넣으면 읽기만 하는 함수
 * @param {Element} element - 대상 요소 객체
 * @param {String} attributeName - 속성 이름
 * @param {String} [attributeValue] - 속성 값(선택)
 * @returns {Element | String} 속성 변경하면 해당 속성을 문자열로 아니면 객체 리턴
 */
function attr(element, attributeName, attributeValue) {
  if (attributeValue === undefined) {
    return getAttr(element, attributeName);
  } else {
    element.setAttribute(attributeName, attributeValue);
    return setAttr(element, attributeName, attributeValue);
  }
}

/**
 * 객체의 속성 값을 반환하는 함수
 * @param {Element} element - 대상 요소 객체
 * @param {String} attributeName - 속성 이름
 * @returns {String} 객체의 속성 값
 */
function getAttr(element, attributeName) {
  return element.getAttribute(attributeName);
}

/**
 * 객체의 속성 값을 바꾸고 속성값을 반환하는 함수
 * @param {Element} element 대상 요소 객체
 * @param {String} attributeName 속성 이름
 * @param {String} attributeValue 어떤 값으로 바꾸려 하는지
 * @returns {String} 바꾼 후의 속성값
 */
function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue);
  return attributeValue;
}
