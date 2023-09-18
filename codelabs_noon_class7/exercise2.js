const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};
const {name, age} = person;
console.log(name);
console.log(age);

const {city, country} = person.address;
console.log(city);
console.log(country);

const fruits = ['apple', 'banana', 'cherry', 'date'];
const [, second, , fourth] = fruits;
console.log(second);
console.log(fourth);