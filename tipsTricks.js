// to use fancy arrows and equal signs
// Went to settings (ctrl+,)
// Added Cascadia Code as a font family
// went into settings for ligatures and changed false to true

//-------------------------------------------|
// testing new arrows and symbols            |
//                                           |
// =>                                        |
// console.log(10 !== 9);                    |
// console.log(90 != 9);                     |
//                                           |
//-------------------------------------------|
//                                           |
// To edit multiple items...                 |
// double click a word or highlight words    |
// use ctrl+D to highight 1 at a time        |
//                                           |
//-------------------------------------------|
//                                           |
//                                           |
// FUNCTION used to multiply by a value      |
//                                           |
//-------------------------------------------|
pie = (number) => number * 3.14;
console.log(pie(20)); // 62.8....

//-------------------------------------------|
// alternatively store function as var       |
//-------------------------------------------|
const doubleit = (number) => number * 2;
console.log(doubleit(4)); // 8

//-------------------------------------------|
// add and multiply                          |
//-------------------------------------------|
const lib = {
    shit(a, b) {
        return a + b;
    },
    mult(a, b) {
        return a * b;
    },
};
console.log(lib.shit(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

//-------------------------------------------|
// forEach method (Helper)                   |
//                                           |
// This function sums an array               |
//-------------------------------------------|
let numbers = [1, 2, 3, 4, 5];
// 2. Create a variable to hold the sum.
let sum = 0;
/* 3. Create the adder function which takes 
      the parameter of number & add that with 
      sum variable.
*/
function adder(number) {
    sum += number;
}
/* 4. Loop over the array, incrementing the 
      sum variable except this time a function 
      gets referenced in the forEach
*/
numbers.forEach(adder);
// 5. print the sum variable.
console.log(sum); // 5+4+3+2+1 = 15
