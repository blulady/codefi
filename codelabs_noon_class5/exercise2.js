function mainFunction() {
    hoistedFunction(); // call the function here
}

function hoistedFunction() {
    console.log("I am a hoisted function!"); // define the function here
}

mainFunction();