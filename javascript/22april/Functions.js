// Functions and arrow functions, callback functions
// Regular Function:
// In regular functions, the value of this is determined 
// dynamically at runtime based on how the function is called or executed.

function abc(a){
  return a
}
let res=abc(8);
console.log(res)

// Example of a regular function
function regularFunction() {
  console.log(this);
}

// Case 1: Calling the function as a method of an object
const obj = {
  method: regularFunction
};
obj.method(); // Output: { method: [Function: regularFunction] }

// Case 2: Calling the function in the global scope
regularFunction(); // Output: global object (e.g., Window in the browser, global in Node.js)
// Arrow functions capture the this value
//  from the surrounding lexical context at 
//  the time of their creation. They do not have their own this context.


let result=(a)=>a
console.log(result(8))
// Example of an arrow function
const arrowFunction = () => {
  console.log(this);
};

// Case 1: Calling the arrow function as a method of an object
const obj2 = {
  method: arrowFunction
};
obj2.method(); // Output: global object (e.g., Window in the browser, global in Node.js)

// Case 2: Calling the arrow function in the global scope
arrowFunction(); // Output: global object (e.g., Window in the browser, global in Node.js)

//callback 


function hello(name,hello2){
  console.log( "my name"+name)
  hello2()
}
// callback function

function hello2(){
  console.log('kumari')
}

hello('kimmi',hello2)