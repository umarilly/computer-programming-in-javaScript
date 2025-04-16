
/**
 * Fibonacci sequence is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
 * 
 * @param {number} target - The target number to generate the Fibonacci sequence up to.
 * @returns {number[]} - The Fibonacci sequence up to the target number.
 */

const generateFibonacci = (target) => {
  if (target < 0) return [];
  if (target === 0) return [0];
  
  const sequence = [0, 1];
  let nextNumber = 1;
  
  while (nextNumber <= target) {
    sequence.push(nextNumber);
    nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }
  
  return sequence;
};

const target = 34;
const result = generateFibonacci(target);
console.log(`Fibonacci sequence up to ${target} is:`, result);
