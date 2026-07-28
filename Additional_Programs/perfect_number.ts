import promptSync from "prompt-sync";

const prompt = promptSync();

let num: number = Number(prompt("Enter a number: "));
let sum = 0;

for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
        sum += i;
    }
}

if (sum == num) {
    console.log(num + " is a Perfect Number.");
} else {
    console.log(num + " is NOT a Perfect Number.");
}