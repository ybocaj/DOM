//-------------------------------------------------------|
//                                                       |
//               ALL ABOUT ATTRIBUTES                    |
//                                                       |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=31007   |
//                                                       |
//                                                       |
//-------------------------------------------------------|
/*



// href
const a = document.querySelector("a");
console.log(a);
const input = document.querySelector("input");
console.log(input);

// value
// nothing outputs for input.value, because there's nothing
// but I edited the HTML to: <input type="text" value="boca">
console.log(input.value);

// type
const inputtype = document.querySelector("input");
console.log(input.type);

// use . to get attribute from anchor
const b = document.querySelector("a");
console.log(b.href);


a.href = "https//bracketbusters.org";
console.log((a.href = "https://bracketbusters.org"));
// this changes in the facebook form space
console.log((input.value = "triboca"));
// this also affects the facebook form space and there's dots
console.log((input.type = "password"));
// If you comment out the types and values above,
// you can set a placeholder like so...


// need to remove boca from HTML I guess
console.log((input.placeholder = "You can provide instructions"));



*/
// getAttribute(attrName)
// Allows us to get attributes from specific types of elements
const input = document.querySelector("input");
console.log(input.getAttribute("type"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "Pa55word");
input.setAttribute("type", "password");
