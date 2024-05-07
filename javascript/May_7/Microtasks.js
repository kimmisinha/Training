/*

In JavaScript, microtasks are a concept related to the event loop and 
asynchronous programming. They represent tasks that are queued for execution in
 a microtask queue and are processed after the current synchronous execution 
 context finishes but before the next event loop cycle begins.

Here's how microtasks work:

Event Loop: JavaScript utilizes an event loop to handle asynchronous operations. The event loop continuously checks the call stack and the task queue to determine what tasks to execute next.
Task Queue: Tasks in JavaScript are categorized into different queues, such as the task queue (also known as the macrotask queue) and the microtask queue. Macrotasks typically include I/O operations, timers, and user interaction events.
Microtask Queue: Microtasks, on the other hand, are tasks that are queued for execution after the current synchronous code has finished executing but before the next event loop cycle begins. Microtasks are used for high-priority asynchronous tasks, such as promises and mutation observer callbacks.
Here's an example to illustrate how microtasks work:

*/
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

console.log('End');
