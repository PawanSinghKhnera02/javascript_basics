// +++++++++++++++ Dates ++++++++++++++++++++++++

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);

// let myCreatedDate = new Date(2023, 0, 23 , 5, 3); // include time

let myCreatedDate = new Date("2023-01-14") //yy-mm-dd

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());


//time stamp

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000)); //to convert in seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1);


//date time customization
newDate.toLocaleString('default', {
    weekday: "long",
})