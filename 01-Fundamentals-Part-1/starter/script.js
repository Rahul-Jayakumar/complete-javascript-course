//LECTURE: VALUES AND VARIABLES
const country = "South Africa";
const continent = "Africa";
let population = 49000000;

console.log("My country is " + country + ", my continent is " + continent + " and it's population is " + population)

//LECTURE: DATA TYPES

const isIsland = false;
const language = "English";
console.log({ isIsland, population, country, language });

//LECTURE: Basic Operators
halfpopulation = population / 2;
console.log(halfpopulation);
console.log(population + 1);
console.log(country + ' has more people than the 6 million people in Finland.')
console.log(country + " has more than 33 million people.")
// const description = "Portugal is in Europe, and its 11 million people speak Portuguese.";
// console.log(description);

//LECTURE: Strings and Template Literals 


let x = 5;
console.log(x++);

//LECTURE: Strings and Template Literals
const description = `Portugal is in Europe, 
and its 11 million people
speak Portuguese.`
console.log(description);

//LECTURE: Taking Decisions: if / else Statements 

console.log(population);
let average = 33000000 - population;
console.log(average);
console.log(average > population);
if (population > average) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is below average. It is ${average} people below average.`);
}

//CODING CHALLENGE 1: 0

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.65;

markBMI = markWeight / (markHeight ** 2);
console.log(markBMI);
johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;


//CODING CHALLENGE 2:
if (markBMI > johnBMI) {
    console.log(`Hey look at that Mark has a higher BMI than John! Their BMI's are ${markBMI} & ${johnBMI} respectively.`);

} else {
    console.log(`Hey look at that John has a higher BMI than Mark! Their BMI's are ${markBMI} & ${johnBMI} respectively.`);

};

//LECTURE: Equality Operators: == vs. ===

// numNeighbours = Number(prompt(`How many neighbouring countries does your country have?`));
// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`);
// } else {
//     console.log(`No borders!`);
// }

//LECTURE: Logical Operators 

// if (language === 'English' && !isIsland && population < 50000000) {
//     console.log(`Welcome to ${country}, it meets all your criteria!`);
// } else {
//     console.log(`Sorry, ${country} does not meet all your criteria!`);
// }



//CODING CHALLENGE #3

// dolScore1 = 96;
// dolScore2 = 108;
// dolScore3 = 89;
// koaScore1 = 88;
// koaScore2 = 91;
// koaScore3 = 110;

// avgDolScore = (dolScore1 + dolScore2 + dolScore3) / 3;
// avgKoaScore = (koaScore1 + koaScore2 + koaScore3) / 3;

// if (avgDolScore > avgKoaScore) {
//     console.log(`Congrats to the Dolphins with an average score of ${avgDolScore} points!`);
// } else if (avgDolScore === avgKoaScore) {
//     console.log(`Ladies and gentlemen, we have a tie between the Dolphins and Koalas with a score of ${avgDolScore} points!`);
// } else {
//     console.log(`Congats to the Koalas with an average score of ${avgKoaScore} points!`);
// }

//LECTURE: The switch Statement

const languageUsed = 'English';

switch (languageUsed) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break
    case 'Spanish':
        console.log('2nd place in number of native speakers!');
        break;
    case 'English':
        console.log('3rd place!');
        break;
    case 'Hindi' :
        console.log('4th place!');
        break;
    case 'Arabic' :
        console.log('5th place!');
        break
    default :
        console.log('Great language too!');
        
}