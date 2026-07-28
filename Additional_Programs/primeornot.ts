import promptSync from "prompt-sync";

const prompt = promptSync();
let num: number = Number(prompt("Enter a number: "));
let isPrime: boolean = true;

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
    console.log(num + " is a Prime Number.");
} else {
    console.log(num + " is NOT a Prime Number.");
}