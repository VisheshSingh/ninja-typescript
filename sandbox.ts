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

// Arrays
const names = ['mario', 'luigi', 'peach'];
names.push('bowser');
// names.push(30); -> cannot add a number type

const mixed = ['mario', 9, 'luigi', 7];
mixed.push(10);
mixed.push('peach');
// mixed.push(false); -> cannot add boolean type

// Objects
let ninja = {
  name: 'shaun',
  belt: 'brown',
  age: 15,
};

// ninja.skills = ['chop', 'throw sharp objs']; cannot add extra properties
ninja.belt = 'black'; // can update the property with the same type

// Can update the entire obj but properties have to be the same type
ninja = {
  name: 'v-boy',
  belt: 'white',
  age: 12,
  // skills: ['scare with hiyaa'] -> cannot add new properties
};
