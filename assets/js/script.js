const game = () => {
    let pScore = 0;
    let cScore = 0;


    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introscreen.classList.add('fadeout');
            match.classList.add('fadein');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const playerScore = document.querySelector('.score-player p');
        const computerScore = document.querySelector('.score-computer p');
        const winner = document.querySelector('.winner');

        const computerOptions = ['rock', 'paper', 'scissors'];

        const showChoices = (playerChoice, computerChoice) => {
            playerHand.src = `/assets/images/${playerChoice}.png`;
            computerHand.src = `/assets/images/${computerChoice}.png`;
        };

        const updateScore = () => {
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        };

        const compareHands = (playerChoice, computerChoice) => {
            if (playerChoice === computerChoice) {
                winner.textContent = 'Draw';
            } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
                winner.textContent = 'You Win';
                pScore++;
            } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
                winner.textContent = 'Computer wins';
                cScore++;
            } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
                winner.textContent = 'Computer wins';
                cScore++;
            } else {
                winner.textContent = 'You Win';
                pScore++;
            }

            updateScore();
        };

        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent.toLowerCase(), computerChoice);

                showChoices(this.textContent.toLowerCase(), computerChoice);
            });
        });
    };

    startGame();
    playMatch();
};


game();

