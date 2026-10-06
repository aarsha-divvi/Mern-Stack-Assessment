"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num = Number(prompt("Enter a number: "));
let original = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }
    sum += factorial;
    num = Math.floor(num / 10);
}
if (sum == original) {
    console.log(original + " is a Strong Number.");
}
else {
    console.log(original + " is NOT a Strong Number.");
}
