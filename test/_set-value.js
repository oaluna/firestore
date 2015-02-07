// Test: examples/set-value.js
// Set value example test
'use strict';

require('should')
var _      = require('lodash')
  , exec   = require('child_process').exec
;
describe('example', function() {
  this.timeout(9000)
  it('Set value', function(done) {
  exec('node examples/set-value.js', function (error, stdout, stderr) {
//    if (error) throw error
      _.trim(stdout).should.equal('')
      _.trim(stderr).should.equal('FIREBASE WARNING: set at /kv/somewhere failed: permission_denied')
      done()
    })
  })
})
