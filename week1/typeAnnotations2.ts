let bookTitle: string = "The Alchemist";
let totalPages: number = 208;
let isAvailable: boolean = true;

function getBookInfo(title: string, pages: number): string {
    return `${title} contains ${pages} pages.`;
}

let authors: string[] = ["Paulo Coelho", "Translator"];

let bookInfo: string = getBookInfo(bookTitle, totalPages);

console.log("Book:", bookTitle);
console.log("Pages:", totalPages);
console.log("Available:", isAvailable);
console.log(bookInfo);
console.log("Authors:", authors);