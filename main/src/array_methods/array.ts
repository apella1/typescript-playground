// * The 'Array' object - allows binding multiple items to the same variable name

/** 
In JS, arrays aren't primitive but an "Array" object with the following properties
- resizable and contain different data types (use typed arrays when characteristics are undesirable)
- not associative arrays - elements can't be accessed using arbitrary strings as their indexes
 but must be accessed using non-negative integers(or their respective string form) as indexes.
- zero-indexed
- array copy operations create shallow copies
 * 
 * */

// ! all javascript objects copy operations create shallow copies
// shallow copies share the same reference point to memory of the original array

const fruits: string[] = ["Mango", "Apples", "Pineapple"]

// copy operations
const shallowFruits = [...fruits]
const copyFruits = Array.from(fruits)
const fruitsCopy = fruits.slice()

console.log(fruits);
console.log(copyFruits);
console.log(fruitsCopy);

copyFruits.push("Water melon")
console.log(fruits);
console.log(copyFruits);

shallowFruits[0] = "Orange"
console.log(shallowFruits);
console.log(fruits);


// * shallow copies

let ingredients: (string | object)[] = ["noodles", {list: ["water", "oil", "heat"]}]
let ingredientsCopy = Array.from(ingredients)

console.log(ingredientsCopy);
ingredientsCopy[1].list = ["salt", "butter", "toast"]
console.log(ingredientsCopy);
console.log(ingredients);


// deep copies - the elements of the specific arrays do not share a reference to the same memory location

let ingredient_list_deepcopy = JSON.parse(JSON.stringify(ingredients))
console.log(ingredient_list_deepcopy);
console.log(ingredient_list_deepcopy[1].list);
ingredient_list_deepcopy[1].list = ["sand", "box", "heat"]
console.log(ingredient_list_deepcopy[1].list);
console.log(ingredients[1].list);