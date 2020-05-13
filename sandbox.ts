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

// explicit types
let char: string;
let num: number;
let isLoggedIn: boolean;

char = 'mario'; // allowed
// char = 30; // not allowed

num = 20; // allowed
// num = true; // not allowed

isLoggedIn = true; // allowed
// isLoggedIn = 'hey!' // not allowed

// For arrays
let luckyNums: number[] = [];
luckyNums = [3, 7, 9];
// luckyNums = [5, 6, 'mario']; // not allowed

// Union types
let allMixed: (string | number)[] = [];
allMixed.push('mario');
allMixed.push(90);
// allMixed.push(false); // not allowed

// For Objects
let ninjaOne: object;
ninjaOne = {
  name: 'peter',
  belt: 'black',
  age: 25,
};

let ninjaTwo: {
  name: string;
  belt: string;
  age: number;
  isActive: boolean;
};

ninjaTwo = {
  name: 'roy',
  belt: 'orange',
  age: 21,
  isActive: false,
};

// DYNAMIC TYPES
let age: any = 25;

age = true;
console.log(age);
age = 'mario';
console.log(age);

let mixedArr: any[] = [];
mixedArr.push(5);
mixedArr.push(false);
mixedArr.push('luigi');
console.log(mixedArr);

let newNinja: { name: any; age: any };
newNinja = { name: 25, age: 'mario' };
console.log(newNinja);
newNinja = { name: 'mario', age: 25 };
console.log(newNinja);
console.log('tsconfig');
