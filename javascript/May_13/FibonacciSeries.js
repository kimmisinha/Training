//Fibonacci Sequence

/*

The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
After that, the next term is defined as the sum of the previous two terms.

*/

/*Logic Part

var a = 0;
var b = 1;
for (var i = 0; i < 10; i++) {
    var temp = a + b;  //0+1 
    console.log(a)
    a = b;    // a=1
    b = temp;   //1 
}

*/

//code using loop

function fibonacciSeries(numTerms) {
    var a = 0;
    var b = 1;

    for (var i = 0; i < numTerms; i++) {
        var temp = a + b;  // Calculate the next Fibonacci number
        console.log(a);    // Print the current Fibonacci number
        a = b;             // Update 'a' to the next number in the sequence
        b = temp;          // Update 'b' to the calculated Fibonacci number
    }
}

fibonacciSeries(10);

//code using array method
// function fibonacciSeries_2(numTerms) {
//     var a = 0;
//     var b = 1;
//     var fibSeries = [];

//     for (var i = 0; i < numTerms; i++) {
//         var temp = a + b;  // Calculate the next Fibonacci number
//         fibSeries.push(a); // Add the current Fibonacci number to the series
//         a = b;            // Update 'a' to the next number in the sequence
//         b = temp;         // Update 'b' to the calculated Fibonacci number
//     }

//     return fibSeries;
// }

// Example usage: Generate Fibonacci series up to 10 terms
// var numTerms = 10;
// var series = fibonacciSeries_2(numTerms);
// console.log("Fibonacci Series up to " + numTerms + " terms:");
// console.log(series.join(", "));


//Using recursion

