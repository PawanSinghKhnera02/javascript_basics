const coding = ["js", "ruby", "java", "python", "cpp"]

//forEach doesn't return any values
const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
} )
// console.log(values);


// ==========Filter method has callback function through which we can acccess each values, also it return the value which satify the condition  ========
const myNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Nums= myNum.filter( (num) => 
    {
        return num > 4 // writing return is required for explicit return ... we can avoid by writing code in single line without curly braces
    } )
console.log(Nums)


//doing same task with forEach 
const newNums = [];
myNum.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});
console.log(newNums)


const books = [
    { title : "book one", genre: "finction", publish: 1981, edition: 2004},
    { title : "book two", genre: "non-finction", publish: 1992, edition: 2008},
    { title : "book three", genre: "history", publish: 1989, edition: 2007},
    { title : "book four", genre: "non-finction", publish: 1999, edition: 2010},
    { title : "book five", genre: "science", publish: 2009, edition: 2014},
    { title : "book six", genre: "finction", publish: 1987, edition: 2010},
    { title : "book seven", genre: "history", publish: 1986, edition: 1996},
    { title : "book eight", genre: "finction", publish: 2011, edition: 2016},
    { title : "book nine", genre: "non-finction", publish: 1981, edition: 1989},
]

// const userBooks = books.filter ( (bk) => bk.genre === 'history')
// console.log(userBooks);

const userbooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre ==='science'
})
console.log(userbooks);