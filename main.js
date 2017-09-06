var forceUsers = [
  "DarthVader",
  "ObiWanKenobi",
  "LukeSkywalker",
  "Yoda"
]

function longest(stringArray) {
  var longestWord = 0
  for (var i = 0; i < stringArray.length; i++) {
    if(stringArray[i].length > longestWord) {
      longestWord = stringArray[i]
    }
  }
  return longestWord
}
