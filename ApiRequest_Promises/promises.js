// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    //DO an async task
    //DB calls, cryptography, network

    setTimeout(() => {
        console.log('async task complete');
        resolve();
    }, (1000));

})  //promise takes callback
promiseOne.then(function(){
    console.log('promise consumed');
})



new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('async task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('async 2 resolved')
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username : "pawan",
        email: "pk@gmail.com"
    })
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "pk", password: "123"})
        }
        else  {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('the promise is either resolved or rejected')
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "456"})
        }
        else  {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllData(){
//     try{
//         const response = await fetch('https://api.github.com/users/PawanSinghKhnera02')

//         // const data = await JSON.parse(response); 
//         const data = await response.json(); //API se data lene ke liye ➔ response.json()
//         //String ko object me convert karne ke liye ➔ JSON.parse()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E :", error);
//     }
// }
// getAllData();


fetch('https://api.github.com/users/PawanSinghKhnera02')
.then((response)=>{
    const data = response.json();
    return data;
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.loog(error);
})

