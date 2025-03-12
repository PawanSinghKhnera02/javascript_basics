// ===========================object literal=============================

const user = {
    username : "pawan",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


// ========================= constructor function =======================

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this;
}

const userOne =new User('pawan', 12, true);
const userTwo =new User('coder', 11, false);
console.log(userOne.constructor);
console.log(userOne instanceof User);
// console.log(userOne);
// console.log(userTwo);