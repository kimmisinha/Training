//demonstrating the usage  module syntax

const greet = require('./Modules.js')

console.log(greet('John')); // Output: Hello, John!


// demonstrating the usage of ES6 modules

import { greet_2 } from './Modules.js';

console.log(greet_2('John2')); // Output: Hello, John2!


/*

Now, let's say you want to import the sayHello function dynamically in another file,
main.js, based on some condition. Here's how you can do it:

*/

// main.js
// Assume some condition based on which you decide whether to import the module or not
const shouldLoadHelperModule = true;

if (shouldLoadHelperModule) {
    import('./helper.js').then(module => {
        const { sayHello } = module;
        sayHello('John');
    }).catch(error => {
        console.error('Error loading module:', error);
    });
} else {
    console.log('Skipping module import.');
}


/*

This demonstrates how you can use dynamic imports to conditionally load 
modules at runtime, improving the performance of your application by loading 
only the necessary modules when they are needed.

*/





