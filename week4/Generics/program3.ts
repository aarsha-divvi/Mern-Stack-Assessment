interface Length {
    length: number;
}

function printLength<T extends Length>(item: T): void {
    console.log("Length:", item.length);
}

printLength("TypeScript");
printLength([1, 2, 3, 4]);