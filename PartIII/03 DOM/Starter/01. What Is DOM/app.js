//---------------------------------------------------------------|
//                                                               |
//                     DOM                                       |
//                                                               |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=27975           |
//                                                               |
//                                                               |
// DOM = Document Object Model                                   |
//                                                               |
// When a web page is loaded, the browser creates a              |
// Document Object Model of the page.                            |
//                                                               |
//                                                               |
//                                                               |
//                   EXAMPLE                                     |
//                                                               |
//                                                               |
// Say you have a page with <body><h1><ul> etc                   |
// Then you open that in a browser                               |
// The browser converts it to a document object model.           |
// ... it'll create an object for everything created.            |
//                                                               |
// at this point he wants me to d/l folder content from github.  |
//                                                               |
//                                                               |
//                                                               |
// This shows the document elements...                           |
//---------------------------------------------------------------|
console.log(document);
console.dir(document);
// the document is an object, so we can access the properties
// in its method
console.log(document.head);
console.log(document.head.title);
console.log(document.title); // DOM
console.log(document.documentURI);
