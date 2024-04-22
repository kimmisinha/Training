let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); // ["apple", "banana", "orange", "grape"]
fruits.pop();         // ["apple", "banana", "orange"]
fruits.unshift("kiwi"); // ["kiwi", "apple", "banana", "orange"]
fruits.shift();          // ["apple", "banana", "orange"]
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
console.log(numbers[2]);     // 3

// It doesn't return a new array, it simply executes a provided function once for each array element.
// It's typically used when you want to perform an action for each item in the array without creating a new array.
// The forEach method doesn't return anything (undefined).
// It's used when you want to perform an action for each item in the array without creating a new array.
// Use forEach when:
// You want to iterate over each item in an array and perform an action or side effect, such as updating a UI element, logging data, or sending network requests.
// You don't need to create a new array with the results of the operation.
// Example scenarios where forEach might be preferred:
// Updating the state of a React component based on the values in an array.
// Logging each item in an array to the console for debugging purposes.
// Performing validation checks on each item in an array.


let forearch=['3','56','68','67']
forearch.forEach(element => {
  // console.log(element)

  if(parseInt(element)>3){
    // console.log(element,"ele")
  }
});


// map also iterates over each item in an array and executes a callback function for each item.
// However, it returns a new array containing the results of applying the callback function to each item in the original array.
// It's typically used when you want to transform each item in an array and create a new array with the transformed values.
// It returns a new array with the transformed values.

// Example:
// You want to transform each item in an array and create a new array containing the transformed values.
// You need to perform a one-to-one mapping between input and output values.
// Example scenarios where map might be preferred:
// Transforming an array of objects into an array of specific properties from those objects.
// Converting an array of strings to uppercase or lowercase.
// Calculating derived values for each item in an array.


let mapa=[3,46,57,6,56,6878,99]
mapa.map(ele=>{
  if(ele<6){
    console.log(ele)
  }
})

// let fruits = ["banana", "apple", "orange"];
// fruits.sort();    // ["apple", "banana", "orange"]
// fruits.reverse(); // ["orange", "banana", "apple"]

// find(callback): Returns the first element in the array that satisfies the provided testing function.
// filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.

let numbersindex = [1, 2, 3, 4, 5,78];
console.log(numbersindex.indexOf(9)); // 2

let foundNumber = numbersindex.find((numbersindex) => {
    return numbersindex > 5;
});
console.log(foundNumber); // 3

let filteredNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(filteredNumbers); // [2, 4]
