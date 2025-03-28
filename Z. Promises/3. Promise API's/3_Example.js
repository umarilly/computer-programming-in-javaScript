
/**
 * Promise.race
 * 
 * Promise.race is used to run multiple promises in parallel and return the result of the first promise that settles (resolves or rejects).
 * It will return the result of the first promise that settles.
 * It will not wait for all promises to settle.
 * It will not throw an error if one of the promises is rejected.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 1000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

