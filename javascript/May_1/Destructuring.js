/*
Destructuring assignment in JavaScript is a powerful feature that allows you 
to extract data from arrays, objects, maps, sets, and other iterable data
 structures. It provides a concise syntax for extracting multiple values from 
 these structures and assigning them to variables.
*/

// 1. Destructuring Arrays:

const numbers = [1, 2, 3, 4, 5];

// Extracting values from array
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// 2. Destructuring Objects:

const person = { name: 'John', age: 30 };

// Extracting values from object
const { name, age } = person;
console.log(name); // John
console.log(age); // 30



