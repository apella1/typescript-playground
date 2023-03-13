// Array.prototype.map()

const numbers: number[] = [2, 4, 6, 8, 7];

const squares: number[] = numbers.map((number) => number * number);
console.log(squares);

const roots: number[] = numbers.map((number) =>
  Number(Math.sqrt(number).toFixed(2))
);
console.log(roots);

// using map to reformat objects in an array

const my_array = [
  { key: 1, value: "Hello" },
  { key: 2, value: "World" },
  { key: 3, value: "Structure" },
  { key: 4, value: "Books" },
];

const reformatted_array = my_array.map(({ key, value }) => ({ [key]: value }));
console.log(reformatted_array);
console.log(my_array);
