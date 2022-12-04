/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



const startScreenOverlay = document.getElementById('overlay');
const hearts = document.querySelectorAll('.tries img');
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Mac Miller"),
            new Phrase("Best Day Ever"),
            new Phrase("Lets Go Party"),
            new Phrase("Lets Play"),
            new Phrase("Now Im Swimming"),
        ];
        this.activePhrase = null;
    }
  
    startGame() {
        phraseUl.innerHTML = '';
        for (const key of keys) {
            key.disabled = false;
            key.classList = 'key';
        }
        this.missed = 0;
        for (let heart of hearts) {
            heart.src = "images/liveHeart.png";
        }
        startScreenOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
   
    
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }
   
    handleInteraction(btn) {
        btn.disabled = true;
        if (this.activePhrase.checkLetter(btn.innerHTML)) {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(btn.innerHTML);
            this.checkForWin();
        } else {           
            btn.classList.add('wrong');
            this.removeLife();
        }
    }
 
    removeLife() {
        hearts[hearts.length - 1 - this.missed].src = "images/lostHeart.png";
        this.missed++;
        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }
   
    checkForWin() {
        const phraseLetters = document.getElementsByClassName('letter');
        let lettersShown = 0;
        for (let i = 0; i < phraseLetters.length; i++) {
            const e = phraseLetters[i];
            if (e.classList.contains('show')) {
                lettersShown++;
            }
        }
        if (lettersShown === phraseLetters.length) {
            this.gameOver('win');
        }
    }
    
    gameOver(result) {
        const gameOverMessage = document.getElementById('game-over-message');
        startScreenOverlay.style.display = 'flex';
        if (result === 'win') {
            gameOverMessage.innerHTML = "Congrats, you won!";
            startScreenOverlay.classList = 'win';
        } else if (result === 'lose') {
            gameOverMessage.innerHTML = "You lost, try again!";
            startScreenOverlay.classList = 'lose';
        }
    }
}