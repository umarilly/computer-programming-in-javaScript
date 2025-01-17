/**
 * An example of callback function
 */

function greet(name) {
    return `Hello, ${name}!`;
}

function greetUser(name, callback) {
    const message = callback(name);
    console.log(message);
}

greetUser('John', greet);