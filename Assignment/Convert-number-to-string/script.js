/*
Problem Statement: 
Convert given number into String-- 
input: 15000; 
output: Fifteen Thousand
*/
function numberToWords(num) {
  if (num < 0) { //15000
      return "Negative numbers are not supported";
  }
  
  const ones = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", 
      "seventeen", "eighteen", "nineteen"
  ];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (num < 20) return ones[num]; //numberToWords(1)
  if (num < 100) return `${tens[Math.floor(num / 10)]}${num % 10 ? " " + ones[num % 10] : ""}`;
  if (num < 1000) return `${ones[Math.floor(num / 100)]} hundred${num % 100 ? " " + numberToWords(num % 100) : ""}`;
  if (num < 1000000) return `${numberToWords(Math.floor(num / 1000))} thousand${num % 1000 ? " " + numberToWords(num % 1000) : ""}`;
  if (num < 1000000000) return `${numberToWords(Math.floor(num / 1000000))} million${num % 1000000 ? " " + numberToWords(num % 1000000) : ""}`;
  if (num < 1000000000000) return `${numberToWords(Math.floor(num / 1000000000))} billion${num % 1000000000 ? " " + numberToWords(num % 1000000000) : ""}`;
  return "Number too large to convert to words";
}

console.log(numberToWords(425));


