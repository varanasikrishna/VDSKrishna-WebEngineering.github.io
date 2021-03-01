/* async function f(){
    return 1;
}

// console.log(f());
f().then(console.log); */


async function f(){
    let promiseToTest = new Promise((resolve,reject) => {
        setTimeout(() => resolve("done!"),1000);
    });
    let result = await promiseToTest; // wait till the promise resolves
    console.log(result);
}
f();


/* function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
} */


/* class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      // alert(reject); // function() { native code }
      // resolve with this.num*2 after 1000ms
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  };
  
  async function f() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable(2);
    console.log(result);
  }
  
  f(); */


  /* class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1 */

    
  /* async function f(){
    await Promise.reject("Error");
  }
  f(); */
    
    
    /* async function f() {
      try{
        await Promise.reject("Error");
      }
      catch(err){
        console.log(err);
      }
      
    }
    f() */


/* async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}
f(); */


/* async function f(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let user = await response.json();
        console.log(user);
    }
    catch(err){
        console.log(err);
    }
}
f(); */


/* async function f() {
    try {
      let response = await fetch("http://no-such-url");
      let user = await response.json();
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
  }
  f(); */


/* async function f(){
    let response = await fetch('http://no-such-url');
}

f().catch(console.log); */
