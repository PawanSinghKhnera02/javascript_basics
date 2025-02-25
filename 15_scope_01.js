// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30

    console.log("inner:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);


// ======================== Nested Scope===============================

function one() {
    const username= "pawan";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if (true) {
    const username = "pawan";
    if(username === "pawan") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    // console.log(website);
}
// console.log(username);


// ======================= Interesting==============================
console.log(addone(5)); // it runs perfectly fine 
function addone(num) {
    return num + 3
}
// addone(5);

// console.log(addtwo(5)); // it gives error if we try to console before function declaration with assigning to variable
const addtwo = function (num) {
    return num + 2
}
addtwo(5);