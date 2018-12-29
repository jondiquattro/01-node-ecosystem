'use strict';

let greet = module.exports = {};


greet.speak = function(name) {
  if( typeof name !== 'string' ) { return null; }
  return 'hello '+name;
}

