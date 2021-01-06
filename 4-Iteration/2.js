'use strict';

function sum(...args) {
  let sum = 0;
  for (const key in args) {
    sum += args[key];
  }
  return sum;
}

const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
