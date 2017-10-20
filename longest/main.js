/* eslint-disable no-unused-vars */

var forceUsers = [
  'Darth Vader',
  'Obi Wan Kenobi',
  'LukeSkywalker',
  'Yoda'
]

function longest(stringArray) {
  var length = 0
  var longestString
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > length) {
      length = stringArray[i].length
      longestString = stringArray[i]
    }
  }
  return longestString
}
