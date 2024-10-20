// handle keyboard key up event
document.addEventListener('keyup', function handlePressedKey(event){
    const currentPressedAlphabet = event.key;

    // expected key to press
    const innerAlphabet = document.getElementById('current-alphabet').innerText;
    const currentShowedAlphabet = innerAlphabet.toLowerCase();

    if(currentPressedAlphabet === currentShowedAlphabet){
        // <div role="alert" class="alert alert-success">
        //     <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         class="h-6 w-6 shrink-0 stroke-current"
        //         fill="none"
        //         viewBox="0 0 24 24">
        //         <path
        //         stroke-linecap="round"
        //         stroke-linejoin="round"
        //         stroke-width="2"
        //         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        //     </svg>
        //     <span>You got a point!</span>
        // </div>

        incrementScore('increment-life');

        // start a new round
        gameLoop();
        removeBgColor(currentShowedAlphabet);
    }
    else{
        console.log('up..s.s.s. missed');
        const life = parseInt(document.getElementById('decrement-life').innerText);
        const decrementLife = life - 1;
        document.getElementById('decrement-life').innerText = decrementLife;
    };
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