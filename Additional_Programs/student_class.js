"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    display() {
        console.log("\nStudent Details");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}
let id = Number(prompt("Enter Student ID: "));
let name = prompt("Enter Student Name: ");
let course = prompt("Enter Course: ");
let student = new Student(id, name, course);
student.display();
