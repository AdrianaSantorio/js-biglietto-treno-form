console.log('JS OK!');

/*
Il programma dovrà mostrare una form da compilare con cui chiedere all' utente il numero di chilometri che vuole percorrere  e l' età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezz
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

/*
1-creare un form in cui l' utente dovrà inserire nome, Kms, fascia d' età
2-raccogliere le informazioni dal form
3-eseguire i calcoli sul prezzo del biglietto
4-stampare il risultato in pagina
*/

//* 1 HTML

//4.2 dichiarare le variabili necessarie
const passengerNameDisplay = document.getElementById('passenger-name');
const offerDisplay = document.getElementById('offer-type');
const carriageDisplay = document.getElementById('carriage-number');
    //4.2.3.1 - determinare il numero della carrozza
    const carriageNumber = Math.floor(Math.random() * 12 + 1);

const cpCodeDisplay = document.getElementById('cp-code');
    //4.2.4.1 - determinare il CP code
    const cpCode = Math.floor(Math.random() * 100000);

const priceDisplay = document.getElementById('ticket-price');


//2.1.1 individuare un elemento della pagina
const generateButton = document.getElementById('generate');

//2.1.2 stabilire un (trigger?)
generateButton.addEventListener('click', function(){
    
    //2.2 raccogliere le informazioni dal form
    const userName = document.getElementById('name').value;
    console.log(userName);

    const kms = parseInt(document.getElementById('kms').value);
    console.log(kms);

    const userAge = document.getElementById('age').value;
    console.log(userAge);

    //to do: validazione

    if (!userName || !kms || !userAge) {
        alert('Si prega di verificare di aver compilato tutti i campi nel formato richiesto');    
    } else {
        //dichiarare ticket price + determinare il costo biglietto
        let ticketPrice = (kms * 0.21).toFixed(2);

        //dichiarare variabile tipo offerta
        let offerType = 'Biglietto Standard';

        //verificare tipo offerta e il prezzo del biglietto
        if (userAge === 'over65') {
            offerType = 'Tariffa Senior';
            ticketPrice = (ticketPrice / 100 * 60).toFixed(2);
        } else if (userAge === 'underage') {
            offerType = 'Tariffa Junior';
            ticketPrice = (ticketPrice /100 * 80).toFixed(2);
        }
        
        //stampare in pagina gli elementi richiesti
        passengerNameDisplay.innerHTML += (`<strong>${userName}</strong>`);
        offerDisplay.innerHTML += (`<span>${offerType}</span>`)
        carriageDisplay.innerHTML += (`<span>${carriageNumber}</span>`);
        cpCodeDisplay.innerHTML += (`<span>${cpCode}</span>`);
        priceDisplay.innerHTML += (`<span>${ticketPrice}€</span>`);
    }

});



