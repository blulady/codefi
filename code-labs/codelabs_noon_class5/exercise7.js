function setupCounter() {
    // Define a count variable here
    let countVar = 3;

    return function(countVar) {
        // Increment and print the count
        countVar += 2;
        console.log(countVar);
        return countVar;
    };
};

// Create a counter instance and invoke it to test
setupCounter();