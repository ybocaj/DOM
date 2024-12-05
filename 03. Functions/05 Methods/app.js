//-----------------------------------------------------------------------|
//                          METHODS                                      |
//                                                                       |
//          https://youtu.be/H3XIJYEPdus?feature=shared&t=14512          |
//                                                                       |
//-----------------------------------------------------------------------|
//                                                                       |
//                         DEFINITION                                    |
//                                                                       |
//       A METHOD is a function that is associated with an object.       |
//    It allows objects to perform actions or provide functionalities.   |
//                                                                       |
//                                                                       |
//-----------------------------------------------------------------------|
//                                                                       |
// Defining a method outside the object                                  |
function greet() {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

const person = {
    name: "John",
    age: 30,
    greet,
};
console.log(person.greet());
//                                                                       |
//-----------------------------------------------------------------------|
//                                                                       |
//                   CREATE A METHOD                                     |
//                   INSIDE AN OBJECT                                    |
//                                                                       |
const persona = {
    name: "Boca",
    age: 19,
    greet: function () {
        // this was greet: function greet() and that works
        return `Hello, my name is ${persona.name} and I am ${persona.age} years old.`;
    },
};
console.log(persona.greet());
//                                                                       |
//-----------------------------------------------------------------------|
