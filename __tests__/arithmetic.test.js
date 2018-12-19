'use strict';

const arithmetic = require('../lib/arithmetic.js');

it('can add 2 numbers', ()=>{

    let expected = 2;
    let sum = arithmetic.add(1,1);
    expect(sum).toEqual(expected);
})


it('can subtract one number from another', ()=> {
    let expected = 1;
    let less = arithmetic.subtract(2,1);
    expect(less).toEqual(expected);
})