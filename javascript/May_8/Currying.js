/*
Currying is a functional programming technique in which a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. The result is a new function that can be called with one argument at a time and eventually produces the final result.

Here's why we use currying, where to use it, and how to implement it:

Why we use currying:
Partial application: Currying allows you to partially apply a function by fixing one or more arguments, creating a new function that takes the remaining arguments. This can be useful for creating specialized versions of a function or for deferring the application of some arguments until later.
Composition: Currying facilitates function composition, allowing you to combine small, focused functions into larger, more complex functions. This promotes code reuse and maintainability by breaking down complex logic into smaller, composable parts.
Where to use currying:
Functional programming: Currying is a fundamental technique in functional programming, where functions are treated as first-class citizens and can be manipulated and composed like any other value.
Utility functions: Currying is often used to create utility functions that can be reused across different parts of an application, such as map, filter, and reduce functions in JavaScript.
Event handling: Currying can be useful in event handling scenarios where you need to pass additional data to event listeners without directly invoking the handler.
How to implement currying:
Define a higher-order function: Start by defining a higher-order function that takes one argument and returns a new function.
Return a function: Inside the higher-order function, return a new function that takes the next argument and applies it to the original function.
Repeat: Continue this process until all arguments are applied, at which point the original function is called with all arguments, and the final result is returned.

*/

//Here's a simple example demonstrating how to implement currying in JavaScript:

function add(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

const sum = add(1)(2)(3);
console.log(sum);
Cod