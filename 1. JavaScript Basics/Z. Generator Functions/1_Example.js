// Example of a Generator Function in JavaScript

// Generator function that generates numbers from 1 to n
function* numberGenerator(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

// Using the generator
console.log("Example 1: Basic number generator");
const gen = numberGenerator(5);

// Getting values one by one using next()
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
