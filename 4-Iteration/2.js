'use strict';

function sum(...args) {
  let sum = 0;
  for (const key in args) {
    sum += args[key];
  }
  return sum;
}

const b = sum(0); // b === 0

console.log(b);
