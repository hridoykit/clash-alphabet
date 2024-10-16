function gameLoop(){
    const alphabet = generateRandomAlphabet();
    // set randomly generated alpha to the screen
    document.getElementById('current-alphabet').innerText = alphabet;
};

function play(){
    hideElement('home');
    showElement('playground');
    gameLoop();
};