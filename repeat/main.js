// takes 2 arguments( a string,  and a number)
// repeats the string with the given number of times.
//
// function repeat(string, number) {
//   return string.repeat(number)
// }

function repeat(string, number) {
  var output = ''
  for (let i = 0; i < number; i++) {
    output += string
  }
  return output
}
module.exports = repeat
