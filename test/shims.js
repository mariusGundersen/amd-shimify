var shimify = require('../index');
var should = require('should');

describe('when given one shim', function () {
  it('should return one shim', function () {
    var shim = shimify({
      'jQuery': {
        exports: '$'
      }
    });
    
    shim.length.should.equal(1);
    shim[0].should.equal('define("jQuery", [], function(){return (function (){}).apply(null, arguments) || $;})');
  });
});

describe('when given one shim with dependencies', function () {
  it('should return one shim with dependencies', function () {
    var shim = shimify({
      'jQuery': {
        exports: '$',
        deps: ['abc', 'def']
      }
    });
    
    shim.length.should.equal(1);
    shim[0].should.equal('define("jQuery", ["abc","def"], function(){return (function (){}).apply(null, arguments) || $;})');
  });
});

describe('when given one shim with init', function () {
  it('should return one shim with init', function () {
    var shim = shimify({
      'jQuery': {
        init: function(){return '$';}
      }
    });
    
    shim.length.should.equal(1);
    shim[0].should.equal('define("jQuery", [], function(){return (function (){return \'$\';}).apply(null, arguments) || null;})');
  });
});

describe('when given one shim with export as function', function () {
  it('should return one shim with function exported', function () {
    var shim = shimify({
      'jQuery': {
        export: function(){return '$';}
      }
    });
    
    shim.length.should.equal(1);
    shim[0].should.equal('define("jQuery", [], function(){return (function (){return \'$\';}).apply(null, arguments) || null;})');
  });
});