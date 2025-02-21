
// Give me an example of callback hell in JavaScript.

// Callback hell is a situation where you have multiple nested callbacks, making the code difficult to read and maintain.
// It often occurs when dealing with asynchronous operations, such as network requests or file operations.
// The code becomes deeply nested, making it harder to understand and debug.

// Example:

function fetchData(url, callback) {
    setTimeout(() => {
        callback(url);
    }, 1000);
}

fetchData('https://api.example.com/data', (data) => {
    console.log(data);
});
