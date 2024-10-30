// going to go over loops and stuff

/*
//      if with numbers
//      if with numbers
//      if with numbers
//      if with numbers
//      if with numbers

let a = 10;
let b = 10;
if (a < b) {
    console.log("yo");
} else if (a > b) {
    console.log("noper scoper");
} else {
    console.log("it's a tie");
}

let time = 11;
let greetings;
if (time < 10) {
    greetings = "g'morning";
    console.log(greetings);
} else if (time > 10) {
    greetings = "g'day";
    console.log(greetings);
} else {
    greetings = "g'night";
    console.log(greetings);
}

//      challenge
//      challenge
//      challenge
//      challenge
//      challenge

let password;
if (password === 8) {
    console.log("Welcome");
} else if (password <= 8) {
    console.log("2short");
} else if (password >= 8) {
    console.log("2long");
    console.log("PW should be 8");
} else {
    console.log("please provide a pw");
}




//      Switch Statements
//      Switch Statements
//      Switch Statements
//      Switch Statements
//      Switch Statements

// switch (expression) {}
// seem to be like if/else

let x = 1; // make this a string or > 1 and it'll be nothing
let bulb;

switch (x) {
    case 0:
        bulb = "off";
        console.log(bulb);
        break;
    case 1:
        bulb = "on";
        console.log(bulb);
        break;
    default:
        bulb = "nothing";
        console.log(bulb);
}

let day = "monday";
switch (day) {
    case "monday":
        console.log("I've got the Mondays");
        break;
    case "tuesday":
        console.log("Taco Tuesday");
        break;
    case "wednesday":
        console.log("Weddingsday");
        break;
    case "thursday":
        console.log("cat day");
}

//      challenge
//      challenge
//      challenge
//      challenge
//      challenge

let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("banana for your thoughts");
        break;
    case "orange":
        console.log("i like orange");
        break;
    case "apple":
        console.log("how do you like those apples");
        break;
    default:
        //        fruit = "nothing";  // this isn't necessary
        console.log("never heard of it");
}

// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself
// DRY → Don't repeat yourself

//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop
//      for loop

// shift + alt + ↓ (alt 25)
// alt + 24 ↑

// DRY → Don't repeat yourself

//  Oh, he's getting to for loops

//  for (expression; condition; increment) {}

// format...
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    console.log("for loop", i);
}

//      nested for loop
//      nested for loop
//      nested for loop

// he says we may not need nested loops
for (let i = 1; i <= 3; i++) {
    console.log("--- Outer Loop ---", i);
    // nested loop
    for (let boca = 2; boca <= 2; boca++) {
        console.log("--- Inner Loop ---", boca);
    }
}


//      challenge
//      challenge
//      challenge
//      challenge
//      challenge

// print name and numbers from 0 through 1000

for (let i = 0; i <= 1000; i++) {
    console.log("Mike", i);
}


//      while loop
//      while loop
//      while loop
//      while loop
//      while loop

// same as for, but syntax bit dff

// pseudocode for writing while loop
// while (condition) {
    // code block to be executed
}

let i = 1;
while (i <= 5) {
    console.log("Boca", i);
    i++; // HuXn commented this out and crashed browser
}

//      do while
//      do while
//      do while
//      do while
//      do while

// he says we'll hardly ever - maybe never - use do/while in this course
// let j = 1;
// do {
//     console.log("hi", j);
//     j++;
// } while (j <= 5);


//      challenge
//      challenge
//      challenge
//      challenge
//      challenge

// print name 400 times to console using do-while
// start iteration at 20
// he's wrong here with the math, we should go to 419 or 420, but
// whatever

let j = 20;
do {
    console.log("Me", j);
    j++;
} while (j <= 400);



//      logic operators
//      logic operators
//      logic operators
//      logic operators
//      logic operators

// && || !


let password = "hogganogga"; // invalid - but change to 8 or hog
if (password.length >= 12 || password.includes("hogie")) {
    console.log("Valid Password");
} else {
    console.log("invalid");
}



//      arrays
//      arrays
//      arrays
//      arrays
//      arrays

// empty array
const myList = [];
console.log(myList);

// nesed || two dimensional array
const myString = [
    "Me",
    "you",
    "him",
    "her",
    ["they", "us"],
    "guys",
    "dudes",
    "girls",
]; // can use const, let, var, but he says don't use var
console.log(myString);
console.log(myString[3]);
console.log(myString[4]);
console.log(myString[4][0]);


//      challenge
//      challenge
//      challenge
//      challenge
//      challenge
const favSingers = ["zep", "doors", "sting"];
console.log(favSingers[0]);
const favNumbers = [2, 5, 21, 99];
console.log(favNumbers);
const mixedArr = ["string", ["otherarray"], 123, true];
console.log(mixedArr);
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);




// see README.md for info about adding/removing from arrays




// use includes to search for content
const pl = ["JS", "Golang", "Python", "C#", "C++", "PHP"];
const numbers = [3, 5, 2, 4, 1];
console.log(pl.includes("C++")); // true
console.log(pl.join(" --BOCA-- ")); // join is a method
// join is used a lot in node.js and express.js
console.log(pl);
// console.log(pl.reverse());
// console.log(numbers.reverse());
console.log(pl.slice(1, 3));
console.log(numbers.sort());
console.log(numbers.reverse());




//      OBJECTS
//      OBJECTS
//      OBJECTS
//      OBJECTS
//      OBJECTS

// Objects allow storage of data with key-value pairs

// to create an object, use let or const
const person = {
    // key: value
    firstName: "Boca",
    lastName: "YJ", // can do an array here, number, string, or {} or whatever
    age: 99,
    location: ["Planet", "Earth", "State", "Oregon"],
    isProgrammer: true,
};
console.log(person);
console.log(typeof person);

// so return a value in console log just to see the object possibilities
// const steeple = {};
// console.log(steeple);
// in console log, click arrow and arrow to expand
// there's constructor, toString, all sorts of properties and methods

// TWO ways to access items from our object
// 1. put a . after person and you'll see a list

console.log(person.location);
console.log(person.age, person.firstName, person.isProgrammer);
// keep adding each thing one by one to get all
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.isProgrammer);

// 2. is to use brackets wtih quotes

console.log(person["firstName"]);

// sounds like at 3:21:00 of the video HuXn is saying, say you have
// 10: 'ten' and console.lot(person.10);, it won't work
// so it may vary depending on your key-values as to whether
// you need to do . or []

const jerkyboy = {
    firstame: "Toxi",
};

jerkyboy.lastName = "city";
console.log(jerkyboy);
console.log(jerkyboy.firstName + jerkyboy.lastName);
// delete from object
delete person.firstName;
console.log(person);


//      Challenge
//      Challenge
//      Challenge
//      Challenge
//      Challenge

const car = {
    type: "Porsche",
    model: "911",
    color: "black",
};
console.log(car);
console.log(typeof car);
car.type = "Toyota";
car.wheels = "mag";
console.log(car);

*/
