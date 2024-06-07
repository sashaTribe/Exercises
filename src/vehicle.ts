abstract class Vehicle {
    /**
     * Abstract class Vehicle
     * attributes:
     *  - name: the name of vehicle (string)
     * 
     *
     */
    name: string;

    /**
     * Initialises object
     * @param name 
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * prints a string saying what vehicle this object is
     */
    describe(): void{
        console.log(`This is a ${this.name}`)
    }
    /**
     * Method stated for derived classes to implement themselves as different 
     * vehicles have different ways of driving
     */
    abstract drive(): void;
}

class Car extends Vehicle {
    /**
     * This is a subclass from vehicle and has its own way of implementing methods 
     * stated in the Vehicle class
     */
    /**
     * Initialises object with the name of the class
     */
    constructor() {
        super("Car")
    }

    /**
     * Method to give instructions on how to drive the car
     */
    drive(): void{
        console.log("Step on pedal and move steering  wheel.")
    }
}

// states that object is in the vehicle category
let vehicle : Vehicle;

// object is specifically a car
vehicle = new Car();

//  calls to describe object and to give instruction on how to drive
vehicle.describe();
vehicle.drive();
