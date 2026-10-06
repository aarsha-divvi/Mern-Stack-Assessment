"use strict";
class Employees {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Employee Name:", this.name);
        console.log("Company:", Employees.companys);
    }
}
Employees.companys = "Infosys";
let emp11 = new Employees("Aditya");
let emp22 = new Employees("Aarsha");
emp11.display();
emp22.display();
