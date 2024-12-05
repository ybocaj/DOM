/*

// This begins at 3:53:58 
// https://youtu.be/H3XIJYEPdus?feature=shared&t=14038

//--------------------------------------------------------------------|
// Scope in JavaScript refers to the current context of code,         |
   // which determines the accessibility of variables to JavaScript.  |
//                                                                    |
// There are two types of scopes:                                     |
   // Global Scope variables are those declared outside of a block.   |
   // Local Scope variables are those declared inside of a block.     |
//                                                                    |
//____________________________________________________________________|


*/

// Global Scope
// Local Scope

let textMessage = "hi"; // Global Scope (outside a block {})

function showMessage() {
    let textMessage = "hi"; // Local Scope
    console.log(textMessage); // Access Local Scope
}

for (let i = 0; i < 5; i++) {
    console.log(i); // Local Scope
}

// console.log(i); // Global Scope (doesn't work b/c i is in block)
console.log(textMessage); // Access Global Scope

// so a global variable can be called within a function, thus
// let textmessage = "hi" and then console.log(textmessage) in the function
