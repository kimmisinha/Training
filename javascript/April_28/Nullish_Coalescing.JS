/*
The nullish coalescing operator is written as two question marks ??.
 As it treats null and undefined similarly, we’ll use a special term here,
 in this article. For brevity, we’ll say that a value is “defined” 
 when it’s neither null nor undefined.
*/
// Simple example
const userInput = null;
const username = userInput ?? 'Guest';

console.log(username); // Output: 'Guest'


const user = {
    name: 'Alice',
    age: null
};

const userName = user.name ?? 'Unknown';
const userAge = user.age ?? 'Age not provided';

console.log(userName); // Output: 'Alice'
console.log(userAge); // Output: 'Age not provided'
