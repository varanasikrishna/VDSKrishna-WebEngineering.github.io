// var is function scoped (any function)
// var is scoped to the nearest function block
// A variable declared with var is defined throughout 
// the program as compared to let

var x = 10;
var x = 20;
let a = 10;
let a = 20;

var a = 20;
console.log(a);
if(true){
    var a = 30;
    console.log(a);
}
console.log(a);
a = 25;
console.log(a);

// let is block scoped (if, for,..)
// let is scoped to the nearest enclosing block

let age=27
console.log(age);
if(true){
    let age=30;
    console.log(age);
}
console.log(age);
age=29;
console.log(age);

for(let i=0;i<5;i++)
    console.log(i);

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }),1000;
}

for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }),1000
}

age=27;
console.log(age);
let age;

function dosmth(){
    age=27;
}
let age;
dosmth();
console.log(age);

// const variables are immutable
const x =10;
x = 20;

const person = {
    name : "xyz",
    age : 20
};
// if we try to update something in the const object by typing
person ={
    name : "abc",
    age : 30
};
// it won't allow us to do that
// Howerver, the properties of a const variable can change.
// That's because the entire object is not immutable.
// It just can't be reassigned entirely

console.log(person.name);
person.age = 30;
console.log(person.age);

const arr = [26,30,27];
console.log(arr);
arr.push(25);
console.log(arr);

// var vs let vs const

// var
function blocky(){
    if(true){
        var something = "something";
        console.log(something);
    }
    console.log(something);
}
blocky();

//let
function blocky(){
    if(true){
        let something = "something";
        console.log(something);
    }
    console.log(something);
}
blocky();

function blocky(){
    let something = "something";
    console.log(something);
    if(true){
        let something = "something2";
        console.log(something);
    }
    console.log(something);
}
blocky();

// const variables are immutable (you can't change them)
function blocky(){
    const something = "something";
    console.log(something);
    if(true){
        const something = "something2";
        console.log(something);
    }
    console.log(something);
}
blocky();

// let vs const

function blocky(){
    let something = "something";
    console.log(something);
    if(true){
        let something = "something2";
        console.log(something);
    }
    something = "somethingnew";
    console.log(something);
}
blocky();

function blocky(){
    const something = "something";
    console.log(something);
    if(true){
        let something = "something2";
        console.log(something);
    }
    something = "somethingnew";
    console.log(something);
}
blocky();



