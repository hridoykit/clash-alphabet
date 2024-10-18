// handle keyboard key up event
document.addEventListener('keyup', function handlePressedKey(event){
    const currentPressedAlphabet = event.key;

    const innerAlphabet = document.getElementById('current-alphabet').innerText;
    const currentShowedAlphabet = innerAlphabet.toLowerCase();

    if(currentPressedAlphabet === currentShowedAlphabet){
        console.log('got point');
        gameLoop();
        removeBgColor(currentShowedAlphabet);
    }
    else console.log('ups.s.s. missed');
    
});

function gameLoop(){
    //1. func for generating a random alphabet
    const alphabet = generateRandomAlphabet();
    //2. set randomly generated alphabet to the screen
    document.getElementById('current-alphabet').innerText = alphabet;
    //3. set background color
    setBgColor(alphabet);
};

function play(){
    hideElement('home');
    showElement('playground');
    gameLoop();
};