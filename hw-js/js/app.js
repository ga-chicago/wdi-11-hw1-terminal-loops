
// interpolation- Using a variable to represent a value.

var num = 20

console.log(5 + num);

// concatenation- to combine; put 2 strings together

const pet = "dog";
const petName = "Eddie";

console.log("I " + " have a " + pet + " and his name is " + petName + "." );


// DRY- Don't repeat yourself. We use loops for this, and is an easier way to to repeat.

//BOOLEAN

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' === 'Name');
console.log(a < b && b < c); 
console.log(a === a && a < d); 
console.log( e === e);
console.log( 48 == '48');


//section 3- This is an infinite loop, since while is true, it will infinitly console.log
//section 3-2- This is not an infinite loop, RunProgram var is true, but the console.log is false.

//Reading code- I believe this will make 20 A's, it's reapeating until true.


let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
// made 21 A's, since it's running until A is no longer less than 21

// section 4- while loop will execute as long as the specified condition is true.
// when we do not know how many times loop needs to be executed,
// for loop - when we already know how many times it needs to execute,


for (let i=0; i <= 999; i++) {
	console.log(i);
}

//1st- i=0;
//2nd- i < 100;
//3rd- i++

for (let i=999; i >= 0; i--) {
	console.log(i);
}

for (let i=1; i <= 10; i++) {
console.log("The value of i is: " + i + " out of 10");
}








