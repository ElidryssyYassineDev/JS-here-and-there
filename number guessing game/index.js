// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`);
    guess = Number(guess);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        alert(`Please enter a valid number between ${minNum} and ${maxNum}.`);
        continue;
    }
    
    else {
        attempts++;
        if (guess < answer) {
            alert("Too low! Try again.");
        }
        else if (guess > answer) {
            alert("Too high! Try again.");
        }
        else {
            alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }

    
    }
}