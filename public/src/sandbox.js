"use strict";
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
// Arrays
var names = ['mario', 'luigi', 'peach'];
names.push('bowser');
// names.push(30); -> cannot add a number type
var mixed = ['mario', 9, 'luigi', 7];
mixed.push(10);
mixed.push('peach');
// mixed.push(false); -> cannot add boolean type
// Objects
var ninja = {
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
};
// explicit types
var char;
var num;
var isLoggedIn;
char = 'mario'; // allowed
// char = 30; // not allowed
num = 20; // allowed
// num = true; // not allowed
isLoggedIn = true; // allowed
// isLoggedIn = 'hey!' // not allowed
// For arrays
var luckyNums = [];
luckyNums = [3, 7, 9];
// luckyNums = [5, 6, 'mario']; // not allowed
// Union types
var allMixed = [];
allMixed.push('mario');
allMixed.push(90);
// allMixed.push(false); // not allowed
// For Objects
var ninjaOne;
ninjaOne = {
    name: 'peter',
    belt: 'black',
    age: 25,
};
var ninjaTwo;
ninjaTwo = {
    name: 'roy',
    belt: 'orange',
    age: 21,
    isActive: false,
};
// DYNAMIC TYPES
var age = 25;
age = true;
console.log(age);
age = 'mario';
console.log(age);
var mixedArr = [];
mixedArr.push(5);
mixedArr.push(false);
mixedArr.push('luigi');
console.log(mixedArr);
var newNinja;
newNinja = { name: 25, age: 'mario' };
console.log(newNinja);
newNinja = { name: 'mario', age: 25 };
console.log(newNinja);
console.log('testing 123');
// FUNCTION TYPES
var add = function (a, b) {
    return a + b;
};
add(10, 5);
var minus = function (a, b, c) {
    console.log(a - b);
    console.log(c);
};
minus(10, 5);
