const numArray: number[] = [43, 232, 2];

let numSum = 0;
for (const n of numArray) {
  numSum += n;
}

console.log(numSum);

numArray.reduce(
  (currentValue: number, firstNumber: number) => currentValue + firstNumber,
  0
);
