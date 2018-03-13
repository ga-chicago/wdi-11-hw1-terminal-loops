// SECTION 1

//interporlation is using variables to create a string 
//concatenation  is joining multiple strings together

// DRY - don't repect yourself; we need to avoid using the same line of code multiples times.

//SECTION 2

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';


a < b;
console.log(a < b)

c > d;
console.log(c > d)


'Name' === 'Name';
console.log( 'Name' === 'Name')

a + b === c;
console.log(a + b === c)

a * a === d;
console.log(a * a === d)

e === 'Kevin';
console.log(e === 'Kevin')

48 == '48';
console.log(48 == '48')

//SECTION 3
//it is an infinite loop because nothing it telling it to stop

//this is not infinite because the "runProgram" was set to false.

//READING THE CODE//

// the expected output was 21 As

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//SECTION 4

//the while loop will stop when something inside the loop tells it to.
//the for loop will define the number of repetation in the beginning/when we know how many time it will be execute.

//FOR LOOP I

for (let i=0; i < 1000; i++) {
	console.log(i)
}

//The first part of the control statement is: executed before the loop starts.
//The second part of the control statement is: defines the condition for running the loop
//The third part of the control statement is:executed each time at the end of each loop.

for (let i=999; i > 0; i--) {
	console.log(i)
}

for (let i=1; i < 11; i++) {
	console.log('The value of i is: ' + i + ' of 10')
}