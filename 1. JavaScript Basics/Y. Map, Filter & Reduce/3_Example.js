// Using traditional for loop
const numbersForLoop = [1, 2, 3, 4, 5];
let sumUsingForLoop = 0;

for (let index = 0; index < numbersForLoop.length; index++) {
    sumUsingForLoop += numbersForLoop[index];
}

console.log('Sum using for loop : ', sumUsingForLoop);

// Using reduce method
const numbersForReduce = [1, 2, 3, 4, 5];
const sumUsingReduce = numbersForReduce.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log('Sum using reduce : ', sumUsingReduce);