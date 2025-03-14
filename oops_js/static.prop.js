class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const user1 = new User('pawan')
user1.logme();
console.log(User.createId())  // static method only called with class; doesn't called with object


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email= email;
    }
}

const user2 = new Teacher ("sam", "sam@gmail.com")
// console.log(user2);
user2.logme();