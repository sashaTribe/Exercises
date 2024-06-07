"use strict";
class Course {
    /**
     * This constructor initialises object with given values
     * @param title
     * @param duration
     */
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    /**
     * This function prints out a description of the course with the name and duration
     */
    describe() {
        console.log(`This course is ${this.title} and this will go on for ${this.duration} weeks`);
    }
}
// Create Course object called javaCourse
let javaCourse = new Course("Java", 8);
// prints "This course is Java and this will go on for 8 weeks"
javaCourse.describe();
