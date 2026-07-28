import promptSync from "prompt-sync";

const prompt = promptSync();
let input = prompt("Enter array elements separated by spaces: ");
let arr: number[] = input.split(" ").map(Number);
let duplicates: number[] = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}
console.log("Duplicate Elements:");
console.log(duplicates);