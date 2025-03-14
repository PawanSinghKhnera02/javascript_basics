function SetUserName(username){
    this.username = username;
    // console.log('called');
}


function CreateUser(username, email, password){
    SetUserName.call(this, username);  // call pass the current execution context to other function
    this.email = email;
    this.password = password;
}

const user1 = new CreateUser('pawan', 'pk@gmail.com', '1234');
console.log(user1);