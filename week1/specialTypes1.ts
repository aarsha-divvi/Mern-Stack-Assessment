let bookInfo: any = "Java Programming";
console.log("Book Name:", bookInfo);

bookInfo = 350;
console.log("Book Price:", bookInfo);

let edition: unknown = 5;

if (typeof edition === "number") {
    console.log("Edition:", edition);
}

function libraryStatus(): void {
    console.log("Library details displayed successfully.");
}

libraryStatus();