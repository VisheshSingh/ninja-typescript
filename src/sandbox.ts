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

// console.log('Area of 🔵: ', circleArea(5));

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
// console.log(age);
age = 'mario';
// console.log(age);

let mixedArr: any[] = [];
mixedArr.push(5);
mixedArr.push(false);
mixedArr.push('luigi');
// console.log(mixedArr);

let newNinja: { name: any; age: any };
newNinja = { name: 25, age: 'mario' };
// console.log(newNinja);
newNinja = { name: 'mario', age: 25 };
// console.log(newNinja);
// console.log('testing 123');

// FUNCTION TYPES
const add = (a: number, b: number): number => {
  return a + b;
};

add(10, 5);

const minus = (a: number, b: number, c?: number | string): void => {
  // console.log(a - b);
  // console.log(c);
};

minus(10, 5);

// TYPE ALIASES
type stringOrNum = string | number;
type objWithStringNum = { name: string; uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string): void => {
  // console.log(`${item} found with id ${uid}`);
};

logDetails(101, 'vboy');

const greet = (user: { name: string; uid: stringOrNum }) => {
  // console.log(`${user.name} says hello!`);
};

greet({ name: 'ninja', uid: 501 });

const greetAgain = (user: objWithStringNum) => {
  // console.log(`${user.uid} ${user.name} says hola!`);
};

greetAgain({ name: 'Steve', uid: '505' });

const andAgain = (user: objWithStringNum) => {
  // console.log(`${user.uid} ${user.name} says namaste!`);
};

andAgain({ name: 'Peter', uid: 123 });

// FUNCTION SIGNATURES
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

calc(5, 10, 'add');

type person = { name: string; age: number };
let man: (obj: { name: string; age: number }) => void;

man = (ninja: person) => {
  // console.log(`${ninja.name} ${ninja.age}`);
};

man({ name: 'shaun', age: 30 });

// Generics
const addId = <T extends { name: string }>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

console.log(addId({ name: 'vboy', age: 20 }));

interface Resource<T> {
  name: string;
  age: number;
  data: T;
}

const dacOne: Resource<string> = {
  name: 'vboy',
  age: 23,
  data: 'information',
};

const dacTwo: Resource<object> = {
  name: 'vboy',
  age: 23,
  data: { occupation: 'poet' },
};
