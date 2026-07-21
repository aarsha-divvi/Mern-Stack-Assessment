let employeeInfo: any = "Aditya";
console.log("Employee Name:", employeeInfo);

employeeInfo = 5000000;
console.log("Employee Salary:", employeeInfo);

let department: unknown = "HR";

if (typeof department === "string") {
    console.log("Department:", department);
}

function displayStatus(): void {
    console.log("Employee details displayed successfully.");
}

displayStatus();