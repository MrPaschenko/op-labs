'use strict';

const array = () => {
  const arr = [];
  const get = index => arr[index];
  get.push = x => arr.push(x);
  get.pop = () => arr.pop();
  return get;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // 'first'
console.log(arr(1)); // 'second'
console.log(arr(2)); // 'third'

console.log(arr.pop()); // 'third'
console.log(arr.pop()); // 'second'
console.log(arr.pop()); // 'first'

console.log(arr.pop()); // 'undefined'
