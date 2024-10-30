// A function is a block of code that performs a specific task
// reusable - declare once, use multiple times
// each small task is divided into a function
// increases readability
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

/*
// ---------------------------
// This example is part of HuXn's code

function myFunction(p1, p2) {
    return p1 * p2; // The function returns the product of p1 and p2
}

let x = myFunction(4, 3);
console.log(x);

// ---------------------------

// basic function
function greeting() {
    console.log("Hello");
}
// need to call the function for output

// parameters
// parameters
// parameters
// parameters
// parameters

// parameters are also local variables
// parameters are also local variables
// parameters are also local variables
// parameters are also local variables
// parameters are also local variables

// part of later training will be Scope

function sayHello(name) {
    console.log(`Hello ${name}`); // this works with back-ticks
    // console.log("Hello ${name}"); // doesn't work like this
}
// sayHello("George"); // George is an argument
// sayHello("DJ"); // George is an argument
// sayHello("Nicki"); // George is an argument

// return keyword

function add(x, y) {
    return x + y;
}
let juice = add(4, 3);
console.log(juice);
console.log(add(4, 5));
console.log(juice);
add(90, 100);

// console.log is only for developers
// return allows the return of a value for functions
// ... for use in functions, I guess

// 1 - This is how we write a function
function add(x, y) {
    // 4 - returning the data from the function
    return x + y;
}
// 2 - this is how we call a function
const res1 = add(10, 20);
// 3 - we can see it in console.log
console.log(res1);
// print(res1); <-- this wants to print to printer
// I tried that on my own; I guess we'll learn later

// this covered returns, parameters, arguments,
*/

//      challenge
//      challenge
//      challenge
//      challenge
//      challenge

function myFunction(x, y) {
    return x * y;
}
const myNumbers = myFunction(2, 99);
console.log(myNumbers);
