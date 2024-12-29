const num = parseInt(prompt("Enter a number:"))
let factorial = 1

for (let i = 1; i <= num; i++) {
    factorial *= i
}

alert(`The factorial of ${num} is: ${factorial}`)