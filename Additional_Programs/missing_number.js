"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input = prompt("Enter numbers separated by spaces (one number missing): ");
let arr = input.split(" ").map(Number);
let n = arr.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let num of arr) {
    actualSum += num;
}
let missingNumber = expectedSum - actualSum;
console.log("Missing Number = " + missingNumber);
