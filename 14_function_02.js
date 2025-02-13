
// function calculateCardPrice(val1, val2, ...num1){   //val1,2 take first and second value and rest will be taken by rest parameter
function calculateCardPrice(...num1){  //rest operator and spread operator
    return num1;
}
console.log(calculateCardPrice(200, 400, 500, 600, 2000));


const user = {
    username: "pawan",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);
handleObject({   //we can also pass direct object
    username: "sam",
    price: 300
})


const myNewArray = [100, 200, 300, 600];
function returnSecondValue(getArray){
    return getArray[2];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,600])); //we can pass an array like object above

