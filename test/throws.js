var shimify = require('../index');
var assert = require("assert");

describe('when argument is missing', function () {
  it('should throw', function () {
    assert.throws(function(){shimify()});
  });
});

describe('when argument is null', function () {
  it('should throw', function () {
    assert.throws(function(){shimify(null)});
  });
});

describe('when argument is not an object', function () {
  it('should throw', function () {
    assert.throws(function(){shimify(true)});
  });
});
