//LECTURE: VALUES AND VARIABLES
const country = "South Africa";
const continent = "Africa";
let population = 55000000;

console.log("My country is " + country + ", my continent is " + continent + " and it's population is " + population)

//LECTURE: DATA TYPES

const isIsland = false;
const language = "";
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

numNeighbours = Number(prompt(`How many neighbouring countries does your country have?`));
if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border!`);
} else {
    console.log(`No borders!`);
}