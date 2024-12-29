const subtotal = parseFloat(prompt("Enter the purchase amount:"))
const deduction = parseFloat(prompt("Enter the discount percentage:"))

const total = subtotal - (subtotal * (deduction/100))

alert(`Total: $${total.toFixed(2)}`)