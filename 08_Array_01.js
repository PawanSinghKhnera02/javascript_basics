// ==========================   Array   =============================

// let myArr = [23, 56, 45 , 56 ,85, true, "pawan"]; // it can store different data types in a single array in js

let myArr2 = [1,3,4,6,5,2];
// console.log(myArr2);
let myArr = new Array(1,2,3,4);
myArr.unshift(9);            //to add element at the start
myArr.push(8);              // to add element from behind;
myArr.pop();                // to remove element from behind
console.log("myArr second element is: ",myArr[2])
console.log(myArr);

myArr.shift();             // to remove element from the start
console.log(myArr);


console.log(myArr.includes(3));
console.log(myArr.indexOf(6)); //doesn't exist so return -1
console.log(myArr);

let newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);



// slice and splice ======================================

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B" , myArr);


const myn2 = myArr.splice(1,3);
console.log("C" , myArr);
console.log(myn2);
