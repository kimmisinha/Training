const jsonStr = '{"name": "John Doe", "age": 30}';
const jsonObj = JSON.parse(jsonStr);

console.log(jsonObj.name); // Output: John Doe

const person = { name: "Jane Smith", age: 25 };
const jsonString = JSON.stringify(person);

console.log(jsonString); // Output: {"name":"Jane Smith","age":25}
