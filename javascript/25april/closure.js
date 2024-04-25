function outerFunction() {
  const outerVariable = 'I am from outerFunction';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from outerFunction
