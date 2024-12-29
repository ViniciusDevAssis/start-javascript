const num = parseInt(prompt("Enter a number:"))

for (let i = 1; i <= 10; i++) {
    let prod = num * i
    alert(`${num} x ${i} = ${prod}`)
}