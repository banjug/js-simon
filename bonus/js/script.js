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

const numCont = document.querySelector('.cont');

const inputCont = document.querySelector('.form-cont');
const inputField = document.querySelector('.num-input');
const inputBtn = document.getElementById('send');
const playBtn = document.getElementById('play');

const numRes = document.querySelector('.res');

numbers.forEach(element => numCont.innerHTML += `<span class="num">${element}</span>`);


let userList = [];
function simonSays() {
    numCont.classList.add('hidden');
    numRes.classList.remove('hidden');    
    inputCont.classList.remove('hidden');    
}

setTimeout(simonSays, 3000);
inputBtn.addEventListener('click',
    function() {
        let userNum = parseInt(inputField.value);
        if (numbers.includes(userNum)) {
            userList.push(userNum);
        }
        inputField.value = '';
    }
);

console.log(userList);

playBtn.addEventListener('click',
    function() {
        if (userList == '') {
            numRes.innerHTML += `<h3>Non hai ricordato nessun numero!</h3>`;
            // userList = [];
        } else {
            numRes.innerHTML += `<h3>I numeri che hai ricordato sono:</h3>`;
            userList.forEach(element => numRes.innerHTML += `<span class="num">${element}</span>`);
            userList = [];
        }
    }
);