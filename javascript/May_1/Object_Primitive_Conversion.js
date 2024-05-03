/*
In JavaScript, object-to-primitive conversion refers to the process of 
converting an object to a primitive value (like a string, number, or boolean)
 when it's used in a context where a primitive value is expected. This typically
  happens when an object is used in an operation that requires a primitive value,
   such as arithmetic operations, string concatenation, or comparison.
*/

/*
The Symbol.toPrimitive method allows objects to define their own custom behavior 
for object-to-primitive conversion. This method receives a hint argument indicating
 the preferred type of conversion: "string", "number", or "default".
*/

const obj = {
  name: "John",
  age: 30,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
    if (hint === "number") {
      return this.age;
    }
    return "[object Object]";
  },
};

console.log(obj + ""); // Output: "Name: John, Age: 30"
console.log(obj * 2); // Output: 60
