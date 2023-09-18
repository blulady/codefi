// SELECTORS
const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const totalPriceDisplay = document.querySelector(".total-price");
const quanityLabe = document.querySelector('.quantity-label');

// EVENTS
// what: when price input changes -> update total display
priceInput.addEventListener('input', updateTotalDisplay);

// what: when quantitity input changes -> update total display
quantityInput.addEventListener('input', updateTotalDisplay);

// what: when quantity Input Changes -? update quantity label
quantityInput.addEventListener('input', updateQuantityLabel);

// FUNCTIONS
// output: update the total display
function updateTotalDisplay() {
    // find the value of the price input
    const price = priceInput.value;
    console.log(typeof price)
    // find the value of the quanity input
    const quanity = quantityInput.value;
    // multiply the two together
    const total = price * quanity;
    // update the dom to display the total
    totalPriceDisplay.innerText = `$${total.toFixed(2)}`;
}

function updateQuantityLabel() {
    //get quantity value
    const quanity = quantityInput.value;
    //update the DOM
    updateQuantityLabel.innerText = quanity;

}

// STARTS WITH PAGES LOADS (application start)
updateTotalDisplay();