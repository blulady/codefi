const person = {
    name: "Tami",
    age: 15,
    gender: 'Female',
}
console.group('a person')
    console.log(person.name);
    console.log(person.age);
    console.log(person.gender);
console.groupEnd();