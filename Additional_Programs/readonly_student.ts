import promptSync from "prompt-sync";
const prompt = promptSync();
class Student {
    constructor(
        readonly id: number,
        public name: string
    ) {}
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
let id = Number(prompt("Enter Student ID: "));
let name = prompt("Enter Student Name: ");
let s = new Student(id, name);
s.display();