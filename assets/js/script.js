const game = () => {}
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