let resultEl = document.querySelector("#result");
let scoresEl = document.querySelector("#scores");
let userScore = 0;
let ComputerScore = 0;

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let userChoice = button.name;
        let computerChoice = buttons[Math.floor(Math.random() * buttons.length)].name;

        switch (userChoice,computerChoice){
            case ("rock","scissors")|| ("paper","rock") || ("scissors","paper"):
                userScore++;
                resultEl.textContent="you won !";
                scoresEl.innerHTML = `
                                        <div id="scores">
                                            your score: <span id="user-score" style="color: green;">${userScore} </span>
                                            Computer's score: <span id="computer-score" style="color: red;">${ComputerScore} </span>
                                        </div>`;
                break;
            case ("rock","paper") || ("paper","scissors") || ("scissors","rock"):
                ComputerScore++;
                resultEl.textContent="you lost!";
                scoresEl.innerHTML = `
                                        <div id="scores">
                                            your score: <span id="user-score" style="color: green;">${userScore} </span>
                                            Computer's score: <span id="computer-score" style="color: red;">${ComputerScore} </span>
                                        </div>`;
                break;
            default:
                resultEl.textContent="tie game!";
        }

    })
})