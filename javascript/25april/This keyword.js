/*Global Context: When used outside of any function, 
this refers to the global object, which is window in a
 browser environment and global in Node.js.*/
console.log(this === window); // true

/*Function Context: When used inside a function, what this refers to depends on how the function is called.
Regular Function Call: In a regular function call, this refers to the global object (in non-strict mode) 
or undefined (in strict mode).
*/
function myFunction() {
  return this;
}
console.log(myFunction() === window); // true in non-strict mode

/* Method Call: When a function is called as a method of an object,
 this refers to the object that the method is called on. */

 const obj = {
  myMethod: function() {
      return this;
  }
};
console.log(obj.myMethod() === obj); // true
