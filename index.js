

var defineMethod = 'define("${name}", ${deps}, function(){return (${init}).apply(null, arguments) || ${exports};})';

module.exports = function(config){
  if(config == null || typeof(config) != 'object'){
    throw new Error("config is required!");
  }
  
  if('shims' in config){
    config = config.shims;
  }
  
  var shims = Object.keys(config).map(function(key){
    return {
      name: key,
      deps: JSON.stringify(config[key].deps || []),
      exports: config[key].exports || 'null',
      init: config[key].init || typeof(config[key].exports) == 'function' ? config[key].exports : function(){}
    };
  }).map(function(shim){
    return defineMethod.replace(/\${(\w+)}/g, function(match, name){
      return shim[name];
    });
  });
  
  return shims;
};