"use strict";
function calcArea(width, height) {
    return width * (height || 10);
}
console.log(calcArea(3));
console.log(calcArea(3, 4));
function calcArea2(width, height = 10) {
    return width * height;
}
console.log(calcArea2(3));
console.log(calcArea2(3, 4));
