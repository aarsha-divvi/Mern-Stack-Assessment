"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let x = a;
let y = b;
while (y != 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
let gcd = x;
let lcm = (a * b) / gcd;
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);
