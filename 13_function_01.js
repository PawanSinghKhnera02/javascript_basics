//  function addTwoNumbers(number1, number2){
//         console.log(number1+number2);
//  }
//  const result= addTwoNumbers(2,6);
//  console.log(result) // it gives undefined because function isn't returning anything 



 function addTwoNumbers(number1, number2){
        return(number1+number2);
        console.log("pawan"); //won't be executed cause it is written below return statement
 }
const result1 = addTwoNumbers(2,8);
console.log("result:", result1)

function loginUserMessage(username){
    // if(username === undefined)
    if(!username)
        {
        console.log("please enter a username");
        // console.log(username);
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());  //it will give undefined 
// console.log(loginUserMessage("pawan").;