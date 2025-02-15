
/**
 * Example of a Generator Function in JavaScript:
 * Generator functions are a special type of function that can pause and resume execution.
 * They are defined using the function* keyword.
 * They can yield values and then resume execution from where they left off.
 * They are iterable.
 * They are lazy evaluated.
 * They are asynchronous.
 */

// Generator function that generates numbers from 1 to n
function* numberGenerator(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

// Using the generator
console.log("Generator Function");
const gen = numberGenerator(4);

// Getting values one by one using next()
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
