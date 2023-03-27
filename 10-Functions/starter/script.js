'use strict';

// 1: A Closer Look at Functions -----

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

*/

//2: How Passing Arguments Works -----

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
