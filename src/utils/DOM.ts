export function createInvisibleTempElement(
  elementType = 'div',
  childElement?: HTMLElement
): HTMLElement {
  const element = document.createElement(elementType);

  if (childElement) {
    element.appendChild(childElement);
  }

  /*
    I do transform translate here instead of display none
    because element must be visible to be able to take a screenshot
  */
  element.setAttribute('style', 'position: absolute; transform: translateX(-5000px);');
  document.body.appendChild(element);

  return element;
}
