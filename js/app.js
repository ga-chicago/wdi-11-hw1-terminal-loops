// Concatenation -- combine two strings together using concatenation operator +.
// Concatenation works with strings only
let car = "lexus";
let color = "white"
console.log(car + " is " + color + ".");


// Interpolation: using a variable, to represent a value is called 'interpolation'
// This also works with non string types
let myAge = 28;
let name = "Samat";
console.log("Hello, my name is " + name + ". I'm " + myAge + " years old.");


// D.R.Y. -- Do not Repeat Yourself. We won't write the same code twice.
// We can use functions and loops to reduce repetitions.


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Kevin' == 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(e == 'Kevin');
console.log(48 !== '48');

// while (true) {
// console.log('Do not run this loop');
// }

// it is an infinite loop because it will repeat untill false condition will occur





// const runProgram = true;
// while (runProgram) {
// console.log('Do not run this loop');
// runProgram = false;
// }

// it is an infinite loop. but it will stop, because runProgram assigned to false.
// an error will occur

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

// AAAAAAAAAAAAAAAAAAAAA




for(let i = 0; i <=999; i++) {
	console.log(i);
};





for (let i=0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}

// let i = 0; i < 100; i++





for(let i = 999; i >= 0; i--) {
	console.log(i);
};



for(let i = 1; i <=10; i++) {
	console.log("The value of i is: " + i + " of 10");
};