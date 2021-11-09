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

// seleziono i contenitori per i numeri e per il risultato
const numCont = document.querySelector('.cont');
const numRes = document.querySelector('.res');

// stampo i numeri casuali in pagina
numbers.forEach(element => numCont.innerHTML += `<span class="num">${element}</span>`);


function simonSays() {
    // array di numeri dell'utente
    let userList = [];
    // nascondo i numeri generati dal pc 
    numCont.classList.add('hidden');
    // faccio apparire il contenitore del risultato 
    numRes.classList.remove('hidden');
    // faccio inserire all'utente 5 numeri 
    for (let i = 0; i < 5; i++) {
        let userNum = parseInt(prompt('Inserisci un numero che ricordi.'));
        // se il numero è ugule ad uno di quelli generati lo salvo
        if (numbers.includes(userNum)) {
            userList.push(userNum);
        }
    }
    console.log(userList);

    // stampo i numeri ricordati dall'utente
    if (userList == '') {
        numRes.innerHTML = `<h3>Non hai indovinato nessun numero!</h3>`;
    } else {
        userList.forEach(element => numRes.innerHTML += `<span class="num">${element}</span>`);
    }

}

setTimeout(simonSays, 30000);