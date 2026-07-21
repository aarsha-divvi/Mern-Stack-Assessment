class Students{
    readonly rollNo: number;
    name: string;

    constructor(rollNo: number, name: string) {
        this.rollNo = rollNo;
        this.name = name;
    }

    display(): void {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
    }
}

let s11 = new Students(101, "Aarsha");

s11.display();
