class College {
    readonly collegeCode: number;
    static collegeName: string = "SVECW";

    constructor(code: number) {
        this.collegeCode = code;
    }

    display(): void {
        console.log("College Code:", this.collegeCode);
        console.log("College Name:", College.collegeName);
    }
}

let c1 = new College(1001);
let c2 = new College(1002);

c1.display();
c2.display();