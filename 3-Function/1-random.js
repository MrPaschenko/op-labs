'use strict';

function random(min, max) {
  if (max === undefined) {
    return Math.round(Math.random() * min);
  } else
    return Math.round(Math.random() * (max - min) + min);
}

console.log(random(0, 6)); // random string from 0 to 6 included

console.log(random(6)); // random string from 0 to 6 included
