console.log(this);

class Rabbit{
    constructor(r_name, age){
        this.r_name = r_name;
        this.age = age;
    };
    say_this(){
        console.log('${this} is a rabbit');
    };
    an_arrow = () => console.log('${this.r_name} is a name')
}

const new_r = new Rabbit("billy", 6);

console.log(new_r.say_this);
console.log(new_r.an_arrow);
