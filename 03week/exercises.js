let cars = ['ford', 'chrysler','audi','toyota'];
console.log(cars.length);

let moreCars = ['fiat','volvo','volkswagen','honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(totalCars.indexOf('honda'));
console.log(totalCars.lastIndexOf('ford'));

let stringOfCars = totalCars.join();
console.log(stringOfCars);

totalCars = stringOfCars.split(',');
console.log(totalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

console.log(carsInReverse.sort());
//let alert = alert(carsInReverse.indexOf('chrysler'));

let removedCars = carsInReverse.slice(3,5);
console.log(removedCars);

let carsSpliced = carsInReverse.splice(1,2,'ford','honda');
console.log(carsInReverse);

let carsPushed = carsInReverse.push('chryser','fiat');
console.log(carsInReverse);

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

console.log(carsInReverse.unshift('audi'));
console.log(carsInReverse);

let numbers = [23,45,0,2];

numbers.forEach(function(currentValue, index) {
    numbers[index] = currentValue + 2;
});
console.log(numbers);

let newNumbers = [23,45,0,2,8,44,100,1,3,91,34];

newNumbers.forEach(function newFunc(x, i) {
    newNumbers[i] = x + 2;
});
console.log(newNumbers);