// Global Scope

// Global scope variable
var globalVar = "I'm a global variable";

function exampleFunction() {
    // Accessing globalVar from within a function
    console.log(globalVar);
}

exampleFunction(); // Output: I'm a global variable


// Global scope variable

function exampleFunction() {
    // Accessing globalVar from within a function
    var globalVar = "I'm a global variable";

    console.log(globalVar);
}

exampleFunction(); // Output: I'm a global variable
