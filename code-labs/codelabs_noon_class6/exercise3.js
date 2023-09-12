class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello!!!');
    }
}

sue = new Person("Sue", 33);
bob = new Person('Bob', 23);

console.log(sue.greet());
console.log(bob.greet());