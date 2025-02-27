const myNums = [1, 2, 3]

//using arraw function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal)

//using normal function 
const Total = myNums.reduce( function(acc, currval){
    console.log(` acc: ${acc} and curval: ${currval}`);
    return acc + currval;
}, 0)
console.log(Total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price, 0)
console.log(`total price to pay : ${priceToPay}`)