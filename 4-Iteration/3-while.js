'use strict';

function sum(...args) {
  let sum = 0;
  let i = 0;
  while (i < args.length) {
    sum += args[i];
    i++;
  }
  return sum;
}

const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7

console.log(a); // 6
console.log(b); // 0
console.log(c); // 0
console.log(d); // 1
console.log(e); // 7
