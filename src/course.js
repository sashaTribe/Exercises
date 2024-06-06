"use strict";
class Course {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    describe() {
        console.log(`This course is ${this.title} and this will go on for ${this.duration} weeks`);
    }
}
let javaCourse = new Course("Java", 8);
javaCourse.describe();
