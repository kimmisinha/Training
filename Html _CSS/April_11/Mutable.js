//if an item is mutable ,modifying, the copy also modifies the original.
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4, 5, 6);
console.log(arr1);

let originalObject1 = { name: "John" };
let copiedObject1 = originalObject1;
copiedObject1.age = 30;
console.log(originalObject1); // Output: { name: "John", age: 30 }

let originalObject2 = { name: "John" };
let copiedObject2 = Object.assign({}, originalObject2);
copiedObject2.age = 30;
console.log(copiedObject2); // Output: { name: "John", age: 30 }

let originalObject3 = { name: "John" };
let copiedObject3 = { ...originalObject3 };
copiedObject3.age = 30;
console.log(originalObject3); // Output: { name: "John" }
console.log(copiedObject3); // Output: { name: "John", age: 30 }

//if its immutable,modifying the copy does not affect the original.
let num1 = 42;
let num2 = num1;
num2 = num2 - 7;
console.log(num1);
