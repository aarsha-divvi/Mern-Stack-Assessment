"use strict";
let bookTitle = "The Alchemist";
let totalPages = 208;
let isAvailable = true;
function getBookInfo(title, pages) {
    return `${title} contains ${pages} pages.`;
}
let authors = ["Paulo Coelho", "Translator"];
let bookInfo = getBookInfo(bookTitle, totalPages);
console.log("Book:", bookTitle);
console.log("Pages:", totalPages);
console.log("Available:", isAvailable);
console.log(bookInfo);
console.log("Authors:", authors);
