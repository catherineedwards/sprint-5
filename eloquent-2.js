// This is the first exercise
var abc = ""; 
for (let number = 0; number <= 6;) {
  abc += "#";
  number += 1;
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

let column = " # # # #"
let row = "# # # #"
for (let i = 0; i <= 7; i++) {
  if (i % 2 == 0) {
    console.log(column);
  } else 
    console.log(row);
}

// This is a tremendously cheeky way of building this chess table. I'm going to discuss with experienced developers a way that meets the original brief, but I just cannot get my head around it at this point.