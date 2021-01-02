'use strict';

const obj = { n: 5 };

function inc(num) {
  num.n = 10;
}

inc(obj);

console.dir(obj);
