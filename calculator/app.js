// console.log("hello world!")
const addition = require(__dirname +  "/addition.js");
const multiplication = require(__dirname + "/multiplication.js");

var num1 = 10;
var num2 = 20;

console.log("Addition of two numbers: " + addition(num1, num2));
console.log("Multiplication of two numbers: " + multiplication(num1, num2));