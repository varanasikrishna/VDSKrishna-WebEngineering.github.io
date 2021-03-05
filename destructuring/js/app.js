// Destructuring
var voxel = {
  x: 6.7,
  y: 5.6,
  z: 5.4,
};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
console.log(x, y, z);

// 1. Assign values from objects

const { x, y, z } = voxel;
console.log(x, y, z);

const { x: a, y: b, z: c } = voxel;
//console.log(x, y, z);
console.log(a, b, c);

// 2. Assign variables from nested objects

const nest = {
  start: {
    x: 5,
    y: 7,
  },
  end: {
    x: 8,
    y: 4,
  },
};

const {
  start: { x: startX, y: startY },
} = nest;
console.log(startX, startY);

const {
  end: { x: endX, y: endY },
} = nest;
console.log(endX, endY);

// 3. Assign variables from arrays

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

var first = arr[0];
var second = arr[1];
console.log(first, second);

const [first, second, third] = arr;
console.log(first, second, third);

const [first, second, , , fifth] = arr;
console.log(first, second, fifth);

// 4. Rest operator to Reassign Array Elements

const [first, second, ...theRest] = arr;
console.log(first, second);
console.log(theRest);

// 5. return multiple values from function

function doesEverythingPossibleTo2Numbers(a, b) {
  return [a + b, a - b, a * b, a / b, a % b, Math.pow(a, b), a == b];
}

let [add, sub, mul, div, mod, pow, eq] = doesEverythingPossibleTo2Numbers(3, 2);

console.log(add, sub, mul, div, mod, pow, eq);

let [add, sub, ...whatever] = doesEverythingPossibleTo2Numbers(3, 2);
console.log(add, sub);
console.log(whatever);

var animal = {
  species: "dog",
  weight: 23,
  sound: "woof",
};

var { species, sound } = animal;
console.log("The " + species + " says " + sound + "!");

// 6. pass an object as a function's parameters

function makesound(options) {
  console.log("The " + options.species + " says " + options.sound + "!");
}

// options object
makesound({
  species: "dog",
  weight: 23,
  sound: "woof",
});
