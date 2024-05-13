/*
TextDecoder

TextDecoder is used to decode binary data into strings. 
It converts sequences of bytes into strings according to a specified 
character encoding.

Use Cases:
Reading Files: When reading files with binary content, such as text files or JSON files, you can use TextDecoder to convert the binary data into strings.
Networking: When receiving text-based data over the network in binary form, you can use TextDecoder to decode the received data into strings.
Web Workers: When working with binary data in web workers, TextDecoder can be used to decode the data into strings for further processing.

*/

// Create a Uint8Array containing binary data
var binaryData = new Uint8Array([72, 101, 108, 108, 111]); // Binary representation of ASCII characters "Hello"

// Create a TextDecoder with UTF-8 encoding
var decoder = new TextDecoder("utf-8");

// Decode the binary data into a string
var text = decoder.decode(binaryData);

console.log(text); // Output: "Hello"


/*
TextEncoder:

TextEncoder is used to encode strings into binary data. 
It converts strings into sequences of bytes according to a specified character encoding.

Use Cases:
Form Submission: When sending form data to a server, 
you may need to encode strings into binary data before sending them over the network.

Data Serialization: When serializing text-based data structures, 
such as JSON objects, you can use TextEncoder to encode the data into binary format.
Web Workers: When working with text-based data in web workers, TextEncoder can be
 used to encode strings into binary data for further processing.

*/

// Create a string
var text = "Hello";

// Create a TextEncoder with UTF-8 encoding
var encoder = new TextEncoder();

// Encode the string into binary data
var binaryData = encoder.encode(text);

console.log(binaryData); // Output: Uint8Array(5) [ 72, 101, 108, 108, 111 ]


