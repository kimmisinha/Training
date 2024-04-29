/*
Hoisting is a JavaScript mechanism where variable and function declarations
 are moved to the top of their containing scope during the compilation phase. 
However, only the declarations are hoisted, not the initializations.
*/
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

var x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10
