'use strict';

const person1 = {
  name: 'Kirill',
};

let person2 = {
  name: 'Marcus',
};

person1.name = 'notKirill'; // new value for person1.name
person2.name = 'notMarcus'; // new value for person2.name

console.dir({ person1, person2 });
// { person1: { name: 'notKirill' }, person2: { name: 'notMarcus' } }

// person1 = {   // cannot change object because of const
//   age: 22,    // cannot change object because of const
// };            // cannot change object because of const

person2 = {      // object is changeable because of let
  age: 15,       // object is changeable because of let
};               // object is changeable because of let

console.dir({ person1, person2 });
// { person1: { name: 'notKirill' }, person2: { age: 15 } }
