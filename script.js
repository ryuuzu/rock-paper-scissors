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

let currentRound, playerWins, computerWins, totalDraw;
let roundResults = document.querySelector("#round-results");
let roundDetails = document.querySelector(".round-details");
let roundNumber = document.querySelector("#round-number");
let playerWin = document.querySelector("#player-wins");
let godWin = document.querySelector("#god-wins");

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

function updateRoundDetails() {
	if (roundDetails.style.display === "") {
		roundDetails.style.display = "flex";
	}
	roundNumber.innerHTML = currentRound;
	playerWin.innerHTML = playerWins;
	godWin.innerHTML = computerWins;
	if (currentRound === 5) {
		setTimeout(declareWinner, 100);
	}
}

function playRound(playerSelection, computerSelection) {
	currentRound++;
	if (playerSelection.win === computerSelection.name) {
		playerWins++;
		roundResults.innerHTML = `You win. The Gods picked ${computerSelection.name}. You picked ${playerSelection.name}.`;
	} else if (playerSelection.name === computerSelection.win) {
		computerWins++;
		roundResults.innerHTML = `The Gods win. The Gods picked ${computerSelection.name}. You picked ${playerSelection.name}.`;
	} else {
		totalDraw++;
		roundResults.innerHTML = `It's a draw. Both picked ${playerSelection.name}.`;
	}
	updateRoundDetails();
}

function declareWinner() {
	if (playerWins > computerWins) {
		alert("Humanity has prevailed for yet another 1000 years of survival.");
	} else if (computerWins > playerWins) {
		alert("The Gods have won and wiped out the Humanity.");
	} else {
		alert("The battle has ended in a tie. The situation is yet to unfold.");
	}
	location.reload();
}

function gameStart() {
	let preGame = document.querySelector(".pre-game");
	let gameControls = document.querySelector(".game-controls");

	currentRound = 0;
	playerWins = 0;
	computerWins = 0;
	totalDraw = 0;

	preGame.style.display = "none";
	gameControls.style.display = "block";

	// for (let i = 0; i < 5; i++) {
	// 	const playerSelection = getPlayerChoice(
	// 		window.prompt("Pick a weapon (Rock, Paper, Scissors):")
	// 	);
	// 	if (playerSelection === undefined) {
	// 		window.alert("Please pick either Rock, Paper or Scissors.");
	// 		continue;
	// 	}
	// 	const computerSelection = getComputerChoice();
	// 	let results = playRound(playerSelection, computerSelection);
	// 	window.alert(
	// 		`Round: ${
	// 			i + 1
	// 		} | Player Wins: ${playerWins} | Computer Wins: ${computerWins} | Draw: ${totalDraw} \n${results}`
	// 	);
	// }
}

let startbutton = document.querySelector("#game-start");
startbutton.addEventListener("click", () => {
	gameStart();
});

scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
	const playerChoice = getPlayerChoice("scissors");
	const computerChoice = getComputerChoice();
	playRound(playerChoice, computerChoice);
});
paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
	const playerChoice = getPlayerChoice("paper");
	const computerChoice = getComputerChoice();
	playRound(playerChoice, computerChoice);
});
rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
	const playerChoice = getPlayerChoice("rock");
	const computerChoice = getComputerChoice();
	playRound(playerChoice, computerChoice);
});
