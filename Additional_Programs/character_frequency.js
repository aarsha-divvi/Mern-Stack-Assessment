"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let str = prompt("Enter a string: ");
let frequency = {};
for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    }
    else {
        frequency[ch] = 1;
    }
}
console.log("Character Frequencies:");
for (let key in frequency) {
    console.log(key + " : " + frequency[key]);
}
