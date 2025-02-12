// ============== Javascript Object ========================
// ============= there are two ways of creating objects===========
//01=> lateral -> non-singleton   //02 => using constructor -> creates singleton

// Object.create =>> //object creation using constructor
// Object Laterals

const mySym = Symbol("key1");   //declaration of symbol

const JsUser = {                // laterals method 
            name: "pawan",
            "full_name": "pawan singh khnera",
            [mySym]: "mykey1",                   //correct syntax of symbol
            age : 25,
            location: "dehradun",
            email: "pawanskmd@google.com",
            isLoggedIn: false,
            lastLoginDays: ["monday","saturday"],
}             

// we have two ways to access the object values
console.log(JsUser.email);    // first way
console.log(JsUser["email"]);  //second way
console.log(JsUser["full_name"]);  
console.log(JsUser[mySym]);  

// modifying the values of the object===================>>>>
JsUser.email = "pkskd@chatgpt.com";
console.log(JsUser)

// locking the value of object ============>>
Object.freeze(JsUser);
JsUser.email = "pkskd@yahoo.com";
console.log(JsUser.email); // doesn't modified as we have freezed the object..


// adding functions in object  //this code doesn't work here 
/*
JsUser.geeting = function(){
    console.log("hello js user");
}

JsUser.geetingtwo = function(){
    console.log(`hello js user, ${this.name}`); //string interpulation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
*/