"use strict";
class Vehicle {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log(`This is a ${this.name}`);
    }
}
class Car extends Vehicle {
    constructor() {
        super("Car");
    }
    drive() {
        console.log("Step on pedal and move steering  wheel.");
    }
}
let vehicle;
vehicle = new Car();
vehicle.describe();
vehicle.drive();
