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
  const keys = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof(fn) === 'function') {
      keys.push([key, fn.length]);
    }
  }
  return keys;
}

console.log(methods(someObject));
