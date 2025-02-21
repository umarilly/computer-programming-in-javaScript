/**
 * Debouncing in JavaScript
 *
 * Debouncing is a technique used to limit the rate at which a function can fire.
 * It ensures that the function is called only after a certain amount of time has passed,
 * even if it is called multiple times during that time.
 *
 * This is particularly useful when dealing with events like mouse movements,
 * scrolls, or input changes, where the function could be called frequently.
 */

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay);
  };
}

// Normal function that logs to console
function normalFunction() {
  console.log("Function executed");
}

// Create debounced version
const debouncedFunction = debounce(normalFunction, 1000);

// Try clicking this button multiple times quickly
const button = document.createElement("button");
button.textContent = "Click me multiple times";
button.onclick = debouncedFunction;
document.body.appendChild(button);
