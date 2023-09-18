class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello!!!');
    }
    get get_age(){
        return this.age;
    }
    set set_age(num){
        this.age = num;
    }
}

const sue = new Person("Sue", 33);
console.log(sue.age);
sue.set_age = 10;
console.log(sue.age);
