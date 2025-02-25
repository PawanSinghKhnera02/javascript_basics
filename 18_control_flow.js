// if-else;  switch cases, truthy and falsy values******, Nullish Coalescing Operator(??)*******


// if
const isUserLoggedIn = true;
// const isUserLoggedIn = false;
if (isUserLoggedIn) {
    console.log("pawan is logged in")
}

const temperature = 41;
if(temperature < 50) {
    console.log("less than 50");
}
else
console.log("temperature is greater than 50")


const score = 200
if (score > 100)
{
    const power = "fly";
    // var power = "fly";  // it can be accessed outside the scope
    console.log(`user power: ${power}`);
}
// console.log(`user power ${power}`);


// ============ truthy values and falsy value============

// const userEmail = "p@khnera.ai";
// const userEmail = "";
const userEmail = [];

if(userEmail) {
    console.log('got user email');
}
else{
    console.log("dont have user email");
}

//falsy values => 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//truthy values => 
// "0", "false", " ", [], {}, 
// function(){}(known as empty function also a truthy value)


// to check array is empty
if (userEmail.length === 0){
    console.log("array is empty")
}

// to check object is empty 
const obj = {};
if(Object.keys(obj).length === 0){
    console.log("obj is empty");
}

// =====================+++++********+++++++===========

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

// val1 = null ?? undefined
// val1 = undefined ?? null

console.log(val1);


// =============== terniary operator============

// condition ? true : false;

const icePrice = 100;
(icePrice>= 80) ? console.log("more than 80 ") : console.log("less than 80")
