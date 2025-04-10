
/**
 * Check if a number is even or odd
 * If modulo 2 is 0, it's even
 * If modulo 2 is something else, it's odd
 */

const isEvenOrOdd = (val) => {
  if (val % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
};

isEvenOrOdd(2);
isEvenOrOdd(3);
