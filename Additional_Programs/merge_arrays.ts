import promptSync from "prompt-sync";

const prompt = promptSync();
let input1 = prompt("Enter first array elements separated by spaces: ");
let input2 = prompt("Enter second array elements separated by spaces: ");
let array1: number[] = input1.split(" ").map(Number);
let array2: number[] = input2.split(" ").map(Number);
let mergedArray = [...array1, ...array2];
console.log("Merged Array:");
console.log(mergedArray);