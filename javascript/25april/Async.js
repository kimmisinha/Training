/*Synchronous (Sync) Operations:
In synchronous code, tasks are executed sequentially, one after the other.
When a function is called, the code waits for that function to finish 
executing before moving on to the next line of code.
Synchronous operations are easy to understand and reason about, 
but they can lead to blocking behavior, especially when dealing with tasks that take a 
significant amount of time to complete. */

// Synchronous function
function syncFunction() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}

syncFunction();


/*Asynchronous (Async) Operations:
Asynchronous code allows tasks to be executed independently from the main program flow.
When an asynchronous operation is initiated, the code continues to execute without waiting for the operation to finish.
Callback functions, Promises, and async/await are common mechanisms for handling asynchronous operations in JavaScript.*/

// Asynchronous operation with a callback function
function asyncFunction(callback) {
  console.log("Start");
  setTimeout(() => {
      console.log("Async operation finished");
      callback();
  }, 2000);
  console.log("End");
}

asyncFunction(() => {
  console.log("Callback function executed");
});

/*Async/Await:
Async functions were introduced in ES2017 (ES8) as a syntactic sugar over promises, making
 asynchronous code more readable and easier to write.
An async function returns a Promise, and within it, you can use the await keyword to pause execution 
until a Promise is resolved or rejected.
Async/await allows you to write asynchronous code that looks and behaves more like synchronous 
code, improving readability and maintainability.*/
// Async function using async/await
// Function to simulate an asynchronous operation

function simulateAsyncOperation() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('Async operation completed');
      }, 2000); // Simulating a delay of 2 seconds
  });
}

// Async function using async/await
async function performAsyncOperation() {
  console.log('Starting async operation...');
  try {
      // Wait for the asynchronous operation to complete
      const result = await simulateAsyncOperation();
      console.log(result);
  } catch (error) {
      console.error('Error:', error);
  }
}

// Call the async function to perform the asynchronous operation
performAsyncOperation();


