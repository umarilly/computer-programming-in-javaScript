
/**
 * Example of a Promise Chain in JavaScript
 * The Example is a chain of promises that are executed one after the other.
 * The order of execution is:
 * 1. validateOrder
 * 2. processPayment
 * 3. shipOrder
 *
 */

const order = {
  items: ["book", "laptop"],
  payment: true,
};

function validateOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.items && order.items.length > 0) {
        console.log("Order validated successfully");
        resolve(order);
      } else {
        reject("Error: Order has no items");
      }
    }, 1000);
  });
}

function processPayment(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.payment) {
        console.log("Payment processed successfully");
        resolve(order);
      } else {
        reject("Error: Payment information missing");
      }
    }, 1000);
  });
}

function shipOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order shipped successfully");
      resolve("Order completed: Thanks for shopping with us!");
    }, 1000);
  });
}

// Using Promise chain
console.log("Starting order processing...");

validateOrder(order)
  .then((validatedOrder) => {
    return processPayment(validatedOrder); // Return the next promise
  })
  .then((paidOrder) => {
    return shipOrder(paidOrder); // Return the next promise
  })
  .then((result) => {
    console.log(result); // Final success message
  })
  .catch((error) => {
    console.error(error); // Handle any errors in the chain
  });
