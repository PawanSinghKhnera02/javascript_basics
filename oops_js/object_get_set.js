// old syntax -- doesn't in trends

const psk = {
 _email : "email.com",
 _password : "12a45a3",

 get email(){
    return `${this._email.toUpperCase()}`;
 },
  
 set email(value){
    this._email = value;
 }
}

const apple = Object.create(psk)

console.log(psk.email);