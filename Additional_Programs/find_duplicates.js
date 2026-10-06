"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input = prompt("Enter array elements separated by spaces: ");
let arr = input.split(" ").map(Number);
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}
console.log("Duplicate Elements:");
console.log(duplicates);
