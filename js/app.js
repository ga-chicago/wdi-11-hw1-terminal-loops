//Section 1: Terms
// 1. concatenation is combining two strings together. An example would be if you have two variables that you combine in a console.log as shown below:
const pet = "dog";
const name = "Mace";
console.log("My " + pet + "'s " + "name is " + name);
// 2. DRY means Don't Repeat Yourself. This aims to reduce repitition. Writing Loops for example can assist in writing DRY code.

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a > b < c);
console.log(a === a < d);
console.log(e === 'Kevin');
console.log(48 != '48');

//Section 3
//Infinite Loop? 
// This is an infinite loop because the statement will always be true. There is nothing to make it false.

// Infinite Loop II
// This is not an infinite loop because the main state of the variable runProgram is true however, the if the variable is pronounced false, the console.log will appear.

// Reading Code
// I thought the code would render 20 A's. After running the code, it actually rendered 21 A's. 

//Section 4
// Both For and While loops are used to execute lines of code for a certain number of times (or infinite). A while loop can be used for line of code that should be repeated until a certain condition is met. A for loop has a pre-determined number of times that the code will run.

//For loop I
 for (let i = 0; i <= 999; i++) {
 	console.log(i)
 }

 //For Loop control statement
 // The first part of the control statement is: initial condition
 // The second part of the control statement is: while condition
 // The third part of the control statement is: repeating expression/operation

 //For loop in reverse
for (let i = 999; i >= 0; i--) {
 	console.log(i)
 } 

//More counting
for (let i = 0; i <= 10; i++) {
 	console.log("The value of i is: " + i + " of 10")
 }













