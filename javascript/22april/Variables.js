// Var, let and const
// Variables declared with var are function-scoped or globally scoped.
// They can be reassigned and updated.
// They can be declared without being initialized.

var x = 9;
// console.log(b+"global scope")

function abc(a) {
  var z = 0;
  z = 9;
  if (true) {
    var b = 9;
    // console.log(b+"kimmi")
  }
  console.log(b + "functionalscrope");
  console.log(z + "functionalscope");
}
let res = abc(7);
console.log(res);

// Variables declared with let are block-scoped.
// They can be reassigned but not re-declared within the same scope.
// They need to be initialized at the time of declaration.

function let(c) {
  a = 9;
  if (true) {
    console.log(a);
    let z = 0;
  }
}
var letest = let(8);
console.log(letest);

// Variables declared with const are also block-scoped.
// They cannot be reassigned or re-declared.
// They must be initialized at the time of declaration and cannot be left uninitialized.
// However, if the value is an object or array, the properties or elements of the object or array

function constest(c) {
  if (true) {
    const abc = 9;
  }
  console.log(c + "const");
}
var test = constest(5);
console.log(test);
