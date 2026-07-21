class Student {
    name: string;
    age: number;

    constructor() {
        this.name = "Aarsha";
        this.age = 19;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s1 = new Student();
s1.display();