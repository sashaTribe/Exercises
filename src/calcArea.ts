function calcArea(width:number, height?:number): number {
    return width * (height||10);
}

console.log(calcArea(3))
console.log(calcArea(3,4))

function calcArea2(width: number, height:number = 10): number {
    return width*height;
}

console.log(calcArea2(3))
console.log(calcArea2(3,4))