'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

it('can take in a name and return a greeting', ()=>{

  let name = faker.name.firstName();
  let expected = 'hello '+ name;
  let sum = greet.speak(name);
  expect(sum).toEqual(expected);
});