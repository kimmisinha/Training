/*

Error handling is crucial in JavaScript (JS) to gracefully manage unexpected 
runtime errors that may occur during the execution of a program. The try...catch 
statement is used to handle exceptions, allowing developers to control the flow 
of the program when errors occur.

Try Block: The code that may cause an error is placed inside a try block.
Catch Block: If an error occurs within the try block, control is transferred 
to the corresponding catch block. The catch block contains code to handle the
 error.

 */

 try {
    // Code that may throw an error
    let result = someFunction();
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
}
