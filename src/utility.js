// hide home section
function hideElement(id){
    document.getElementById(id).classList.add('hidden');
};

function showElement(id){
    document.getElementById(id).classList.remove('hidden');
};

function incrementScore(id){
    const score = parseInt(document.getElementById(id).innerText);
    const incrementLife = score + 1;
    document.getElementById(id).innerText = incrementLife;
};

function setBgColor(id){
    document.getElementById(id).classList.add('bg-orange-400')
};

function removeBgColor(id){
    document.getElementById(id).classList.remove('bg-orange-400')
};

// generate a random alpha
function generateRandomAlphabet(){
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetStr.split('');

    // get random index between 0 to 25
    const index = Math.round(Math.random() * 25);
    // return alphabets[index];
    const randomAlphabet = alphabets[index];
    return randomAlphabet;
};