class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new Teacher('pawan', 'pk@gmail.com','1254');
user1.addCourse();
user1.logme();
console.log(user1.email)

const user2 = new User('sam');
user2.logme();

// user2.addCourse(); //it doesn't have access 

console.log(user1===user2);