class Observer {
    update() {
        console.log('Observer updated!');
    }
}

class Subject {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) {
        const obsToRmv = observer;
        const index = this.observers.indexOf(obsToRmv);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(){
        this.observers.forEach(observer => observer.update())
    }
}

const fn = function (){
    console.log("somthing");
};
const fn1 = function (){
    console.log("somthing1");
};
const fn2 = function (){
    console.log("somthing2");
};
const fn3 = function (){
    console.log("somthing3");
};
const sub = new Subject();
sub.addObserver(fn);
sub.addObserver(fn1);
sub.addObserver(fn2);
sub.addObserver(fn3);
console.log(sub.observers);
sub.removeObserver(fn);
console.log(sub.observers);
console.log(sub.notifyObservers);

const ob1 = new Observer();
const ob2 = new Observer();
const ob3 = new Observer();
const sub2 = new Subject();

sub2.addObserver(ob1);
sub2.addObserver(ob2);
sub2.addObserver(ob3);
sub2.notifyObservers();

