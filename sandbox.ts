let character = 'mario';
let isActive = false;
let luckyNumber = 7;

// character = 20; -> cannot be assigned to number
character = 'luigi';

// isActive = 'princess peach'; -> cannot be assigned to string
isActive = true;

// luckyNumber = true; -> cannot be assigned to boolean
luckyNumber = 9;

const circleArea = (diameter: number) => {
  return diameter * Math.PI;
};

console.log('Area of 🔵: ', circleArea(5));
