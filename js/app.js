/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game();
const startGameBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key');
const phraseUl = document.querySelector('#phrase ul');

startGameBtn.addEventListener('click', () => {
    game.startGame();
})

keyboard.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})

document.addEventListener('keyup', (e) => {
    for (let btn of keys) {
        if (btn.innerHTML === e.key) {
            game.handleInteraction(btn);
        }
    }
})