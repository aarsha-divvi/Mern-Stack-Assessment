"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee1 extends Person {
    display() {
        console.log("Employee Name:", this.name);
    }
}
let emp = new Employee1("Aditya");
emp.display();
