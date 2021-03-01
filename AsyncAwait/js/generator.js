function *g(){
    console.log("Hello");
    yield "yield 1 Run...";
    console.log("world");
    yield "yield 2 Run...";
    return "Returned..."
}

var g=g();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

for(let val of g){
    console.log(val);
}