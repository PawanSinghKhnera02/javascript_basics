// for of & for In loop
const arr = [1, 2, 3, 4, 5]
for (const value of arr) {
    // console.log("value: ", value)   
}

const greeting = "Hello world";
for (const element of greeting) {
    // console.log(element); 
}

// ============== map ==========
//maps are known for unique values also keep track of the elements order in which they come ...
const map = new Map();  
map.set('IN' , 'India')
map.set('US' , 'America')
map.set('FR' , 'France')

console.log(map); // for in loop won't work here in map because it shows that it is not iteratable

for (const key of map)
{
    console.log(key)
}

// Destructuring==================>>>>
for (const [key,value] of map)
    {
        // console.log(key, ":-" , value);
    }


// ========= On Object=============
// const myObject = {
//     game1 : 'NFS',
//     game2 : 'spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key,":-", value)
// }

const myObject2 = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
}

for (const key in myObject2) { //accessing object value with key
   console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ["js", "rb", "cpp", "java", "py"]
for (const key in programming) { //accessing array value with key
   console.log(`${key} : ${programming[key]}`)
}