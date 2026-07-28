import promptSync from "prompt-sync";

const prompt = promptSync();

let start: number = Number(prompt("Enter the starting number: "));
let end: number = Number(prompt("Enter the ending number: "));

console.log("Prime numbers between " + start + " and " + end + " are:");

for (let num = start; num <= end; num++) {
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num);
    }
}