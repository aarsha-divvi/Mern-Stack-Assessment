"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let start = Number(prompt("Enter the starting number: "));
let end = Number(prompt("Enter the ending number: "));
console.log("Prime numbers between " + start + " and " + end + " are:");
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
