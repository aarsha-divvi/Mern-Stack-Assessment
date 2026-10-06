"use strict";
class Employee {
    constructor(id, name, sal) {
        this.empId = id;
        this.empName = name;
        this.salary = sal;
    }
    display() {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
        console.log("Salary:", this.salary);
    }
}
let emp1 = new Employee(101, "Aditya", 5000000);
emp1.display();
