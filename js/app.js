// Section 1

// 1. Concatenation is combining strings. Interpolation is using a variable to represent a value inside a string.
	// concatenation: console.log("This " + "is " + "a " + "new " + "string.");
	// interpolation: 
		// let word = "new";
		// console.log("This " + "is " + "a " + word + " " + "string.");

// 2. D.R.Y. stands for Don't Repat Yourself. Repeated code is inefficient, so we use loops to avoid repetitive code. 



// Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a <= b);
// console.log(c >= d);
// console.log('Name' === 'Name');
// console.log(a + b === c);
// console.log(a * a === d);
// console.log(e === 'Kevin');
// console.log(48 == '48');



// Section 3

// Infinite loop 1: This is not an infinite loop because it doesn't specify what has to be true. 

// Infinite loop II: This is an infinite loop because you can't change the value of a constant, so runProgram = false will give an error and the loop will repeat infinitely because runProgram = true. 

// Reading Code: 

// I think that the output will concatenate "A" onto the string 20 times so the final string will read "AAAAAAAAAAAAAAAAAAA". 

let letters = "A";
let i = 0;
while (i<20) {
	letters += "A";
	i++;
}

console.log(letters);

// I ran the code and it gave me 21 As. This is different than what I expected because I forgot that the loop increments after the A has been concatenated. 


// Section 4

// For loops
// The key differences between a for loop and a while loop are that the while loop requires just one condition to be true and can repeat an unknown number of times, whereas a for loop allows you to repeat something for a known number of times and specify the parameters you want to use. 

// For Loop I

for (let i = 0; i <= 999; i++) {
	//console.log(i);
} 

// For loop control statement
// The first part of the control statement is: the initializing value, let i = 0. 
//The second part of the control statement is: 1 < 100. It tells the loop how long to run (until i < 100). 
//The third part of the control statement is: i++. It tells you what to do the value between each iteration. 

// For loop in reverse

for (let i = 999; i >= 0; i--) {
	//console.log(i);
}

// More Counting

for (let i = 1; i <=10; i++) {
	console.log("The value of i is: " + i + " of 10");
}