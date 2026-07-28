import promptSync from "prompt-sync";

const prompt = promptSync();
let num: number = Number(prompt("Enter a number: "));
let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of digits = " + sum);