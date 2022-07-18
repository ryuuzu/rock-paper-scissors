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

let playerWins = 0;
let computerWins = 0;
let totalDraw = 0;

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
		playerWins++;
		return `You win. Computer picked ${computerSelection.name}. You picked ${playerSelection.name}.`;
	} else if (playerSelection.name === computerSelection.win) {
		computerWins++;
		return `Computer wins. Computer picked ${computerSelection.name}. You picked ${playerSelection.name}.`;
	} else {
		totalDraw++;
		return `It's a draw. Both picked ${playerSelection.name}.`;
	}
}

function gameStart() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = getPlayerChoice(
			window.prompt("Pick a weapon (Rock, Paper, Scissors):")
		);
		if (playerSelection === undefined) {
			window.alert("Please pick either Rock, Paper or Scissors.");
			continue;
		}
		const computerSelection = getComputerChoice();
		let results = playRound(playerSelection, computerSelection);
		window.alert(
			`Round: ${
				i + 1
			} | Player Wins: ${playerWins} | Computer Wins: ${computerWins} | Draw: ${totalDraw} \n${results}`
		);
	}
}

scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
	console.log("scissors");
});
paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
	console.log("paper");
});
rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
	console.log("rock");
});
