function hoistingTest() {
    // Try printing a variable here
    console.log(aVar);

    // Declare the variable after the console.log
    const aVar = "Hi, I am being hoisted!!";
}

hoistingTest();
