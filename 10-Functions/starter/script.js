'use strict';

const bookings = [];

// 1: A Closer Look at Functions

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
