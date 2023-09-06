// 1. create a menu to prompt the use what they like to do
// 2. execute an operation depending on user's choice


// const answer = +prompt("Please choose an option!\n add 2.subtract 3. multiply 4. divide")

// console.log("answer: ", answer)

// if (answer == 1) {
//     const numberOne = +prompt('Choose a number')
//     const numberTwo = +prompt('Choose a number')
//     console.log(numberOne + numberTwo)

// } else if( answer == 2) {
//     const numberOne = +prompt('Choose a number')
//     const numberTwo = +prompt('Choose a number')
//     console.log(numberOne - numberTwo)

// } else if(answer == 3) {
//     const numberOne = +prompt('Choose a number')
//     const numberTwo = +prompt('Choose a number')
//     console.log(numberOne * numberTwo)

// } else if(answer ==4) {
//     const numberOne = +prompt('Choose a number')
//     const numberTwo = +prompt('Choose a number')
//     console.log(numberOne / numberTwo)

// } else {
//     alert("Invalid option")
// }

function chooseNumbers() {
    const numberOne = +prompt('Choose a number');
    const numberTwo = +prompt('Choose a number') ;
    return {numberOne, numberTwo}
}

const answer = prompt("Please choose an option!\n add 2.subtract 3. multiply 4. divide")

console.log("answer: ", answer)

if (answer.toLowerCase() === 'no') {
    alert("see you later")
} else if (+answer == 1) {
    const { numberOne, numberTwo} = chooseNumbers();
    const resultElement = document.createElement('p');
    const sumAll = sum(numberOne, numberTwo);
    resultElement.innerText = `The addtion of ${numberOne} and ${numberTwo} is ${sumAll}`;
    document.body.appendChild(resultElement)

} else if( +answer == 2) {
    const { numberOne, numberTwo} = chooseNumbers();
    console.log(difference(numberOne, numberTwo))

} else if(+answer == 3) {
    const { numberOne, numberTwo} = chooseNumbers();
    console.log(multiplication(numberOne * numberTwo))

} else if(+answer ==4) {
    const { numberOne, numberTwo} = chooseNumbers();
    console.log(difference(numberOne / numberTwo))

} else {
    alert("Invalid option")
}