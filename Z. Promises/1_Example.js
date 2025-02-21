// Basic example of promises in JavaScript

const GITHUB_API = "https://api.github.com/users/umarilly";

const user = fetch(GITHUB_API);

console.log(user);

user.then((data) => {
  console.log(data);
});

user.catch((error) => {
  console.log(error);
});
