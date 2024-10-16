// hide home section
function hideElement(id){
    document.getElementById(id).classList.add('hidden');
};

function showElement(id){
    document.getElementById(id).classList.remove('hidden');
};

// generate a random alpha
function generateRandomAlphabet(){
    const stringOfAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = stringOfAlphabet.split('');

    // get random index between 0 to 25
    const index = Math.round(Math.random() * 25);
    const alphabet = alphabets[index];
    return alphabet;
};