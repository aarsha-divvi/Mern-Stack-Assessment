import promptSync from "prompt-sync";

const prompt = promptSync();

class Student {
    constructor(
        public id: number,
        public name: string,
        public course: string
    ) {}

    display(): void {
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