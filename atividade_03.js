document.addEventListener("DOMContentLoaded" , function(){
    alert("DOM fully loaded and parsed");
    
    const base = parseFloat(prompt("Enter the size of the triangle base (cm):"))
    const height = parseFloat(prompt("Enter the height size of the triangle (cm):"))

    const area = (base * height) / 2

    /*
        The perimeter of a triangle is defined by P = a + b + c.
        If "a" is the base and "b" is the height, "c" would be the
        hypotenuse, which can be calculated by:

        c = Math.sqrt(a**2 + b**2)
    */

    const hypotenuse = (base**2 + height**2)**(1/2)
    const perimeter = base + height + hypotenuse

    alert(` The area of the triangle is: ${area.toFixed(2)}cm²\n The perimeter is: ${perimeter.toFixed(2)}cm`)
})