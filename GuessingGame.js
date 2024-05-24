

function generateRandomNumber() { //returns a random integer between 1 and 100

    return Math.floor(Math.random() * 100) + 1;
} // is guessed by the player

function getPlayerGuess() {
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));
    while (isNaN(guess) || guess < 1 || guess > 100) {
        guess = parseInt(prompt("Invalid input. Please enter a number between 1 and 100:"));
    }
    return guess;
} //prompts the user to enter a guess and returns the player's input as an integer
// accounts for valid and invalid inputs

function checkGuess(playerGuess, correctNumber) { //two parameters - the player's guess and the correct number
    if (playerGuess < correctNumber) {
        return "Too low!"; // display if the correct number is bigger than the players guess
    } else if (playerGuess > correctNumber) {
        return "Too high!"; //display if the correct number is smaller than the players guess
    } else {
        return "Correct!"; // display if the correct number is the same as the players guess
    }
}

function game() { // declarations
    let randomNumber = generateRandomNumber();
    let attempts = 0;
    let score = 100; 

    while (attempts < 10) { // loops the game upto 10 times unless correst answer is guessed
        let guess = getPlayerGuess();
        attempts++;
        let result = checkGuess(guess, randomNumber);
        alert(result);
        if (result === "Correct!") {
            alert("Congratulations! You've guessed the correct number in " + attempts + " attempts!");
            alert("Your score: " + score);
            return; // prints the number of attempts and the score
        } else {
          
            score -= 10; 
        }
    }
    alert("Sorry, you've used all your attempts. The correct number was " + randomNumber);
    alert("Your score: " + score); // prints if the player looses
}

game(); // allows the game to work 