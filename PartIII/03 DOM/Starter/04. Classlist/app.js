// classlist -- this property allows us to 
   // check all the classes a specific element has
const h1 = document.querySelector("h1");
console.log(h1.classList);

// add() -- a method to add classes to specific elements
h1.classList.add("styles");
console.log(h1.classList);

// remove() -- see elements in devTools ("styles" gets removed) from h1 hello world
h1.classList.remove("styles");
console.log(h1.classList);

// toggle() -- this adds or removes, depending on what's currently in place
h1.classList.toggle("banana");
console.log(h1.classList);
