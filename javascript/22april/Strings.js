// Strings and string methods, templates
let str = "Hello, World!";
console.log(str.length);          // 13
console.log(str.charAt(0));       // "H"
console.log(str.concat(" Welcome")); // "Hello, World! Welcome"
console.log(str.indexOf("World"));  // 7
console.log(str.slice(0, 5));       // "Hello"
console.log(str.toUpperCase());    // "HELLO, WORLD!"
console.log(str.split(", "));       // ["Hello", "World!"]
let name = "kimmi";
let age = 23;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// Output: "Hello, my name is Alice and I am 30 years old."
