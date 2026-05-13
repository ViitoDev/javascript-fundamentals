alert("Welcome to the secret number game!");
let secretNumber = 29;
let guess;
let attempts = 1;
console.log(secretNumber);

// As long as the guess doesn't match the secret number.
while (guess != secretNumber) {
	guess = prompt("Enter a number between 1 and 30.");
	if (guess == secretNumber) {
		break;
	} else {
		if (secretNumber > guess) {
			alert(`The secret number is bigger than ${guess}`);
		} else {
			alert(`The secret number is less than ${guess}`);
		}
		attempts++
	}
}

// if your guess equals the secret number
if (attempts > 1) {
	alert(`You guessed the secret number! The secret number is ${secretNumber} com ${attempts} attempts!`);
} else {
	alert(`You guessed the secret number! The secret number is ${secretNumber} com ${attempts} attempt!`);
}