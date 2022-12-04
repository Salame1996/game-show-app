/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
   
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                phraseUl.innerHTML += `<li class="space"> </li>`;
            } else {
                phraseUl.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        }
    }
  
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
 
    showMatchedLetter(letter) {
        for (let i = 0; i < phraseUl.children.length; i++) {
            const char = phraseUl.children[i];
            if (char.innerHTML === letter) {
                char.classList.replace('hide', 'show');
            }
        }
    }
}