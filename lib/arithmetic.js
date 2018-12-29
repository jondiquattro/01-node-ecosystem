'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  
  if( typeof a !== "number" || typeof b !== "number" ) { return NaN; }

  return a+b;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return NaN; }
  return a-b;
};


arithmetic.divide = function(a,b){
  if( typeof a !== "number" || typeof b !== "number" ) { return NaN; }
  else if( b === 0) { return 'nan'; }
  else{return a/b;}


};

arithmetic.multiply = function(a,b){
  // if( typeof a !== "number" || typeof b !== "number" ) { return NaN; }
  // else if( b === 0) { return 'nan'; }
  // else{return a/b;}
  return a * b;

};