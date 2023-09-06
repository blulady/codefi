let num = prompt("Enter a number: ");
let factorial = num;

for (let i = 0; i < num; i++) {
    num -= 1;
    factorial *= num
}

console.log(factorial)