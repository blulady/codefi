const classromm = {
    name: "high five",
    students: ["sally", "jim", "karen"],
    printStudents: function () {
        console.log("'this' in implict scope:", this.students);
    },
};

classroom.printStudents();
console.log(this);

// const getName = funciton() {
//     console.log("'this' is an explict scope:", this.name);
// };

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log('${this.name} makes a sound!');
    }
}

const dog = new Animal('Gizmo')
dog.speak();

const cat = new Animal("jiji");
cat.speak()

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area(){
        return this.width * this.height
    }
    set dimensions(value){
        [this.width, this.height] = value;
    }
}


const rect1 = new Rectangle(4, 5);
console.log(rect1.area);
rect1.dimensions = [2,3]
console.log(rect1.area);

//static method same for all instances of a class

class Calculator {
    static add(a,b){
        return a + b;
    }
}

console.log(Calculator.add(4,5));

//private, cannot access without a specific instance of the class

class Circle {
    #radus;
    constructor(radius) {
        this.#radus = radius;
    }

    getArea() {
        return Math.PI *this.#radus * this.#radus;
    }
}

const circle = new Circle(5);
console.log(circle.getArea);
console.log(circle.radius);


