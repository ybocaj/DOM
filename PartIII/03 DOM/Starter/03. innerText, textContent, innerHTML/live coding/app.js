//--------------------------------------------------------------------|
//                                                                    |
//                       ALL ABOUT TEXT                               |
//                                                                    |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=29908                |
//                                                                    |
//--------------------------------------------------------------------|
// innerText
const p = document.querySelector("p");
// console.log(p.innerText);

// textContent - doesn't give elements (like strong)
// console.log(p.textContent);

// innerHTML - includes tags/elements
console.log(p.innerHTML); 

// we can change the text if we want to
// but this is not changing the original text
// so I'm not sure the point
const h1 = document.querySelector("h1");
h1.innerText = "Text Changed";
h1.innerHTML = "<em>123</em>";
h1.innerHTML = "<del>Text Changed</del>";
