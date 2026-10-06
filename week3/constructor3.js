"use strict";
class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    area() {
        return this.length * this.breadth;
    }
}
let r1 = new Rectangle(10, 5);
console.log("Area of Rectangle:", r1.area());
