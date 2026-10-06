"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input = prompt("Enter array elements separated by spaces: ");
let arr = input.split(" ").map(Number);
let count = {};
for (let num of arr) {
    if (count[num]) {
        count[num]++;
    }
    else {
        count[num] = 1;
    }
}
console.log("Occurrences of each element:");
for (let key in count) {
    console.log(key + " : " + count[key]);
}
