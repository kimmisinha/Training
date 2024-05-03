/*
Key Types:
Objects: Keys in objects are limited to strings and symbols. Any other type (like numbers or objects) will be converted to a string before being used as a key.
Maps: Keys in maps can be of any data type, including objects, numbers, strings, or even functions. This flexibility allows you to use complex data types as keys 
without any automatic conversion.
*/

// Objects
const obj = {};
const numKey = 123;
obj[numKey] = "value";
console.log(obj); // { "123": "value" }

// Maps
const map = new Map();
const numKeyMap = ["kimmi"];
map.set(numKeyMap, "value");
console.log(map.get(numKeyMap)); // "value"

/*
Iteration Order:
Objects: The order of key-value pairs in objects is not guaranteed to be the same as the order of insertion. 
This means that you can't rely on the order when iterating over the properties of an object.
Maps: Maps preserve the order of key-value pairs, so when you iterate over a map, you are guaranteed 
to get the entries in the same order as they were inserted.
*/
// Objects
const obj_2 = { b: 2, c: 3, a: 1 };
for (const key in obj_2) {
  console.log(key); // Order not guaranteed
}

// Maps
const map_1 = new Map();
map.set("b", 2);
map.set("c", 3);
map.set("a", 1);
for (const [key, value] of map_1) {
  console.log(key); // Guaranteed order: "b", "c", "a"
}

/*
Size Property:
Objects: Objects don't have a built-in property to get the number of key-value pairs.
 You need to manually count the properties using a loop or a function.
Maps: Maps have a size property that gives you the number of key-value pairs in the map. 
This makes it easier to determine the size of a map.
*/
// Objects
const obj_3 = { b: 2, c: 3, a: 1 };
for (const key in obj_3) {
  console.log(key); // Order not guaranteed
}

// Maps
const map_2 = new Map();
map.set("b", 2);
map.set("c", 3);
map.set("a", 1);
for (const [key, value] of map_2) {
  console.log(key); // Guaranteed order: "b", "c", "a"
}

/*

In JavaScript, both Set and Map are data structures that allow you to store collections of unique values,
 but they have different purposes and use cases.
 Uniqueness: Set stores only unique values. If you try to add a duplicate value, it will be ignored. This makes Set useful when 
 you need to ensure that a collection contains only unique elements.
Simplicity: Set is simpler to use when you only need to store values without associated keys.
 It's particularly handy for scenarios where you just need to maintain a list of unique items.
Performance: Since Set is optimized for storing unique values, operations like checking for 
the existence of a value (has) or adding a new value (add) are generally faster than with Map.
*/
// Using Set
let set = new Set();
set.add("apple");
set.add("banana");
set.add("apple"); // Adding duplicate, ignored

// Using Map
let map_4 = new Map();
map_4.set("apple", true);
map_4.set("banana", true);
map_4.set("apple", true); // Overwrites the existing key

// Checking if a value exists
console.log(set.has("apple")); // true
console.log(map.has("apple")); // true

// Iterating over values
set.forEach((value) => console.log(value)); // apple, banana
map_4.forEach((value, key) => console.log(key)); // apple, banana
