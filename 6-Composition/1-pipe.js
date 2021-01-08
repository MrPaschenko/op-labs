'use strict';

const pipe = (...fns) => x => {
  for (const value of fns) {
    if (typeof(value) !== 'function') throw new Error('Expected function');
  }
  return fns.reduce((v, f) => f(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x);

// const f = pipe(inc, inc);
// const x = f(7);
// console.log(x);

const fn = pipe(inc, 7, cube);

fn();
