import promptSync from "prompt-sync";

const prompt = promptSync();
let decimal: number = Number(prompt("Enter a decimal number: "));
let binary = decimal.toString(2);
console.log("Binary = " + binary);