"use strict";
// optional parameters
// optional parameters need to be the last in the list
const addAll = (a, b, c) => {
    // type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(2, 3));
// default values
function sumNumbers(a, b, c = 5) {
    return a + b + c;
}
console.log(sumNumbers(3, 4, 9));
// giving the first parameter a default value
function getProducts(a = 3, b, c = 2) {
    return a * b * c;
}
/*
    * When the first parameter has a default value, it should be passed as undefined
    * when passing the other parameters
 */
console.log(getProducts(undefined, 4));
// rest parameters
function total(...nums) {
    return nums.reduce((prev, next) => prev + next);
}
console.log(total(3, 4, 4, 8));
// never type 
function createError(errMsg) {
    throw new Error(errMsg);
}
const throwError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = function () {
    let i = 0;
    while (true) {
        i++;
        if (i > 200)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const determineNumStr = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return throwError('This should never happen!');
};
console.log(determineNumStr(5));
