function getStyle(element, propertyName) {
  return getComputedStyle(element).getPropertyValue(propertyName);
}

function getPseudoStyle(element, propertyName, pseudoKeyword) {
  if (pseudoKeyword === undefined) {
    return getComputedStyle(element).getPropertyValue(propertyName);
  } else {
    return getComputedStyle(element, "::" + pseudoKeyword).getPropertyValue(
      propertyName
    );
  }
}

function setStyle(element, propertyName, propertyValue) {
  element.style.setProperty(propertyName, propertyValue);
  return element;
}

function css(element, propertyName, propertyValue) {
  if (propertyValue === undefined) {
    return getStyle(element, propertyName);
  } else {
    return setStyle(element, propertyName, propertyValue);
  }
}
