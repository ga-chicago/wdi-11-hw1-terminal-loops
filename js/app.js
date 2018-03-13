

// SECTION 1 ANSWERS:
// Interpolation is adding a variable in your string concatenation
// Concatenation is purely combining strings together
// DRY stands for Don't Repeat Yourself. 
// It means to condense your code into smaller parts instead of having many repetitive lines. It makes the code neater and more concise.
// For loops and while loops are ways we've learned so far of implementing DRY Code

// SECTION 2 ANSWERS:
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a != d); //still reading false
console.log(e === 'Kevin');
console.log(48 == '48'); //still reading false

// SECTION 3 ANSWERS:

// The first loop is infinite, because the condition true is always being met without any change.

// The second loop is not infinite, because the second line in the curly brackets changes the condition. 
// ALSO there would be an error because the loop attempts to reassign a value to a constant.

// I think the while loop will run 20 times, and each time it runs it will add a letter A to the letters variable. I'm not sure how many As that would make. It would be 1+2+3...up until 20. Whatever that sum is.

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
};

console.log(letters);

// After running the code, I realized it didn't keep concatenating an A to the letters variable. I thought it would. It also ran 21 times instead of 20 times, because the i++ runs after, so it ran one time while i was 20 before the condition was false.

// SECTION 4 ANSWERS:

// For loops operate with local variables, but while loops require at least one global variable to operate.

// For loop 1

for (let i = 0; i <= 999; i++) {
	console.log(i);
};

// Control Statement Components:
// First component: declaring a local variable using let so it can be modified, usually the letter i is used as a variable
// Second component: the falsifiable condition(s) for the variable--once that condition is met, the loop stops running
// Third component: the function which defines how the variable is modified each time the loop is run

// For loop in reverse

for (let i = 999; i >= 0; i--) {
	console.log(i);
};

// For loop using interpolation

for (let i = 1; i <= 10; i++) {
	console.log("The value of i is: " + i + " of 10");
};