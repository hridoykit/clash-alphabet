// handle keyboard key up event
document.addEventListener('keyup', handlePressedKey);

// function for handle keyup event
function handlePressedKey(event){
    const currentPressedAlphabet = event.key;

    if(currentPressedAlphabet === 'Escape'){ // exit the game
        gameOver(); 
    };
    
    // expected key to press
    const innerAlphabet = document.getElementById('current-alphabet').innerText;
    const currentShowedAlphabet = innerAlphabet.toLowerCase();

    if (currentPressedAlphabet === currentShowedAlphabet){
        const currentScore = getInnerValue('score');
        const incrementScore = currentScore + 1;
        setInnerValue('score', incrementScore);

        // start a new round
        gameLoop();
        removeBgColor(currentShowedAlphabet);
    }
    else {
        console.log('uppps.s.s.s.s missed');
        const currentLife = getInnerValue('life');
        const decrementLife = currentLife - 1;
        setInnerValue('life', decrementLife);

        if(decrementLife === 0){
            gameOver();
        };
    };
};

function gameLoop(){
    const alphabet = generateRandomAlphabet(); //1. func for generating a random alphabet
    document.getElementById('current-alphabet').innerText = alphabet; //2. set randomly generated alphabet to the screen
    setBgColor(alphabet); //3. set background color
};

function play(){
    hideElement('home');
    hideElement('game-over');
    showElement('playground');
    gameLoop();
};

function playAgain(){
    showElement('home');
    hideElement('game-over');
    gameLoop();

    // reset score
    setInnerValue('life', 5);
    setInnerValue('score', 0);
};

function gameOver(){
    hideElement('playground');
    showElement('game-over');

    const finalScore = getInnerValue('score');
    setInnerValue('final-score', finalScore);

    const currentAlpha = getInnerText('current-alphabet');
    removeBgColor(currentAlpha);  
};