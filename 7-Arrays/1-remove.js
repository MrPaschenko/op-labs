'use strict';

function removeElement(array, item) {
  if (array.indexOf(item) !== -1) array.splice(array.indexOf(item), 1);
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima'); // удалит 'Lima' из массива
removeElement(array2, 'Berlin'); // не удалит ничего
console.log(array2);
