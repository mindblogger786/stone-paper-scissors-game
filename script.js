const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user == computer) {
        return "It's a tie!";
    } else if ((user == 'rock' && computer == 'scissors') ||
               (user == 'paper' && computer == 'rock') ||
               (user == 'scissors' && computer == 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function userChoice(userMove) {
    const compMove = computerChoice();
    const result = determineWinner(userMove, compMove);

    document.getElementById('result').innerHTML = `You chose ${userMove}. Computer chose ${compMove}. ${result}`;
}
