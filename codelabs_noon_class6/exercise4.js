class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static info(){
        console.log("This is a person class");
    }
    greet(){
        console.log('Hello!!!');
    }
}

sue = new Person("Sue", 33);
bob = new Person('Bob', 23);

console.log(sue.greet());
console.log(bob.greet());
sue.info;
console.log(bob.info);