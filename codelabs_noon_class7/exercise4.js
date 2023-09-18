class Subject {
    constructor(){
        this.observers = [];
    }
    addObserver(observer) {

    }
    removeObserver(observer) {

    }
    notifyObservers(data) {

    }

    async fetchAndNotify(){
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    }
}

class Observer {
    update(data) {
        
    }
}