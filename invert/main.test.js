/* globals describe, it */

const invert = require('./main.js')
const { expect } = require('chai')

describe('invert', () => {
  it('from test 1.', () => {
    expect(
      invert({ fire: 'charizard', water: 'blastoise', grass: 'venasaur' })
    ).to.eql({ charizard: 'fire', blastoise: 'water', venasaur: 'grass' })
  })

  it('from test 2.', () => {
    expect(invert({ a: 1, b: 2, c: 1 })).to.eql({ 1: 'c', 2: 'b' })
  })

  it('from test 3', () => {
    expect(invert({ x: 10, y: 10, z: 10 })).to.eql({ 10: 'z' })
  })
})
