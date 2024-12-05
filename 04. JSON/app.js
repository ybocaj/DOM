//----------------------------------------------------------------------|
//                                                                      |
//                            JSON                                      |
//                                                                      |
//                                                                      |
//         https://youtu.be/H3XIJYEPdus?feature=shared&t=14735          |
//                                                                      |
//                                                                      |
//----------------------------------------------------------------------|
//                                                                      |
// JSON stands for JavaScript Object Notation. It is a lightweight      |
// data interchange format that is easy for humans to read and          |
// write and easy for machines to parse and generate. JSON is           |
// often used for transmitting data between a server and a web          |
// application, as well as for storing configuration settings and data  |
//                                                                      |
// HuXn says this will be beneficial when learning about                |
// Node and Express                                                     |
//                                                                      |
// In JavaScript, JSON is represented as a string, and it closely       |
// resembles JavaScript object literal notation. It consists of         |
// key-value pairs, where keys must be strings, and values can          |
// be strings, numbers, booleans, arrays, or nested objects.            |
//                                                                      |
// The key-value pairs are separated by commas, and the entire          |
// JSON object is enclosed in curly braces {}.                          |
//                                                                      |
//----------------------------------------------------------------------|
//                                                                      |
// JavaScript provides methods to work with JSON data:                  |
//                                                                      |
// JSON.stringify(): Converts a JavaScript object into a JSON string.   |
// JSON.parse(): Parses a JSON string and returns a JavaScript object.  |
//                                                                      |
//----------------------------------------------------------------------|
//                                                                      |
//                        EXAMPLE                                       |
//                                                                      |
//       https://youtu.be/H3XIJYEPdus?feature=shared&t=14963            |
//                                                                      |
//                JSON must be double-quoted                            |
//                                                                      |
//______________________________________________________________________|
const person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isSubscribed: true,
    hobbies: ["Reading", "Running", "Cooking"],
    address: {
        city: "New York",
        zipCode: "10001",
    },
};

//----------------------------------------------------------------------|
//                                                                      |
//                    JSON.stringify()                                  |
//                                                                      |
//----------------------------------------------------------------------|

console.log(person);
// console.log(JSON.stringify());
console.log(JSON.stringify(person)); // there's also JSON.parse()
//
// he didn't know he needed to put person in as a parameter
// but I tried it and it worked
// Then he did this because his results were still "undefined"
//
// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);

//-------------------------------------------------------------------------------|
//                                                                               |
//                              JSON.parse()                                     |
//                                                                               |
//-------------------------------------------------------------------------------|

// Parse JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
console.log(parsedObject.name); // Output: "John Doe"
console.log(parsedObject.hobbies); // Output: ["Reading", "Running", "Cooking"]
