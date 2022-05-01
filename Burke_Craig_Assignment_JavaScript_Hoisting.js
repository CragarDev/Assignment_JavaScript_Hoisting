console.log();
console.log("********************************************************");
console.log();
// ? -- Craig Burke - Assignment: JavaScript Hoisting
//
/* 
Objectives:

Practice reading JavaScript the same way as the interpreter reads it.
Rewrite the code the way it would be seen by the interpreter and predict the output.
 An example is shown here:

 // GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

After you've made your prediction, 
run the original code to find out if you were right! 
If your predictions were incorrect, 
look back at how the code is hoisted by the interpreter.

Note - Run the same code as above with ES6 syntax and compare your results:

console.log(example);
let example = "I'm the example!";
// ReferenceError: Cannot access 'example' before initialization

Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, 
these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. 
Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!

*/

// 1.
console.log(hello);
var hello = "world";
// var hello;
//? console.log(hello); // logs undefined
// hello = "world";

console.log();

// 2.
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// var needle;
// test();
// function test()
//      var needle;
//? console.log(needle); // logs magnet

console.log();

// 3.
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print()
//? console.log(brendan); // logs super cool

console.log();

// 4.
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// var food;
// eat();
//      var food;
// food = "chicken";
//? console.log(food); // logs chicken
// eat();
//      food = "half-chicken";
//?      console.log(food); // logs half-chicken
//      food = "gone";

console.log();

// 5.
// mean();
// console.log(food);
// var mean = function () {
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// };
// console.log(food);
//! -- ERROR -- TypeError: mean is not a function
console.log("Error: TypeError: mean is not a function");

console.log();

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// var genre;
// rewind();
//      var genre;
//? console.log(genre); // logs undefined
// genre = "disco";
// rewind();
//      genre = "rock";
//? console.log(genre); // logs rock
//      genre = "r&b";
//? console.log(genre); // logs r&b
//? console.log(genre); // logs disco

console.log();

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// var dojo;
// learn();
//      var dojo;
// dojo = "san jose";
//? console.log(dojo); // logs san jose
// learn();
//      dojo = "seattle";
//? console.log(dojo); // logs seattle
//      dojo = "burbank";
//? console.log(dojo); // logs burbank
//? console.log(dojo); // logs san jose

console.log();

// 8.
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50) {
//     dojo.hiring = true;
//   } else if (dojo.students <= 0) {
//     dojo = "closed for now";
//   }
//   return dojo;
// }
// makeDogo;
// console.log(makeDojo("Chicago", 65));
//      const dojo;
//      dojo.name = "Chicago";
//      dojo.students = 65;
//      dojo.hiring = true;
//? console.log(dojo); // logs {name: "Chicago", students: 65, hiring: true}
// makeDojo("Berkeley", 0);
//      const dojo;
//      dojo.name = "Berkeley";
//      dojo.students = 0;
//      dojo = "closed for now";
//! -- ERROR -- TypeError: Assignment to constant variable.
console.log("name: 'Chicago', students: 65, hiring: true");
console.log("Error: TypeError: Assignment to constant variable.");

console.log();
console.log("********************************************************");
console.log();
