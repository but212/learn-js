/**
 * 객체의 속성을 바꾸던가 속성 값을 안넣으면 읽기만 하는 함수
 * @param {Element} element - 대상 객체
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

function getAttr(element, attributeName) {
  return element.getAttribute(attributeName);
}

function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue);
  return attributeValue;
}
