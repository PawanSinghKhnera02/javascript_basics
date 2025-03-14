
Object.defineProperty(psk, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(psk, "name"));