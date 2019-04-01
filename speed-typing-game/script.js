/*  TODO:
    - show high score, store it in local storage
    - add a difficulty level options (time left = 5s/3s/2s)
    - load random words from an API
 */

 // VARIABLES
 let words = ['magic', 'journey', 'travel', 'explore', 'life', 
'experience', 'happiness', 'gratitude', 'discipline', 'exercise', 
'workout', 'friendship', 'practice', 'routine', 'morning', 'reading', 
'books', 'education', 'amour', 'delibrate', 'protein', 'partner',
'empathy', 'concert', 'patience', 'humor', 'resilience', 'confidence',
'consistency'];

let timeCount = 5, scoreCount = 0, isPlaying, wordDisplayed;

let currentWord  = document.querySelector('#current-word'),
    inputWord = document.querySelector('#input-word'),
    time = document.querySelector('#seconds'),
    timeLeft = document.querySelector('#time-left'),
    score = document.querySelector('#score'),
    message = document.querySelector('#message');
 
// EVENT LISTENERS
window.addEventListener('load', init);


// FUCNTIONS
function init() { 
    showWord();
    // call the countdown function every second
    setInterval(countdown, 1000);
    // cheking the game status every 0.1s
    setInterval(checkStatus, 100);
}
function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordDisplayed = words[randomIndex];
    currentWord.textContent = wordDisplayed;
}
function countdown() {
    if (timeCount > 0) {
        timeCount--;   
    } else if(timeCount === 0) {
        isPlaying = false;
    }
    timeLeft.textContent = timeCount;
}
function checkStatus() {
    if(!isPlaying && timeCount === 0) {
        message.textContent = 'Game Over!!'
    }
}