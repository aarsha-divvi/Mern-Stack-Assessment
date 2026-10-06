"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input1 = prompt("Enter first array elements separated by spaces: ");
let input2 = prompt("Enter second array elements separated by spaces: ");
let array1 = input1.split(" ").map(Number);
let array2 = input2.split(" ").map(Number);
let mergedArray = [...array1, ...array2];
console.log("Merged Array:");
console.log(mergedArray);
