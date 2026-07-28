"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let b1 = new Box(100);
let b2 = new Box("Hello");
b1.display();
b2.display();
