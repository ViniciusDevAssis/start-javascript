let input = parseFloat(prompt("Enter 1 to enter grade or -1 to calculate average:"))
let sum = 0
let i = 0

while (input == 1) {
    let grade = parseFloat(prompt("Enter the student's grade:"))
    sum = sum + grade
    i = i+1
    input = parseFloat(prompt("Enter 1 to enter grade or -1 to calculate average:"))
} 

const average = sum / i

alert(`The student's average is: ${average.toFixed(1)}`)