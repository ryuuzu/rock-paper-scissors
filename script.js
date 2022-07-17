const ROCK = {
	name: "rock",
	value: "0",
	win: "scissors",
};
const PAPER = {
	name: "paper",
	value: "1",
	win: "rock",
};
const SCISSORS = {
	name: "scissors",
	value: "2",
	win: "paper",
};

const OPTIONS = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
	let rand = Math.random() * 3;
	rand = Math.floor(rand);
	return OPTIONS[rand];
}

function getPlayerChoice(playerChoice) {
	playerChoice = playerChoice.toLowerCase();
	return OPTIONS.find((option) => option.name === playerChoice);
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.win === computerSelection.name) {
		return `You win. Computer picked ${computerSelection.name}. You picked ${playerSelection.name}.`;
	} else if (playerSelection.name === computerSelection.win) {
		return `Computer wins. Computer picked ${computerSelection.name}. You picked ${playerSelection.name}.`;
	} else {
		return `It's a draw. Both picked ${playerSelection.name}.`;
	}
}

for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice(window.prompt("Pick a weapon (Rock, Paper, Scissors):"));
	const computerSelection = getComputerChoice();
	window.alert(`Round: ${i+1}\n${playRound(playerSelection, computerSelection)}`);
}
