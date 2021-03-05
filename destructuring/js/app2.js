// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables.

//Before ES6
const person = {
  name: "sandra",
  age: 20,
  gender: "female",
};

//assigning object attributes to variables
// let name = person.name;
// let age = person.age;
// let gender = person.gender;
// console.log(name);
// console.log(age);
// console.log(gender);

//From ES6

//destructuring assignment
// let { name, age, gender } = person;
// console.log(name);
// console.log(age);
// console.log(gender);

// The order of the name does not matter in object destructuring.
// let { age, gender, name } = person;
// console.log(name);
// console.log(age);
// console.log(gender);

// If you want to assign different variable names for the object key, you can use
// let { name: LastName, age: Age, gender: Gender } = person;
// console.log(LastName);
// console.log(Age);
// console.log(Gender);

//Array Destructuring
// const arrvalue = ["one", "two", "three"];
// const [x, y, z] = arrvalue;
// console.log(x);
// console.log(y);
// console.log(z);

//nested objects

// const nest = {
//   start: {
//     x: 5,
//     y: 7,
//   },
//   end: {
//     x: 8,
//     y: 9,
//   },
// };

// const {
//   start: { x: startX, y: startY },
// } = nest;

// console.log(startX, startY);

// const {
//   end: { x: endX, y: endY },
// } = nest;

// console.log(endX, endY);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [first, second, , , fifth] = arr;
// console.log(first, second, fifth);

//Rest operator
// const [first, second, ...theRest] = arr;
// console.log(first, second);
// console.log(theRest);

function doesEverythingPossibleTo2Numbers(a, b) {
  return [a + b, a - b, a * b, a / b, a % b, Math.pow(a, b), a == b];
}

let [add, sub, mul, div, mod, pow, eq] = doesEverythingPossibleTo2Numbers(4, 2);

console.log(add, sub, mul, div, mod, pow, eq);
