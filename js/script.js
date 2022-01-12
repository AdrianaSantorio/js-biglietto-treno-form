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
})





