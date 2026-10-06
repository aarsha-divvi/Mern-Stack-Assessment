"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input = prompt("Enter array elements separated by spaces: ");
let arr = input.split(" ").map(Number);
let largest = -Infinity;
let secondLargest = -Infinity;
for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num != largest) {
        secondLargest = num;
    }
}
console.log("Second Largest Number = " + secondLargest);
