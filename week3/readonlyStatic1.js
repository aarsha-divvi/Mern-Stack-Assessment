"use strict";
class Students {
    constructor(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
    }
}
let s11 = new Students(101, "Aarsha");
s11.display();
