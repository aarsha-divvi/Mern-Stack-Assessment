class Employee {
    empId: number;
    empName: string;
    salary: number;

    constructor(id: number, name: string, sal: number) {
        this.empId = id;
        this.empName = name;
        this.salary = sal;
    }

    display(): void {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
        console.log("Salary:", this.salary);
    }
}

let emp1 = new Employee(101, "Aditya", 5000000);
emp1.display();