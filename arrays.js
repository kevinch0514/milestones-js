console.log('');
console.log('ARRAYS');
console.log('================================================')
console.log('');

// Variable: coolArray
let coolArray = [
  'Kevin',
  'Zhi-Hong',
  'Chen',
  20,
  'DUFF',
  'Aquamarine Penguin',
];
console.log('');

// Array Length
let arrayLength = coolArray.length;
console.log(`The length of cool.Array is: ${arrayLength}`);
console.log('');

// Index 0
let index0 = coolArray[0];
console.log(`The 1st element in coolArray is: ${index0}`);
console.log('');

// Index 1
let index1 = coolArray[1];
console.log(`The 2nd element in coolArray is: ${index1}`);
console.log('');

// Last Index
let lastIndex = coolArray[coolArray.length - 1];
console.log(`The last element in coolArray is: ${lastIndex}`);
console.log('');

// Index k
let k = 4;
let indexK = coolArray[k];
console.log(`The element at index ${k} in coolArray is: ${indexK}`);
console.log('');

// Change Index 0
coolArray[0] = 'May';
console.log(`The new 1st element in coolArray is: ${coolArray[0]}`);
console.log('');

// Change Index 1
coolArray[1] = 14;
console.log(`The new 2nd element in coolArray is: ${coolArray[1]}`);
console.log('');

// Change Last Index
coolArray[coolArray.length - 1] = 'Colorado'
console.log(`The new last element in coolArray is: ${coolArray[coolArray.length - 1]}`);
console.log('');

// Change Index k
k = 4;
coolArray[k] = 'North Carolina'
console.log(`The new element at index ${k} in coolArray is: ${coolArray[k]}`);
console.log('');

// Append Element
coolArray.push('Spring');
console.log(`Spring was appended to coolArray: ${coolArray}`);
console.log('');

// Remove Last Element
coolArray.pop();
console.log(`The last element was removed from the coolArray: ${coolArray}`);
console.log('');

// Prepend Element
coolArray.unshift('Rise and shine!')
console.log(`Rise and shine! was prepended to coolArray: ${coolArray}`)

// Remove First Element
coolArray.shift();
console.log(`The first element was removed from the coolArray: ${coolArray}`);
console.log('');
