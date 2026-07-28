import promptSync from "prompt-sync";

const prompt = promptSync();
let binary: string = prompt("Enter a binary number: ");
let decimal = parseInt(binary, 2);
console.log("Decimal = " + decimal);