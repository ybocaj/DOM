/* console is an object and there are methods, which is what .dot is, 
like .log */
// console.log("fuck off faggot");
// console.log("Boca webdev");

// I got some of these at
// https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging

let name = "Boca";
console.log(name);
console.log({ name: "Boca" });
console.warn(name, "This is a warning");
console.info(name, "This is console.info");
console.debug(name, "this is console.debug");

// put cursor at start of sentence ctrl + / (comments out)
// clg --> console.log
// log --> console.log

// console.table({ name: "emjay", age: 4 });

/* variables

format:  reserved keyword / variable name / type of value
use var or let or const to declare
let name; // this declares a variable


let name;
console.log(name); // name is not defined

let name = 5;
console.log(name);
*/

/* 
     challenge 1
     challenge 1
     challenge 1
     challenge 1
     challenge 1

1. create variable name & store your name
let name = "emjay";

2. create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
let whatDoYouWannaBecomeInYourLife = "programmer";

3. create var (gender) & store your gender
let gender = "male";

4. create var twitterHandle & store it
let twitterHandle = "ybocajm";

5. log all variables to the console
console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle);
*/

/*
let name = "emjay";
let whatDoYouWannaBecomeInYourLife = "programmer";
let gender = "male";
let twitterHandle = "@ybocajm";
console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle);
*/

/* Primitive Types

1. Number 
let num = 2;
console.log(2 + 2);
// shift + alt + downArrow (to copy)
console.log(2 * 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);


// increment
let counter = 0;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
console.log(counter);


// decrement
let counter = 10;
counter--;
console.log(counter);
*/

/*
//     challenge 2
//     challenge 2
//     challenge 2
//     challenge 2
//     challenge 2

// 1. create var name (firstFavNum) & store it
// let firstFavNum = 2;

// 2. Create secondFavNum & store it
// let secondFavNum = 99;

// 3. Add those
// firstFavNum + secondFavNum;

// 4. Subtract em
// 5. Multiply em
// 6. Divide
// 7. check Mod
// 8. check power of first


let firstFavNum = 2;
let secondFavNum = 99;
console.log(firstFavNum + secondFavNum); // '101'
console.log(firstFavNum - secondFavNum); // '-97'
console.log(firstFavNum * secondFavNum); // '198'
console.log(firstFavNum / secondFavNum); // '0.0202...4'
console.log(firstFavNum % secondFavNum); // '2'
console.log(firstFavNum ** secondFavNum); // '6.3382...e+29'
*/

/*
// this part is me messing around
// trying to get output on one line in console
let firstFavNumber = 2;
let secondFavNumber = 5;
console.log(firstFavNumber + secondFavNumber, secondFavNumber - firstFavNumber);

//     Booleans
//     Booleans
//     Booleans
//     Booleans
//     Booleans

let isTrue = Nan;
let isTrue = True;
let isTrue = False;

let number = 10;


//      challenge 3 Boolean
//      challenge 3 Boolean
//      challenge 3 Boolean
//      challenge 3 Boolean
//      challenge 3 Boolean

// 1. Create var isJsProgrammingLanguage = true
// 2. Create isJsHard = False
// 3. Create favNumb = 2
// 4. add favNumb to undefined


let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 2;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb);
console.log(favNumb + undefined);
*/

/*
// comparison operators
// --> relational operators
// < > >= <=

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);
*/

/*
// --> equality operators
// === strict equality (type + value)
// !== strict non-equality operators (type + value)
// == lose equality operator (value)
// != lose not equal operator (value)

console.log(10 === 10);
console.log(10 === "10");
console.log(typeof 10);
console.log(typeof "10");
console.log(10 !== 10);
console.log(10 !== 20);
console.log(10 !== "10");
console.log(10 == "10");
console.log(10 == 10);
console.log(10 != "10");
*/

/*
//      challenge 4 operators
//      challenge 4 operators
//      challenge 4 operators
//      challenge 4 operators
//      challenge 4 operators

// 1. Create firstFavNumb = 2
// 2. Create secondFavNumb = 99
// 3. Check if firstFavNumb > secondFavNumb
// 4. Check if firstFavNumb < secondFavNumb
// 5. Check if firstFavNumb >= secondFavNumb
// 6. Check if firstFavNumb <= secondFavNumb
// 7. Check if firstFavNumb === secondFavNumb
// 8. Check if firstFavNumb == secondFavNumb
// 9. Check if firstFavNumb !== secondFavNumb
// 10. Check if firstFavNumb != secondFavNumb

let firstFavNumb = 2;
let secondFavNumb = 99;
console.log(firstFavNumb > secondFavNumb); // false
console.log(firstFavNumb < secondFavNumb); // true
console.log(firstFavNumb >= secondFavNumb); // false
console.log(firstFavNumb <= secondFavNumb); // true
console.log(firstFavNumb === secondFavNumb); // false
console.log(firstFavNumb == secondFavNumb); // false
console.log(firstFavNumb !== secondFavNumb); // true
console.log(firstFavNumb != secondFavNumb); // true
*/

/*
//      Strings
//      Strings
//      Strings
//      Strings
//      Strings

let firstName = "Boca";
let alternate = "BoCa";
let secondName = "emjay";
let alternate2 = `emjay`;
// console.log(firstName, alternate, secondName, alternate2);
// console.log(firstName + ` ` + secondName);

// 1. Concatenation
// let fullName = firstName.concat(secondName);
// console.log(fullName);

// 2. Append
// firstName += " something else";
// console.log(firstName);

// 3. Length
// console.log(firstName.length);

// 4. Cases
// console.log(alternate);
// console.log(alternate.toLowerCase());
// console.log(alternate.toUpperCase());

// 5. Slice - used in strings and arrays
// console.log(firstName);
// console.log(firstName.slice(0, 4)); // 'Boca'
// console.log(firstName.slice(1, 4)); // 'oca'
// console.log(secondName.slice(0, 4)); // 'emja'

// 6. Split & Join - puts letters into an array
// console.log(firstName.split("")); // splits into array
// console.log(firstName.split("").join("")); // Boca
// console.log(firstName.split("").join("choopy")); // Bchoopyocho...
// console.log(firstName.split("").join(" 4 ")); // 'B 4 o 4...
// console.log(firstName.split("").join(" elf ")); // 'B elf o elf c elf a'
// console.log(firstName.split(" ")); // ['Boca'] no spaces
// console.log(firstName.split(" ").join("")); // Boca
// console.log(firstName.split(" ").join("choopy")); // Boca
// console.log(firstName.split(" ").join(" ")); // Boca
// console.log(firstName.split(" ").join(" choopy")); // Boca
// console.log(firstName.split(" ").join(" choopy ")); // Boca

// He says we won't need to do split & join much

// 7. Includes
// console.log(firstName.includes("X")); // false
// console.log(firstName.includes("o")); // true
// console.log(firstName.includes("O")); // false
// console.log(firstName.includes("0")); // false
// console.log(firstName.includes("c")); // true
// console.log(firstName.includes("C")); // false

// 8. Trim // put spaces in variable above to see this work
// console.log(firstName); 
// console.log(firstName.trim(firstName));



//      Working with back ticks
//      Working with back ticks
//      Working with back ticks
//      Working with back ticks
//      Working with back ticks

// This won't work (with double quotes)
let desc = "this is some random
     text
";

console.log(desc);


// but this will work with back-ticks
let desc = `this is some random
     text
     1
     2
     3
     4
     5
     6
`;
console.log(desc);

// using ticks, we can Append - I guess - like this:
let firstName = "Peanut";
let lastName = "Munch";
let fullName = `${firstName} ${lastName} popcorn`;
console.log(fullName);
console.log(fullName);




//      challenge 5 strings
//      challenge 5 strings
//      challenge 5 strings
//      challenge 5 strings
//      challenge 5 strings

let favActorFirstName = "Jack";
let favActorLastName = "Nich";
let fullName = favActorFirstName + " " + favActorLastName;
console.log(fullName.toUpperCase());
let uppercase = fullName.toUpperCase();
let message = `My fav actor is ${uppercase}, `;
message += `his best show is Silicon Valley`;
console.log(message);
*/

/*
//      Type Conversion
//      Type Conversion
//      Type Conversion
//      Type Conversion
//      Type Conversion

console.log(typeof variable);

so 

let money = 50;
let dinero = "50.2004";
// console.log(typeof money); // number
// console.log(typeof dinero); // string
// console.log(typeof word); // undefined
// console.log(typeof 50); // number
// console.log(typeof "string"); // string

// use parseInt to convert string to number

// dinero = parseInt(dinero);
// console.log(dinero); // 50
// console.log(typeof dinero); // number

// a shortcut is to just use a + sign...
// dinero = +dinero;

// another way is to use "Number".  Gay.  Seems too easy and intuitive, so why bother with other methods(?) or ways?

// dinero = Number(dinero); // when commented out, dinero is a string
// console.log(dinero); // 50
// console.log(typeof dinero); // number

// convert # to string
// money = money.toString(); // it's a method that lets us change anything to a string
// money = String(money);
// console.log(typeof money);

// can convert string to decimal
dinero = parseFloat(dinero);
console.log(dinero);
console.log(typeof dinero);

*/
