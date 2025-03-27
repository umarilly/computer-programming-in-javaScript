
/**
 * Promise.all
 * 
 * Promise.all is used to run multiple promises in parallel and return an array of results.
 * It will throw an error if one of the promises is rejected.
 * It will wait for all promises to resolve before returning the results.
 * It will return the results in the order of the promises.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejected");
  }, 2000);
});

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});
