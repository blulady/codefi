// class Address {
//     constructor(zip, street){
//         this.zip = zip
//         this.street = street
//     }
// }
// class User{
//     constructor(name, age, phone, address){
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// const user = new User('Bob', undefined, undefined, new Address('934943', "Some St"))

// we make is so you can create a user with a UserBuilder class
//& only need a name & create setters to add the rest of the info later

// 

// builer with JS builder pattern
// the best way to pass optional parameters when building an
// object is using Json object

class User{
    constructor(name, {age, phone, address }={}){
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}
let user = new User('BAB', {address: "410 Some Street"});
console.log(user);