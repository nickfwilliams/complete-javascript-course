

/*

// My Assignements
const country = "United Kingdom";
const continent = "Europe";
let population = 65000000;
const isIsland = true;
const language = "English";

const description = `The ${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

if (population > 33000000) {
    console.log(`The United Kingdom's population is above average.`);
} else {
    console.log(`The United Kingdom's population is below average`);
}

const numNeighbours = Number(prompt('How many neighbours does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

if (language === "English" && population < 70000000 && isIsland === true) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} won't be suitable. You should look elsewhere..`);
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log('Second largest number of native speakers');
        break;
    case 'english':
        console.log('Third place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too!');
}

console.log(`The population of ${country} is ${population >= 33000000 ? 'above' : 'below'} average`);

// Lesson Notes

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Nick');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log


let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Nick';
const lastName = 'Williams';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x +1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Nick';
const job = 'coder';
const birthYear = 1983;
const year = 2021

const nick = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(nick);

const nickNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(nickNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can get her driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;
// BMI 27.3

const johnMass = 95;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Nick'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Truthy & Falsy Values

console.log(Boolean(0)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean('Nick')); // True
console.log(Boolean({})); // True
console.log(Boolean('')); // False

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// Equality Operators

const age = '18';
if (age === 18) console.log('You just became an adult! (Strict)');

if (age == 18) console.log('You just became an adult! (Loose)');

const favourite = Number(prompt("What's your favourite number"));

if (favourite === 23) { // '23'
    console.log('Cool, 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
    console.log('Why not 23?');
}

// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

const dolphinScore1 = 99;
const dolphinScore2 = 99;
const dolphinScore3 = 99;

const koalaScore1 = 99;
const koalaScore2 = 99;
const koalaScore3 = 99;

const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
console.log(dolphinAverage);

const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(koalaAverage);

if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log("The Dolphin team wins!");
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log("The Koala team wins!");
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
    console.log("We have two winners, folks!");
} else {
    console.log("We have two losers today, ladies & gentlemen.")
}

// The switch Statement

const day = 'tuesday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday;':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}

// The Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/


const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`);
