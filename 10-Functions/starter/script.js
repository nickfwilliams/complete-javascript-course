'use strict';

// 1. A Closer Look at Functions -----

/* 
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Old ES5 way
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  // ES6 Way

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

//Skipping an default parameter, use undefined
createBooking('LH123', undefined, 1000);

//2. How Passing Arguments Works -----

const flight = 'LH234';
const nick = {
  name: 'Nick Williams',
  passport: 2473889090,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2473889090) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(nick);
checkIn(flight, nick);

// JS does NOT have pass by reference

//3. First-Class and Higher-Order Functions -----

// Functions are simply values - they are just another type of object
// Higher-order functions are functions that receives another function or returns a new one or both
//First-class functions and higher order functions are different things
//First-class functions are just values - it's just a concept

// 3. Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// JS uses callbacks all the time because...
// 1. It makes it easy to split up the code
// 2. They allow us to create abstraction - we hide the detail of the code implementation. e.g. The transformer function doesn't care how the words are being transformed. It delegates the job of converting the string,

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Nick', 'Stuart', 'Tim', 'Paul'].forEach(high5);

// 4. Functions Returning Functions -----

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Nick');
greeterHey('Steven');

// Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('Hi')('Cedric');

*/

// 5. The Call and Apply Methods -----

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Nick Williams');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mark Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method (not used much in modern JS)

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// We now tend to use the spread operator instead
book.call(swiss, ...flightData);

// 6. The Bind Method

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// Partial Application - part of the argument of the original function are already applied
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nick Williams');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
