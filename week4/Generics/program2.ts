function swap<T>(first: T, second: T): void {
    console.log("First:", first);
    console.log("Second:", second);
}

swap<number>(10, 20);
swap<string>("Apple", "Mango");