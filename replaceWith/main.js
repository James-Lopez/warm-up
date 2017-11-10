// replaceWith(new, old)
// Description: Replace an old element with a new element in the DOM.

const replaceWith = (element, newElement) => {
  const $element = document.querySelector(element)
  $element.parentNode.replaceChild(newElement, $element)
}

module.exports = replaceWith
