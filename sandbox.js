var character = 'mario';
var isActive = false;
var luckyNumber = 7;
// character = 20; -> cannot be assigned to number
character = 'luigi';
// isActive = 'princess peach'; -> cannot be assigned to string
isActive = true;
// luckyNumber = true; -> cannot be assigned to boolean
luckyNumber = 9;
var circleArea = function (diameter) {
    return diameter * Math.PI;
};
console.log('Area of 🔵: ', circleArea(5));
