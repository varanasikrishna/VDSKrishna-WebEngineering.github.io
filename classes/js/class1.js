
class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email
        this.password = password;
    }

    static countUsers(){
        console.log("There are 50 users");
    }

    register(){
        console.log(this.username + " is now registered");
    }
}

// let karthik = new user("karthik", "karthik@gmail.com", "abc");
// karthik.register();
// user.countUsers();

class member extends user{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username + " is subscribed to the "+ this.package + " package");
    }
}

let krishna = new member("krishna", "krishna@email.com", "abc", "standard");

krishna.register();
krishna.getPackage();