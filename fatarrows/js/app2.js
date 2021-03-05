// var multiplyES5 = function (x, y) {
//   return x * y;
// };
// console.log(multiplyES5(3, 5));

//ES6
// var multiplyES6 = (x, y) => x * y;
// console.log(multiplyES6(4, 8));

// var somefunc = function () {
//   console.log("Hello World!");
// };
// somefunc();

// let greet = () => console.log("Hello World!");
// greet();

//ES5
// var square = function (a) {
//   return a * a;
// };
// console.log(square(4));

//ES6
// const square = (a) => a * a;
// console.log(square(5));

//ES5
// var phraseSplitterES5 = function (phrase) {
//   return phrase.split(" ");
// };
// console.log(phraseSplitterES5("ES5 features"));

//ES6
// let phraseSplitterES6 = (phrase) => phrase.split(" ");
// console.log(phraseSplitterES6("ES6 Features"));

//ES5
// var add = function (a, b) {
//   return a + b;
// };
// console.log(add(5, 7));

//ES6
// let add = (a, b) => a + b;
// console.log(add(3, 6));

// setTimeout(function () {
//   console.log("Hello!");
// }, 1000);

// setTimeout(() => console.log("Hello!"), 1000);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var ES5EvenNumbers = arr.filter(function (n) {
//   return !(n % 2);
// });
// console.log(ES5EvenNumbers);

// let ES6EvenNumbers = arr.filter((n) => !(n % 2));
// console.log(ES6EvenNumbers);

// var isMultipleof3 = arr.filter(function (number) {
//   return !(number % 3);
// });
// console.log(isMultipleof3);

// let developers = [
//   {
//     name: "krishna",
//   },
//   {
//     name: "karthik",
//   },
// ];

// // var ES5dev = developers.map(function (dev) {
// //   return dev.name;
// // });
// // console.log(ES5dev);

// var ES6dev = developers.map((dev) => dev.name);
// console.log(ES6dev);

// const smartPhones = [
//   { name: "iphone", price: 649 },
//   { name: "Galaxy S6", price: 576 },
//   { name: "Galaxy Note 5", price: 489 },
// ];

//ES5
// var pricesEs5 = smartPhones.map(function (phone) {
//   return phone.price;
// });
// console.log(pricesEs5);

//ES6
// var ES6price = smartPhones.map((phone) => phone.price);
// console.log(ES6price);

// var x = function () {
//   this.val = 1;
//   setTimeout(() => {
//     this.val++;
//     console.log(this.val);
//   }, 1000);
// };
// var xx = new x();

// ES5
// var x = function () {
//   console.log(arguments[0]);
// };
// x(1, 2, 3);

var x = (...n) => {
  console.log(n[2]);
};
x(1, 2, 3); // error : arguments is not defined
