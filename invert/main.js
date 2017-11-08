// function that takes ann object and swaps all key/index values
// and for values that repeat the last one to be assigned take precedemce
// i.e given object { 'a': 1, 'b': 2, 'c': 1 }
// return => { '1': 'c', '2': 'b' }

// function invert(object) {
//   var newNew = {}
//   for (var property in object) {
//     newNew[object[property]] = property
//   }
//   return newNew
// }

const invert = object =>
  Object.keys(object).reduce(
    (accumulator, currentValue) =>
      Object.assign({}, accumulator, { [object[currentValue]]: currentValue }),
    {}
  )

module.exports = invert
