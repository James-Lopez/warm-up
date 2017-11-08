// toggleClass(elements, ...classes)
// Description: Toggles class on or off of elements.

const toggleClass = (elements, ...classes) => {
  elements.forEach(element => {
    classes.forEach(_class => {
      element.classList.toggle(_class)
    })
  })
}

module.exports = toggleClass
