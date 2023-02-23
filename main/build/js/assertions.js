"use strict";
// useful when dealing with values whose types Ts cannot know about
// such as when working with the DOM
// converting to more or less specific
let word = 'hello';
let lessWord = word;
let moreWord = word;
// the angle types cannot be used within tsx files
let angleWord = "String value using type aliases";
let secondAngleWord = "Using specific type";
let multipleValue = "All the type assignment properties apply";
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return "" + a + b;
};
console.log(addOrConcat(2, 4, 'concat'));
const myVal = addOrConcat(7, 3, 'concat'); // type assertion 
/*
    A good analogy for type assertion is telling typescript that we have more information
    about the return time than it does - more having context of it's use than the expected
    return type
 */
/*
    ! the expression compiles yet the return value is a string
    ! regardless of asserting the binding and return value as a number
    
 */
const mySum = addOrConcat(4, 8, 'concat');
console.log(mySum, typeof mySum);
// double casting 
10;
// The DOM
/*
    * using ! after an expression denotes it's not null
    * before negates the boolean for the expression
*/
const img = document.getElementById('img');
const myImg = document.querySelector('image');
const nextImg = document.getElementById('image'); // ! doesn't work for tsx
