import promptSync from "prompt-sync";

const prompt = promptSync();
let input = prompt("Enter array elements separated by spaces: ");
let arr: number[] = input.split(" ").map(Number);
let largest = -Infinity;
let secondLargest = -Infinity;
for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num != largest) {
        secondLargest = num;
    }
}
console.log("Second Largest Number = " + secondLargest);