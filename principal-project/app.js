alert("Welcome to the secret number game!");
let secretNumber = 29;
console.log(secretNumber);
let yourGuess = prompt("Enter a number between 1 and 30.");

// if your guess equals the secret number
if (yourGuess == secretNumber) {
	alert(`You guessed the secret number! The secret number is ${secretNumber}`);
} else {
	alert("You lost.");
}