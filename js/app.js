// Section 1 

// interpolation is combining strings together with a variable in the console for example const age = 3 you could write "Im " + age + " years old!"
// concatentation is combining two strings together "Chicago" + "City". This would compute out to Chicago City when you put it into console.log

// D.R.Y stands for Don't repeat yourself. anytime in coding when you have repeated yourself two or more times it is wrong. It is a waste of space and an complicate code for no reason

// Section 2

 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' + 'Name');
console log(a + b = c);
 console.log(a * a =  d);
console.log(e == 'Kevin');
console.log(48 == '48');

// Section 3

// It would be an infinite loop because there is no block of code telling it to stop with false 

// It would not be an infinite loop beucase there is a block of code telling it to stop with false. It won't run an infinite amount of times becausee runProgram = false. It would run once.


// there are going are be 20 A's repeating. 

let letters = "A";
let i = 0;

while (i < 20 ) {
	letters += "A";
	i++
}

console.log(letters);

// The 20 repeating A's is what I expected 

// Section 4 

// A for loop includes a while loop as part of its condition. A for loop includes an initial condition, a while condition, and a repeating expression or operation
// A while loop will executre repeatedly as long as condition is true. execution will stop when condition becomes false. 

for (let i = 0; i <= 999; i++) {
	
	console.log(i);

}

// the first control statement shows the message where to start counting from 
// the second control statement show the message when to stop coutning (once it hits 100)
// the third control statement includes i++ which means increase by one each time and includes the console.log message 

for (let i = 999; i >= 1; i--)  {
		console.log(i);
}

// interpolation
for (let i = 0; i <=10; i++) {
	console.log(i + " of " + "10");
}	
	

