const classroom = {
    name: 'High Five',
    students: ['Valory', 'Zane', 'Ipsum'],
    printStudents: function () {
        console.log("'this' in imiplicit scope (Function Dec):", this.students);
    },
    printStudentsES6: () => console.log("'this' in implict scope (ES6):", this.students),
};

classroom.printStudents();
classroom.printStudentsES6();