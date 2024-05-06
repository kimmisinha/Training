/*

Rest parameters and spread syntax are two powerful features introduced in JavaScript ES6 (ECMAScript 2015) that allow for more flexible and concise code when
 working with functions and arrays.

Rest Parameters (...):
Rest parameters allow you to represent an indefinite number of arguments as an array within a function parameter.
 This is useful when you want to work with an arbitrary number of arguments passed to a function.



*/
function myFunction(...rest) {
  // rest is an array containing all the additional arguments
  console.log(rest);
}

myFunction(1, 2, 3, 4); // Output: [1, 2, 3, 4]

/*
Spread syntax
Spread syntax, on the other hand, allows an iterable (like an array or string) to
 be expanded into individual elements. It's used in array literals, function calls,
  and more to spread elements.


*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

let obj1 = { name: "Alice", age: 30 };
let obj2 = { city: "New York", country: "USA" };

let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { name: "Alice", age: 30, city: "New York", country: "USA" }
