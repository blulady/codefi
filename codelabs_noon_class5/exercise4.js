// Declare a global variable here
let aVar = 4;

function modifyGlobal() {
    // Try to modify the global variable here
    aVar = aVar + 6;
    console.log(aVar);
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    const aVar = 9
    console.log(aVar);

}

// Call both functions here

modifyGlobal();
localScopeTest();
