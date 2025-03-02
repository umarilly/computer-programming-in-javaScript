/**
 * Promise Example in JavaScript
 *
 * A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 *
 * A Promise can be in one of three states:
 * - Pending: The initial state of the Promise.
 * - Fulfilled: The Promise has been resolved.
 * - Rejected: The Promise has been rejected.
 *
 */

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
