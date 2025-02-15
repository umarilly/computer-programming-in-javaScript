// Example of a Generator Function in JavaScript

// Generator function that generates numbers from 1 to n
function* numberGenerator(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

// Using the generator
console.log('Example 1: Basic number generator');
const gen = numberGenerator(5);

// Getting values one by one using next()
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Example 2: Using for...of loop with generator
console.log('\nExample 2: Using for...of loop');
const gen2 = numberGenerator(3);
for (const num of gen2) {
    console.log(num); // Will print 1, 2, 3
}

// Example 3: Infinite generator with control
function* infiniteCounter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

console.log('\nExample 3: Infinite generator (getting first 4 values)');
const infinite = infiniteCounter();
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2
console.log(infinite.next().value); // 3
console.log(infinite.next().value); // 4
