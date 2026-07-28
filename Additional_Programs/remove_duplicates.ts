import promptSync from "prompt-sync";

const prompt = promptSync();

let str: string = prompt("Enter a string: ");
let result: string = "";
for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log("Original String: " + str);
console.log("After Removing Duplicates: " + result);