// OOP

// Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);   // this.dob = dob; use Date object
  // this.getBirthYear = function() {
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
}
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-2-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
// add methods to a Person object
console.log(person1);
console.log(person2.getFullName());

// Cleaner/Easier way: ES6 (2015) classes added to JS. (Syntactic Sugar = a prettier way to write the above)
// Class
class Persona {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
  }
  // now instead of using the prototype syntax, simply put the methods here
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log('================ N E W ================');
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1);
console.log(person2.getFullName());