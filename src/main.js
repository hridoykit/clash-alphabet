// handle keyboard key up event
document.addEventListener('keyup', function handlePressedKey(event){
    const currentPressedAlphabet = event.key;
    
    // expected key to press
    const innerAlphabet = document.getElementById('current-alphabet').innerText;
    const currentShowedAlphabet = innerAlphabet.toLowerCase();

    if (currentPressedAlphabet === currentShowedAlphabet){
        const score = getInnerValue('increment-life');
        const increment = score + 1;
        setInnerValue('increment-life', increment);

        // start a new round
        gameLoop();
        removeBgColor(currentShowedAlphabet);
    }
    else {
        console.log('uppps.s.s.s.s missed');
        const life = getInnerValue('decrement-life');
        const decrement = life - 1;
        setInnerValue('decrement-life', decrement);

        if(decrement === 0){
            gameOver()
        };
    };
});

function gameLoop(){
    const alphabet = generateRandomAlphabet(); //1. func for generating a random alphabet
    document.getElementById('current-alphabet').innerText = alphabet; //2. set randomly generated alphabet to the screen
    setBgColor(alphabet); //3. set background color
};

function play(){
    hideElement('home');
    showElement('playground');
    gameLoop();
};

function gameOver(){
    console.log('hi i\m game over');
};