'use strict';

function random(min, max) {
  if (max === undefined) {
    return Math.round(Math.random() * min);
  } else
    return Math.round(Math.random() * (max - min) + min);
}

console.log(random(0, 6));

console.log(random(6));
