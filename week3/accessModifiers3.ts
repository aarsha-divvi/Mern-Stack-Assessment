export {};

class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee1 extends Person {
    display(): void {
        console.log("Employee Name:", this.name);
    }
}

let emp = new Employee1("Aditya");
emp.display();