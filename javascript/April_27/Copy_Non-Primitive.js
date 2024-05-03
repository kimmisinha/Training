/*
In JavaScript, when you want to copy non-primitive objects (objects, arrays, functions),
 you need to be careful because assignment or passing by reference only creates a reference 
 to the original object. If you modify the copied object, it will also affect the original object.
  To make a copy of a non-primitive object without modifying the original, you have a few options:
*/
// Using the Spread Operator (...):

/*
For shallow copies of objects or arrays, you can use the spread operator (...) 
to create a new object or array with the same properties or elements.
This method creates a shallow copy, meaning nested objects or arrays will still be 
references to the original objects or arrays.
*/
const originalArray = [1, 2, 3];
console.log("originalArray", originalArray);
const copiedArray = [...originalArray];
copiedArray.push("89");
console.log("copiedArray", copiedArray);

// Using Object.assign():

/*
The Object.assign() method is used to copy the values of all enumerable own properties from one or
 more source objects to a target object. This method also creates a shallow copy.
*/
const originalObject = { a: 1, b: 2 };
const copiedObject = Object.assign({}, originalObject);
copiedObject.c = 6;
console.log("originalObject", originalObject);
console.log("copiedObject", copiedObject);

/*
Both these methods create shallow copies. They only copy the top-level 
properties of the original object or array. If the object or array contains 
nested objects or arrays, those nested structures will still be references to 
the original objects or arrays. So, modifying a nested object in the copied 
structure will affect the original object.
*/

// Using JSON.parse() and JSON.stringify():
/*
You can use JSON.stringify() to serialize the object into a JSON string and then use JSON.parse() to deserialize 
it back into a new object.This method creates a deep copy, but it has limitations and drawbacks
  (e.g., functions are not preserved, cannot copy circular references).
  */

/*
This method involves serializing the entire object
 structure into a JSON string and then parsing it back into a new object. 
 It creates a deep copy because it essentially creates a completely new object
 structure in memory. However, there are some limitations and drawbacks to this
 method:


*/

const originalObject_2 = { a: 1, b: 2 };
const copiedObject_2 = JSON.parse(JSON.stringify(originalObject_2));
copiedObject_2.c = 90;
console.log("originalObject_2", originalObject_2);
console.log("copiedObject_2", copiedObject_2);

const Object_coppy = {
  name: "kimmi",
  roll: 9,
  class: "a",
  family_details: {
    father_name: "mohit",
    mother_name: "anjali",
    brother_name: "sohan",
    education_details: {
      class_12_perc: 67,
      class_10_perc: 90,
    },
  },
};

var spreadoperator_coppy={...Object_coppy};
spreadoperator_coppy.family_details.education_details.father_inlaw_name="Rohit"
console.log(spreadoperator_coppy)

const copiedObj = Object.assign({}, Object_coppy);
copiedObj.family_details.education_details.mother_inlaw_name="Rita"
console.log(copiedObj);

const json_method=JSON.parse(JSON.stringify(Object_coppy));
json_method.family_details.education_details.graduation_marks=89;
console.log("obj copy: " ,Object_coppy)
console.log(json_method);
