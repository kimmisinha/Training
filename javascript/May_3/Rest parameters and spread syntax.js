/*

Rest parameters and spread syntax are two powerful features introduced in JavaScript ES6 (ECMAScript 2015) that allow for more flexible and concise code when
 working with functions and arrays.

Rest Parameters (...):
Rest parameters allow you to represent an indefinite number of arguments as an array within a function definition.
 This is useful when you want a function to accept any number of arguments, 
or when you're not sure how many arguments will be passed.
In this example, the sum function can accept any number of arguments. 
The ...numbers syntax gathers all the arguments into an array called numbers, which can then be used within the function.


*/
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10)); // Output: 15

/*
Spread syntax, also denoted by the ... operator, allows an iterable (like an array)
 to be expanded into individual elements. It's useful for functions that expect
  multiple arguments or when creating new arrays/objects based on existing ones.

*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

let obj1 = { name: "Alice", age: 30 };
let obj2 = { city: "New York", country: "USA" };

let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { name: "Alice", age: 30, city: "New York", country: "USA" }

/*
Rest parameters are used in function definitions to collect multiple arguments into an array, while spread syntax is used to 
expand an array (or other iterable) into individual elements.
Rest parameters are used in function definitions, whereas spread syntax can be used in function calls, array literals, and object literals.

*/
