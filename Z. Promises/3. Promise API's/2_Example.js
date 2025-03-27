
/**
 * Promise.allSettled
 * 
 * Promise.allSettled is used to run multiple promises in parallel and return an array of results.
 * It will return an array of objects with the status and value of each promise.
 * It will not throw an error if one of the promises is rejected.
 * It will wait for all promises to settle (resolve or reject) before returning the results.
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

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}:`, result.status, result.value || result.reason);
    });
  });
