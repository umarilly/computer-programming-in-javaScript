/**
 * An example of callback function with setTimeout
 */

function greet(name) {
    return `Hello, ${name}!`;
}

function greetUser(name, callback) {
    setTimeout(() => {
        const message = callback(name);
        console.log(message);
    }, 2000);
}

greetUser('John', greet);