 
//section 1

//interpolation = when we use a variable as a placeholder in a string
let paint = "yellow"

//concatenation = when we put strings together

let wall = paint + 'is dry'


//don't repeat yourself (DRY)


 const a = 4;

 const b = 53;
 
  const c = 57;
  
  const d = 16;

  const e = 'Kevin';

 a < b; 
c > d;
'Name' === 'Name';
a + b === c;
a * a  === d;
e === 'Kevin';
48 != '48';






while (true) {
	console.log('Do not run this loop');
}
// it is an infinite loop because the conditional will always be true
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
// this is not an infinite loop because we switch the value of the conditional to false

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);


//this will print 21 "A" because the loop runs 20 times

for(let i =0; i < 1000; i++){
	console.log(i)
}






// The first part of the control statement is:initialExpression
// The second part of the control statement is:condition
// The third part of the control statement is:incrementExpression

for(let i =999; i >= 0; i--){
	console.log(i)
}


for(let i =0; i < 10; i++){
	console.log("The value of " + 'i' + " is: " + i + " of 10")
}

