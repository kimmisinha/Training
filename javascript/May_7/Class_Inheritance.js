/*
Constructor:

The constructor method is a special method used for initializing new objects created with the class.
It's called automatically when you instantiate a new object using new ClassName().
You can pass parameters to the constructor to initialize object properties.


Methods:

Methods are functions defined inside the class body.
They define the behavior of class instances and can be called on instances created from the class.
Methods can accept parameters and operate on the instance data using this.

*/

/*
Prototypal inheritance is a fundamental concept in JavaScript that allows 
objects to inherit properties and methods from other objects. Let's break 
down your questions:
*/
//Why do we need prototypal inheritance?
/*
Code Reusability: It enables the creation of reusable code patterns. 
Instead of defining the same properties and methods for each object,
 you can define them once on a prototype and have multiple objects inherit from it.
Efficiency: It helps in memory management by allowing multiple objects to share the
same methods and properties stored in the prototype chain. Dynamic Behavior: Prototypal 
inheritance allows for dynamic changes to the inheritance chain during runtime, 
enabling flexible and powerful programming constructs.
*/
//Where to use prototypal inheritance?
/*
Object-Oriented Programming (OOP): Prototypal inheritance is commonly used in 
JavaScript for implementing OOP concepts such as inheritance, encapsulation, and polymorphism.
Code Modularity: It's useful when creating libraries or frameworks where you want to provide a 
set of functionalities that can be extended or overridden. Prototype-based Design Patterns: 
Certain design patterns in JavaScript, like Constructor Pattern, Module Pattern, and Revealing 
Module Pattern, utilize prototypal inheritance to organize and structure code efficiently.
*/

// parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
 
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
        
        // call the super class constructor and pass in the name parameter
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();