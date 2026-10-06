"use strict";
class College {
    constructor(code) {
        this.collegeCode = code;
    }
    display() {
        console.log("College Code:", this.collegeCode);
        console.log("College Name:", College.collegeName);
    }
}
College.collegeName = "SVECW";
let c1 = new College(1001);
let c2 = new College(1002);
c1.display();
c2.display();
