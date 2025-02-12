// creation of object using constructor  ==>> singlleton

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Pawan";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "pawan",
            lastname: "khnera",
        }
    }
}

console.log(regularUser.fullName)
console.log(regularUser.fullName.userfullname)
console.log(regularUser.fullName?.userfullname.firstname)  // ? is used for option chaining , supposed full name doesn't exit 

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}


// const obj3 = { obj1, obj2}; // not a recommended for merging two or more obj

// ============================Object.assign method==========================
// const obj3 = Object.assign({},obj1,obj2,obj4);   // standard way/method to combine the object

// =======================using spread operator=====================
const obj3 = {...obj1,...obj2,...obj4};
console.log(obj3);


const users = [
    {
        id: 1,
        email: "pk@gami.com",
    },
    {
        id: 1,
        email: "pk@gami.com",
    },
    {
        id: 1,
        email: "pk@gami.com",
    },
    {
        id: 1,
        email: "pk@gami.com",
    },
    {
        id: 1,
        email: "pk@gami.com",
    },
    {
        id: 1,
        email: "pk@gami.com",
    }
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))