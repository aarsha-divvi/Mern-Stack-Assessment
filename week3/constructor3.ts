class Rectangle {
    length: number;
    breadth: number;

    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    area(): number {
        return this.length * this.breadth;
    }
}

let r1 = new Rectangle(10, 5);

console.log("Area of Rectangle:", r1.area());