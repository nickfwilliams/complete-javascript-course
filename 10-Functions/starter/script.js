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

// 4. Functions Returning Functions

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

// 5. The Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Nick Williams');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mark Cooper');
console.log(lufthansa);
