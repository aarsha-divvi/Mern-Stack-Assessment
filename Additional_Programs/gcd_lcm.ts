import promptSync from "prompt-sync";

const prompt = promptSync();
let a: number = Number(prompt("Enter first number: "));
let b: number = Number(prompt("Enter second number: "));

let x = a;
let y = b;
while (y != 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
let gcd = x;
let lcm = (a * b) / gcd;
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);