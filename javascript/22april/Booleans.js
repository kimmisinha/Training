// Conditional Statements:

let isRaining = true;

if (isRaining) {
    console.log("Remember to take an umbrella!");
} else {
    console.log("No need for an umbrella today.");
}
// Logical Operations:
let hasAccount = true;
let isLoggedIn = false;

// Logical AND
if (hasAccount && isLoggedIn) {
    console.log("User is logged in with an account.");
} else {
    console.log("User does not have an account or is not logged in.");
}

// Logical OR
let hasSubscription = false;
if (hasAccount || hasSubscription) {
    console.log("User has access to premium features.");
} else {
    console.log("User does not have access to premium features.");
}

// Logical NOT
let isAdmin = false;
if (!isAdmin) {
    console.log("User is not an administrator.");
}

// Comparison Operations:
let num1 = 10;
let num2 = 5;

// Greater than
console.log(num1 > num2); // true

// Less than
console.log(num1 < num2); // false

// Equal to
console.log(num1 === num2); // false

// Not equal to
console.log(num1 !== num2); // true
