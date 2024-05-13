/*

ArrayBuffer is a fundamental building block in JavaScript for working with binary data. 
It provides a raw memory buffer that can store binary data in a fixed length, contiguous chunk of memory.
 There are several reasons why ArrayBuffer is essential:

*/

// Create an ArrayBuffer with a length of 16 bytes
var buffer = new ArrayBuffer(16);

// Get the length of the buffer
console.log(buffer.byteLength); // Output: 16


/*

Typed arrays provide a way to view and manipulate binary data in the form of specific
numeric data types, such as integers or floats. Typed arrays are views into an
ArrayBuffer and offer various methods and properties to interact with binary data.

*/

// Create a Uint8Array view into the ArrayBuffer
var uint8View = new Uint8Array(buffer);

// Set values in the Uint8Array
uint8View[0] = 255;
uint8View[1] = 128;

// Get values from the Uint8Array
console.log(uint8View[0]); // Output: 255
console.log(uint8View[1]); // Output: 128

