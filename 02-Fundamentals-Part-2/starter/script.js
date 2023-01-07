'use strict';

/*

// My Assignments - Part 2

function describeCountry(country, population, capitalCity) {
    const countryInfo = `${country} has ${population} people and its capital is ${capitalCity}.`;
    return countryInfo;
}

const finland = describeCountry('Finland', '6 million', 'Helsiniki');
console.log(finland);

const wales = describeCountry('Wales', '3 million', 'Cardiff');
console.log(wales);

const france = describeCountry('France', '6.7 million', 'Paris');
console.log(france);

// Function Declaration

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const population1 = percentageOfWorld1(1441);
console.log(population1);

// Function Expression

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const population2 = percentageOfWorld2(3500);
console.log(population2);

// Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;
const population3 = percentageOfWorld3(5100);
console.log(population3);


// Functions calling other functions

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);

// Intro to arrays

const populations = [600, 2500, 23600, 129455];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

// Basic array Operations (Methods)

const neighbours = ['Spain', 'Italy', 'Germany'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country!');
}

neighbours[neighbours.indexOf('Spain')] = 'Espana';
console.log(neighbours);

const myCountry = {
    country: 'UK',
    capital: 'London',
    language: 'English',
    population: '65 Million',
    neighbours: ['Ireland', 'France', 'Holland'],

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    },

    describe: function () {
        console.log(`The ${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. It ${this.isIsland ? 'is not' : 'is'} an island.`);
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

myCountry.population = '67 Million';
myCountry['population'] = '64 Million';

console.log(`The ${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

for (let voter = 1; voter <= 50; voter++)

    console.log(`Voter number ${voter} is currently voting`);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

// FUNDAMENTALS - PART 2

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Functions

function logger() {
    console.log('My name is Nick');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1983);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1983);
console.log(age1, age2);

//Arrow Function with one line of code
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1983);
console.log(age3);

//Arrow function with multiple lines of code
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1983, 'Nick'));
console.log(yearsUntilRetirement(1987, 'Carl'));

// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Nick'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let scoreDolphins = calcAverage(144, 123, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}!`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}!`);
    } else {
        console.log(`No one wins.`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob, 'Alice']

const firstName = 'Nick';
const nick = [firstName, 'Williams', 2021 - 1983, 'coder', friends];
console.log(nick);
console.log(nick.length);

//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Array Methods

const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift() // First
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend call Steven');
}

// Coding Challenge 2

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];

console.log(bills, tips, totals);

// Objects

const nick = {
    firstName: 'Nick',
    lastName: 'Williams',
    age: 2021 - 1983,
    job: 'Account Manager',
    friends: ['Tim', 'Dan', 'Joe']
};

// Dot vs Bracket Notation

console.log(nick.job);
console.log(nick['job']);

const nameKey = 'Name'
console.log(nick['first' + nameKey]);
console.log(nick['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Nick? Choose between firstname, lastname, age, job and friends.');

if (nick[interestedIn]) {
    console.log(nick[interestedIn]);
} else {
    console.log('Invalid request! What do you want to know about Nick? Choose between firstname, lastname, age, job and friends.')
}

nick.location = 'England';
nick['website'] = 'www.nickfwilliams.co.uk';
console.log(nick);

// Challenge

// "Jonas has three friends and his best friend is called Michael"

console.log(`${nick.firstName} has ${nick.friends.length} friends and his best friend is ${nick.friends[0]}`);

// Object Methods

// const nick = {
//     firstName: 'Nick',
//     lastName: 'Williams',
//     birthYear: 1983,
//     job: 'Account Manager',
//     friends: ['Tim', 'Dan', 'Joe'],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2021 - this.birthYear
//     // }

//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
//     }
// }

// console.log(nick.getSummary());

// Challenge

// "Nick is a 38 year old teacher and he has a/no driver's licence."

// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        console.log(this.bmi);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        console.log(this.bmi);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
};

// Iteration: The For Loop

// for loop keeps running whilst condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting wieghts repetition ${rep}`);
}

// Looping arrays, breaking and continuing

const nick = [
    'Nick',
    'Williams',
    2021 - 1983,
    'Account Manager',
    ['Tim', 'Dan', 'Joe'],
    true
];

const types = [];

// What we want to achieve

// console.log(nick[0]);
// console.log(nick[1]);
// ...
// console.log(nick[4]);
// nick[5] does NOT exist

for (let i = 0; i < nick.length; i++) {
    //Reading from nick array
    console.log(nick[i], typeof nick[i]);

    // Filling types array
    // types[i] = typeof nick[i];
    types.push(typeof nick[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// continue and break
console.log('_____ ONLY STRINGS _____')
for (let i = 0; i < nick.length; i++) {
    if (typeof nick[i] !== 'string') continue;

    console.log(nick[i], typeof nick[i]);
}

console.log('_____ BREAK WITH NUMBER _____')
for (let i = 0; i < nick.length; i++) {
    if (typeof nick[i] === 'number') break;

    console.log(nick[i], typeof nick[i]);
}

// Looping backwards and loops in loops

const nick = [
    'Nick',
    'Williams',
    2021 - 1983,
    'Account Manager',
    ['Tim', 'Dan', 'Joe']
];

for (let i = nick.length - 1; i >= 0; i--) {
    console.log(i, nick[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting Exercise ${exercise}! -----`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`)
    }
}

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

While loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting wieghts repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting wieghts repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

*/

// Coding Challenge 4

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 85, 52
];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// My Solution

// for (let i = 0; i <= 9; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i]);
//     console.log(tips[i] + totals[i]);
// }

// Jonas' Solution

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
