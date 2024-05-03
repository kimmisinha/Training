/*
The JavaScript ES6 introduced a new primitive data type
 called Symbol. Symbols are immutable (cannot be changed) and are unique. 
 For example,
*/

/*
Benefit of Using Symbols in Object:

If the same code snippet is used in various programs, then 
it is better to use Symbols in the object key. It's because you can use 
the same key name in different codes and avoid duplication issues. For example,
*/

// two symbols with the same description

const value1 = Symbol("hello");
const value2 = Symbol("hello");

console.log(value1 === value2); // false

/* 
Object properties as private keys: Symbols are often used as 
keys for object properties to create "private" properties that are inaccessible 
from outside the object.
*/
const privateProperty = Symbol("private");

const obj = {};
obj[privateProperty] = "This is a private property";
console.log(obj[privateProperty]); // Output: 'This is a private property'

/*
As property keys to avoid collisions: Since symbols are unique, they can be
 used as property keys to avoid name collisions in objects.
*/
const logSymbol = Symbol("log");
const logger = {
  [logSymbol]: function (message) {
    console.log(message);
  },
};

logger[logSymbol]("Hello, world!"); // Output: 'Hello, world!'

/*
Iterating over object properties: Symbols are not enumerable
 in for...in loops, so they won't be accidentally included when iterating 
 over an object's properties.
*/
const privateProperty_2 = Symbol("private");

const obj = {
  name: "John",
  age: 30,
  [privateProperty_2]: "This is private",
};

for (let key in obj) {
  console.log(key); // Output: 'name' and 'age', but not the privateProperty
}

/*
The Symbol.keyFor internally uses the global symbol registry to look up the key 
for the symbol. So it doesn’t work for non-global symbols. If the symbol is not 
global, it won’t be able to find it and returns undefined.
*/

let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log(id === idAgain); // true
