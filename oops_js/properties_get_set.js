function psk(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email",{
        get: function(){
            return `${this._email.toUpperCase()}`;
        },

        set: function(value){
            this._email = value;
        }
    })
    
    Object.defineProperty(this, "password",{
        get: function(){
            return `${this._password.toUpperCase()}`;
        },

        set: function(value){
            this._password = value;
        }
    })
}

const pawan = new psk("pk@gmail.com", "1234lfjsgjl");
console.log(pawan.email);
console.log(pawan.password);