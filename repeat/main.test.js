/* globals describe, it */

const repeat = require('./main.js')
const { expect } = require('chai')

describe('repeat', () => {
  it('from single letter.', () => {
    expect(repeat('x', 5)).to.equal('xxxxx')
  })

  it('from alphabet.', () => {
    expect(repeat('xyz', 2)).to.equal('xyzxyz')
  })

  it('from where you at.', () => {
    expect(repeat('Here I am. ', 3)).to.equal(
      'Here I am. Here I am. Here I am. '
    )
  })

  it('from number string.', () => {
    expect(repeat('9', 3)).to.equal('999')
  })
})
