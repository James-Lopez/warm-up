/* globals describe, it */

const jsdom = require('jsdom')
const chai = require('chai')
const replaceWith = require('./main.js')
const { expect } = chai
chai.use(require('chai-dom'))

const { JSDOM } = jsdom
const { window } = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Replace</title>
    </head>
    <body>
      <div>Hello World.</div>
    </body>
  </html>
`)
const { document } = window
global.document = document
global.window = window
const replacee = document.createElement('button')

describe('DOM functions', () => {
  it('replaces the selected element of a DOM node with a new one.', () => {
    expect(replaceWith('div', replacee)).contain(replacee)
  })
})
