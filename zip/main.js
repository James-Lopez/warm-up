// Function that takes multiple arrays and puts all first elements
// a seperate array, puts all second elements into another, and so on.
// i.e. zip([1,2], [one, two], [first, second])
// which returns => [[1,one,first], [2, two, second]]
// and another array for items 3rd, 4th, 5th, etc.

function zip(...arrays) {
  const output = []
  const compare = arrays.sort((a, b) => {
    return b.length - a.length
  })

  for (let i = 0; i < compare.length; i++) {
    output.push(arrays.map(array => array[i]))
  }
  return output
}

// console.log(zip([1, 2], ['one', 'two']))
// console.log(zip(['a', 'b'], ['apple', 'banana'], ['aaa', 'bbb']))
console.log(zip([1, 2], [3, 4, 11], [4, 5, 12], [6, 7, 13], [8, 9, 14, 15, 16]))

// function zip2() {
//   console.log()
// }
//
// console.log(zip2([1, 2], [ 4, 11], [4, 5, 12], [6, 7, 13], [8, 9, 14]))
