function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); // Can we access outerVar? yes
        console.log(innerVar); // Can we access innerVar? yes
    }
    innerFunction();
}

outerFunction();