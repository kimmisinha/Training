// for loop

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// while loop
let j = 0;
while (j < 5) {
  console.log(j); // Output: 0, 1, 2, 3, 4
  j++;
}

// do-while loop
let z = 0;
do {
  console.log(z); // Output: 0
  z++;
} while (z < 0);


// forEach loop

let k = 0;
do {
  console.log(k); // Output: 0
  k++;
} while (k < 0);

// forEach loop
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number); // Output: 1, 2, 3, 4, 5
});


// for...in loop

var obj={
  name:'kimmi',
  roll:'9',
  company:"xyz"
}

for(let key in obj){
  console.log(key)
  console.log(obj[key])
}

// for...of loop (Iterables)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit); // Output: apple, banana, cherry
}
