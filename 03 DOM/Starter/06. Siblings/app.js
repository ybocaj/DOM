//-----------------------------------------------------|
//                                                     |
//                     SIBLINGS                        |
//                                                     |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=31692 |
//                                                     |
//-----------------------------------------------------|
//                                                     |
// in index.html, there is a class for 4 (fourth)      |
// to get the first li...                              |
//                                                     |
//-----------------------------------------------------|
/*



let firstLi = document.querySelector("li");
// remember there's no dupes, so we'll only get the    |
// first li                                            |
console.log(firstLi); // li
//                                                     |
//-----------------------------------------------------|
//                                                     |
//                     PARENTS                         |
//                                                     |
// to get the parent...                                |
// parent of li is ul, parent of ul is body            |
//                                                     |
console.log(firstLi.parentElement); // ul
let parentL = firstLi.parentElement;
console.log(parentL.parentElement); // body
let parentUl = parentL.parentElement;
console.log(parentUl.parentElement); // html
let parentBody = parentUl.parentElement;
console.log(parentBody.parentElement); // null
//                                                     |
//                                                     |
// alternate method that shows full tags...            |
//                                                     |
//                                                     |
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement.parentElement);



*/
/*
//-----------------------------------------------------|
//                                                     |
//                     CHILDREN                        |
//                                                     |
// let fourth = document.querySelector(".fourth");
// console.log(fourth);
// let htmlTop = document.querySelector("html");
// console.log(htmlTop.children);
let ul = document.querySelector("ul");
console.log(ul.children);
// console.log(ul.children[(0, 1, 2, 3)]);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[3]);

//-----------------------------------------------------|
//                                                     |
//           innerText textContent innerHTML           |
//                                                     |
// You can get innerText and such from siblings        |
//                                                     |
console.log(ul.children[0].innerText);
// you can change it
console.log((ul.children[0].innerText = "one"));
console.log(ul.children[0].textContent);
console.log(ul.children[0].innerHTML);


*/
//-----------------------------------------------------|
//                                                     |
//                     SIBLINGS                        |
//                                                     |
/*
let firstLi = document.querySelector("li");
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(
    firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent
);
console.log(
    firstLi.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling
);
*/

// previous elements sibling
let fourthLi = document.querySelector(".fourth");
// console.log(fourthLi);
// console.log(fourthLi.textContent);
console.log(fourthLi.previousElementSibling);
