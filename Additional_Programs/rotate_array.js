"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input = prompt("Enter array elements separated by spaces: ");
let arr = input.split(" ").map(Number);
let n = Number(prompt("Enter number of positions to rotate: "));
n = n % arr.length;
let rotatedArray = [...arr.slice(n), ...arr.slice(0, n)];
console.log("Rotated Array:");
console.log(rotatedArray);
