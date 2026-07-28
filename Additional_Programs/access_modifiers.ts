class Employee {
    public name = "Rahul";
    private salary = 50000;
    protected dept = "IT";

    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.dept);
    }
}

class Manager extends Employee {
    show() {
        console.log(this.dept);
    }
}

let e = new Employee();
e.display();

let m = new Manager();
m.show();