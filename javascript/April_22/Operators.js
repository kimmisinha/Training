// Arithmetic Operators

let a = 10;
let b = 5;
let sum = a + b; // addition
console.log(sum)
let difference = a - b; // subtraction
console.log(difference)

let product = a * b; // multiplication
console.log(product)
let quotient = a / b; // division
console.log(quotient)
let remainder = a % b; // modulus
console.log(remainder)

// Assignment Operators:
let x = 10;
x += 5; // equivalent to x = x + 5
console.log(x)

// Comparison Operators

let ab=10;
let bc=78;
console.log(ab>bc)


// String Operators

let firstname="kimmmi";
let lastname="kumari";

let yourname=firstname+" "+lastname;
console.log(yourname)

// Logical Operators
// Logical AND (&&) operator
let xnew = 5;
let ynew = 10;

if (xnew > 0 && ynew> 0) {
    console.log("Both x and y are greater than 0");
} else {
    console.log("At least one of x or y is not greater than 0");
}

// Logical OR (||) operator
let isRaining = false;
let isSnowing = false;

if (isRaining || isSnowing) {
    console.log("It's either raining or snowing, or both!");
} else {
    console.log("It's neither raining nor snowing");
}

// Logical NOT (!) operator
let z = 10;

if (!(z ==10)) {
    console.log("z is not equal to 10");
} else {
    console.log("z is equal to 10");
}

// Bitwise Operators
let abitwise = 5; // binary: 101
let bbitise = 3; // binary: 011
let result = abitwise & bbitise; // bitwise AND: 001 (equals 1 in decimal)
console.log(result)


// Ternary Operator
let age = 16;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message)

// Type Operators
let xtype = 10;
let ytype = "Hello";
console.log(typeof xtype); // "number"
console.log(typeof ytype); // "string"
