// JavaScript provides different data types to hold different 
// types of values. There are two types of data types in JavaScript.

// Primitive data type
// Non-primitive (reference) data type
// Primitive Data Types:
// Primitive data types are immutable, meaning they cannot be changed once they are created. T
// hey are stored directly in memory and are accessed by their value
// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

let a=0;
let b=a;
a=90
console.log(a);
console.log(b)

// Reference Data Types:
// Reference data types are mutable and are stored as a reference to the memory location where the data is stored. Objects, arrays, functions, etc., are reference data types.

let arr1=['45','5','5']
let arr2=arr1;
arr2.push('90');
console.log(arr1);
console.log(arr2)