// The instanceof operator in JavaScript is used to check if
//  an object belongs to a particular class or constructor function.
//   It returns true if the object is an instance of the specified class or 
//   constructor function, otherwise, it returns false.


  // Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create an instance of Person
const john = new Person('kimmi', 30);

// Check if john is an instance of Person
console.log(john instanceof Person); // Output: true
