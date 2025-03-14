class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `abdul${this._email.toUpperCase()}12453`;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const pawan = new User("pk@gmail.com", "abc")
console.log(pawan.password)
console.log(pawan.email)