//------------------------------------------------------------|
//                                                            |
//                          EVENTS                            |
//                                                            |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=33630        |
//                                                            |
// An event is when a user or browser manipulates a page,     |
// like when the user clicks a button, or                     |
// when the page loads                                        |
//                                                            |
//------------------------------------------------------------|
//                                                            |
//                       EXAMPLE                              |
//                                                            |
//                       BAD WAY                              |
//                                                            |
//------------------------------------------------------------|
/*
const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = alert("Boca"); // bad way
secondBtn.onclick = function () {
    console.log("Triboca");
};
*/
//------------------------------------------------------------|
//                     MOUSE OVER                             |
//------------------------------------------------------------|
/*
mouse over
secondBtn.onmousemove = function () {
    console.log("Triboca");
};
*/
//------------------------------------------------------------|
//                                                            |
//                       EXAMPLE                              |
//                                                            |
//                      GREAT WAY                             |
//                                                            |
// first way has function outside event statement             |
//                                                            |
//------------------------------------------------------------|
/*
const best = document.querySelector(".best");

function greetings() {
    console.log("hey dude");
}
best.addEventListener("click", greetings);
*/
//------------------------------------------------------------|
//                                                            |
// 2nd way has function as a parament                         |
//                                                            |
//------------------------------------------------------------|
/*
const best = document.querySelector(".best");
best.addEventListener("click", function () {
    console.log("hey jude");
});
*/
//------------------------------------------------------------|
//                                                            |
// another way:  arrow function                               |
//                                                            |
// 1. remove the word function                                |
// 2. put arrow after paren                                   |
// 3. remove brackets (not necessary)                         |
//                                                            |
//------------------------------------------------------------|
/*
const best = document.querySelector(".best");
best.addEventListener("click", () => console.log("hey jude"));
*/
//------------------------------------------------------------|
//                                                            |
//                       EXAMPLE                              |
//                                                            |
//                    EVENT OBJECT                            |
//                                                            |
// "event" is a special object, not a parameter               |
//                                                            |
// click on the text (on the webpage, below the buttons),     |
// then you'll see a PointerEvent in the console, which       |
// shows related "stuff"                                      |
//                                                            |
//------------------------------------------------------------|
/*
const para = document.querySelector(".para");
para.addEventListener("click", (event) => console.log(event));
*/

// after adding a form to index.html
// para was changed to input

/*
const input = document.querySelector("input");
input.addEventListener("click", (event) => console.log(event));
*/

// now he changed it to form
// and changed click to submit

/*
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
});
*/

// after editing this, he went back to index.html and added
// an input type of submit
// came back here and added this preventDefault, because
// when clicking submit, the page reloads (flashes)

// after that he added an input queryS

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // changed event to e
    console.log(input.value);
});

// now I can type a word and submit it to console
