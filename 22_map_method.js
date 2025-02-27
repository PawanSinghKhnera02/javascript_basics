
const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num+10) // map automatically return the value, if we open the scope return should be applied there 
console.log(newNums)


//doing same task with forEach ==>>
// first way without array
myNumbers.forEach( (element) => {
    // console.log(element+10);
});

//second way with array
const newArr = [];
myNumbers.forEach( (num) => {
    newArr.push(num+10)
})
console.log(newArr);

// ================= Chaining ==============
const newNo = myNumbers.map( (num) => num*10)
                       .map( (num) => num+1)
                       .filter( (num)=> num >=40 )

console.log(newNo)
