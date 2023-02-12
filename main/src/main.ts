let username = "Moses"
console.log(username);


let a: number = 12
let b: number = 6
let c: number = 2

console.log(a / b);
console.log(c * b);
console.log(b * a);
console.log(a - b);


// void  is for functions that just have side effects
// otherwise for return functions the expected return data type is provided or inferred


function logMessage(message: string | number): void {
    console.log(message);
}

logMessage('Hello beautiful people')
logMessage(89)

// Regular expression type
let re: RegExp = /\w+/g


// Arrays
// players array can be assigned to ideas but not the other way around 
// the empty array is inferred to be of type any[] - implicit type assignment

let teams = []
let players = ["Ali", "Musa", "Chad"]
let ideas = ["Eat", 88, false]
let coolNums = [8, 9, 3]


console.log(players);
players[0] = "Edwin"  // the item at the first index is changed(mutability)
players.push("Catie")
console.log(players);


// the position of the elements doesn't affect the manipulation of the array so long as the data type is within the union
console.log(ideas);

ideas[0] = 88
ideas[ideas.length - 1] = "Thirty"

console.log(ideas);


// Tuples 
let agency: [string, number, boolean] = ["Winners", 1, true]

// myAgency canno be assigned to the tuple agency since there is the possibility of the union array accepting less items
let myAgency = ["Could be Losers", 3, false]



// Objects
let myObject: object

myObject = []
console.log(typeof myObject);

type School = {
    name: string,
    age: number
}

const mySchool: School = {
    name: "Lord of The Clouds",
    age: 77
}


mySchool.name = "The VR Academy"
mySchool.age = 30

console.log(mySchool, typeof mySchool);


const nameSchool = (school: School) => {
    return `${school.name} is an awesome school!`
}


console.log(nameSchool(mySchool))

// Interfaces

interface Game {
    name?: string,
    type: string,
    intensity: string,
    numberOfPlayers: number,
    stillActive: boolean,
}


let football: Game = {
    name: "Football",
    type: "Outdoor",
    intensity: "Demanding",
    numberOfPlayers: 11,
    stillActive: true
}

console.log(football);

let basketball = { ...football }
basketball.name = "Basketball"
basketball.numberOfPlayers = 5

console.log(basketball);
console.log(football);

function gameSummary(game: Game) {
    if (game.name) {
        return `${game.name} is an ${game.type.toLowerCase()} game.`
    }
    return `This must be an interesting game!`
}

console.log(gameSummary(football));
console.log(gameSummary(basketball));


let rugby: Game = {
    type: "Outdoor",
    intensity: "Intense",
    numberOfPlayers: 14,
    stillActive: true
}

console.log(gameSummary(rugby));



// Enums 

enum Grade {
    R = 39,
    D = 49,
    C = 59,
    B = 69,
    A,
}


console.log(Grade.A);


// Type Aliases
// ! interfaces cannot be used with primitives or unions as with types

type maintainability = boolean
type booleanOrString = boolean | string
type strOrNumArr = (string | number)[]

let isCool: booleanOrString = true
let options: strOrNumArr = [2, "Run to the market", "Complete a course"]


// using type aliases within a type
type Tool = {
    maintainable: maintainability,
    isUserFriendly: booleanOrString,
    uses: strOrNumArr
}


// Literal types 
let myScore: "Score"


// only the specified values are assignable to userName
let userName: 'Apella' | 'John' | 'Carmack'

userName = "Apella"
// * the benefit of using literal types is to keep your code DRYier and optimize for productivity