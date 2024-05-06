//call
/*
The call() method allows you to call a function with a specified this value and 
individual arguments passed separately.
It accepts an object as the first argument, which becomes the value of this 
inside the function being called. The subsequent arguments are the arguments 
passed to the function.
*/
const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

const person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
};

function greet(greeting, punctuation, additionalMessage) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName} ${additionalMessage}${punctuation}`);
}

// Using call to set the context to person1 and pass additional arguments
greet.call(person1, 'Hello', '!', 'How are you?'); // Output: Hello, John Doe How are you?!

// Using call to set the context to person2 and pass additional arguments
greet.call(person2, 'Hi', '?', 'Nice to see you!'); // Output: Hi, Jane Doe Nice to see you!?


/*
Use apply() when you want to invoke a function immediately and specify the value
of this explicitly along with an array or array-like object of arguments.
It is similar to call(), but it accepts arguments as an array or array-like object.
This is useful when you have an array of arguments or when the number of arguments 
is not known in advance.
*/

const person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet(greeting, timeOfDay, weather, additionalMessage) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}! It's ${timeOfDay} and the weather is ${weather}. ${additionalMessage}`);
}

const args = ['Good morning', 'morning', 'sunny', 'Have a great day!'];

greet.apply(person, args); // Output: Good morning, John Doe! It's morning and the weather is sunny. Have a great day!

/*
Use bind() when you want to create a new function with a specified value of this, without 
invoking it immediately. The newly created function can be called later with the specified this value.
It returns a new function with the provided this value and, optionally, any initial arguments.
This is useful when you want to create a function with a specific context that can be called later, or when you need to partially apply arguments to a function.
*/

const person_2 = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

// Creating a new function with person as the context
const greetPerson = greet.bind(person_2);

// Now, we can call greetPerson anytime without worrying about the context
greetPerson(); // Output: Hello, John Doe!
