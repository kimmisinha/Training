// In JavaScript, an object is a data type that allows you to store key-value pairs
var obj = {
  name: "kimmi",
  roll: 8,
};
console.log(obj.name);
console.log(obj["roll]"]);

obj.section = "b";
obj["subject"] = "math";

/*Objects can contain functions as
properties. These functions are called
methods and can perform actions or
computations related to the object's data.

Methods in JavaScript objects are functions that are defined as properties of an object.
*/

// Define an object representing a person
const person = {
  firstName: "kimmi",
  lastName: "kumari",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  greet: function () {
    console.log(
      "Hello, my name is " +
        this.fullName() +
        " and I am " +
        this.age +
        " years old."
    );
  },
};

// Call the methods of the object
console.log(person.fullName()); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Using Object.keys()
const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city", "job"]

const values = Object.values(person);
console.log(values);
