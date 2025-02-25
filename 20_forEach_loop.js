//forEach is a higher order function==> its a callback function

const coding = ["js", 'ruby', 'java', 'cpp', 'python', 'swift']

coding.forEach( function (item) {
    console.log(`1: ${item}`)
})

coding.forEach( (item) => {
    console.log(`2: ${item}`)
})

// ============ calling function in forEach loop=======
function printMe(item){
    console.log(`3: ${item}`)
}
coding.forEach(printMe)

// ============== forEach basic syntax=================
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

// ===========Important for data access from API's======
myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )