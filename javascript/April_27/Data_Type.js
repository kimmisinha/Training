// Var, let and const
/*
Variables declared with var are function-scoped or globally scoped.
They can be reassigned and updated.
They can be declared without being initialized.
Variables declared with var are hoisted to the top of their scope during compilation.

*/

var a = 10
function f() {
	var b = 20
	console.log(a, b)
}
f();
console.log(a);

console.log(a);
var a = 10;

/*
Variables declared with let are block-scoped.
They can be reassigned but not re-declared within the same scope.
They need to be initialized at the time of declaration.
*/

let a = 10;
function f() {
	let b = 9
	console.log(b);
	console.log(a);
}
f();

console.log(a);
let a = 10;


/*Variables declared with const are also block-scoped.
They cannot be reassigned or re-declared.
They must be initialized at the time of declaration and cannot be left uninitialized.
However, if the value is an object or array, the properties or elements of the object or array*/

const a = 10;
function f() {
	a = 9
	console.log(a)
}
f();

console.log(a);
const a = 10;
