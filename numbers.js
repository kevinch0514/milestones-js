console.log('');
console.log('NUMBERS');
console.log('================================================')
console.log('');

// Variables: num1 & num2
let num1 = 123;
let num2 = 982;
console.log(`The value of num1 is: ${num1}`);
console.log(`The value of num2 is: ${num2}`);
console.log('');


// Addition
let sum = num1 + num2;
console.log(`The sum of num1 + num2 is: ${sum}`);
console.log('');


// Subtraction
let difference = num1 - num2;
console.log(`The difference between num1 - num2 is: ${difference}`);
console.log('');


// Multiplication
let product = num1 * num2;
console.log(`The product of num1 * num2 is: ${product}`);
console.log('');

// Division
let quotient = num1 / num2;
console.log(`The quotient of num1 / num2 is: ${quotient}`);
console.log('');

// Remainder
let remainder = num1 % num2;
console.log(`The remainder of num1 % num2 is: ${remainder}`);
console.log('');

// Exponentiation
let power = num1 ** num2;
console.log(`The power of num1 ** num2 is: ${power}`);
console.log('');

// Math.floor
let floor = Math.floor(num1 / num2);
console.log(`The floor of Math.floor(num1 / num2) is: ${floor}`);
console.log('');

// Variable:
let blah = 4562;
console.log(`The value of blah is: ${blah}`);
console.log('');

// Right Most Digit
let rightMostDigit = blah % 10;
console.log(`The right most digit of ${blah} is: ${rightMostDigit}`);
console.log('');

// Even or Odd
let evenOrOdd = blah % 2;
if (evenOrOdd === 0) {
  console.log(`Blah is even because the remainder of blah / 2 is: ${evenOrOdd}`);
} else {
  console.log(`Blah is odd because the remainder of blah / 2 is: ${evenOrOdd}`);
}
console.log('');

// Increment by 1
blah += 1;
console.log(`The value of blah incremented by 1 is now: ${blah}`);
console.log('');

// Increment by 2
blah += 2;
console.log(`The value of blah incremented by 2 is now: ${blah}`);
console.log('');

// Increment by 10
blah += 10;
console.log(`The value of blah incremented by 10 is now: ${blah}`);
console.log('');

// Increment by k
let k = 12
blah += k;
console.log(`The value of blah incremented by k, ${k}, is now: ${blah}`);
console.log('');

// Decrement by 1
blah -= 1;
console.log(`The value of blah decremented by 1 is now: ${blah}`);
console.log('');

// Decrement by 2
blah -= 2;
console.log(`The value of blah decremented by 2 is now: ${blah}`);
console.log('');

// Decrement by 10
blah -= 10;
console.log(`The value of blah decremented by 10 is now: ${blah}`);
console.log('');

// Decrement by k
k = 12
blah -= k;
console.log(`The value of blah decremented by k, ${k}, is now: ${blah}`);
console.log('');
