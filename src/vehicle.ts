abstract class Vehicle {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe(): void{
        console.log(`This is a ${this.name}`)
    }
    abstract drive(): void;
}

class Car extends Vehicle {
    constructor() {
        super("Car")
    }

    drive(): void{
        console.log("Step on pedal and move steering  wheel.")
    }
}

let vehicle : Vehicle;

vehicle = new Car();
vehicle.describe();
vehicle.drive();
