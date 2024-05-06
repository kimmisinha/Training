/*
Recursion is a programming technique where a function calls itself in order to
 solve a problem. Recursion involves breaking down a problem into smaller, more 
 manageable subproblems, often similar to the original problem. Each recursive 
 call works on a smaller input until a base case is reached, at
 which point the recursion stops.
 */

function factorial(n) {
    if (n === 0) {
        return 1; // Base case
    } else {
        return n * factorial(n - 1); // Recursive call
    }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)


/*
A stack is a data structure that operates on the principle of Last In, First Out 
(LIFO). It means that the last element added to the stack is the first one to be 
removed. Think of a stack like a stack of plates in a cafeteria—you add plates on 
top of each other and remove them from the top one by one.
*/
