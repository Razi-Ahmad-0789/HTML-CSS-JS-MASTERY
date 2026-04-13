 // Node.js me user input lene ke liye 'readline' module use karte hain
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(numString) {
  // String ko number me convert karna
  let num = Number(numString);

  // +10 add karna
  let result = num + 10;

  console.log("After adding 10, result is:", result);

  rl.close();
});
