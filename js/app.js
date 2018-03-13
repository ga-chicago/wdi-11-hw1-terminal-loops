//Section One
//1. Interpolation occurs when new data is combined to produce new data
const one = 1;
const two = 2;
console.log(one + two); 
//should show an output of 3
//2. Concatonation occurs when two strings are essentially smushed together
const three = "three";
const four = "four"
console.log(three + four); 
//should show an output of threefour

//Section Two
 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

 console.log(a < b);
 console.log(c > d);
 console.log('Name' === "Name");
 console.log(a < b < c);
 console.log(a <= a < d);
 console.log(e === 'Kevin');
 console.log(48 !== '48');

 //Section Three
 // This is an infinite loop - we can tell because there is no operation that would ever change the condition to false. 
 //Infinite loop II
 // This is not an infinite loop. The line that says "runProgram = false;"" allows it to end.
 // On second thought - that may not be true. Does the const declaration mean that we can't change the value?/it won't change even with that last line of code?

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
//I think I the console will say A 20 times
//I was right about the A 20 times, but I did think it would put them on different lines/not all in the same line 

//Section Four
// The essential function of for and while loops is the same. Because they offer different syntaxes though. one may be preferable to another depending on the situation, 
// for loops appear to be better when you have a certain number of iterations in mind. 
// while loops appear to be better for evaluating the truthfullness of a statement. 
for(let i = 0; i <= 99; i++){
	console.log(i)
};

for(let i = 99; i >=0; i--){
	console.log(i)
};

for(let i = 1; i <=10; i++){
	console.log("The value of i is: " + i + " of 10")
};