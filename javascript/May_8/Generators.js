/*

Generators in JavaScript are functions that can pause and resume their execution, allowing for a more flexible and efficient way to work with sequences of data. Here's why we need generators, where to use them, and how to use them effectively:
Why we need generators:
Generators provide a way to define an iterative algorithm by writing a single function that can produce a sequence of values lazily. This means that instead of generating all the values at once, they can produce them one at a time, as needed. This lazy evaluation can save memory and processing power, especially when dealing with large datasets or infinite sequences.
Where to use generators:
Generators are particularly useful in scenarios where you need to work with sequences of data that are too large to fit into memory all at once or when you want to work with potentially infinite sequences. Some common use cases include:
Iterating over large datasets without loading everything into memory.
Implementing custom iteration patterns, such as infinite sequences of numbers or custom data structures.
Asynchronous programming, where generators can simplify the handling of asynchronous operations by using the yield keyword with promises or other asynchronous primitives.
How to use generators effectively:
Define a generator function: Create a generator function using the function* syntax, which allows you to use the yield keyword inside the function body to pause execution and produce values.
Iterate over the generator: Use a for...of loop or the next() method on the generator object to iterate over the values produced by the generator.
Control flow with yield: Use the yield keyword to pause the execution of the generator and produce a value. When the generator is resumed, it continues execution from the point where it was paused.
Pass values into the generator: You can pass values into the generator by calling the next() method with an argument. This value will be returned by the yield expression in the generator function.
Error handling: You can handle errors in generators by throwing exceptions inside the generator function or by using a try...catch block around the iteration code.

*/

// Create JavaScript Generators

function* generator() {
    console.log(100)
    yield 100;
    console.log(200)
    yield 200;

}
const result = generator();
console.log(result.next());
console.log(result.next())

// Using yield to Pause Execution

function* generatorFunc() {

    console.log("1. code before the first yield");
    yield 100;

    console.log("2. code before the second yield");
    yield 200;
}

const generator = generatorFunc();
console.log(generator.next());

// JavaScript Generator Function With return

function* generatorFunc() {

    yield 100;

    return 123;

    console.log("2. some code before second yield");
    yield 200;
}

const generator = generatorFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// JavaScript Generator Throw Method

function* generatorFunc() {
    yield 100;
    yield 200;
}


const generator = generatorFunc();
console.log(generator.next());
console.log(generator.throw(new Error('Error occurred.')));
console.log(generator.next());