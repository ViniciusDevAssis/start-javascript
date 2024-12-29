const num1 = parseFloat(prompt("Enter a number:"))
const num2 = parseFloat(prompt("Enter another number:"))

const sum = num1 + num2
const subtraction = num1 - num2
const product = num1 * num2
const quotient = num1 / num2

alert(` Results:\n Sum: ${sum}\n Subtraction: ${subtraction}\n Multiplication: ${product}\n Division: ${quotient.toFixed(2)}`)