let myName = "Sam";
let myAge = 33; //dont use quotation, will regard it as  string
let isStudent = true;

console.log(myName);
console.log(myAge);
console.log(isStudent);

let number = 13;
console.log(number.toString(2));

myName = "John";
console.log(myName);

const myName2 = "John Doe";
console.log(myName2);

const int1 = 4;
const int2 = 5;
const int3 = int1 + int2;
const int4 = int1 - int2;
const int5 = int1 / int2;
const int6 = int1 ** int2;

console.log(int3);
console.log(int4);
console.log(int5);
console.log(int6);

let string1 = "This is double quotes";
let string2 = 'This is single quote';
let string3 = string1 + " " + string2;
console.log(string3);
let string4 = `These are values of int1 and int2 ${int1/int2}`;
console.log(string4);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(10/0);
console.log(-10/0);
console.log(0/0);

let isGreater = 5 > 3;
console.log(isGreater);

let isLess = 5 < 3;
console.log(isLess);

let isSunny = true;
let isRain = false;

console.log(isSunny && isRain);
console.log(isSunny || isRain);
console.log(!isSunny);

console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.pow(4,6));
console.log(Math.max(4,6,12));
console.log(Math.min(4,6,3));

let text = "JAvaScript";

console.log(text.toLowerCase());
console.log(text.toUpperCase().split(""));
console.log(text.length);

let age2 = 20;
let canVote = age2 >= 18 ? "Yes" : "No";
console.log(canVote);

let score = 85;
let grade = score > 90 ? "A" : score > 80 ? "B" : "C";
console.log(grade);