/*
// -------------------------------------------------------------------|
//                                                                    |
//                This is a basic FUNCTION CALL                       |
//                                                                    |
// ___________________________________________________________________|

showCallFunc(); 

// -------------------------------------------------------------------|
//                                                                    |
//               This is a CALLBACK FUNCTION                          |
//                                                                    |
//                                                                    |
//        It's a function as an argument to another function          |
//                                                                    |
// ___________________________________________________________________|

showCallFunc(function () {});

// basically you create a function
// pass a parameter
// create a variable that holds a value
// pass that "value" to the callback function
// then print the value you pass as a parameter
*/

// -------------------------------------------------------------------|
//                                                                    |
//                       CALLBACK FUNCTION                            |
//                                                                    |
//                                                                    |
//                          EXAMPLE 1                                 |
//                                                                    |
// ___________________________________________________________________|

/*



function showCallFunc(fn) {
    const value = 10;
    fn(value);
}
showCallFunc(function (value) {
    // this is a callback function, because we're passing it as an argument
    console.log(value);
});



*/

// -------------------------------------------------------------------|
//                                                                    |
//                       CALLBACK FUNCTION                            |
//                                                                    |
//                                                                    |
//                          EXAMPLE 2                                 |
//                                                                    |
//                        TWO PARAMETERS                              |
//                                                                    |
// ___________________________________________________________________|

/*



function greet(name, cb) {
    // 2 parameters
    console.log(`Hello ${name}`); // passing the name here
    cb();
}
// this part could be cut and it could replace cb below
function cb() {
    console.log(`I am a callback function`);
}
greet("Jobu", cb); // passing the value



*/

// -------------------------------------------------------------------|
//                                                                    |
//                       CALLBACK FUNCTION                            |
//                                                                    |
//                                                                    |
//                          EXAMPLE 3                                 |
//                                                                    |
//                       Combining aspects                            |
//                                                                    |
//     cut 2nd part above and replacing cb in 3rd part...             |
//     so, different way of writing with same results                 |
//                                                                    |
// ___________________________________________________________________|

/*



function greet(name, cb) {
    // 2 parameters
    console.log(`Hello ${name}`); // passing the name here
    cb();
}

greet("Jobu", function cb() {
    console.log(`I am a callback function`);
}); // passing the value



*/

/*


// he says we'll be using callback functions quite often
// so I imagine I'll get used to this

// https://www.youtube.com/watch?v=kz_vwAF4NHI
// might use his vids someday, because he uses arrows, but
// I can't follow him

// but Ania Kubow - https://www.youtube.com/watch?v=cNjIUSDnb9k&t=222s
// she used arrows, just try typing => when you follow his vid

// video short --> https://www.youtube.com/shorts/tlUoKHCnUtQ
// he says a function is just another variable
// you can call function with (), can't do that with var's


function test() {
    // do something
}

const test2 = test;
console.log(test2 === test);
console.log(test);
console.dir(test);
document.addEventListener("click", test);
console.log("click", test);



*/

/*


// challenge begins around 3:52:15
// https://youtu.be/H3XIJYEPdus?feature=shared&t=13935

// **************************************************************************|
//                                                                           |
//                                CHALLENGE                                  |
//                                CHALLENGE                                  |
//                                CHALLENGE                                  |
//                                CHALLENGE                                  |
//                                CHALLENGE                                  |
//                                                                           |
// 1. Create a function name (showCallFunc)                                  |
// 2. pass "fn" as parameter                                                 |
// 3. inside that function, create variable which holds value of 10          |
// 4. pass that value to the callback function                               |
// 5. Now create callback function & print that value which you pass as      |
//    parameter to the callback func.                                        |
//                                                                           |
// **************************************************************************|
*/

function showCallFunc(fn) {
    const value = 10;
    fn(value);
}
showCallFunc(function (value) {
    console.log(value);
});

//***************************************************************************|
//                                                                           |
//                               SOLUTION                                    |
//                                                                           |
//                          I was exactly right                              |
//                                                                           |
//                                                                           |
//***************************************************************************|

function showCallFunc(fn) {
    const value = 10;
    fn(value);
}
showCallFunc(function (value) {
    // this is a callback function, because we're passing it as an argument
    console.log(value);
});
