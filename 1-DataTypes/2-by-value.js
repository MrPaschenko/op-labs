'use strict';

function inc(n) {
  return n * 2;
}

const a = 5;
const b = inc(a);

console.dir({ a, b }); // { a: 5, b: 10}
