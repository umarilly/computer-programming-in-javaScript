
// Example of a Higher Order Function
/**
 * This is a higher order function that takes an operation function as a parameter and returns a new function that applies that operation to an array of numbers
 */


const createArrayProcessor = (operation) => {
    // Returns a new function that processes arrays
    return (numbers) => {
        return numbers.map(operation);
    };
};

// Example usage:

// Define some operation functions
const double = (x) => x * 2;
const square = (x) => x * x;
const addTen = (x) => x + 10;

// Create specialized array processors using our higher order function
const doubleAll = createArrayProcessor(double);
const squareAll = createArrayProcessor(square);
const addTenToAll = createArrayProcessor(addTen);

// Test array
const numbers = [1, 2, 3, 4, 5];

// Use our specialized functions
console.log("Original array:", numbers);
console.log("All numbers doubled:", doubleAll(numbers));     // [2, 4, 6, 8, 10]
console.log("All numbers squared:", squareAll(numbers));     // [1, 4, 9, 16, 25]
console.log("Add 10 to all numbers:", addTenToAll(numbers)); // [11, 12, 13, 14, 15]





