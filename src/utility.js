// hide home section
function hideElement(id){
    document.getElementById(id).classList.add('hidden');
};

function showElement(id){
    document.getElementById(id).classList.remove('hidden');
};

function getInnerValue(id){
    const value = document.getElementById(id).innerText;
    return parseInt(value);
};

function setInnerValue(id, setValue){
    let value = document.getElementById(id);
    value.innerText = setValue;
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