/*
    1. visualizzare in pagina 5 numeri casuali
    2. parte un timer di 30 secondi
    3. appiono 5 prompt che chiedono all'utente i numeri che sono apparsi
    4. dopo averli inseriti il computer mostra quanti e quali numeri sono stati indovinati
*/

// genero 5 numeri casuali

let numbers = [];

while (numbers.length < 5) {
    let randNum = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(randNum)) {
        numbers.push(randNum);
    }
}

console.log(numbers);

// seleziono il contenitore per i numeri
const numCont = document.querySelector('.cont');
// seleziono il contenitore dell'input ed i bottoni
const inputCont = document.querySelector('.form-cont');
const inputField = document.querySelector('.num-input');
const inputBtn = document.getElementById('send');
const playBtn = document.getElementById('play');
// seleziono il contenitore del risultato
const numRes = document.querySelector('.res');

// stampo i numeri casuali in pagina
numbers.forEach(element => numCont.innerHTML += `<span class="num">${element}</span>`);

// array di numeri dell'utente
let userList = [];

function simonSays() {
    // nascondo i numeri generati dal pc 
    numCont.classList.add('hidden');
    // faccio apparire il contenitore del risultato e dell'input
    numRes.classList.remove('hidden');    
    inputCont.classList.remove('hidden');    
}

setTimeout(simonSays, 30000);

inputBtn.addEventListener('click',
    function() {
        // salvo i numeri inseriti dall'utente al click
        let userNum = parseInt(inputField.value);
        // se il numero è ugule ad uno di quelli generati lo salvo
        if (numbers.includes(userNum)) {
            userList.push(userNum);
        }
        // ad ogni click svuoto il campo di input 
        inputField.value = '';
    }
);

console.log(userList);

// stampo i numeri ricordati dall'utente al click
playBtn.addEventListener('click',
    function() {
        if (userList == '') {
            numRes.innerHTML = `<h3>Non hai ricordato nessun numero!</h3>`;
        } else {
            numRes.innerHTML += `<h3>I numeri che hai ricordato sono:</h3>`;
            userList.forEach(element => numRes.innerHTML += `<span class="num">${element}</span>`);
            userList = [];
        }
    }
);