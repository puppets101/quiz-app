window.addEventListener('load', main);

function main() {
    loginEventListeners();
}

let guessedNumber = Math.trunc(Math.random.random()*20) + 1 ;
let score = 20;
