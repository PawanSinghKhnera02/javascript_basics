const descriptor =Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);

const pk = Object.create(null);

const psk = {
    name: "pawan",
    price: 250,
    isAvailable: true,

    logme : function(){
        console.log("logged in");
    }


}

// console.log(Object.getOwnPropertyDescriptor(psk, "name"));

Object.defineProperty(psk, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(psk, "name"));

for(let i = 0; i < Array.length; i++){

}

for (let [key, value] of Object.entries(psk)) {

    if(typeof value !== "function") {
    console.log(`${key} : ${value}`);
    }
}