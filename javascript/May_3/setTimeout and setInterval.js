/*
The setTimeout function is used to execute a function (or evaluate an expression)
 after a specified delay, measured in milliseconds. It takes two arguments: 
 a callback function (or an expression) to be executed, and the delay in milliseconds 
 before the execution. Here's an example:

*/

function sayHello() {
  console.log("Hello!");
}

setTimeout(sayHello, 2000); // Executes sayHello function after 2000 milliseconds (2 seconds)
/*
The setInterval function is used to repeatedly execute a function (or evaluate an expression) at a specified interval. It also takes two arguments: a callback function (or an expression) to be executed, 
and the interval in milliseconds between each execution. Here's an example:
*/

function printTime() {
  console.log(new Date());
}

setInterval(printTime, 1000); // Executes printTime function every 1000 milliseconds (1 second)
/*

In this example, the printTime function is executed every second,
 continuously printing the current date and time.

*/
/*
Clearing Scheduled Execution:
Both setTimeout and setInterval return a timer ID, which can be used to cancel 
the scheduled execution using the clearTimeout and clearInterval functions, respectively. For example:

*/

let timerId = setTimeout(sayHello, 2000);

// Cancel the scheduled execution
clearTimeout(timerId);
