XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var print_r = require('/Users/kvz/code/phpjs/src/php/var/print_r.js')

describe('php.var.print_r.js', function () {
  it('should pass example 1', function (done) {
    print_r(1, true)
    var expected = '1'
    var result = print_r(1, true)
    expect(result).to.deep.equal(expected)
    done()
  })
})