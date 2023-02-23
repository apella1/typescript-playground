"use strict";
let username = "Moses";
console.log(username);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(c * b);
console.log(b * a);
console.log(a - b);
// void  is for functions that just have side effects
// otherwise for return functions the expected return data type is provided or inferred
function logMessage(message) {
    console.log(message);
}
logMessage('Hello beautiful people');
logMessage(89);
// Regular expression type
let re = /\w+/g;
// Arrays
// players array can be assigned to ideas but not the other way around 
// the empty array is inferred to be of type any[] - implicit type assignment
let teams = [];
let players = ["Ali", "Musa", "Chad"];
let ideas = ["Eat", 88, false];
let coolNums = [8, 9, 3];
console.log(players);
players[0] = "Edwin"; // the item at the first index is changed(mutability)
players.push("Catie");
console.log(players);
// the position of the elements doesn't affect the manipulation of the array so long as the data type is within the union
console.log(ideas);
ideas[0] = 88;
ideas[ideas.length - 1] = "Thirty";
console.log(ideas);
// Tuples 
let agency = ["Winners", 1, true];
// myAgency canno be assigned to the tuple agency since there is the possibility of the union array accepting less items
let myAgency = ["Could be Losers", 3, false];
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
const mySchool = {
    name: "Lord of The Clouds",
    age: 77
};
mySchool.name = "The VR Academy";
mySchool.age = 30;
console.log(mySchool, typeof mySchool);
const nameSchool = (school) => {
    return `${school.name} is an awesome school!`;
};
console.log(nameSchool(mySchool));
let football = {
    name: "Football",
    type: "Outdoor",
    intensity: "Demanding",
    numberOfPlayers: 11,
    stillActive: true
};
console.log(football);
let basketball = Object.assign({}, football);
basketball.name = "Basketball";
basketball.numberOfPlayers = 5;
console.log(basketball);
console.log(football);
function gameSummary(game) {
    if (game.name) {
        return `${game.name} is an ${game.type.toLowerCase()} game.`;
    }
    return `This must be an interesting game!`;
}
console.log(gameSummary(football));
console.log(gameSummary(basketball));
let rugby = {
    type: "Outdoor",
    intensity: "Intense",
    numberOfPlayers: 14,
    stillActive: true
};
console.log(gameSummary(rugby));
// Enums 
var Grade;
(function (Grade) {
    Grade[Grade["R"] = 39] = "R";
    Grade[Grade["D"] = 49] = "D";
    Grade[Grade["C"] = 59] = "C";
    Grade[Grade["B"] = 69] = "B";
    Grade[Grade["A"] = 70] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
let isCool = true;
let options = [2, "Run to the market", "Complete a course"];
// Literal types 
let myScore;
// only the specified values are assignable to userName
let userName;
userName = "Apella";
const multiply = (h, g) => {
    return h * g;
};
console.log(multiply(6, 8));
logMessage(multiply(3, 6));
const getSum = (k, l) => {
    return k + l;
};
logMessage(getSum(Infinity, Infinity));
// * Functions: optional parameters and default values
