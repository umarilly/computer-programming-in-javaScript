
/**
 * Factorial is a function that returns the product of all positive integers less than or equal to n.
 */

const factorial = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

console.log(factorial(4));
