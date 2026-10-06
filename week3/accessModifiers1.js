"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let s1 = new Student1("Aditya", 15);
console.log("Student Name:", s1.name);
console.log("Student Age:", s1.age);
s1.display();
let s2 = new Student1("Aarsha", 19);
console.log("Student Name:", s2.name);
console.log("Student Age:", s2.age);
s2.display();
