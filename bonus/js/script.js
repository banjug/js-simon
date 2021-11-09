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
const numRes = document.querySelector('.res');

numbers.forEach(element => numCont.innerHTML += `<span class="num">${element}</span>`);


let userList = [];
function simonSays() {
    numCont.classList.add('hidden');
    numRes.classList.remove('hidden');
    for (let i = 0; i < 5; i++) {
        let userNum = parseInt(prompt('Inserisci un numero che ricordi.'));
        if (numbers.includes(userNum)) {
            userList.push(userNum);
        }
    }
    console.log(userList);

    userList.forEach(element => numRes.innerHTML += `<span class="num">${element}</span>`);

    
}

setTimeout(simonSays, 30000);