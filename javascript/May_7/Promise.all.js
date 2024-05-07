/*

The Promise.all(iterable) method in JavaScript creates a single Promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first promise that rejects.
Here's how it works:
Input: Promise.all() takes an iterable (such as an array) containing promises as its input. These promises represent asynchronous operations that you want to execute concurrently.
Execution: When Promise.all() is called, it immediately returns a new Promise object. This new Promise will settle:
It resolves when all the promises in the iterable have resolved.
It rejects as soon as any of the promises in the iterable rejects.
Resolving: If all the promises in the iterable resolve successfully, the Promise returned by Promise.all() resolves with an array containing the resolved values of each promise, in the same order as the promises in the iterable.
Rejecting: If any of the promises in the iterable rejects, the Promise returned by Promise.all() immediately rejects with the reason of the first promise that rejects. The remaining promises in the iterable are ignored.

*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
});

const promises = [promise1, promise2, promise3];

Promise.all(promises)
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });
