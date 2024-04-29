// Global Scope:
// Variables declared outside of any function, including those declared with var, let, or const keywords, have global scope.
// Global variables are accessible from anywhere within the program, including inside functions.


var globalVar = "I am a global variable";

function foo() {
  console.log(globalVar); // Accessible within the function
}

foo(); // Output: I am a global variable

// Lexical scope refers to the visibility and accessibility of variables based on their location within nested functions.
// In JavaScript, functions create a new scope, and variables declared within a function are only accessible within that function or nested functions.

function outer() {
  var outerVar = "I am in outer function";

  function inner() {
    console.log(outerVar); // Accessible within the inner function
  }

  inner();
}

outer(); // Output: I am in outer function
