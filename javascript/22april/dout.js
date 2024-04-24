function let(c) {
 let a = 9;
  if (true) {
    console.log(a);
    let z = 0;
  }
}
console.log(a);
var letest = let(8);
console.log(letest);



function abc(){
  console.log(this);
}

abc()
//lexicalbinding
let res = (() => console.log(this))
console.log(res())