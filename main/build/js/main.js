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
const school = {
    name: "Lord of The Clouds",
    age: 77
};
school.name = "The VR Academy";
school.age = 30;
console.log(school, typeof school);
