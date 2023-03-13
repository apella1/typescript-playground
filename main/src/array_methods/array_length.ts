const cars: (string | null)[] = [];

cars.push("Mercedes", "Audi", "Porsche", "Bentley");
console.log(cars.length);

cars[6] = "BMW";
cars.length = 10;
console.log(cars.length);
console.log(Object.keys(cars));
console.log(cars[5]);
console.log(Array.isArray(cars));
