const cars: (string | undefined)[] = []

cars.push("Mercedes", "Audi", "Porsche", "Bentley")
console.log(cars.length);

cars[6] = "BMW"
console.log(cars.length);
console.log(Object.keys(cars));
console.log(cars[5]);