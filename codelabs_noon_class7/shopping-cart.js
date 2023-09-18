class ShoppingCartObserver{
    // instance properties
    items = [];
    observers = [];

    addItem(item) {
        this.items.push(item);
    // notify all subscribers that an item has been added
        this.notifyAll(); 
    }
    // add subscriber to observers
    subscribe(observer){
        this.observers.push(observer);
    }
    // broadcast information to all subscribers
    notifyAll(){
        this.observers.forEach(observer => observer.update(this.items))
    }
}

const shoppingCart = new ShoppingCartObserver;

const updateCart = (items) => {
    // update the ui based on the items
    console.log("updating cart...");
    // get cart element
    const cartElem = document.getElementById("header-cart");
    // adjust the content increment the count
    cartElem.innerText = `cart(${items.length})`
}

const updatePopUp = (items) => {
    console.log('Updating pop up');
    // get popup element
    const popUpElem = document.getElementById("pop-up");
    // adjust the content
    popUpElem.innerText = `You have added ${items[items.length -1]}`
    // show the popup
    popUpElem.style.display = "block";
}

shoppingCart.subscribe(updateCart);
shoppingCart.subscribe(updatePopUp);