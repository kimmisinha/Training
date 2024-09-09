/*

Scope:
Scope refers to the context in which variables are declared and accessed. In JavaScript, 
variables have function-level scope by default, meaning that they are accessible only 
within the function in which they are declared, as well as any nested functions. Variables 
declared outside of any function have global scope, meaning they are accessible
throughout the entire script.

*/
function outerFunction() {
  var outerVariable = 'I am in outer function';
  
  function innerFunction() {
      var innerVariable = 'I am in inner function';
      console.log(outerVariable); // Accessible because innerFunction is nested within outerFunction
  }

  innerFunction();
  console.log(innerVariable); // Error: innerVariable is not defined outside innerFunction
}

outerFunction();
console.log(outerVariable); // Error: outerVariable is not defined outside outerFunction

/*
Closure:
A closure is a function bundled together with its lexical environment, 
which consists of the variables that were in scope when the closure was created. 
This allows the function to maintain access to those variables even after the outer
function has finished executing.
*/

function createCounter() {
  var count = 0;

  return function() {
      count++;
      console.log(count);
  };
}

var counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2


function abc() {
  let x = 55;

  function bca() {
      console.log(x);
      return x;
  }

  return bca(); // Return the result of bca()
}

var res = abc();
console.log(res);
