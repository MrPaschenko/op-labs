'use strict';

const compose = (...fns) => x => {
  try {
    return fns.reduceRight((v, f) => f(v), x);
  } catch (err) {
    fns.pop();
    return fns.reduceRight((v, f) => f(v), x);
  }
};

const error = () => {
  throw new Error('hello, its me');
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(cube, twice, inc, error);
const x = f(5);
console.log(x);
