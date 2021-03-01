function *generatorFunction(){
    yield 10;
    yield 20;
    return "done";
}

let generatorObj = generatorFunction();

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

function sample(a, b, ...x){
    var sum=0;
    console.log(a);
    console.log(b);
    for(let args of x){
        sum += args;
    }
    return sum;
}

console.log(sample("vds", "krishna", 10, 20, 30 ,40, 50));

