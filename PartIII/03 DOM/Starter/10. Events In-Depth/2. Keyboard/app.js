//-------------------------------------------------------------|
//                                                             |
//                    KEYBOARD EVENTS                          |
//                                                             |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=35130         |
//                                                             |
// https://www.w3schools.com/jsref/obj_keyboardevent.asp       |
//                                                             |
//                                                             |
//-------------------------------------------------------------|
const input = document.querySelector("input");

/*

// type something in the form field
input.addEventListener("keypress", () => {
    console.log("Key pressed");
});
// release and that's "key up"
input.addEventListener("keyup", () => {
    console.log("Keyup");
});

// pretty much the same as keypress
input.addEventListener("keydown", () => {
    console.log("Key down");
});

*/

//-------------------------------------------------------------|
//                                                             |
//            USEFUL PROPERTIES AND METHODS                    |
//                                                             |
//-------------------------------------------------------------|
// get character code                                          |
//-------------------------------------------------------------|
input.addEventListener("keypress", (e) => {
    // console.log(e.charCode);
    // console.log(e.code);
    // console.log(e.ctrlKey); // hold ctrl = true
    // console.log(e.key);
    // console.log(e.shiftKey);
});
