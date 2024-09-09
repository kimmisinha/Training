/*
Callbacks are functions passed as arguments to another function to be executed later, 
commonly used for asynchronous operations like fetching data from a server. The main issue 
with callbacks is "Callback Hell" or "Pyramid of Doom," which arises when multiple nested
 callbacks result in code that is difficult to read, understand, and maintain.
*/

// Simulate processing data using a callback

function getDataFromServer(callback) {
  setTimeout(() => {
    let data = "some data from the server";
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const processData = data.toUpperCase();
    callback(processData);
  }, 1000);
}
function displayData(data, callback) {
  setTimeout(() => {
    console.log("data displayed", data);
    callback();
  }, 1000);
}
// Callback hell: Nested callback functions

getDataFromServer(function (data) {
  processData(data, function (processData) {
    displayData(processData, function () {
      console.log("All operations completed");
    });
  });
});

/*
Promises provide a cleaner and more structured way to handle asynchronous 
operations. They represent a value (or the eventual completion or failure of an operation)
 that may be available now, in the future, or never.
Advantages of promises include:
 Readability: Promises offer a more linear and readable code structure compared to nested callbacks, reducing callback hell.
Error Handling: Promises have built-in error handling capabilities with .then() for success and .catch() for errors, making error handling more straightforward.
Chaining: Promises support method chaining with .then() for sequential execution of asynchronous tasks, improving code organization and readability.
Composition: Promises can be composed using methods like Promise.all() and Promise.race() for parallel or race conditions, simplifying complex asynchronous workflows.
*/

function getDataFromServer_2(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const data="some data from the server";
      resolve(data);
    },1000)
   });
}


function processData_2(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const processData_2=data.toUpperCase();
      resolve(processData_2)
    },1000)
  });
}


function displayData_2(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Data displayed:", data); // Display the data
      resolve();
    },1000);
  });
}
getDataFromServer_2()
.then(processData_2)
.then(displayData_2)
.then(()=>{
  console.log("All operations completed successfully.");

})
.catch((error)=>{
  console.error("An error occured:",error)
})