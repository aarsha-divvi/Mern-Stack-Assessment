import promptSync from "prompt-sync";

const prompt = promptSync();
let input = prompt("Enter array elements separated by spaces: ");
let arr: number[] = input.split(" ").map(Number);
let n = Number(prompt("Enter number of positions to rotate: "));
n = n % arr.length;
let rotatedArray = [...arr.slice(n), ...arr.slice(0, n)];
console.log("Rotated Array:");
console.log(rotatedArray);