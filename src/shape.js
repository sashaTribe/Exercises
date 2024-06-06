"use strict";
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    describe() {
        console.log(`This shape is a ${this.name} and its color is ${this.color}`);
    }
}
class Rectangle extends Shape {
    constructor(name, color, width, height) {
        super(name, color);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
}
let rectangle = new Rectangle("rectangle", "purple", 23, 43);
rectangle.describe();
console.log(rectangle.area());
