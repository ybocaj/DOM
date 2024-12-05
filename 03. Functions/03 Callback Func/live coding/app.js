// ------------------------------- DEFINITION ---------------------------|
// When we provide function as an (argument) to other function/argument  |
// that function is known as callback function.                          |
//_______________________________________________________________________|

/*

//----------------------------------------------------------------|
//                                                                |
// callback(function() {...})                                     |
//-------------------------------- This is actually the solution  |
//                                                                |   
//________________________________________________________________|

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}
showCallFunc(function (value) {
  console.log(value);
});


*/

/*


//------------------------------- function with 2 parameters
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument (callback)
greet("Peter", callMe);
//___________________________________________________________


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

// BTW, you can change 10 to "something else" (literally), or anything
// and that'll populate as the value

function showCallFunc(fn) {
    const value = "something else";
    fn(value);
}
showCallFunc(function (value) {
    console.log(value);
});
