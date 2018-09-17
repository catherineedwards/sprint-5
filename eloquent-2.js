// This is the first exercise
var abc = ""; 
for (let number = 0; number <= 6; number++) {
  abc += "#";
  console.log(abc);
}

// This is the first version of the second exercise
for (let number = 0; number <= 100;) {
  number += 1;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else
    console.log(number);
}

// I had a number of attempts at the second version of the second exercise, but I wasn't able to come up with an answer within the timebox. I'm going to attempt this when I walk away from it and come back with an experienced developer to give me some Clever Clues.

// This is the third exercise

let size = 7
let result = " ";
for (let i = 0; i <= size; i++) {
  result = "";
	if (i % 2 == 0) {
      	result += " ";
    }
  for (let j = 0; j <= size; j++) {
    if (j % 2 == 0) {
    	result += "#";
    } else 
      	result += " ";
  }
  console.log(result);
}