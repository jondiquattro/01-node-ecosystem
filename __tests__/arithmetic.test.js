'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

//test with faker
it('can add 2 numbers', ()=>{
    
  let inputA = faker.random.number();
  let inputB = faker.random.number();
  let expected = inputA + inputB;

  let sum = arithmetic.add(inputA, inputB);
  expect(sum).toEqual(expected);
});

//test with hard coded inputs
it('can add 2 hard coded numbers', ()=>{
    
  let inputA = 1;
  let inputB = 2;
  let expected = inputA + inputB;
    
  let sum = arithmetic.add(inputA, inputB);
  expect(sum).toEqual(expected);
});

//test with one or more char inputs

xit('can add 2 numbers', ()=>{
    
  let inputA = 'a';
  let inputB = faker.random.number();
  let expected = inputA + inputB;
    
  let sum = arithmetic.add(inputA, inputB);
  expect(sum).toEqual(expected);
});


//tested with faker
it('can add 2 numbers', ()=>{
    
  let inputA = faker.random.number();
  let inputB = faker.random.number();
  let expected = inputA - inputB;
  
  let less = arithmetic.subtract(inputA, inputB);
  expect(less).toEqual(expected);
});

//tested with harde coded inputs
it('can subtract one number from another', ()=> {
  let expected = 1;
  let less = arithmetic.subtract(2,1);
  expect(less).toEqual(expected);
});

//tested with one or more chars
it('can add 2 numbers', ()=>{
    
  let inputA = 'a';
  let inputB = faker.random.number();
  let expected = inputA - inputB;
      
  let less = arithmetic.add(inputA, inputB);
  expect(less).toEqual(expected);
});

//division

it('can divide 2 numbers', ()=>{
    
  let inputA = faker.random.number();    
  let inputB = faker.random.number();
  let expected = inputA / inputB;
        
  let division = arithmetic.divide(inputA, inputB);
  expect(division).toEqual(expected);
});

it('can multiply 2 numbers', ()=>{
    
    let inputA = faker.random.number();    
    let inputB = faker.random.number();
    let expected = inputA * inputB;
          
    let times = arithmetic.multiply(inputA, inputB);
    expect(times).toEqual(expected);
  });