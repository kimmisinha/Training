/*
Optional chaining (?.) is a feature introduced in JavaScript (ECMAScript 2020) 
that allows you to safely access nested properties or methods of an object without
 worrying about the existence of intermediate properties. It short-circuits 
 evaluation if a property in the chain is nullish (null or undefined), returning
  undefined instead of throwing an error.

*/

const obj = {
    property1: {
      property2: {
        value: 42,
        property3: {
          abc: 8,
          property4: {
            xyz: 9
          }
        }
      }
    }
  };
  

// Without optional chaining
const valueSafe = obj.property1?.property2?.property3?.abc; // 8
console.log(valueSafe);
