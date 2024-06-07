/*
A function with an optional parameter of height that calculates the area of a rectangle 
Parameters: 
    - width: the width of rectangle (number)
    - height: the height of rectangle (number) (optional)
                - if user does not enter the height then it shall default to 
                  value 10
Returns:
    - the area (width * height) (number)
 */
function calcArea(width:number, height?:number): number {
    return width * (height||10);
}

// testing function by plugging in both width and height
console.log(calcArea(3))
// testing function by plugging in the width only
console.log(calcArea(3,4))


/*
A function that calculates the area of a rectangle 
Parameters: 
    - width: the width of rectangle (number)
    - height: the height of rectangle (number), default value is 10
                - if user does not enter the height then it shall default to 
                  value 10
Returns:
    - the area (width * height) (number)
 */
 
function calcArea2(width: number, height:number = 10): number {
    return width*height;
}

// testing function by plugging in both width and height
console.log(calcArea2(3))
// testing function by plugging in the width only
console.log(calcArea2(3,4))