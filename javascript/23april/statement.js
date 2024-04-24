let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let day = 2;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    // More cases...
    default:
        dayName = "Invalid day";
}

console.log(dayName);
