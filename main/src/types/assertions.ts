// Declaring types that TS can't know about such as when working with the DOM
// since type assertion are removed along type annotations no exception 
// or null will be generated when the assertion is wrong 

const x = "hello" as unknown as number;
