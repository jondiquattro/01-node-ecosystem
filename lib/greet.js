'use strict';

let greet = module.exports = {};


greet.speak = function(name) {
  if( typeof name !== 'string' ) { return null; }
  console.log('hello '+name)
  return 'hello '+name;
    
};