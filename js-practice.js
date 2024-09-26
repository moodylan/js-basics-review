// VARIABLES
// From a string to an array
const s = 'cs, ce, it, technology, computers';
console.log(s.split(', ')); // output: ['cs', 'ce', 'it', 'technology', 'computers']
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'grapes'; // not the best way bc we may not know how many VALUES are in the array
fruits.push('mangos');
console.log(fruits);
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('oranges'));

// OBJECT LITERALS
const person = {
  fN: 'John',
  lN: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main Street',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person);
console.log(person.fN, person.lN);
console.log(person.hobbies[1]);
console.log(person.address.city);
// Making them actual variables. Pulling these values out from the object
const { fN, lN, address: { city } } = person;
person.email = 'john@email.com';   // add PROPERTIES
console.log(person);

// Arrays of objects
const todos = [
  {
    // we want each value in the array to be an object
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'House',
    isCompleted: false
  }
];
console.log(`Array: ${todos}`);
console.log(todos[1].text);

// JSON: data format. when you send data to the server it's usually sent it and receive it in json format. Very similar to object literals
// getting the data ready to be sent to a server:
const todoJSON = JSON.stringify(todos);
console.log(`JSON: ${todoJSON}`);

// LOOPS
for(let i = 0; i < todos.length; i++) {    // not recommended
  console.log(todos[i].text);
}
for(let todo of todos) {
  console.log(todo);
}
for(let todo of todos) {
  console.log(todo.text);
}

// preferred array loops
todos.forEach(function(todo){
  console.log(todo.text);
});
// map returns an array
const todoText = todos.map(function(todo){
  return todo.text;
});
console.log(todoText);
const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompletedArray = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})
console.log(todoCompletedArray);

// CONDITIONALS
const x = 4;
if(x === 10) {      // triple "===" must be equal in value and data type preferred by some
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}
const y = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}

function addNums(num1, num2) {
  return num1 + num2;    // NaN = Not a Number
  // normally we don't console.log inside a function, instead:
}
console.log(addNums(5, 4));

// ARROW FUNCTIONS
const addNumsArrow = (num1, num2) => {
  console.log(num1 + num2);   
}
addNumsArrow(5, 5);

// only one action
const addNumsArrow2 = (num1, num2) => console.log(num1 + num2);   
addNumsArrow(5, 6);

// getting rid of the return keyword, simplified
const addNumsArrow3 = (num1, num2) => num1 + num2;   
console.log(addNumsArrow3(5, 7));

// even more simplified, if we only need one parameter
const addNumsArrow4 = num1 => num1 + 5;   
console.log(addNumsArrow4(8));

todos.forEach((todo) => console.log(todo));

// OOP
