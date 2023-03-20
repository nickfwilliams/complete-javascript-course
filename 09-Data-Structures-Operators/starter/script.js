'use strict';

//STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :-(');
  else console.log('You got lucky! :-D');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/*

//MAPS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));



// SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter']).size
);




const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // console.log(
    //   `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta(ing1, ing2, ing3) {
    // console.log(
    //   `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    // );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} 
 days`;
days: for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays

const users = [];
// const users = [{ name: 'Jones', email: 'hello*jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Rest Pattern - collects elements and puts them in an array

// 1) DESTRUCTURING

// SPREAD because it's on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because it's on the LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nullish assignment operator (Nullish = null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// Mutating variables
// let a = 111;
// let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Spread Operator

// const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 or more arrays

const challengeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(challengeMenu);

// Iterables are: Arrays, Strongs, Maps, Sets but NOT objects

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Destructuring an array

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables players1 and players2)

const [players1, players2] = game.players;

// 2. For Bayern Munich create one variable called (gk) with the goalkeepers name, and one array (fieldPlayers) with all the remaining 10 players.

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams

const allPlayers = [...players1, ...players2];

// 4. During the game Bayern Munich used 3 subs. Create a new array (playersFinal) containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(playersFinal);

// 5. Based on the games.odds object, create one variable for each odd called team 1, draw and team 2.

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function called 'printGoals' that recieves an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored (number of player names passed in).

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. Which team is most likely to win based on the odds?

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Coding Challenge #2

// Question 1

for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}

// Question 2

let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// Question 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr} ${odd}`);
}

// // Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length}
//  days`;
// days: for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entries object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

*/
