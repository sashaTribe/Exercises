"use strict";
class Shape {
    /**
     * Initialises Shape object
     * @param name
     * @param color
     */
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    /**
     * Describes the name of the shape and what color it is
     */
    describe() {
        console.log(`This shape is a ${this.name} and its color is ${this.color}`);
    }
}
class Rectangle extends Shape {
    /**
     * Initialises Rectangle Object
     * @param color
     * @param width
     * @param height
     */
    constructor(color, width, height) {
        super("Rectangle", color);
        this.width = width;
        this.height = height;
    }
    /**
     * Calculates area of rectangle with the object's height and width
     * @returns result of calculation
     */
    area() {
        return this.height * this.width;
    }
}
// create rectangle object
let rectangle = new Rectangle("purple", 23, 43);
rectangle.describe();
console.log(rectangle.area());
