// 1. Select the anchor tag
const a = document.querySelector("a");

// 2. Use getAttribute(attrName) to check the attribute.

console.log(a.getAttribute("href"));

// 3. Select a-two & set "href" attribute
// example from live coding:
// input.setAttribute("placeholder", "Pa55word");
// my try
a.setAttribute("a-two", "href");
// <a class="a-two">Udemy</a>
// solution
// setAttribute(attrName, value)
const a2 = document.querySelector(".a-two");
a2.setAttribute("href", "https://bracketbusters.org");
console.log(a2);
