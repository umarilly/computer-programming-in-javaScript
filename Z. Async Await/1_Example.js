
/**
 * Async/Await is a modern way to handle asynchronous operations in JavaScript.
 * It allows you to write asynchronous code that is more readable and easier to manage.
 * 
 * Async functions return a promise implicitly.
 * Await is used to wait for a promise to resolve.
 * Await is only valid inside async functions.
 * Await makes the code wait for a result to be returned.
 */

async function fetchJoke() {
  // Fetch a random joke from a simple API
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const joke = await response.json();
  return joke;
}

// Using the async function
async function main() {
  console.log('Fetching a joke...');
  const joke = await fetchJoke();
  console.log(`Joke: ${joke.setup}`);
  console.log(`Punchline: ${joke.punchline}`);
}

main();
