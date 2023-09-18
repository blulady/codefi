// var, let, const
console.log(varV); 
// the above code will lead to an error, 


var varV;
let letV;
const constV = "";
// having variables defined at the top of the page makes their scope global, but hoisting  will allow you to have functions/variables out of order

myNameis('John');
myDetails('Jimmy', 30)

function myDetails(name, age){
    console.log(age);
    myNameis(name);
}

console.log(letV, constV);
// this will work

function myNameis(name) {
    console.log(name)
}
