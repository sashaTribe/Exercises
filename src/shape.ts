class Shape {
    name: string;
    color:string;

    constructor(name:string, color:string) {
        this.name = name;
        this.color = color;
    }

    describe(){
        console.log(`This shape is a ${this.name} and its color is ${this.color}`)
    }

}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name:string, color:string, width:number, height:number){
        super(name,color);
        this.width = width;
        this.height = height;
    }

    area(): number{
        return this.height * this.width;
    }


}

let rectangle = new Rectangle("rectangle", "purple", 23, 43);
rectangle.describe();
console.log(rectangle.area());