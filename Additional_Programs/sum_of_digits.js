"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num = Number(prompt("Enter a number: "));
let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of digits = " + sum);
