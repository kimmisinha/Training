/*Closure in JavaScript is a form of lexical scoping used to preserve variables from
 the outer scope of a function in the inner scope of a function.*/
function outerFunction() {
  const outerVariable = 'I am from outerFunction';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from outerFunction
