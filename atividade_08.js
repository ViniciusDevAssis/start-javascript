alert("Guess the number between 0 and 100!")
const random = Math.floor(Math.random() * 101);
let counter = 10

do{
    let attempt = parseInt(prompt(`Try to guess the number. Remaining attempts: ${counter}`))
    if (attempt > random) {
        alert("Try a smaller number")
    } else if (attempt < random){
        alert("Try a bigger number")
    } else if (attempt == random) {
        alert("Congratulations, you're right.")
        break
    }
    counter--
} while (counter !== 0)

if (counter == 0){
    alert(`You lost! The correct answer was ${random}`)
}

