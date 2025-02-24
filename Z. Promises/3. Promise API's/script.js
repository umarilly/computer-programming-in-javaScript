
// Promise.all

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
