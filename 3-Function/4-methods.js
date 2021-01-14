'use strict';

const someObject = {
  m1: x => [x],
  m2(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

function methods(iface) {
  const keys = Object.keys(iface);
  const res = [];
  for (const key of keys) {
    const value = iface[key];
    if (typeof(value) === 'function') {
      res.push([key, value.length]);
    }
  }
  return res;
}

console.log(methods(someObject)); // [ [ 'm1', 1 ], [ 'm2', 2 ], [ 'm3', 3 ] ]
