// A simple generator function that generates a sequence of numbers
function* numberSequence() {
    // Start with number 1
    yield 1;
    
    // Generate number 2
    yield 2;
    
    // Generate number 3
    yield 3;
    
    // Generate number 4
    yield 4;
}

// Create an iterator by calling the generator function
const sequence = numberSequence();

// Using the generator by calling next() method
console.log(sequence.next().value);  // Output: 1
console.log(sequence.next().value);  // Output: 2
console.log(sequence.next().value);  // Output: 3
console.log(sequence.next().value);  // Output: 4
console.log(sequence.next().value);  // Output: undefined (generator is done)

// We can also use a for...of loop to iterate through the generator
console.log("\nUsing for...of loop:");
for (const num of numberSequence()) {
    console.log(num);
}
