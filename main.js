alert("Hello from Sanh!"); /*adds pop-up when page loads*/

console.log("Hello from Sanh!");
console.error("Error alert.");
console.warn("Warning alert!");

// Setting variables in JavaScript: var (globally scoped), let, const
/* can reassign let variables */
let age = 30;
age = 31;
let score; /* Initialize */
score = 10;
/* cannot reassign const variables */
const a = 12;
console.log(age);
console.log(score);

// Data Types: String, Number, Boolean, null, undefined, Symbol (aded in ES6)

const name = "Sanh"; // double or single quotes
const myAge = 21;
const rating = 4.5;
const isCool = true;
const X = null; // Empty variable
const y = undefined;

console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);

/* Concatenation */
console.log("My name is " + name + " and I am " + myAge);

/* Template String with ${} syntax */
const log = `My name is ${name} and I am actually ${myAge}.`;
console.log(log);
console.log(log.length);
console.log(log.toLowerCase());
console.log(log.substring(0, 5));
console.log(log.split("")); // Split String by letter

const s = "technology, computers, it, code";
console.log(s.split(", ")); // In between each word is a comma + space, so we split by comma space

/* Arrays */
const numbers = new Array(1, 2, 3, 4, 5, 8, 6, 10, 11); // Using array constructor
console.log(numbers);

const fruits = ["banana", "oranges", "pears", 21, true]; // Arrays in JS can contain different data types

fruits[5] = "passionfruit"; // reassign a value

fruits.push("mangos"); // push a value into array at the end

fruits.unshift("strawberry"); // push a value at the start

fruits.pop(); // remove last element from array

console.log(fruits[1]);
console.log(fruits);

console.log(Array.isArray(fruits)); // Conditional check if something is of type Array
console.log(fruits.indexOf("strawberry")); // Find the index of a certain element

/* Object Literals*/
const person = {
  first: "Sanh",
  last: "Nguyen",
  age: 21,
  hobbies: ["music", "rap", "dance"],
  /* Embedded Objects: an object within an object */
  address: {
    street: "Linda Vista Rd.",
    city: "San Diego",
    state: "CA",
  },
};

console.log(person); // show all values inside object
console.log(person.first, person.last, person.address);
console.log(person.address.state);

/* Destructuring */
const {
  first,
  last,
  address: { city, state },
} = person; // Not assigning, but pulling these out of person object
console.log(first); // Pulled out property from object 'person', so we no longer need person.first
console.log(state, city);

/* Add new properties to existing objects*/
person.height = 171;
console.log(person.height);

/* Array of Objects: Use brackets because it is an array, but it must contain
objects */
const todos = [
  {
    id: 1,
    text: "take trash out",
    isComplete: true,
  },
  {
    id: 2,
    text: "learn JavaScript",
    isComplete: true,
  },
  {
    id: 3,
    text: "meet Jiayi",
    isComplete: false,
  },
];

console.log(todos); // Print out the entire array of objects and each object's proeprties!
console.log(todos[2].text); // start from 0 index

/* JSON file: Similar to syntax of an array of objects, but all keys and Strings are DOUBLE quoted.*/
const todoJSON = JSON.stringify(todos); // Convert an object 'todos' into JSON format
console.log(todoJSON);

/* For-loop & While loop */
for (let i = 0; i < 10; i++) {
  console.log(`For-loop number: ${i}`); // Prints out 1 through 9, not 10 because 10 not less than 10
}

let i = 0;
while (i < 10) {
  console.log(`While loop number: ${i}`);
  i++;
}

/* Loop through array */
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  // for-of loop
  console.log(todo.text);
}

/* High order array methods*/
/* forEach */
todos.forEach(function (todo) {
  // takes function as parameter
  console.log(todo.text.toUpperCase());
});

/* map */
const todoText = todos.map(function (todo) {
  // Returns an array
  return todo.text; // returns all text into an array
});
console.log(todoText);

/* filter through based on certain conditions */
const todoCompleted = todos
  .filter(function (todo) {
    // Returns an array
    return todo.isComplete === true; // only returns tasks that are true for isComplete
  })
  .map(function (todo) {
    return todo.text; // returns aan rray of the text of only the completed todo tasks.
  });

console.log(todoCompleted);

/* If-statement */
const sanhAge = 22;
if (sanhAge == 21) {
  // triple equals match the data types
  console.log("Sanh is indeed 21.");
} else {
  console.log("Sanh is not 21 then.");
}

/* Ternary Operator & Switch Statement */
const b = 10;
const color = b > 10 ? "blue" : "yellow"; // If x > 10, then set color variable to blue, ELSE set to yellow
console.log(color); // Prints yellow because b is not > 10

switch (color) {
  case "yellow":
    console.log("Color is yellow. switch statement)(");
    break;
  case "blue":
    console.log("Color is blue. switch statement)");
    break;
  case "red":
    console.log("Color is red. switch statement)");
    break;
  default: // default case is when none of the above switch cases are  true
    console.log("Color is weird.");
}

/* FUNCTIONS */
function addNums(num1, num2) {
  // Declaration
  console.log(num1 * num2);
}
addNums(10, 10); // Call

/* OOP */
function Person(firstName, lastName, dob) {
  // constructor functions start with capital letters
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // use built-in Date constructor
}

/* Prototypes: functions are not grouped with variables in the console*/
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Sanh", "Nguyen", "5-1-2001"); // Instantiate object
console.log(person1);

console.log(person1.getBirthYear());
console.log(person1.getFullName());

/* Class */
class PersonClass {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    this.dob.getFullYear();
  }

  getFullYear() {
    `${this.firstName} ${this.lastName}`;
  }
}
console.log(PersonClass);
