import promptSync from "prompt-sync";

const prompt = promptSync();
let number: number = Number(prompt("Enter a number: "));
let original = number;
let sum = 0;
let digits = number.toString().length;
while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, digits);
    number = Math.floor(number / 10);
}
if (sum == original) {
    console.log(original + " is an Armstrong Number.");
} else {
    console.log(original + " is NOT an Armstrong Number.");
}