import promptSync from "prompt-sync";

const prompt = promptSync();
let str: string = prompt("Enter a string: ");
let frequency: { [key: string]: number } = {};
for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}
console.log("Character Frequencies:");
for (let key in frequency) {
    console.log(key + " : " + frequency[key]);
}