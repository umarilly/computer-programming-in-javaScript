
/**
 * var is used to declare a variable in JavaScript.
 * var is function-scoped, meaning it is accessible within the function it is declared in.
 * var is hoisted to the top of its scope, meaning it is moved to the top of the scope before execution.
 * var is not block-scoped, meaning it is accessible outside of the block it is declared in.
 */

var a = 10;
console.log("Value of a : ", a);

{
  var a = 40;
  console.log("Value of a : ", a);
}

var b = 20;
console.log("Value of b : ", b);

console.log("Value of c : ", c);
var c = 30;
