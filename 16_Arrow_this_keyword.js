const user = {
    username: 'pawan',
    price: 199,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); //this will give empty parenthesis cause in node environment this refer empty object while browser gives (window object - referred as global object in browser)


function chai () {
    let username = "pawan";
    console.log(this.username); // this won't work inside function only works inside objects like above
}
// chai();

const tea = function () {
    let username = "pawan";
    console.log(this.username); // this won't work inside function only works inside objects like above
}
// tea(); //gives undefined 

const coffee =  () => {
    let username = "pawan";
    console.log(this.username); // this won't work inside function only works inside objects like above
}
// coffee(); 


// =================== Arrow function ====================
//basic arrow funtion
const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(10,3));


//implicit return //doesnt requied return keyword
const addTwo = (num1, num2) => num1 + num2
const AddTwo = (num1, num2) => ({username: "pawan"})  //object return requires square bracket
const addthree = (num1, num2) => (num1 + num2 + num3)

console.log(addTwo(5,1));
console.log(AddTwo(5,3));
console.log(addTwo(4,1,3));

const myArray = [2,5,3,7,8]
myArray.forEach( function (){}) ;
myArray.forEach(() => {});

