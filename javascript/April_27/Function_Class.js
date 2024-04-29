/*
In JavaScript, both functions and constructors can be used to create objects, but 
they serve different purposes and have different advantages depending on the situation.
*/

/*
Functions for Object Creation:
This approach is simple and straightforward, especially for creating individual objects or 
small groups of related objects.
Functions in JavaScript can be used as factories to create objects. You can define a 
function that returns an object literal, like this:

*/
function createPerson(name, age) {
  return {
      name: name,
      age: age
  };
}

const person1 = createPerson('John', 30);

/*
Constructors for Object Creation:
Constructors, on the other hand, are functions specifically designed to create instances of a particular 
type of object. You use the new keyword with a constructor function to create new instances, like this:
Prototype Inheritance:
Prototype Inheritance
Encapsulation
Identifying Object Type
*/

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

const person_constructor = new Person2('John', 30);
console.log(person_constructor)
