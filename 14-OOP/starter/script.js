'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function because you copy this with every new instance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const nick = new Person('Nick', 1983);
console.log(nick);

// 1. A new {} is created
// 2. Function is called, this = {}
// 3. {} linked to a prototype
// 4. Function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(nick instanceof Person);

// Prototypes
console.log(Person.prototype);

// Rather than place this function in the Constructor function (top of page) we attached it to the Person.prototype which means there's only ever one copy of it.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// You can use calcAge because of Prototypal inheritance
nick.calcAge();

Person.prototype.species = 'Homo sapiens';
console.log(nick.species);
console.log(nick.hasOwnProperty('species'));
