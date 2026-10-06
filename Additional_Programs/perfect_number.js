"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num = Number(prompt("Enter a number: "));
let sum = 0;
for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
        sum += i;
    }
}
if (sum == num) {
    console.log(num + " is a Perfect Number.");
}
else {
    console.log(num + " is NOT a Perfect Number.");
}
