console.log('');
console.log('STRINGS');
console.log('================================================')
console.log('');

// Variables: str1 & str2
let str1 = 'I like penguins.';
let str2 = 'I like ice cream.';

// Print Values
console.log(`The value of str1 is: ${str1}`);
console.log(`The value of str2 is: ${str2}`);
console.log('');

// Concatenation
let concat = str1.concat(str2); // Can also use +=
console.log(`The concatenation of str1 and str2 is: ${concat}`);
console.log('');

// String.prototype.includes
let included = str2.includes(str1);
console.log(`For whether str1 appears in str2, it is: ${included}`);
console.log('');

// Variable: waffles
let waffles = 'Are waffles better than pancakes?';
console.log(`The value of the string, waffles, is: ${waffles}`);
console.log('');

// String Length
let stringLength = waffles.length;
console.log(`The length of waffles is: ${length}`);
console.log('');

// Uppercase
let upperCase = waffles.toUpperCase();
console.log(`Waffles is now uppercase: ${upperCase}`);
console.log('');

// Lowercase
let lowerCase = waffles.toLowerCase();
console.log(`Waffles is now lowercase: ${lowerCase}`);
console.log('');

// Index 0
let index0 = waffles.charAt(0);
console.log(`The 1st character in waffles is: ${index0}`);
console.log('');

// Index 1
let index1 = waffles.charAt(1);
console.log(`The 2nd character in waffles is: ${index1}`);
console.log('');

// Last Index
let lastIndex = waffles.charAt(waffles.length - 1);
console.log(`The last character in waffles is: ${lastIndex}`);
console.log('');

// Index k
let k = 5
let indexK = waffles.charAt(k);
console.log(`The character at index ${k} in waffles is: ${indexK}`);
console.log('');

// Append 'a
let wafflesAppended = waffles += 'a';
console.log(`The value of waffles with an appended letter is now: ${wafflesAppended}`);
console.log('');

// Template Literals (what is a template literal? -- a template literal uses backticks)
let firstName = 'Kevin'; // dynamic as in user input in console?
console.log(`Hello, ${firstName}!`);
