//Sec 1
//1. Concatenation is to combine strings. Interpolation is using a variable to represent a value.
console.log('hello '+'world.');
const word = "hello";
console.log(word + " world.");
//2.Do Not Repeat Yourself. Program runs more efficient and easier to interpret by humans. Loops.

//Sec 2
 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a < a < d);
console.log(e === 'Kevin');
console.log(48 == '48');

//Sec 3
// Infinite Loop
//Not Infinite Loop
//Concatenat 20 "A" strings

//Sec 4
//While Loop the condition is evaluated before the loop is executed. Both loops are for repition and contain conditions.
for (let i = 0; i <= 999; i++){
	console.log(i);
}

//The first part of the control statement is: initialization.
//The second part of the control statement is: condition.
//The third part of the control statement is: increment/decrement.

for (let i = 999; i >= 0 ; i--){
	console.log(i);
}

for(let i = 1; i <= 10; i++ ){
	console.log("The value of i is: " + i + " of 10");
}

