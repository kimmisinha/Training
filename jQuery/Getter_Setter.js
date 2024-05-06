/*
Getters and setters are special methods in JavaScript that allow you to 
define custom behavior when getting and setting properties on an object. 
They provide control over how properties are accessed and modified, enabling 
you to implement data validation, encapsulation, and computed properties.
Here's why you might need getters and setters and where you could use them in a real-time project implementation:
*/

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper