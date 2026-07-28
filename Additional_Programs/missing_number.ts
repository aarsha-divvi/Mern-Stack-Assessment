import promptSync from "prompt-sync";

const prompt = promptSync();
let input = prompt("Enter numbers separated by spaces (one number missing): ");
let arr: number[] = input.split(" ").map(Number);
let n = arr.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let num of arr) {
    actualSum += num;
}
let missingNumber = expectedSum - actualSum;
console.log("Missing Number = " + missingNumber);