'use strict';

//* PRIMITIVES VS OBJECTS

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davies';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

//* REGULAR VS ARROW FUNCTIONS

// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // SOLUTION 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self); //This can be 'self' or 'that'
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // SOLUTION 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey, ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// //* ARGUEMENTS KEYWORD
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a * b;
// };

// addArrow(2, 5, 8);

//* THIS EXERCISE

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   // console.log(this);
// };

// calcAge(1983);

// const calcAgeArr = birthYear => {
//   console.log(2023 - birthYear);
//   // console.log(this);
// };

// calcAgeArr(1956);

// const nick = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// nick.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = nick.calcAge;
// matilda.calcAge();

// const f = nick.calcAge;
// f();

//* HOISTING EXERCISE

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Nick';
// let job = 'Developer';
// const year = 1983;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a * b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

//* SCOPE EXERCISE

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassinging outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Nick';
// calcAge(1983);
