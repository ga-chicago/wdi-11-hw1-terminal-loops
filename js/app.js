const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a <= a <= d);
console.log(e === 'Kevin');
console.log(48 !== '48');

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);







//Section 1
//Question 1: interpolation is substituting a variable for a value (ex. Changing "Please" + " believe." to Please" + word where word is a variable that was substituted in to hold the string value " believe.")
	//concatenation is combining two strings together (ex. "Please" + " believe." evaluates to "Please believe.")

//Question 2:  DRY stands for Don't Repeat Yourself. It's important for writing code efficiently and in a way that is easy to read.
	//We can use loops and functions to help us reuse code and keep our code DRY.


//Section 2
// a < b
// c > d
// 'Name' === 'Name'
// a < b < c
// a <= a <= d
// e === 'Kevin'
// 48 !== '48'

//Section 3
//Loop 1
	//The loop will be infinite. true will always be true.
//Loop 2
	//It's not infinite. It will output 'Do not run this loop' once.
//Loop 3
	//Expected result: AAAAAAAAAAAAAAAAAAAAA
	//Actual result:   AAAAAAAAAAAAAAAAAAAAA 


//Section 4
//Question 1
	//for loops are more compact because they have the initialization and incrementation of the loop variable all in the loop statement.
	//while loops can handle randomness better if you're doing different thing to the loop variable with each loop.
	//They both have a loop variable that gets initialized and a condition that gets checked every time before looping.
	//When they aren't infinite, they'll also do something to the loop variable that will eventual make the loop condition false.

//Question 2

	for (let i=0;i<=999;i++) {
		console.log(i);
	}

//Question 3
	//The first part of the control statement is: the initialization
	//The second part of the control statement is: the condition
	//The third part of the control statement is: the final expression

//Question 4

	for (let i=999;i>=0;i--) {
		console.log(i);
	}

//Question 5

	for (let i=1;i<=10;i++) {
		console.log("The value of i is: " + i + " of 10");
	}




//Section 0
//Episode X Answers

//Part 1
    //Step 2: Once you're in the correct directory.
		//mkdir galaxy_far_far_away
		//cd galaxy_far_far_away
	//Step 3: mkdir death_star
		//touch darth_vader.txt princess_leia.txt storm_trooper.txt
	//Step 4: mkdir tatooine
		//touch tatooine/luke.txt tatooine/ben_kenobi.txt
	//Step 5: mkdir tatooine/millenium_falcon
		//touch tatooine/millenium_falcon/han_solo.txt
//Part 2
	//Step 1
		//cd tatooine
		//mv ben_kenobi.txt obi_wan.txt
//Part 3
	//Step 1
		//cd ..
		//cp death_star/storm_trooper.txt tatooine
//Part 4
	//Step 1
		//cd tatooine
		//mv luke.txt obi_wan.txt millenium_falcon/
	//Step 2
		//cd ..
		//mv tatooine/millenium_falcon ./
	//Step 3
		//mv millenium_falcon death_star/
		//cd death_star
	//Step 4
		//mv princess_leia.txt death_star/
//Part 5
	//Step 1
		//rm millenium_falcon/obi_wan.txt
//Part 6
	//Step 1
		//cd ..
		//mkdir yavin_4
	//Step 2
		//mv death_star/millenium_falcon yavin_4/
	//Step 3
		//cd yavin_4
		//mkdir x_wing
	//Step 4
		//mv millenium_falcon/princess_leia.txt ./
		//mv millenium_falcon/luke.txt x_wing
	//Step 5
		//mv millenium_falcon x_wing ../
	//Step 6
		//cd ../death_star
		//mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
	//Step 7
		//mv darth_vader.txt tie_fighter_1/
	//Step 8
		//cp storm_trooper.txt tie_fighter_2/
		//cp storm_trooper.txt tie_fighter_3/
	//Step 9
	    //mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ../
//Part 7
	//Step 1
		//rm -r tie_fighter_2 tie_fighter_3
//Part 8
	//Step 1
		//cd ..
		//touch x_wing/the_force.txt
	//Step 2
		//rm -r death_star
	//Step 3
		//mv x_wing millenium_falcon yavin_4/
	//Step 4
		//Woo!