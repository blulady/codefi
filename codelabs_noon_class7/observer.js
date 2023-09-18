// observer pattern:
// angular is built on top of this pattern
// a list of subscribers waiting to be noticed of a broadcast


class Observer {
    // a template of subscribers to be noticed of a broadcast
    observers = [];

    // instance method - adding subscribers
    //
    subscribe(fn) {
        this.observers.push();
    }

    // instance method - broadcast information to subscribers
    broadcast(data){
        this.observers.forEach(sub => sub(data))
    }
}

// observer instance
const observer = new Observer;

// declare a subscriber
const subscriber = (data) => {
    console.log('Some data, ' + data);
}

console.log("Before suscriber list", observer.observers)

// adding a subscriber
observer.subscribe(subscriber)

console.log("After suscriber list", observer.observers)

observer.broadcast("John Doe")