
// Simple example of callback

function calculate(num1, num2, callback) {
  setTimeout(() => {
    const result = num1 + num2;
    callback(result);
  }, 2000);
}

calculate(5, 3, (answer) => {
  console.log("The sum is : ", answer);
});
