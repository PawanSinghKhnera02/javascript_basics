function func(){
    let name = "pawan singh khnera";

    function display(){
        console.log(`name is: ${name}`);
    }
    display();
}
func();


// this lexical scope ko follow nahi karta — this ka context function ke call ke time pe decide hota hai.
const user = {
    name: "Pawan",
    getName: function () {
        const inner = () => {
            console.log(this.name);
        }
        inner();
    }
}

user.getName(); // 


//real world use lexical scope

function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    }
}

const counter = createCounter();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3



// =========================== Closure =======================

// Closure = Inner function ke paas apne parent scope ke variables ka reference hota hai — even after parent function execute ho chuka ho.

function makeFun (){
    let name = "Aish";

    function displayName(){
        console.log(`Closure : ${name}`);
    }

    return displayName;
}

const myFunc = makeFun();
myFunc();