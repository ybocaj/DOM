//-----------------------------------------------------------------|
//                                                                 |
//                  Accessing the DOM                              |
//                                                                 |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=28439             |
//                                                                 |
//                                                                 |
// previously working with CSS, you know you have to select        |
// something, and then you can play around with it, like...        |
//                                                                 |
// .selector {
//     property: value;
// }
//                                                                 |
// can also do things like...                                      |
//                                                                 |
// h1 {}                                                           |
// #nameID {}                                                      |
// .className {}                                                   |
//                                                                 |
//                                                                 |
// Well, the same applies in JS as well...                         |
//                                                                 |
//                                                                 |
// ************ DOM SELECTORS ************                         |
// 1. getElementsByTagName                                         |
   // like an HTML tag name                                        |
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById  // it's a method that lets us select by id   |                                         |
   // to access this...
console.log(document.getElementById("main")); // or try id-1
console.log(document.getElementById("id-1")); 

// 3. getElementsByClassName                                       |
console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls-1"));


// 4. querySelector                                                |
console.log(document.querySelector("h1"));
// will only select the first one, not all...
console.log(document.querySelector("li"));
// to select something by class, use a period
console.log(document.querySelector(".cls"));
// for ID use #
console.log(document.querySelector("#id-1"));
// if you have a whole bunch, console will return 1


// 5. querySelectorAll                                             |
   // this will show all
   // and it works like a css selector
   // can put tagname or whatever in quotes
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length);
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("#id-1"));
// put tagname like h1, span, section
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll("span"));
console.log(document.querySelectorAll("section"));



//-----------------------------------------------------------------|
// Storing data in variables                                       |
//-----------------------------------------------------------------|
const sometag = document.querySelector("h1")
console.log(sometag)
// to store 1 li...
const eleye = document.querySelector("li")
console.log(eleye)
// to store all li, try...
const eleyes = document.querySelectorAll("li")
console.log(eleyes)
