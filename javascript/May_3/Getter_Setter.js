/*

A getter is a function that is used to retrieve the value of a property. 
It is defined using the get keyword followed by the property name. 
When the property is accessed, the getter function is automatically invoked, 
and its return value is used as the property value. Here's an example:

*/

const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.fullName); // Output: "John Doe"

  /*
  In this example, fullName is a getter function that concatenates the firstName 
  and lastName properties to form the full name of the person.
*/


/*
A setter is a function that is used to set the value of a property. 
It is defined using the set keyword followed by the property name. 
When the property is assigned a new value, the setter function is automatically 
invoked with the new value as its argument. Here's an example:
*/

const person_2 = {
    firstName: "John",
    lastName: "Doe",
    set fullName_2(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  person.fullName_2 = "Jane Smith";
  console.log(person.firstName); // Output: "Jane"
  console.log(person.lastName); // Output: "Smith"
  

