// useful when dealing with values whose types Ts cannot know about
// such as when working with the DOM

type One = string;
type Two = string | number;
type Three = "hello";

// converting to more or less specific

let word: One = "hello";
let lessWord = word as Two;
let moreWord = word as Three;

// the angle types cannot be used within tsx files
let angleWord = <One>"String value using type aliases";
let secondAngleWord = <string>"Using specific type";
let multipleValue = <string | number>"All the type assignment properties apply";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

console.log(addOrConcat(2, 4, "concat"));

const myVal: string = addOrConcat(7, 3, "concat") as string; // type assertion
const otherValue: number = addOrConcat(3, 5, "add") as number;

/* 
    A good analogy for type assertion is telling typescript that we have more information 
    about the return time than it does - more having context of it's use than the expected
    return type
 */

/* 
    ! the expression compiles yet the return value is a string 
    ! regardless of asserting the binding and return value as a number
    
 */
const mySum: number = addOrConcat(4, 8, "concat") as number;
console.log(mySum, typeof mySum);

// double casting
10 as unknown as string;

// The DOM
/*
 * using ! after an expression denotes it's not null
 * before negates the boolean for the expression
 */

const img = document.getElementById("img") as HTMLImageElement;
const myImg = document.querySelector("image")!;
const nextImg = <HTMLImageElement>document.getElementById("image"); // ! doesn't work for tsx
