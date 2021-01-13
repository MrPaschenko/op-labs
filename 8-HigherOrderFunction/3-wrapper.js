'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (typeof(args[i]) !== types[i].name.toLowerCase()) throw new TypeError();
  }
  const res = fn(...args);
  const resExpectedType = types.pop().name.toLowerCase();
  if (typeof(res) !== resExpectedType) throw new TypeError();
  return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // 'Hello world!'
