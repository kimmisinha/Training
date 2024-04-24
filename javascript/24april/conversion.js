// In JavaScript, there are two main types of type conversion: implicit conversion 
// (also known as coercion) and explicit conversion.

// Implicit Conversion (Coercion):
// Implicit conversion occurs automatically when values of different types are used together in an operation.
// JavaScript attempts to convert one or both of the values to a compatible type to complete the operation.
// For example, when adding a number to a string, JavaScript will convert the number to a string and concatenate the two strings together.

// let num = 10;
// let str = "The number is: " + num; // Implicit conversion of num to string

// Explicit Conversion:
// Explicit conversion, also known as type casting, is when you manually convert a value from one type to another using built-in conversion functions or operators.
// This type of conversion is done intentionally by the programmer.
// Examples of explicit conversion include using functions like String(), Number(),

// let num = 123;
// let strNum = String(num); // Using String() function
// let strNum2 = num.toString(); // Using toString() method

// let strNum = "123";
// let num = Number(strNum); // Using Number() function
// let num2 = +strNum; // Using unary plus operator

// let strNum = "123";
// let intNum = parseInt(strNum); // Using parseInt() function

// let strNum = "123";
// let intNum = parseInt(strNum); // Using parseInt() function
