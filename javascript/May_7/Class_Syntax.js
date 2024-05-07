/*
Classes are a template for creating objects. They encapsulate data with code to work on that data. 
Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. 
For more examples and explanations, see the Using classes guide
*/

// define a class named 'Person'
class Person {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// create two instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances 
person1.greet();
person2.greet();