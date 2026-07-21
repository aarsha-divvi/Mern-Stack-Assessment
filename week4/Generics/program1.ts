function display<T>(value: T): void {
    console.log(value);
}

display<string>("Hello");
display<number>(100);
display<boolean>(true);