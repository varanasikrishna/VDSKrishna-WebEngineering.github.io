// rest operator

[a,b,...args] = [10,20,30,40,50];
console.log(a,b);
console.log(args);


// spread opearator

let arr1 = ["one", "two"];
let arr2 = ["three", "four"];
let arr3 = ["five", "six"];

// ES5
var arr4 = arr1.concat(arr2).concat(arr3);
console.log(arr4);

// ES6
let arr5 = [...arr1, ...arr2, ...arr3];
console.log(arr5); 

let x = [30, 10, 50, 70, 20];

function spreadDemo(x){
    console.log(Math.max(...x));
    console.log(x);
}
spreadDemo(x);


function accept(names){
    console.log(names);
    myspread(...names);
}

function myspread(a, b, c, d){
    console.log(a + ":" + d);
    console.log(b + ":" + c);
}

let names =["ES5","ES6","awesomeness","features"];
accept(names);

