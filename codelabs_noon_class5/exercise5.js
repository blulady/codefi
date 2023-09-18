function functionFactory(param) {
    // Return a function that makes use of 'param'
    function functionFactory2(num){
        num = num + 10;
        console.log(num);
    }
    return functionFactory2(param);
}

// Create an instance of the inner function by invoking functionFactory with a parameter

functionFactory(5);
