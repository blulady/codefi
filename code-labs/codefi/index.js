// global scope
const firstName = "John";

// different types of local scopes

// Outer Scope
{
    // inner scope
    const firstName = "Amy";
    console.log("My name is "+ firstName);
}

console.log("My name is really..." + firstName)

// for(let i = 0; i < 10; i++){

// }

// function scope
// function myNameis(name){

// }

// local scopes (function scopes = revolves around the function)

