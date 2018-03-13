//What is the difference between interpolation and concatenation?
// Interpolation uses a variable to represent a value.
//Concatenation combines two 'strings' together.

//Give an example of each.
// Interpolation:
//// const verb = 'believe'
// const noun = 'cheese'
// console.log("Please " + verb + " the " + noun + ".")
//
//Concatenation:
//const cityName = 'Astoria'
//const weather = 'rainy'
//console.log(cityName + " is " + weather + " this time of year.");
//**ARE ALL CONCATENATIONS INTERPOLATIONS BUT NOT ALL INTERPOLATIONS ARE CONCATENATIONS??**

//What does the acronym DRY stand for?
//Don't Repeat Yourself

//Why should we pay attention to it?
//Helps utilize best practices in programming. DRY makes our code easier to read by other programmers
//and helps us avoid bulky code and unessecary repetition.

//What programming tools have we learned to write DRY code?
//Thematically we discussed understaning the specific task at hand before rendering the code.
//Specifially, we learned to use loops to avoid code repitition.

//Section 2: Boolean Expressions
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name'=== 'Name');
console.log(a<b<c);
console.log(a<a<d);
console.log(e==='Kevin');
console.log(48!=='48');


//Section 3: While loops
//while (true) {
//console.log('Do not run this loop');
//}
//This loop is an infinite loop. The loop does not contain a "code block" and
//there is no control expression.

//Section 3: Inifinite Loop II
//Is this loop inifinite? Why or why not?
//const runProgram = true;
// while (runProgram) {
	// console.log('Do not run this loop');
	// runProgram = false;
// }
//This loop is not infinite. It meets the while loop criteria using:
//1. initial condition 2. while condition & 3. repeating expression/operation??

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//+= assigns the result of the addition to the variable 'A'
//instructed to print letter A as many times as the loop.
//Yes, but console printed A twenty one times rather than the twenty I thought.

//Section 4: For loops
//A for loop performs the same operation as a while loop.
//But what are the key differences, if any? What are the similarities?

//For loop 1
//for (let i = 0; i <= 999; i++) {
//  console.log(i);
//}

//Both loops use a defined condition for running the code block.
//However, For loops set a variable before the loop starts
//and increases a value each time the code block has been executed.

//The first part of the control statement is: let i = 0 -sets variable before loop starts
//The second part of the control statement is: i <100 -a condition defined for running the loop
//The third part of the control statement is: i++ -exeuuted each time after the loop.

//For loop in reverse
//for (let i = 999; i >= 0; i--) {
  //console.log(i); l
//}

//More counting
for (let i = 0; i <= 10; i++){
  console.log("The value of i is: " + i + " of " + i + "");
}
