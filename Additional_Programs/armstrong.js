"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let number = Number(prompt("Enter a number: "));
let original = number;
let sum = 0;
let digits = number.toString().length;
while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, digits);
    number = Math.floor(number / 10);
}
if (sum == original) {
    console.log(original + " is an Armstrong Number.");
}
else {
    console.log(original + " is NOT an Armstrong Number.");
}
