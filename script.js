'use strict';


let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;


let highscore = 0;

const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);


	// When there is no input
	if(!guess) {
		displayMessage('No number');

	// When player wins
	} else if (guess === secretNumber) {
		document.querySelector('body').style.backgroundColor = "green";
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').style.fontSize = '8rem';

		document.querySelector('.number').textContent = secretNumber;
		displayMessage('Correct Number :)');

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;

		}

	// When gess(number) is wrong	
	} else if (guess !== secretNumber) {
			if (score > 1) {
			displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
			score--;
			document.querySelector('.score').textContent = score;

		} else {
			displayMessage('Game Over!');
			document.querySelector('.score').textContent = 0;

		}

	}
});





// Funkcija za igranje ponovo
document.querySelector('.again').addEventListener('click', function(){
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').style.fontSize = '6rem';

});

