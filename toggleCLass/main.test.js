/* globals describe, it */

const jsdom = require('jsdom')
const chai = require('chai')
const toggleClass = require('./main.js')
const { expect } = chai
chai.use(require('chai-dom'))

const { JSDOM } = jsdom
const { window } = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Toggle Class</title>
    </head>
    <body>
      <div class="header">Hello World.</div>
    </body>
  </html>
`)
const { document } = window
global.document = document
global.window = window
const headers = document.querySelectorAll('.header')

describe('DOM functions', () => {
  it('Adds a class(es) to an existing element.', () => {
    toggleClass(headers, 'welcome')
    expect(headers[0]).to.have.class('welcome')
  })
  it('Removes a class(es) that exists.', () => {
    toggleClass(headers, 'header')
    expect(headers[0]).to.not.have.class('header')
  })
})
