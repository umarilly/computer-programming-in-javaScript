// Example of callback hell - User registration process
function registerUser(username, email, callback) {
  // Simulate checking if username exists in database
  setTimeout(() => {
    console.log("Checking if username is available...");
    if (username.length < 3) {
      callback("Username too short");
      return;
    }

    // First level of nesting - Validate email
    validateEmail(email, (error) => {
      if (error) {
        callback(error);
        return;
      }

      // Second level of nesting - Save user to database
      saveToDatabase(username, email, (error, userId) => {
        if (error) {
          callback(error);
          return;
        }

        // Third level of nesting - Send welcome email
        sendWelcomeEmail(email, username, (error, success) => {
          if (error) {
            callback(error);
            return;
          }
          callback(null, {
            userId: userId,
            message: "User registered successfully!",
          });
        });
      });
    });
  }, 1000);
}

// Helper functions
function validateEmail(email, callback) {
  setTimeout(() => {
    console.log("Validating email...");
    const isValid = email.includes("@");
    if (!isValid) {
      callback("Invalid email format");
      return;
    }
    callback(null);
  }, 1000);
}

function saveToDatabase(username, email, callback) {
  setTimeout(() => {
    console.log("Saving user to database...");
    const userId = Math.floor(Math.random() * 1000);
    callback(null, userId);
  }, 1000);
}

function sendWelcomeEmail(email, username, callback) {
  setTimeout(() => {
    console.log("Sending welcome email...");
    callback(null, true);
  }, 1000);
}

// Usage example
registerUser("john", "john@example.com", (error, result) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Success:", result);
});
