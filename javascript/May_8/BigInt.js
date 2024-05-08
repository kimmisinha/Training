/*

In JavaScript, BigInt is a built-in object that provides a way to represent and work with arbitrarily large integers. It allows you to perform mathematical operations on integers beyond the range supported by the Number primitive type, which is limited by the IEEE 754 standard to approximately ±9 quadrillion.

Here's a brief overview of BigInt in JavaScript:

Why we need BigInt:
Traditional JavaScript numbers (Number primitive type) are stored as 64-bit floating-point numbers, which means they have a limited range of representable integers. When you exceed this range, you may lose precision or encounter unexpected behavior.
BigInt addresses this limitation by allowing you to represent integers of arbitrary size, limited only by available memory.
Where to use BigInt:
BigInt is useful in scenarios where you need to work with very large integers, such as cryptography, mathematical computations, financial calculations, and handling unique identifiers like UUIDs.
It's also useful in situations where precision is crucial and the limitations of traditional JavaScript numbers may lead to rounding errors or loss of accuracy.
How to use BigInt:
To create a BigInt, you can append the n suffix to an integer literal or call the BigInt() constructor with a numeric value as an argument.
You can perform arithmetic operations (+, -, *, /, %, etc.) on BigInt values just like with regular numbers.
You cannot mix BigInt and regular numbers in arithmetic operations directly; you need to explicitly convert one to the other if needed.
BigInt has its own set of methods and operators, such as BigInt.asIntN(), BigInt.asUintN(), BigInt.prototype.toString(), BigInt.prototype.valueOf(), etc., for performing operations and conversions.
Here's a simple example demonstrating the usage of BigInt:

*/

const bigInt1 = 1234567890123456789012345678901234567890n; // Create a BigInt using the 'n' suffix
const bigInt2 = BigInt('9876543210987654321098765432109876543210'); // Create a BigInt using the BigInt() constructor

console.log(bigInt1 + bigInt2); // Output: 11111111101111111110111111111011111111100n


let x = BigInt("9999999999999999");
console.log(typeof x)