'use strict';

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

const a = sum(1, 2, 3); // a === 6

console.log(a);
