document.addEventListener("DOMContentLoaded" , function(){
    alert("DOM fully loaded and parsed");
    
    const num1 = prompt("Enter a number:")
    const num2 = prompt("Enter another number:")

    const sum = num1 + num2
    const subtraction = num1 - num2
    const product = num1 * num2
    const quotient = num1 / num2

    alert(` Results:\n Sum: ${sum}\n Subtraction: ${subtraction}\n Multiplication: ${product}\n Division: ${quotient}`)
})