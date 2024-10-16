function play(){
    hideElement('home');
    showElement('playground');
    generateRandomAlphabet();
}
// document.getElementById('play-btn').addEventListener('click',function(){
//     console.log('play button clicked');
//     document.getElementById('home').classList.add('hidden');
//     document.getElementById('playground').classList.remove('hidden');
// });

// function play(){
//     document.getElementById('home').classList.add('hidden');
//     document.getElementById('playground').classList.remove('hidden');
//     console.log('first')
// }

function generateRandomAlphabet(){
    const stringOfAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = stringOfAlphabet.split('');

    const randomAlphabet = Math.round(Math.random() * 25);
    const alphabet = alphabets[randomAlphabet];
    
    document.getElementById('random-alphabet').innerText = alphabet;
}

// document.getElementById('alphabet').addEventListener('click', function(e){
//     console.log(e.target.innerText)
// });