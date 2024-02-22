/* function greetUser(username, callback) {
  //function which takes another function as an argument is called higher-order function.
  const message = "Good Morning, " + username;
  callback(message);
}

function logMessage(message) {
  console.log(message);
}

greetUser("Alice", logMessage);
 */

const greetUser = (username, callback) => {
  let message = "Good Morning, " + username;
  callback(message);
};

const logMessage = (message) => {
  console.log(message);
};

greetUser("Alice", logMessage);
