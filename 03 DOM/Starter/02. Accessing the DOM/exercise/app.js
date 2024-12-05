/*
// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
   // these are the same...


console.log(document.getElementsByTagName("h4"));
const color = document.getElementsByTagName("h4");
console.log(color);

// solution
const h4 = document.getElementsByTagName("h4");
console.log(h4);


*/


/*
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName 
   // he said to use TagName, but the solution uses ClassName
console.log(document.getElementsByClassName("green"));
// Using TagName returns an empty array

// solution
const green = document.getElementsByClassName("green");
console.log(green);


*/


/*
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
console.log(document.getElementById("blue"));

// solution
const blue = document.getElementsByClassName("blue");
console.log(blue);
// again this is wrong, because he should be using elementById, not Class
   // He saw his mistake and fixed it


*/


/*
// 4. Select div which has the class & Id of "yellow" by using querySelector()
console.log(document.querySelector(".yellow"));

// solution
const yellow = document.querySelector(".yellow");
console.log(yellow);
const yellow2 = document.querySelector("#yellow");
console.log(yellow2);


*/


// 5. Select all the elements which has the class of "teal" by using querySelectorAll
console.log(document.querySelectorAll(".teal"));

// solution
const allTeals = document.querySelectorAll(".teal");
console.log(allTeals);