//--------------------------------------------------------------|
//                                                              |
// Creating elements & appending it to the DOM                  |
//                                                              |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=32728          |
//                                                              |
//--------------------------------------------------------------|
// createElement()                                              |
//                                                              |
// In simplest terms...                                         |
//                                                              |
// document.createElement("a"); // creates anchor tag           |
//                                                              |
//--------------------------------------------------------------|
/*
const h1 = document.createElement("h1"); // create element
console.log(h1);
h1.textContent = "Hello World"; // add text to the element
console.log(h1.textContent);
h1.classList.add("greetings"); // add class
console.log(h1.classList);
*/

//--------------------------------------------------------------|
//                                                              |
// ... the above element is created, but not in-use, so         |
// to push it to the body, we'll use the appendChild method     |
//                                                              |
// appendChild() -- appends at end of list                      |
//                                                              |
// body.appendChild(h1)                                         |
//                                                              |
//--------------------------------------------------------------|
/*
const h1 = document.createElement("h1"); // create element
h1.textContent = "Hello World"; // add text to the element
console.log(h1.textContent); // added at bottom
h1.classList.add("greetings"); // added class in h1 element
console.log(h1.classList);
const body = document.body;
body.appendChild(h1); // this is how we append the element
console.log(body); // adds hello world to bottom
*/
//--------------------------------------------------------------|
// insertBefore(what, where)                                    |
//                                                              |
// format...                                                    |
//                                                              |
// selector.insertBefore(what, where)                           |
//                                                              |
//--------------------------------------------------------------|
/*
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I'm a new Li tag";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);
*/

/*
//--------------------------------------------------------------|
// insertAdjacentElement()                                      |
//                                                              |
// need to select a paragraph                                   |
//                                                              |
// format...                                                    |
//                                                              |
// firstP.insertAdjacentElement(where, what)                    |
//                                                              |
// insertAdjacentElement(                                       |
//     'beforebegin'                                            |
//     'afterend'                                               |
//     'beforeend'                                              |
//     'afterend',                                              |
//     element                                                  |
// )                                                            |
//--------------------------------------------------------------|
// These 4 steps create whatever we're creating
const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I'm italics";
i.style.color = "skyblue";
// this inserts it
firstP.insertAdjacentElement("beforebegin", i);
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);
firstP.insertAdjacentElement("afterend", i);
*/

/*
//--------------------------------------------------------------|
// append()                                                     |
//                                                              |
// format...                                                    |
//                                                              |
// section.append(something, something);                        |
//                                                              |
//--------------------------------------------------------------|
let section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = " I'm italics ";
i.style.color = "skyblue";

const span = document.createElement("span");
span.innerText = " Boca ";
span.style.color = "darkorange";

section.append(i, span); // append multiple things at once

//--------------------------------------------------------------|
// prepend()                                                    |
//                                                              |
// format...                                                    |
//                                                              |
// section.prepend(i, span);                                    |
//                                                              |
//                                                              |
//--------------------------------------------------------------|
section.prepend(i, span); // pushes to the beginning
*/

//--------------------------------------------------------------|
// removeChild()                                                |
//                                                              |
// format...                                                    |
//                                                              |
// newList.removeChild(fourth);                                 |
//                                                              |
//                                                              |
//--------------------------------------------------------------|
const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);
//--------------------------------------------------------------|
// remove()                                                     |
//                                                              |
// format...                                                    |
//                                                              |
// newList.remove();                                            |
//                                                              |
//                                                              |
//--------------------------------------------------------------|
newList.remove();
// boom
