import promptSync from "prompt-sync";

const prompt = promptSync();
let input = prompt("Enter array elements separated by spaces: ");
let arr: number[] = input.split(" ").map(Number);
let count: { [key: number]: number } = {};
for (let num of arr) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}
console.log("Occurrences of each element:");
for (let key in count) {
    console.log(key + " : " + count[key]);
}